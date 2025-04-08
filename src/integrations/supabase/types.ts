export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      alerts: {
        Row: {
          category: string | null
          created_at: string | null
          description: string
          evidence: Json | null
          id: string
          read_at: string | null
          severity: Database["public"]["Enums"]["alert_severity"]
          source: Json | null
          startup_id: string
          status: Database["public"]["Enums"]["alert_status"] | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description: string
          evidence?: Json | null
          id?: string
          read_at?: string | null
          severity?: Database["public"]["Enums"]["alert_severity"]
          source?: Json | null
          startup_id: string
          status?: Database["public"]["Enums"]["alert_status"] | null
          title: string
          type: string
          user_id: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string
          evidence?: Json | null
          id?: string
          read_at?: string | null
          severity?: Database["public"]["Enums"]["alert_severity"]
          source?: Json | null
          startup_id?: string
          status?: Database["public"]["Enums"]["alert_status"] | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "alerts_startup_id_fkey"
            columns: ["startup_id"]
            isOneToOne: false
            referencedRelation: "startups"
            referencedColumns: ["id"]
          },
        ]
      }
      analysis_jobs: {
        Row: {
          completed_at: string | null
          created_at: string | null
          error: string | null
          id: string
          job_type: string
          payload: Json
          result: Json | null
          started_at: string | null
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          error?: string | null
          id?: string
          job_type: string
          payload: Json
          result?: Json | null
          started_at?: string | null
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          error?: string | null
          id?: string
          job_type?: string
          payload?: Json
          result?: Json | null
          started_at?: string | null
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      documents: {
        Row: {
          analysis_results: Json | null
          created_at: string | null
          description: string | null
          document_type: string | null
          extracted_text: string | null
          file_type: string
          id: string
          metadata: Json | null
          mime_type: string
          name: string
          processing_errors: string[] | null
          processing_status:
            | Database["public"]["Enums"]["document_status"]
            | null
          size: number
          startup_id: string
          storage_key: string
          updated_at: string | null
          uploaded_by: string | null
          user_id: string
          version: number | null
        }
        Insert: {
          analysis_results?: Json | null
          created_at?: string | null
          description?: string | null
          document_type?: string | null
          extracted_text?: string | null
          file_type: string
          id?: string
          metadata?: Json | null
          mime_type: string
          name: string
          processing_errors?: string[] | null
          processing_status?:
            | Database["public"]["Enums"]["document_status"]
            | null
          size: number
          startup_id: string
          storage_key: string
          updated_at?: string | null
          uploaded_by?: string | null
          user_id: string
          version?: number | null
        }
        Update: {
          analysis_results?: Json | null
          created_at?: string | null
          description?: string | null
          document_type?: string | null
          extracted_text?: string | null
          file_type?: string
          id?: string
          metadata?: Json | null
          mime_type?: string
          name?: string
          processing_errors?: string[] | null
          processing_status?:
            | Database["public"]["Enums"]["document_status"]
            | null
          size?: number
          startup_id?: string
          storage_key?: string
          updated_at?: string | null
          uploaded_by?: string | null
          user_id?: string
          version?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "documents_startup_id_fkey"
            columns: ["startup_id"]
            isOneToOne: false
            referencedRelation: "startups"
            referencedColumns: ["id"]
          },
        ]
      }
      esg_analyses: {
        Row: {
          analysis_date: string | null
          benchmarks: Json | null
          confidence_score: number | null
          created_at: string | null
          data_sources: string[] | null
          environmental_factors: Json | null
          governance_factors: Json | null
          id: string
          opportunities: Json | null
          risks: Json | null
          scores: Json
          social_factors: Json | null
          startup_id: string
          user_id: string
        }
        Insert: {
          analysis_date?: string | null
          benchmarks?: Json | null
          confidence_score?: number | null
          created_at?: string | null
          data_sources?: string[] | null
          environmental_factors?: Json | null
          governance_factors?: Json | null
          id?: string
          opportunities?: Json | null
          risks?: Json | null
          scores: Json
          social_factors?: Json | null
          startup_id: string
          user_id: string
        }
        Update: {
          analysis_date?: string | null
          benchmarks?: Json | null
          confidence_score?: number | null
          created_at?: string | null
          data_sources?: string[] | null
          environmental_factors?: Json | null
          governance_factors?: Json | null
          id?: string
          opportunities?: Json | null
          risks?: Json | null
          scores?: Json
          social_factors?: Json | null
          startup_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "esg_analyses_startup_id_fkey"
            columns: ["startup_id"]
            isOneToOne: false
            referencedRelation: "startups"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          organization: string | null
          permissions: string[] | null
          role: Database["public"]["Enums"]["app_role"] | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          organization?: string | null
          permissions?: string[] | null
          role?: Database["public"]["Enums"]["app_role"] | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          organization?: string | null
          permissions?: string[] | null
          role?: Database["public"]["Enums"]["app_role"] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      report_templates: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_default: boolean | null
          name: string
          template_data: Json
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_default?: boolean | null
          name: string
          template_data: Json
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_default?: boolean | null
          name?: string
          template_data?: Json
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      scheduled_tasks: {
        Row: {
          configuration: Json
          created_at: string | null
          frequency: string
          id: string
          is_active: boolean | null
          last_run: string | null
          next_run: string
          task_type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          configuration: Json
          created_at?: string | null
          frequency: string
          id?: string
          is_active?: boolean | null
          last_run?: string | null
          next_run: string
          task_type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          configuration?: Json
          created_at?: string | null
          frequency?: string
          id?: string
          is_active?: boolean | null
          last_run?: string | null
          next_run?: string
          task_type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      startups: {
        Row: {
          aiscore: number | null
          created_at: string | null
          description: string | null
          founder_info: Json | null
          founderexperience: string | null
          foundername: string | null
          founding_date: string | null
          fundingstage: string | null
          id: string
          industry: string | null
          investment_amount: number | null
          investment_date: string | null
          investment_round: string | null
          last_analysis: string | null
          lastupdated: string | null
          location_city: string | null
          location_country: string | null
          name: string
          predictedvaluation: number | null
          previousexits: number | null
          social_media: Json | null
          stage: string | null
          tags: string[] | null
          team_size: number | null
          totalfunding: number | null
          user_id: string | null
          valuation: number | null
          website: string | null
        }
        Insert: {
          aiscore?: number | null
          created_at?: string | null
          description?: string | null
          founder_info?: Json | null
          founderexperience?: string | null
          foundername?: string | null
          founding_date?: string | null
          fundingstage?: string | null
          id?: string
          industry?: string | null
          investment_amount?: number | null
          investment_date?: string | null
          investment_round?: string | null
          last_analysis?: string | null
          lastupdated?: string | null
          location_city?: string | null
          location_country?: string | null
          name: string
          predictedvaluation?: number | null
          previousexits?: number | null
          social_media?: Json | null
          stage?: string | null
          tags?: string[] | null
          team_size?: number | null
          totalfunding?: number | null
          user_id?: string | null
          valuation?: number | null
          website?: string | null
        }
        Update: {
          aiscore?: number | null
          created_at?: string | null
          description?: string | null
          founder_info?: Json | null
          founderexperience?: string | null
          foundername?: string | null
          founding_date?: string | null
          fundingstage?: string | null
          id?: string
          industry?: string | null
          investment_amount?: number | null
          investment_date?: string | null
          investment_round?: string | null
          last_analysis?: string | null
          lastupdated?: string | null
          location_city?: string | null
          location_country?: string | null
          name?: string
          predictedvaluation?: number | null
          previousexits?: number | null
          social_media?: Json | null
          stage?: string | null
          tags?: string[] | null
          team_size?: number | null
          totalfunding?: number | null
          user_id?: string | null
          valuation?: number | null
          website?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          canceled_at: string | null
          created_at: string | null
          end_date: string | null
          id: string
          start_date: string | null
          status: Database["public"]["Enums"]["subscription_status"] | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          tier: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          canceled_at?: string | null
          created_at?: string | null
          end_date?: string | null
          id?: string
          start_date?: string | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          tier?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          canceled_at?: string | null
          created_at?: string | null
          end_date?: string | null
          id?: string
          start_date?: string | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          tier?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: { role: Database["public"]["Enums"]["app_role"] }
        Returns: boolean
      }
    }
    Enums: {
      alert_severity: "low" | "medium" | "high" | "critical"
      alert_status: "new" | "read" | "archived"
      app_role: "super_admin" | "admin" | "team_member" | "read_only"
      document_status: "pending" | "processing" | "completed" | "failed"
      subscription_status: "active" | "past_due" | "canceled" | "trialing"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      alert_severity: ["low", "medium", "high", "critical"],
      alert_status: ["new", "read", "archived"],
      app_role: ["super_admin", "admin", "team_member", "read_only"],
      document_status: ["pending", "processing", "completed", "failed"],
      subscription_status: ["active", "past_due", "canceled", "trialing"],
    },
  },
} as const
