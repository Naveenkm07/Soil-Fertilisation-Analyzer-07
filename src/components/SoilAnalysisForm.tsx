
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SoilData } from "@/types/soil";
import { MapPin, TestTube } from "lucide-react";

const soilAnalysisSchema = z.object({
  farmName: z.string().min(1, "Farm name is required"),
  fieldLocation: z.string().min(1, "Field location is required"),
  sampleDate: z.string().min(1, "Sample date is required"),
  nitrogen: z.number().min(0, "Nitrogen must be positive").max(200, "Nitrogen value too high"),
  phosphorus: z.number().min(0, "Phosphorus must be positive").max(100, "Phosphorus value too high"),
  potassium: z.number().min(0, "Potassium must be positive").max(500, "Potassium value too high"),
  ph: z.number().min(3, "pH too low").max(11, "pH too high"),
  organicMatter: z.number().min(0, "Organic matter must be positive").max(100, "Organic matter cannot exceed 100%"),
  cropType: z.string().min(1, "Crop type is required"),
  soilType: z.string().min(1, "Soil type is required"),
  testingMethod: z.string().min(1, "Testing method is required"),
});

type SoilAnalysisFormData = z.infer<typeof soilAnalysisSchema>;

interface SoilAnalysisFormProps {
  onSubmit: (data: SoilData) => void;
}

const commonLocations = [
  "North Field - GPS: 40.7128, -74.0060",
  "South Field - GPS: 40.7589, -73.9851", 
  "East Field - GPS: 40.6782, -73.9442",
  "West Field - GPS: 40.7505, -73.9934",
  "Greenhouse Area - GPS: 40.7411, -74.0018"
];

const SoilAnalysisForm: React.FC<SoilAnalysisFormProps> = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  const form = useForm<SoilAnalysisFormData>({
    resolver: zodResolver(soilAnalysisSchema),
    defaultValues: {
      farmName: "",
      fieldLocation: "",
      sampleDate: new Date().toISOString().split('T')[0],
      nitrogen: 0,
      phosphorus: 0,
      potassium: 0,
      ph: 7.0,
      organicMatter: 0,
      cropType: "",
      soilType: "",
      testingMethod: "",
    },
  });

  const getCurrentLocation = () => {
    setUseCurrentLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = `Current Location - GPS: ${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`;
          form.setValue('fieldLocation', location);
          setUseCurrentLocation(false);
        },
        (error) => {
          alert('Unable to get current location. Please enter manually.');
          setUseCurrentLocation(false);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
      setUseCurrentLocation(false);
    }
  };

  const handleSubmit = async (data: SoilAnalysisFormData) => {
    setIsSubmitting(true);
    try {
      const soilData: SoilData = {
        farmName: data.farmName,
        fieldLocation: data.fieldLocation,
        sampleDate: new Date(data.sampleDate),
        nitrogen: data.nitrogen,
        phosphorus: data.phosphorus,
        potassium: data.potassium,
        ph: data.ph,
        organicMatter: data.organicMatter,
        cropType: data.cropType,
        soilType: data.soilType,
        testingMethod: data.testingMethod,
      };
      onSubmit(soilData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold text-green-700">
              <MapPin className="h-5 w-5" />
              Farm Information
            </div>
            
            <FormField
              control={form.control}
              name="farmName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Farm Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter farm name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fieldLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field Location</FormLabel>
                  <div className="space-y-2">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose from common locations" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {commonLocations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Or enter custom location/coordinates" 
                        value={field.value}
                        onChange={field.onChange}
                      />
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={getCurrentLocation}
                        disabled={useCurrentLocation}
                      >
                        {useCurrentLocation ? "Getting..." : "Use GPS"}
                      </Button>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sampleDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sample Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cropType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Crop Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select crop type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="corn">Corn</SelectItem>
                      <SelectItem value="rice">Rice</SelectItem>
                      <SelectItem value="soybean">Soybean</SelectItem>
                      <SelectItem value="cotton">Cotton</SelectItem>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                      <SelectItem value="fruits">Fruits</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold text-green-700">
              <TestTube className="h-5 w-5" />
              Soil Test Results
            </div>

            <FormField
              control={form.control}
              name="nitrogen"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nitrogen (mg/kg)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      step="0.1" 
                      placeholder="0-200"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phosphorus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phosphorus (mg/kg)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      step="0.1" 
                      placeholder="0-100"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="potassium"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Potassium (mg/kg)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      step="0.1" 
                      placeholder="0-500"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ph"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>pH Level</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      step="0.1" 
                      placeholder="3.0-11.0"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 7.0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="organicMatter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organic Matter (%)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      step="0.1" 
                      placeholder="0-100"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="soilType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Soil Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select soil type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="clay">Clay</SelectItem>
                    <SelectItem value="sandy">Sandy</SelectItem>
                    <SelectItem value="loam">Loam</SelectItem>
                    <SelectItem value="silt">Silt</SelectItem>
                    <SelectItem value="clayLoam">Clay Loam</SelectItem>
                    <SelectItem value="sandyLoam">Sandy Loam</SelectItem>
                    <SelectItem value="siltLoam">Silt Loam</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="testingMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Testing Method</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select testing method" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="laboratory">Laboratory Analysis</SelectItem>
                    <SelectItem value="fieldTest">Field Test Kit</SelectItem>
                    <SelectItem value="digitalMeter">Digital pH/EC Meter</SelectItem>
                    <SelectItem value="homeTest">Home Test Kit</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-green-600 hover:bg-green-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Analyzing..." : "Analyze Soil Sample"}
        </Button>
      </form>
    </Form>
  );
};

export default SoilAnalysisForm;
