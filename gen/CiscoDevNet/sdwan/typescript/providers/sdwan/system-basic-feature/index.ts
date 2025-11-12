// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemBasicFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Collect admin-tech before reboot due to daemon failure
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#admin_tech_on_failure SystemBasicFeature#admin_tech_on_failure}
  */
  readonly adminTechOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#admin_tech_on_failure_variable SystemBasicFeature#admin_tech_on_failure_variable}
  */
  readonly adminTechOnFailureVariable?: string;
  /**
  * Affinity Group Number
  *   - Range: `1`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#affinity_group_number SystemBasicFeature#affinity_group_number}
  */
  readonly affinityGroupNumber?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#affinity_group_number_variable SystemBasicFeature#affinity_group_number_variable}
  */
  readonly affinityGroupNumberVariable?: string;
  /**
  * Affinity Group Preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#affinity_group_preferences SystemBasicFeature#affinity_group_preferences}
  */
  readonly affinityGroupPreferences?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#affinity_group_preferences_variable SystemBasicFeature#affinity_group_preferences_variable}
  */
  readonly affinityGroupPreferencesVariable?: string;
  /**
  * Affinity Group Number for VRFs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#affinity_per_vrfs SystemBasicFeature#affinity_per_vrfs}
  */
  readonly affinityPerVrfs?: SystemBasicFeatureAffinityPerVrfs[] | cdktf.IResolvable;
  /**
  * Affinity Group Preference Auto
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#affinity_preference_auto SystemBasicFeature#affinity_preference_auto}
  */
  readonly affinityPreferenceAuto?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#affinity_preference_auto_variable SystemBasicFeature#affinity_preference_auto_variable}
  */
  readonly affinityPreferenceAutoVariable?: string;
  /**
  * Set a text description of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#config_description SystemBasicFeature#config_description}
  */
  readonly configDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#config_description_variable SystemBasicFeature#config_description_variable}
  */
  readonly configDescriptionVariable?: string;
  /**
  * Set the console baud rate
  *   - Choices: `1200`, `2400`, `4800`, `9600`, `19200`, `38400`, `57600`, `115200`
  *   - Default value: `9600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#console_baud_rate SystemBasicFeature#console_baud_rate}
  */
  readonly consoleBaudRate?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#console_baud_rate_variable SystemBasicFeature#console_baud_rate_variable}
  */
  readonly consoleBaudRateVariable?: string;
  /**
  * Set the policer rate for control sessions
  *   - Range: `1`-`65535`
  *   - Default value: `300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#control_session_pps SystemBasicFeature#control_session_pps}
  */
  readonly controlSessionPps?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#control_session_pps_variable SystemBasicFeature#control_session_pps_variable}
  */
  readonly controlSessionPpsVariable?: string;
  /**
  * Configure a list of comma-separated controller groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#controller_groups SystemBasicFeature#controller_groups}
  */
  readonly controllerGroups?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#controller_groups_variable SystemBasicFeature#controller_groups_variable}
  */
  readonly controllerGroupsVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#description SystemBasicFeature#description}
  */
  readonly description?: string;
  /**
  * Device groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#device_groups SystemBasicFeature#device_groups}
  */
  readonly deviceGroups?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#device_groups_variable SystemBasicFeature#device_groups_variable}
  */
  readonly deviceGroupsVariable?: string;
  /**
  * Enable SLA Dampening and Enhanced App Routing.
  *   - Choices: `disabled`, `aggressive`, `moderate`, `conservative`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#enhanced_app_aware_routing SystemBasicFeature#enhanced_app_aware_routing}
  */
  readonly enhancedAppAwareRouting?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#enhanced_app_aware_routing_variable SystemBasicFeature#enhanced_app_aware_routing_variable}
  */
  readonly enhancedAppAwareRoutingVariable?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#feature_profile_id SystemBasicFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Enable Geo fencing
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#gps_geo_fencing_enable SystemBasicFeature#gps_geo_fencing_enable}
  */
  readonly gpsGeoFencingEnable?: boolean | cdktf.IResolvable;
  /**
  * Set the device’s geo fencing range
  *   - Range: `100`-`10000`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#gps_geo_fencing_range SystemBasicFeature#gps_geo_fencing_range}
  */
  readonly gpsGeoFencingRange?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#gps_geo_fencing_range_variable SystemBasicFeature#gps_geo_fencing_range_variable}
  */
  readonly gpsGeoFencingRangeVariable?: string;
  /**
  * Set the device physical latitude
  *   - Range: `-90`-`90`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#gps_latitude SystemBasicFeature#gps_latitude}
  */
  readonly gpsLatitude?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#gps_latitude_variable SystemBasicFeature#gps_latitude_variable}
  */
  readonly gpsLatitudeVariable?: string;
  /**
  * Set the device physical longitude
  *   - Range: `-180`-`180`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#gps_longitude SystemBasicFeature#gps_longitude}
  */
  readonly gpsLongitude?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#gps_longitude_variable SystemBasicFeature#gps_longitude_variable}
  */
  readonly gpsLongitudeVariable?: string;
  /**
  * Enable device’s geo fencing SMS
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#gps_sms_enable SystemBasicFeature#gps_sms_enable}
  */
  readonly gpsSmsEnable?: boolean | cdktf.IResolvable;
  /**
  * Set device’s geo fencing SMS phone number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#gps_sms_mobile_numbers SystemBasicFeature#gps_sms_mobile_numbers}
  */
  readonly gpsSmsMobileNumbers?: SystemBasicFeatureGpsSmsMobileNumbers[] | cdktf.IResolvable;
  /**
  * Idle CLI timeout in minutes
  *   - Range: `0`-`300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#idle_timeout SystemBasicFeature#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#idle_timeout_variable SystemBasicFeature#idle_timeout_variable}
  */
  readonly idleTimeoutVariable?: string;
  /**
  * Set the location of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#location SystemBasicFeature#location}
  */
  readonly location?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#location_variable SystemBasicFeature#location_variable}
  */
  readonly locationVariable?: string;
  /**
  * Set the maximum number of OMP sessions <1..100> the device can have
  *   - Range: `1`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#max_omp_sessions SystemBasicFeature#max_omp_sessions}
  */
  readonly maxOmpSessions?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#max_omp_sessions_variable SystemBasicFeature#max_omp_sessions_variable}
  */
  readonly maxOmpSessionsVariable?: string;
  /**
  * Device is multi-tenant
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#multi_tenant SystemBasicFeature#multi_tenant}
  */
  readonly multiTenant?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#multi_tenant_variable SystemBasicFeature#multi_tenant_variable}
  */
  readonly multiTenantVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#name SystemBasicFeature#name}
  */
  readonly name: string;
  /**
  * Enable or disable On-demand Tunnel
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#on_demand_enable SystemBasicFeature#on_demand_enable}
  */
  readonly onDemandEnable?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#on_demand_enable_variable SystemBasicFeature#on_demand_enable_variable}
  */
  readonly onDemandEnableVariable?: string;
  /**
  * Set the idle timeout for on-demand tunnels
  *   - Range: `1`-`65535`
  *   - Default value: `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#on_demand_idle_timeout SystemBasicFeature#on_demand_idle_timeout}
  */
  readonly onDemandIdleTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#on_demand_idle_timeout_variable SystemBasicFeature#on_demand_idle_timeout_variable}
  */
  readonly onDemandIdleTimeoutVariable?: string;
  /**
  * Set the Overlay ID
  *   - Range: `1`-`4294967295`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#overlay_id SystemBasicFeature#overlay_id}
  */
  readonly overlayId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#overlay_id_variable SystemBasicFeature#overlay_id_variable}
  */
  readonly overlayIdVariable?: string;
  /**
  * Enable port hopping
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#port_hopping SystemBasicFeature#port_hopping}
  */
  readonly portHopping?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#port_hopping_variable SystemBasicFeature#port_hopping_variable}
  */
  readonly portHoppingVariable?: string;
  /**
  * Set the TLOC port offset when multiple devices are behind a NAT
  *   - Range: `0`-`19`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#port_offset SystemBasicFeature#port_offset}
  */
  readonly portOffset?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#port_offset_variable SystemBasicFeature#port_offset_variable}
  */
  readonly portOffsetVariable?: string;
  /**
  * Site Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#site_types SystemBasicFeature#site_types}
  */
  readonly siteTypes?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#site_types_variable SystemBasicFeature#site_types_variable}
  */
  readonly siteTypesVariable?: string;
  /**
  * Set the timezone
  *   - Choices: `Europe/Andorra`, `Asia/Dubai`, `Asia/Kabul`, `America/Antigua`, `America/Anguilla`, `Europe/Tirane`, `Asia/Yerevan`, `Africa/Luanda`, `Antarctica/McMurdo`, `Antarctica/Rothera`, `Antarctica/Palmer`, `Antarctica/Mawson`, `Antarctica/Davis`, `Antarctica/Casey`, `Antarctica/Vostok`, `Antarctica/DumontDUrville`, `Antarctica/Syowa`, `America/Argentina/Buenos_Aires`, `America/Argentina/Cordoba`, `America/Argentina/Salta`, `America/Argentina/Jujuy`, `America/Argentina/Tucuman`, `America/Argentina/Catamarca`, `America/Argentina/La_Rioja`, `America/Argentina/San_Juan`, `America/Argentina/Mendoza`, `America/Argentina/San_Luis`, `America/Argentina/Rio_Gallegos`, `America/Argentina/Ushuaia`, `Pacific/Pago_Pago`, `Europe/Vienna`, `Australia/Lord_Howe`, `Antarctica/Macquarie`, `Australia/Hobart`, `Australia/Currie`, `Australia/Melbourne`, `Australia/Sydney`, `Australia/Broken_Hill`, `Australia/Brisbane`, `Australia/Lindeman`, `Australia/Adelaide`, `Australia/Darwin`, `Australia/Perth`, `Australia/Eucla`, `America/Aruba`, `Europe/Mariehamn`, `Asia/Baku`, `Europe/Sarajevo`, `America/Barbados`, `Asia/Dhaka`, `Europe/Brussels`, `Africa/Ouagadougou`, `Europe/Sofia`, `Asia/Bahrain`, `Africa/Bujumbura`, `Africa/Porto-Novo`, `America/St_Barthelemy`, `Atlantic/Bermuda`, `Asia/Brunei`, `America/La_Paz`, `America/Kralendijk`, `America/Noronha`, `America/Belem`, `America/Fortaleza`, `America/Recife`, `America/Araguaina`, `America/Maceio`, `America/Bahia`, `America/Sao_Paulo`, `America/Campo_Grande`, `America/Cuiaba`, `America/Santarem`, `America/Porto_Velho`, `America/Boa_Vista`, `America/Manaus`, `America/Eirunepe`, `America/Rio_Branco`, `America/Nassau`, `Asia/Thimphu`, `Africa/Gaborone`, `Europe/Minsk`, `America/Belize`, `America/St_Johns`, `America/Halifax`, `America/Glace_Bay`, `America/Moncton`, `America/Goose_Bay`, `America/Blanc-Sablon`, `America/Toronto`, `America/Nipigon`, `America/Thunder_Bay`, `America/Iqaluit`, `America/Pangnirtung`, `America/Resolute`, `America/Atikokan`, `America/Rankin_Inlet`, `America/Winnipeg`, `America/Rainy_River`, `America/Regina`, `America/Swift_Current`, `America/Edmonton`, `America/Cambridge_Bay`, `America/Yellowknife`, `America/Inuvik`, `America/Creston`, `America/Dawson_Creek`, `America/Vancouver`, `America/Whitehorse`, `America/Dawson`, `Indian/Cocos`, `Africa/Kinshasa`, `Africa/Lubumbashi`, `Africa/Bangui`, `Africa/Brazzaville`, `Europe/Zurich`, `Africa/Abidjan`, `Pacific/Rarotonga`, `America/Santiago`, `Pacific/Easter`, `Africa/Douala`, `Asia/Shanghai`, `Asia/Harbin`, `Asia/Chongqing`, `Asia/Urumqi`, `Asia/Kashgar`, `America/Bogota`, `America/Costa_Rica`, `America/Havana`, `Atlantic/Cape_Verde`, `America/Curacao`, `Indian/Christmas`, `Asia/Nicosia`, `Europe/Prague`, `Europe/Berlin`, `Europe/Busingen`, `Africa/Djibouti`, `Europe/Copenhagen`, `America/Dominica`, `America/Santo_Domingo`, `Africa/Algiers`, `America/Guayaquil`, `Pacific/Galapagos`, `Europe/Tallinn`, `Africa/Cairo`, `Africa/El_Aaiun`, `Africa/Asmara`, `Europe/Madrid`, `Africa/Ceuta`, `Atlantic/Canary`, `Africa/Addis_Ababa`, `Europe/Helsinki`, `Pacific/Fiji`, `Atlantic/Stanley`, `Pacific/Chuuk`, `Pacific/Pohnpei`, `Pacific/Kosrae`, `Atlantic/Faroe`, `Europe/Paris`, `Africa/Libreville`, `Europe/London`, `America/Grenada`, `Asia/Tbilisi`, `America/Cayenne`, `Europe/Guernsey`, `Africa/Accra`, `Europe/Gibraltar`, `America/Godthab`, `America/Danmarkshavn`, `America/Scoresbysund`, `America/Thule`, `Africa/Banjul`, `Africa/Conakry`, `America/Guadeloupe`, `Africa/Malabo`, `Europe/Athens`, `Atlantic/South_Georgia`, `America/Guatemala`, `Pacific/Guam`, `Africa/Bissau`, `America/Guyana`, `Asia/Hong_Kong`, `America/Tegucigalpa`, `Europe/Zagreb`, `America/Port-au-Prince`, `Europe/Budapest`, `Asia/Jakarta`, `Asia/Pontianak`, `Asia/Makassar`, `Asia/Jayapura`, `Europe/Dublin`, `Asia/Jerusalem`, `Europe/Isle_of_Man`, `Asia/Kolkata`, `Indian/Chagos`, `Asia/Baghdad`, `Asia/Tehran`, `Atlantic/Reykjavik`, `Europe/Rome`, `Europe/Jersey`, `America/Jamaica`, `Asia/Amman`, `Asia/Tokyo`, `Africa/Nairobi`, `Asia/Bishkek`, `Asia/Phnom_Penh`, `Pacific/Tarawa`, `Pacific/Enderbury`, `Pacific/Kiritimati`, `Indian/Comoro`, `America/St_Kitts`, `Asia/Pyongyang`, `Asia/Seoul`, `Asia/Kuwait`, `America/Cayman`, `Asia/Almaty`, `Asia/Qyzylorda`, `Asia/Aqtobe`, `Asia/Aqtau`, `Asia/Oral`, `Asia/Vientiane`, `Asia/Beirut`, `America/St_Lucia`, `Europe/Vaduz`, `Asia/Colombo`, `Africa/Monrovia`, `Africa/Maseru`, `Europe/Vilnius`, `Europe/Luxembourg`, `Europe/Riga`, `Africa/Tripoli`, `Africa/Casablanca`, `Europe/Monaco`, `Europe/Chisinau`, `Europe/Podgorica`, `America/Marigot`, `Indian/Antananarivo`, `Pacific/Majuro`, `Pacific/Kwajalein`, `Europe/Skopje`, `Africa/Bamako`, `Asia/Rangoon`, `Asia/Ulaanbaatar`, `Asia/Hovd`, `Asia/Choibalsan`, `Asia/Macau`, `Pacific/Saipan`, `America/Martinique`, `Africa/Nouakchott`, `America/Montserrat`, `Europe/Malta`, `Indian/Mauritius`, `Indian/Maldives`, `Africa/Blantyre`, `America/Mexico_City`, `America/Cancun`, `America/Merida`, `America/Monterrey`, `America/Matamoros`, `America/Mazatlan`, `America/Chihuahua`, `America/Ojinaga`, `America/Hermosillo`, `America/Tijuana`, `America/Santa_Isabel`, `America/Bahia_Banderas`, `Asia/Kuala_Lumpur`, `Asia/Kuching`, `Africa/Maputo`, `Africa/Windhoek`, `Pacific/Noumea`, `Africa/Niamey`, `Pacific/Norfolk`, `Africa/Lagos`, `America/Managua`, `Europe/Amsterdam`, `Europe/Oslo`, `Asia/Kathmandu`, `Pacific/Nauru`, `Pacific/Niue`, `Pacific/Auckland`, `Pacific/Chatham`, `Asia/Muscat`, `America/Panama`, `America/Lima`, `Pacific/Tahiti`, `Pacific/Marquesas`, `Pacific/Gambier`, `Pacific/Port_Moresby`, `Asia/Manila`, `Asia/Karachi`, `Europe/Warsaw`, `America/Miquelon`, `Pacific/Pitcairn`, `America/Puerto_Rico`, `Asia/Gaza`, `Asia/Hebron`, `Europe/Lisbon`, `Atlantic/Madeira`, `Atlantic/Azores`, `Pacific/Palau`, `America/Asuncion`, `Asia/Qatar`, `Indian/Reunion`, `Europe/Bucharest`, `Europe/Belgrade`, `Europe/Kaliningrad`, `Europe/Moscow`, `Europe/Volgograd`, `Europe/Samara`, `Asia/Yekaterinburg`, `Asia/Omsk`, `Asia/Novosibirsk`, `Asia/Novokuznetsk`, `Asia/Krasnoyarsk`, `Asia/Irkutsk`, `Asia/Yakutsk`, `Asia/Khandyga`, `Asia/Vladivostok`, `Asia/Sakhalin`, `Asia/Ust-Nera`, `Asia/Magadan`, `Asia/Kamchatka`, `Asia/Anadyr`, `Africa/Kigali`, `Asia/Riyadh`, `Pacific/Guadalcanal`, `Indian/Mahe`, `Africa/Khartoum`, `Europe/Stockholm`, `Asia/Singapore`, `Atlantic/St_Helena`, `Europe/Ljubljana`, `Arctic/Longyearbyen`, `Europe/Bratislava`, `Africa/Freetown`, `Europe/San_Marino`, `Africa/Dakar`, `Africa/Mogadishu`, `America/Paramaribo`, `Africa/Juba`, `Africa/Sao_Tome`, `America/El_Salvador`, `America/Lower_Princes`, `Asia/Damascus`, `Africa/Mbabane`, `America/Grand_Turk`, `Africa/Ndjamena`, `Indian/Kerguelen`, `Africa/Lome`, `Asia/Bangkok`, `Asia/Dushanbe`, `Pacific/Fakaofo`, `Asia/Dili`, `Asia/Ashgabat`, `Africa/Tunis`, `Pacific/Tongatapu`, `Europe/Istanbul`, `America/Port_of_Spain`, `Pacific/Funafuti`, `Asia/Taipei`, `Africa/Dar_es_Salaam`, `Europe/Kiev`, `Europe/Uzhgorod`, `Europe/Zaporozhye`, `Europe/Simferopol`, `Africa/Kampala`, `Pacific/Johnston`, `Pacific/Midway`, `Pacific/Wake`, `America/New_York`, `America/Detroit`, `America/Kentucky/Louisville`, `America/Kentucky/Monticello`, `America/Indiana/Indianapolis`, `America/Indiana/Vincennes`, `America/Indiana/Winamac`, `America/Indiana/Marengo`, `America/Indiana/Petersburg`, `America/Indiana/Vevay`, `America/Chicago`, `America/Indiana/Tell_City`, `America/Indiana/Knox`, `America/Menominee`, `America/North_Dakota/Center`, `America/North_Dakota/New_Salem`, `America/North_Dakota/Beulah`, `America/Denver`, `America/Boise`, `America/Phoenix`, `America/Los_Angeles`, `America/Anchorage`, `America/Juneau`, `America/Sitka`, `America/Yakutat`, `America/Nome`, `America/Adak`, `America/Metlakatla`, `Pacific/Honolulu`, `America/Montevideo`, `Asia/Samarkand`, `Asia/Tashkent`, `Europe/Vatican`, `America/St_Vincent`, `America/Caracas`, `America/Tortola`, `America/St_Thomas`, `Asia/Ho_Chi_Minh`, `Pacific/Efate`, `Pacific/Wallis`, `Pacific/Apia`, `Asia/Aden`, `Indian/Mayotte`, `Africa/Johannesburg`, `Africa/Lusaka`, `Africa/Harare`, `UTC`
  *   - Default value: `UTC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#timezone SystemBasicFeature#timezone}
  */
  readonly timezone?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#timezone_variable SystemBasicFeature#timezone_variable}
  */
  readonly timezoneVariable?: string;
  /**
  * Enable or disable default gateway tracking
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#track_default_gateway SystemBasicFeature#track_default_gateway}
  */
  readonly trackDefaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#track_default_gateway_variable SystemBasicFeature#track_default_gateway_variable}
  */
  readonly trackDefaultGatewayVariable?: string;
  /**
  * OMP Tag attached to routes based on interface tracking
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#track_interface_tag SystemBasicFeature#track_interface_tag}
  */
  readonly trackInterfaceTag?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#track_interface_tag_variable SystemBasicFeature#track_interface_tag_variable}
  */
  readonly trackInterfaceTagVariable?: string;
  /**
  * Configure tracking of transport
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#track_transport SystemBasicFeature#track_transport}
  */
  readonly trackTransport?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#track_transport_variable SystemBasicFeature#track_transport_variable}
  */
  readonly trackTransportVariable?: string;
  /**
  * Enable transport gateway
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#transport_gateway SystemBasicFeature#transport_gateway}
  */
  readonly transportGateway?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#transport_gateway_variable SystemBasicFeature#transport_gateway_variable}
  */
  readonly transportGatewayVariable?: string;
}
export interface SystemBasicFeatureAffinityPerVrfs {
  /**
  * Affinity Group Number
  *   - Range: `1`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#affinity_group_number SystemBasicFeature#affinity_group_number}
  */
  readonly affinityGroupNumber?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#affinity_group_number_variable SystemBasicFeature#affinity_group_number_variable}
  */
  readonly affinityGroupNumberVariable?: string;
  /**
  * Range of VRFs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#vrf_range SystemBasicFeature#vrf_range}
  */
  readonly vrfRange?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#vrf_range_variable SystemBasicFeature#vrf_range_variable}
  */
  readonly vrfRangeVariable?: string;
}

export function systemBasicFeatureAffinityPerVrfsToTerraform(struct?: SystemBasicFeatureAffinityPerVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity_group_number: cdktf.numberToTerraform(struct!.affinityGroupNumber),
    affinity_group_number_variable: cdktf.stringToTerraform(struct!.affinityGroupNumberVariable),
    vrf_range: cdktf.stringToTerraform(struct!.vrfRange),
    vrf_range_variable: cdktf.stringToTerraform(struct!.vrfRangeVariable),
  }
}


export function systemBasicFeatureAffinityPerVrfsToHclTerraform(struct?: SystemBasicFeatureAffinityPerVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity_group_number: {
      value: cdktf.numberToHclTerraform(struct!.affinityGroupNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    affinity_group_number_variable: {
      value: cdktf.stringToHclTerraform(struct!.affinityGroupNumberVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_range: {
      value: cdktf.stringToHclTerraform(struct!.vrfRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_range_variable: {
      value: cdktf.stringToHclTerraform(struct!.vrfRangeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemBasicFeatureAffinityPerVrfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SystemBasicFeatureAffinityPerVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinityGroupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinityGroupNumber = this._affinityGroupNumber;
    }
    if (this._affinityGroupNumberVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinityGroupNumberVariable = this._affinityGroupNumberVariable;
    }
    if (this._vrfRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfRange = this._vrfRange;
    }
    if (this._vrfRangeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfRangeVariable = this._vrfRangeVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemBasicFeatureAffinityPerVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinityGroupNumber = undefined;
      this._affinityGroupNumberVariable = undefined;
      this._vrfRange = undefined;
      this._vrfRangeVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinityGroupNumber = value.affinityGroupNumber;
      this._affinityGroupNumberVariable = value.affinityGroupNumberVariable;
      this._vrfRange = value.vrfRange;
      this._vrfRangeVariable = value.vrfRangeVariable;
    }
  }

  // affinity_group_number - computed: false, optional: true, required: false
  private _affinityGroupNumber?: number; 
  public get affinityGroupNumber() {
    return this.getNumberAttribute('affinity_group_number');
  }
  public set affinityGroupNumber(value: number) {
    this._affinityGroupNumber = value;
  }
  public resetAffinityGroupNumber() {
    this._affinityGroupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityGroupNumberInput() {
    return this._affinityGroupNumber;
  }

  // affinity_group_number_variable - computed: false, optional: true, required: false
  private _affinityGroupNumberVariable?: string; 
  public get affinityGroupNumberVariable() {
    return this.getStringAttribute('affinity_group_number_variable');
  }
  public set affinityGroupNumberVariable(value: string) {
    this._affinityGroupNumberVariable = value;
  }
  public resetAffinityGroupNumberVariable() {
    this._affinityGroupNumberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityGroupNumberVariableInput() {
    return this._affinityGroupNumberVariable;
  }

  // vrf_range - computed: false, optional: true, required: false
  private _vrfRange?: string; 
  public get vrfRange() {
    return this.getStringAttribute('vrf_range');
  }
  public set vrfRange(value: string) {
    this._vrfRange = value;
  }
  public resetVrfRange() {
    this._vrfRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfRangeInput() {
    return this._vrfRange;
  }

  // vrf_range_variable - computed: false, optional: true, required: false
  private _vrfRangeVariable?: string; 
  public get vrfRangeVariable() {
    return this.getStringAttribute('vrf_range_variable');
  }
  public set vrfRangeVariable(value: string) {
    this._vrfRangeVariable = value;
  }
  public resetVrfRangeVariable() {
    this._vrfRangeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfRangeVariableInput() {
    return this._vrfRangeVariable;
  }
}

export class SystemBasicFeatureAffinityPerVrfsList extends cdktf.ComplexList {
  public internalValue? : SystemBasicFeatureAffinityPerVrfs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SystemBasicFeatureAffinityPerVrfsOutputReference {
    return new SystemBasicFeatureAffinityPerVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemBasicFeatureGpsSmsMobileNumbers {
  /**
  * Mobile number, ex: 1231234414
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#number SystemBasicFeature#number}
  */
  readonly number?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#number_variable SystemBasicFeature#number_variable}
  */
  readonly numberVariable?: string;
}

export function systemBasicFeatureGpsSmsMobileNumbersToTerraform(struct?: SystemBasicFeatureGpsSmsMobileNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.stringToTerraform(struct!.number),
    number_variable: cdktf.stringToTerraform(struct!.numberVariable),
  }
}


export function systemBasicFeatureGpsSmsMobileNumbersToHclTerraform(struct?: SystemBasicFeatureGpsSmsMobileNumbers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_variable: {
      value: cdktf.stringToHclTerraform(struct!.numberVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemBasicFeatureGpsSmsMobileNumbersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SystemBasicFeatureGpsSmsMobileNumbers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._numberVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberVariable = this._numberVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemBasicFeatureGpsSmsMobileNumbers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._numberVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._numberVariable = value.numberVariable;
    }
  }

  // number - computed: false, optional: true, required: false
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // number_variable - computed: false, optional: true, required: false
  private _numberVariable?: string; 
  public get numberVariable() {
    return this.getStringAttribute('number_variable');
  }
  public set numberVariable(value: string) {
    this._numberVariable = value;
  }
  public resetNumberVariable() {
    this._numberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberVariableInput() {
    return this._numberVariable;
  }
}

export class SystemBasicFeatureGpsSmsMobileNumbersList extends cdktf.ComplexList {
  public internalValue? : SystemBasicFeatureGpsSmsMobileNumbers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SystemBasicFeatureGpsSmsMobileNumbersOutputReference {
    return new SystemBasicFeatureGpsSmsMobileNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature sdwan_system_basic_feature}
*/
export class SystemBasicFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_basic_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemBasicFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemBasicFeature to import
  * @param importFromId The id of the existing SystemBasicFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemBasicFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_basic_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_basic_feature sdwan_system_basic_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemBasicFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: SystemBasicFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_basic_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminTechOnFailure = config.adminTechOnFailure;
    this._adminTechOnFailureVariable = config.adminTechOnFailureVariable;
    this._affinityGroupNumber = config.affinityGroupNumber;
    this._affinityGroupNumberVariable = config.affinityGroupNumberVariable;
    this._affinityGroupPreferences = config.affinityGroupPreferences;
    this._affinityGroupPreferencesVariable = config.affinityGroupPreferencesVariable;
    this._affinityPerVrfs.internalValue = config.affinityPerVrfs;
    this._affinityPreferenceAuto = config.affinityPreferenceAuto;
    this._affinityPreferenceAutoVariable = config.affinityPreferenceAutoVariable;
    this._configDescription = config.configDescription;
    this._configDescriptionVariable = config.configDescriptionVariable;
    this._consoleBaudRate = config.consoleBaudRate;
    this._consoleBaudRateVariable = config.consoleBaudRateVariable;
    this._controlSessionPps = config.controlSessionPps;
    this._controlSessionPpsVariable = config.controlSessionPpsVariable;
    this._controllerGroups = config.controllerGroups;
    this._controllerGroupsVariable = config.controllerGroupsVariable;
    this._description = config.description;
    this._deviceGroups = config.deviceGroups;
    this._deviceGroupsVariable = config.deviceGroupsVariable;
    this._enhancedAppAwareRouting = config.enhancedAppAwareRouting;
    this._enhancedAppAwareRoutingVariable = config.enhancedAppAwareRoutingVariable;
    this._featureProfileId = config.featureProfileId;
    this._gpsGeoFencingEnable = config.gpsGeoFencingEnable;
    this._gpsGeoFencingRange = config.gpsGeoFencingRange;
    this._gpsGeoFencingRangeVariable = config.gpsGeoFencingRangeVariable;
    this._gpsLatitude = config.gpsLatitude;
    this._gpsLatitudeVariable = config.gpsLatitudeVariable;
    this._gpsLongitude = config.gpsLongitude;
    this._gpsLongitudeVariable = config.gpsLongitudeVariable;
    this._gpsSmsEnable = config.gpsSmsEnable;
    this._gpsSmsMobileNumbers.internalValue = config.gpsSmsMobileNumbers;
    this._idleTimeout = config.idleTimeout;
    this._idleTimeoutVariable = config.idleTimeoutVariable;
    this._location = config.location;
    this._locationVariable = config.locationVariable;
    this._maxOmpSessions = config.maxOmpSessions;
    this._maxOmpSessionsVariable = config.maxOmpSessionsVariable;
    this._multiTenant = config.multiTenant;
    this._multiTenantVariable = config.multiTenantVariable;
    this._name = config.name;
    this._onDemandEnable = config.onDemandEnable;
    this._onDemandEnableVariable = config.onDemandEnableVariable;
    this._onDemandIdleTimeout = config.onDemandIdleTimeout;
    this._onDemandIdleTimeoutVariable = config.onDemandIdleTimeoutVariable;
    this._overlayId = config.overlayId;
    this._overlayIdVariable = config.overlayIdVariable;
    this._portHopping = config.portHopping;
    this._portHoppingVariable = config.portHoppingVariable;
    this._portOffset = config.portOffset;
    this._portOffsetVariable = config.portOffsetVariable;
    this._siteTypes = config.siteTypes;
    this._siteTypesVariable = config.siteTypesVariable;
    this._timezone = config.timezone;
    this._timezoneVariable = config.timezoneVariable;
    this._trackDefaultGateway = config.trackDefaultGateway;
    this._trackDefaultGatewayVariable = config.trackDefaultGatewayVariable;
    this._trackInterfaceTag = config.trackInterfaceTag;
    this._trackInterfaceTagVariable = config.trackInterfaceTagVariable;
    this._trackTransport = config.trackTransport;
    this._trackTransportVariable = config.trackTransportVariable;
    this._transportGateway = config.transportGateway;
    this._transportGatewayVariable = config.transportGatewayVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_tech_on_failure - computed: false, optional: true, required: false
  private _adminTechOnFailure?: boolean | cdktf.IResolvable; 
  public get adminTechOnFailure() {
    return this.getBooleanAttribute('admin_tech_on_failure');
  }
  public set adminTechOnFailure(value: boolean | cdktf.IResolvable) {
    this._adminTechOnFailure = value;
  }
  public resetAdminTechOnFailure() {
    this._adminTechOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminTechOnFailureInput() {
    return this._adminTechOnFailure;
  }

  // admin_tech_on_failure_variable - computed: false, optional: true, required: false
  private _adminTechOnFailureVariable?: string; 
  public get adminTechOnFailureVariable() {
    return this.getStringAttribute('admin_tech_on_failure_variable');
  }
  public set adminTechOnFailureVariable(value: string) {
    this._adminTechOnFailureVariable = value;
  }
  public resetAdminTechOnFailureVariable() {
    this._adminTechOnFailureVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminTechOnFailureVariableInput() {
    return this._adminTechOnFailureVariable;
  }

  // affinity_group_number - computed: false, optional: true, required: false
  private _affinityGroupNumber?: number; 
  public get affinityGroupNumber() {
    return this.getNumberAttribute('affinity_group_number');
  }
  public set affinityGroupNumber(value: number) {
    this._affinityGroupNumber = value;
  }
  public resetAffinityGroupNumber() {
    this._affinityGroupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityGroupNumberInput() {
    return this._affinityGroupNumber;
  }

  // affinity_group_number_variable - computed: false, optional: true, required: false
  private _affinityGroupNumberVariable?: string; 
  public get affinityGroupNumberVariable() {
    return this.getStringAttribute('affinity_group_number_variable');
  }
  public set affinityGroupNumberVariable(value: string) {
    this._affinityGroupNumberVariable = value;
  }
  public resetAffinityGroupNumberVariable() {
    this._affinityGroupNumberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityGroupNumberVariableInput() {
    return this._affinityGroupNumberVariable;
  }

  // affinity_group_preferences - computed: false, optional: true, required: false
  private _affinityGroupPreferences?: number[]; 
  public get affinityGroupPreferences() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('affinity_group_preferences')));
  }
  public set affinityGroupPreferences(value: number[]) {
    this._affinityGroupPreferences = value;
  }
  public resetAffinityGroupPreferences() {
    this._affinityGroupPreferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityGroupPreferencesInput() {
    return this._affinityGroupPreferences;
  }

  // affinity_group_preferences_variable - computed: false, optional: true, required: false
  private _affinityGroupPreferencesVariable?: string; 
  public get affinityGroupPreferencesVariable() {
    return this.getStringAttribute('affinity_group_preferences_variable');
  }
  public set affinityGroupPreferencesVariable(value: string) {
    this._affinityGroupPreferencesVariable = value;
  }
  public resetAffinityGroupPreferencesVariable() {
    this._affinityGroupPreferencesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityGroupPreferencesVariableInput() {
    return this._affinityGroupPreferencesVariable;
  }

  // affinity_per_vrfs - computed: false, optional: true, required: false
  private _affinityPerVrfs = new SystemBasicFeatureAffinityPerVrfsList(this, "affinity_per_vrfs", false);
  public get affinityPerVrfs() {
    return this._affinityPerVrfs;
  }
  public putAffinityPerVrfs(value: SystemBasicFeatureAffinityPerVrfs[] | cdktf.IResolvable) {
    this._affinityPerVrfs.internalValue = value;
  }
  public resetAffinityPerVrfs() {
    this._affinityPerVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityPerVrfsInput() {
    return this._affinityPerVrfs.internalValue;
  }

  // affinity_preference_auto - computed: false, optional: true, required: false
  private _affinityPreferenceAuto?: boolean | cdktf.IResolvable; 
  public get affinityPreferenceAuto() {
    return this.getBooleanAttribute('affinity_preference_auto');
  }
  public set affinityPreferenceAuto(value: boolean | cdktf.IResolvable) {
    this._affinityPreferenceAuto = value;
  }
  public resetAffinityPreferenceAuto() {
    this._affinityPreferenceAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityPreferenceAutoInput() {
    return this._affinityPreferenceAuto;
  }

  // affinity_preference_auto_variable - computed: false, optional: true, required: false
  private _affinityPreferenceAutoVariable?: string; 
  public get affinityPreferenceAutoVariable() {
    return this.getStringAttribute('affinity_preference_auto_variable');
  }
  public set affinityPreferenceAutoVariable(value: string) {
    this._affinityPreferenceAutoVariable = value;
  }
  public resetAffinityPreferenceAutoVariable() {
    this._affinityPreferenceAutoVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityPreferenceAutoVariableInput() {
    return this._affinityPreferenceAutoVariable;
  }

  // config_description - computed: false, optional: true, required: false
  private _configDescription?: string; 
  public get configDescription() {
    return this.getStringAttribute('config_description');
  }
  public set configDescription(value: string) {
    this._configDescription = value;
  }
  public resetConfigDescription() {
    this._configDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDescriptionInput() {
    return this._configDescription;
  }

  // config_description_variable - computed: false, optional: true, required: false
  private _configDescriptionVariable?: string; 
  public get configDescriptionVariable() {
    return this.getStringAttribute('config_description_variable');
  }
  public set configDescriptionVariable(value: string) {
    this._configDescriptionVariable = value;
  }
  public resetConfigDescriptionVariable() {
    this._configDescriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDescriptionVariableInput() {
    return this._configDescriptionVariable;
  }

  // console_baud_rate - computed: false, optional: true, required: false
  private _consoleBaudRate?: string; 
  public get consoleBaudRate() {
    return this.getStringAttribute('console_baud_rate');
  }
  public set consoleBaudRate(value: string) {
    this._consoleBaudRate = value;
  }
  public resetConsoleBaudRate() {
    this._consoleBaudRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleBaudRateInput() {
    return this._consoleBaudRate;
  }

  // console_baud_rate_variable - computed: false, optional: true, required: false
  private _consoleBaudRateVariable?: string; 
  public get consoleBaudRateVariable() {
    return this.getStringAttribute('console_baud_rate_variable');
  }
  public set consoleBaudRateVariable(value: string) {
    this._consoleBaudRateVariable = value;
  }
  public resetConsoleBaudRateVariable() {
    this._consoleBaudRateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleBaudRateVariableInput() {
    return this._consoleBaudRateVariable;
  }

  // control_session_pps - computed: false, optional: true, required: false
  private _controlSessionPps?: number; 
  public get controlSessionPps() {
    return this.getNumberAttribute('control_session_pps');
  }
  public set controlSessionPps(value: number) {
    this._controlSessionPps = value;
  }
  public resetControlSessionPps() {
    this._controlSessionPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlSessionPpsInput() {
    return this._controlSessionPps;
  }

  // control_session_pps_variable - computed: false, optional: true, required: false
  private _controlSessionPpsVariable?: string; 
  public get controlSessionPpsVariable() {
    return this.getStringAttribute('control_session_pps_variable');
  }
  public set controlSessionPpsVariable(value: string) {
    this._controlSessionPpsVariable = value;
  }
  public resetControlSessionPpsVariable() {
    this._controlSessionPpsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlSessionPpsVariableInput() {
    return this._controlSessionPpsVariable;
  }

  // controller_groups - computed: false, optional: true, required: false
  private _controllerGroups?: number[]; 
  public get controllerGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('controller_groups')));
  }
  public set controllerGroups(value: number[]) {
    this._controllerGroups = value;
  }
  public resetControllerGroups() {
    this._controllerGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerGroupsInput() {
    return this._controllerGroups;
  }

  // controller_groups_variable - computed: false, optional: true, required: false
  private _controllerGroupsVariable?: string; 
  public get controllerGroupsVariable() {
    return this.getStringAttribute('controller_groups_variable');
  }
  public set controllerGroupsVariable(value: string) {
    this._controllerGroupsVariable = value;
  }
  public resetControllerGroupsVariable() {
    this._controllerGroupsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerGroupsVariableInput() {
    return this._controllerGroupsVariable;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_groups - computed: false, optional: true, required: false
  private _deviceGroups?: string[]; 
  public get deviceGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('device_groups'));
  }
  public set deviceGroups(value: string[]) {
    this._deviceGroups = value;
  }
  public resetDeviceGroups() {
    this._deviceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupsInput() {
    return this._deviceGroups;
  }

  // device_groups_variable - computed: false, optional: true, required: false
  private _deviceGroupsVariable?: string; 
  public get deviceGroupsVariable() {
    return this.getStringAttribute('device_groups_variable');
  }
  public set deviceGroupsVariable(value: string) {
    this._deviceGroupsVariable = value;
  }
  public resetDeviceGroupsVariable() {
    this._deviceGroupsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupsVariableInput() {
    return this._deviceGroupsVariable;
  }

  // enhanced_app_aware_routing - computed: false, optional: true, required: false
  private _enhancedAppAwareRouting?: string; 
  public get enhancedAppAwareRouting() {
    return this.getStringAttribute('enhanced_app_aware_routing');
  }
  public set enhancedAppAwareRouting(value: string) {
    this._enhancedAppAwareRouting = value;
  }
  public resetEnhancedAppAwareRouting() {
    this._enhancedAppAwareRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedAppAwareRoutingInput() {
    return this._enhancedAppAwareRouting;
  }

  // enhanced_app_aware_routing_variable - computed: false, optional: true, required: false
  private _enhancedAppAwareRoutingVariable?: string; 
  public get enhancedAppAwareRoutingVariable() {
    return this.getStringAttribute('enhanced_app_aware_routing_variable');
  }
  public set enhancedAppAwareRoutingVariable(value: string) {
    this._enhancedAppAwareRoutingVariable = value;
  }
  public resetEnhancedAppAwareRoutingVariable() {
    this._enhancedAppAwareRoutingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedAppAwareRoutingVariableInput() {
    return this._enhancedAppAwareRoutingVariable;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // gps_geo_fencing_enable - computed: false, optional: true, required: false
  private _gpsGeoFencingEnable?: boolean | cdktf.IResolvable; 
  public get gpsGeoFencingEnable() {
    return this.getBooleanAttribute('gps_geo_fencing_enable');
  }
  public set gpsGeoFencingEnable(value: boolean | cdktf.IResolvable) {
    this._gpsGeoFencingEnable = value;
  }
  public resetGpsGeoFencingEnable() {
    this._gpsGeoFencingEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpsGeoFencingEnableInput() {
    return this._gpsGeoFencingEnable;
  }

  // gps_geo_fencing_range - computed: false, optional: true, required: false
  private _gpsGeoFencingRange?: number; 
  public get gpsGeoFencingRange() {
    return this.getNumberAttribute('gps_geo_fencing_range');
  }
  public set gpsGeoFencingRange(value: number) {
    this._gpsGeoFencingRange = value;
  }
  public resetGpsGeoFencingRange() {
    this._gpsGeoFencingRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpsGeoFencingRangeInput() {
    return this._gpsGeoFencingRange;
  }

  // gps_geo_fencing_range_variable - computed: false, optional: true, required: false
  private _gpsGeoFencingRangeVariable?: string; 
  public get gpsGeoFencingRangeVariable() {
    return this.getStringAttribute('gps_geo_fencing_range_variable');
  }
  public set gpsGeoFencingRangeVariable(value: string) {
    this._gpsGeoFencingRangeVariable = value;
  }
  public resetGpsGeoFencingRangeVariable() {
    this._gpsGeoFencingRangeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpsGeoFencingRangeVariableInput() {
    return this._gpsGeoFencingRangeVariable;
  }

  // gps_latitude - computed: false, optional: true, required: false
  private _gpsLatitude?: number; 
  public get gpsLatitude() {
    return this.getNumberAttribute('gps_latitude');
  }
  public set gpsLatitude(value: number) {
    this._gpsLatitude = value;
  }
  public resetGpsLatitude() {
    this._gpsLatitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpsLatitudeInput() {
    return this._gpsLatitude;
  }

  // gps_latitude_variable - computed: false, optional: true, required: false
  private _gpsLatitudeVariable?: string; 
  public get gpsLatitudeVariable() {
    return this.getStringAttribute('gps_latitude_variable');
  }
  public set gpsLatitudeVariable(value: string) {
    this._gpsLatitudeVariable = value;
  }
  public resetGpsLatitudeVariable() {
    this._gpsLatitudeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpsLatitudeVariableInput() {
    return this._gpsLatitudeVariable;
  }

  // gps_longitude - computed: false, optional: true, required: false
  private _gpsLongitude?: number; 
  public get gpsLongitude() {
    return this.getNumberAttribute('gps_longitude');
  }
  public set gpsLongitude(value: number) {
    this._gpsLongitude = value;
  }
  public resetGpsLongitude() {
    this._gpsLongitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpsLongitudeInput() {
    return this._gpsLongitude;
  }

  // gps_longitude_variable - computed: false, optional: true, required: false
  private _gpsLongitudeVariable?: string; 
  public get gpsLongitudeVariable() {
    return this.getStringAttribute('gps_longitude_variable');
  }
  public set gpsLongitudeVariable(value: string) {
    this._gpsLongitudeVariable = value;
  }
  public resetGpsLongitudeVariable() {
    this._gpsLongitudeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpsLongitudeVariableInput() {
    return this._gpsLongitudeVariable;
  }

  // gps_sms_enable - computed: false, optional: true, required: false
  private _gpsSmsEnable?: boolean | cdktf.IResolvable; 
  public get gpsSmsEnable() {
    return this.getBooleanAttribute('gps_sms_enable');
  }
  public set gpsSmsEnable(value: boolean | cdktf.IResolvable) {
    this._gpsSmsEnable = value;
  }
  public resetGpsSmsEnable() {
    this._gpsSmsEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpsSmsEnableInput() {
    return this._gpsSmsEnable;
  }

  // gps_sms_mobile_numbers - computed: false, optional: true, required: false
  private _gpsSmsMobileNumbers = new SystemBasicFeatureGpsSmsMobileNumbersList(this, "gps_sms_mobile_numbers", false);
  public get gpsSmsMobileNumbers() {
    return this._gpsSmsMobileNumbers;
  }
  public putGpsSmsMobileNumbers(value: SystemBasicFeatureGpsSmsMobileNumbers[] | cdktf.IResolvable) {
    this._gpsSmsMobileNumbers.internalValue = value;
  }
  public resetGpsSmsMobileNumbers() {
    this._gpsSmsMobileNumbers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpsSmsMobileNumbersInput() {
    return this._gpsSmsMobileNumbers.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // idle_timeout_variable - computed: false, optional: true, required: false
  private _idleTimeoutVariable?: string; 
  public get idleTimeoutVariable() {
    return this.getStringAttribute('idle_timeout_variable');
  }
  public set idleTimeoutVariable(value: string) {
    this._idleTimeoutVariable = value;
  }
  public resetIdleTimeoutVariable() {
    this._idleTimeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutVariableInput() {
    return this._idleTimeoutVariable;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // location_variable - computed: false, optional: true, required: false
  private _locationVariable?: string; 
  public get locationVariable() {
    return this.getStringAttribute('location_variable');
  }
  public set locationVariable(value: string) {
    this._locationVariable = value;
  }
  public resetLocationVariable() {
    this._locationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationVariableInput() {
    return this._locationVariable;
  }

  // max_omp_sessions - computed: false, optional: true, required: false
  private _maxOmpSessions?: number; 
  public get maxOmpSessions() {
    return this.getNumberAttribute('max_omp_sessions');
  }
  public set maxOmpSessions(value: number) {
    this._maxOmpSessions = value;
  }
  public resetMaxOmpSessions() {
    this._maxOmpSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOmpSessionsInput() {
    return this._maxOmpSessions;
  }

  // max_omp_sessions_variable - computed: false, optional: true, required: false
  private _maxOmpSessionsVariable?: string; 
  public get maxOmpSessionsVariable() {
    return this.getStringAttribute('max_omp_sessions_variable');
  }
  public set maxOmpSessionsVariable(value: string) {
    this._maxOmpSessionsVariable = value;
  }
  public resetMaxOmpSessionsVariable() {
    this._maxOmpSessionsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOmpSessionsVariableInput() {
    return this._maxOmpSessionsVariable;
  }

  // multi_tenant - computed: false, optional: true, required: false
  private _multiTenant?: boolean | cdktf.IResolvable; 
  public get multiTenant() {
    return this.getBooleanAttribute('multi_tenant');
  }
  public set multiTenant(value: boolean | cdktf.IResolvable) {
    this._multiTenant = value;
  }
  public resetMultiTenant() {
    this._multiTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTenantInput() {
    return this._multiTenant;
  }

  // multi_tenant_variable - computed: false, optional: true, required: false
  private _multiTenantVariable?: string; 
  public get multiTenantVariable() {
    return this.getStringAttribute('multi_tenant_variable');
  }
  public set multiTenantVariable(value: string) {
    this._multiTenantVariable = value;
  }
  public resetMultiTenantVariable() {
    this._multiTenantVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTenantVariableInput() {
    return this._multiTenantVariable;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_demand_enable - computed: false, optional: true, required: false
  private _onDemandEnable?: boolean | cdktf.IResolvable; 
  public get onDemandEnable() {
    return this.getBooleanAttribute('on_demand_enable');
  }
  public set onDemandEnable(value: boolean | cdktf.IResolvable) {
    this._onDemandEnable = value;
  }
  public resetOnDemandEnable() {
    this._onDemandEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandEnableInput() {
    return this._onDemandEnable;
  }

  // on_demand_enable_variable - computed: false, optional: true, required: false
  private _onDemandEnableVariable?: string; 
  public get onDemandEnableVariable() {
    return this.getStringAttribute('on_demand_enable_variable');
  }
  public set onDemandEnableVariable(value: string) {
    this._onDemandEnableVariable = value;
  }
  public resetOnDemandEnableVariable() {
    this._onDemandEnableVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandEnableVariableInput() {
    return this._onDemandEnableVariable;
  }

  // on_demand_idle_timeout - computed: false, optional: true, required: false
  private _onDemandIdleTimeout?: number; 
  public get onDemandIdleTimeout() {
    return this.getNumberAttribute('on_demand_idle_timeout');
  }
  public set onDemandIdleTimeout(value: number) {
    this._onDemandIdleTimeout = value;
  }
  public resetOnDemandIdleTimeout() {
    this._onDemandIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandIdleTimeoutInput() {
    return this._onDemandIdleTimeout;
  }

  // on_demand_idle_timeout_variable - computed: false, optional: true, required: false
  private _onDemandIdleTimeoutVariable?: string; 
  public get onDemandIdleTimeoutVariable() {
    return this.getStringAttribute('on_demand_idle_timeout_variable');
  }
  public set onDemandIdleTimeoutVariable(value: string) {
    this._onDemandIdleTimeoutVariable = value;
  }
  public resetOnDemandIdleTimeoutVariable() {
    this._onDemandIdleTimeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandIdleTimeoutVariableInput() {
    return this._onDemandIdleTimeoutVariable;
  }

  // overlay_id - computed: false, optional: true, required: false
  private _overlayId?: number; 
  public get overlayId() {
    return this.getNumberAttribute('overlay_id');
  }
  public set overlayId(value: number) {
    this._overlayId = value;
  }
  public resetOverlayId() {
    this._overlayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayIdInput() {
    return this._overlayId;
  }

  // overlay_id_variable - computed: false, optional: true, required: false
  private _overlayIdVariable?: string; 
  public get overlayIdVariable() {
    return this.getStringAttribute('overlay_id_variable');
  }
  public set overlayIdVariable(value: string) {
    this._overlayIdVariable = value;
  }
  public resetOverlayIdVariable() {
    this._overlayIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayIdVariableInput() {
    return this._overlayIdVariable;
  }

  // port_hopping - computed: false, optional: true, required: false
  private _portHopping?: boolean | cdktf.IResolvable; 
  public get portHopping() {
    return this.getBooleanAttribute('port_hopping');
  }
  public set portHopping(value: boolean | cdktf.IResolvable) {
    this._portHopping = value;
  }
  public resetPortHopping() {
    this._portHopping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHoppingInput() {
    return this._portHopping;
  }

  // port_hopping_variable - computed: false, optional: true, required: false
  private _portHoppingVariable?: string; 
  public get portHoppingVariable() {
    return this.getStringAttribute('port_hopping_variable');
  }
  public set portHoppingVariable(value: string) {
    this._portHoppingVariable = value;
  }
  public resetPortHoppingVariable() {
    this._portHoppingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHoppingVariableInput() {
    return this._portHoppingVariable;
  }

  // port_offset - computed: false, optional: true, required: false
  private _portOffset?: number; 
  public get portOffset() {
    return this.getNumberAttribute('port_offset');
  }
  public set portOffset(value: number) {
    this._portOffset = value;
  }
  public resetPortOffset() {
    this._portOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOffsetInput() {
    return this._portOffset;
  }

  // port_offset_variable - computed: false, optional: true, required: false
  private _portOffsetVariable?: string; 
  public get portOffsetVariable() {
    return this.getStringAttribute('port_offset_variable');
  }
  public set portOffsetVariable(value: string) {
    this._portOffsetVariable = value;
  }
  public resetPortOffsetVariable() {
    this._portOffsetVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOffsetVariableInput() {
    return this._portOffsetVariable;
  }

  // site_types - computed: false, optional: true, required: false
  private _siteTypes?: string[]; 
  public get siteTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('site_types'));
  }
  public set siteTypes(value: string[]) {
    this._siteTypes = value;
  }
  public resetSiteTypes() {
    this._siteTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteTypesInput() {
    return this._siteTypes;
  }

  // site_types_variable - computed: false, optional: true, required: false
  private _siteTypesVariable?: string; 
  public get siteTypesVariable() {
    return this.getStringAttribute('site_types_variable');
  }
  public set siteTypesVariable(value: string) {
    this._siteTypesVariable = value;
  }
  public resetSiteTypesVariable() {
    this._siteTypesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteTypesVariableInput() {
    return this._siteTypesVariable;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // timezone_variable - computed: false, optional: true, required: false
  private _timezoneVariable?: string; 
  public get timezoneVariable() {
    return this.getStringAttribute('timezone_variable');
  }
  public set timezoneVariable(value: string) {
    this._timezoneVariable = value;
  }
  public resetTimezoneVariable() {
    this._timezoneVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneVariableInput() {
    return this._timezoneVariable;
  }

  // track_default_gateway - computed: false, optional: true, required: false
  private _trackDefaultGateway?: boolean | cdktf.IResolvable; 
  public get trackDefaultGateway() {
    return this.getBooleanAttribute('track_default_gateway');
  }
  public set trackDefaultGateway(value: boolean | cdktf.IResolvable) {
    this._trackDefaultGateway = value;
  }
  public resetTrackDefaultGateway() {
    this._trackDefaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackDefaultGatewayInput() {
    return this._trackDefaultGateway;
  }

  // track_default_gateway_variable - computed: false, optional: true, required: false
  private _trackDefaultGatewayVariable?: string; 
  public get trackDefaultGatewayVariable() {
    return this.getStringAttribute('track_default_gateway_variable');
  }
  public set trackDefaultGatewayVariable(value: string) {
    this._trackDefaultGatewayVariable = value;
  }
  public resetTrackDefaultGatewayVariable() {
    this._trackDefaultGatewayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackDefaultGatewayVariableInput() {
    return this._trackDefaultGatewayVariable;
  }

  // track_interface_tag - computed: false, optional: true, required: false
  private _trackInterfaceTag?: number; 
  public get trackInterfaceTag() {
    return this.getNumberAttribute('track_interface_tag');
  }
  public set trackInterfaceTag(value: number) {
    this._trackInterfaceTag = value;
  }
  public resetTrackInterfaceTag() {
    this._trackInterfaceTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInterfaceTagInput() {
    return this._trackInterfaceTag;
  }

  // track_interface_tag_variable - computed: false, optional: true, required: false
  private _trackInterfaceTagVariable?: string; 
  public get trackInterfaceTagVariable() {
    return this.getStringAttribute('track_interface_tag_variable');
  }
  public set trackInterfaceTagVariable(value: string) {
    this._trackInterfaceTagVariable = value;
  }
  public resetTrackInterfaceTagVariable() {
    this._trackInterfaceTagVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInterfaceTagVariableInput() {
    return this._trackInterfaceTagVariable;
  }

  // track_transport - computed: false, optional: true, required: false
  private _trackTransport?: boolean | cdktf.IResolvable; 
  public get trackTransport() {
    return this.getBooleanAttribute('track_transport');
  }
  public set trackTransport(value: boolean | cdktf.IResolvable) {
    this._trackTransport = value;
  }
  public resetTrackTransport() {
    this._trackTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackTransportInput() {
    return this._trackTransport;
  }

  // track_transport_variable - computed: false, optional: true, required: false
  private _trackTransportVariable?: string; 
  public get trackTransportVariable() {
    return this.getStringAttribute('track_transport_variable');
  }
  public set trackTransportVariable(value: string) {
    this._trackTransportVariable = value;
  }
  public resetTrackTransportVariable() {
    this._trackTransportVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackTransportVariableInput() {
    return this._trackTransportVariable;
  }

  // transport_gateway - computed: false, optional: true, required: false
  private _transportGateway?: boolean | cdktf.IResolvable; 
  public get transportGateway() {
    return this.getBooleanAttribute('transport_gateway');
  }
  public set transportGateway(value: boolean | cdktf.IResolvable) {
    this._transportGateway = value;
  }
  public resetTransportGateway() {
    this._transportGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportGatewayInput() {
    return this._transportGateway;
  }

  // transport_gateway_variable - computed: false, optional: true, required: false
  private _transportGatewayVariable?: string; 
  public get transportGatewayVariable() {
    return this.getStringAttribute('transport_gateway_variable');
  }
  public set transportGatewayVariable(value: string) {
    this._transportGatewayVariable = value;
  }
  public resetTransportGatewayVariable() {
    this._transportGatewayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportGatewayVariableInput() {
    return this._transportGatewayVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_tech_on_failure: cdktf.booleanToTerraform(this._adminTechOnFailure),
      admin_tech_on_failure_variable: cdktf.stringToTerraform(this._adminTechOnFailureVariable),
      affinity_group_number: cdktf.numberToTerraform(this._affinityGroupNumber),
      affinity_group_number_variable: cdktf.stringToTerraform(this._affinityGroupNumberVariable),
      affinity_group_preferences: cdktf.listMapper(cdktf.numberToTerraform, false)(this._affinityGroupPreferences),
      affinity_group_preferences_variable: cdktf.stringToTerraform(this._affinityGroupPreferencesVariable),
      affinity_per_vrfs: cdktf.listMapper(systemBasicFeatureAffinityPerVrfsToTerraform, false)(this._affinityPerVrfs.internalValue),
      affinity_preference_auto: cdktf.booleanToTerraform(this._affinityPreferenceAuto),
      affinity_preference_auto_variable: cdktf.stringToTerraform(this._affinityPreferenceAutoVariable),
      config_description: cdktf.stringToTerraform(this._configDescription),
      config_description_variable: cdktf.stringToTerraform(this._configDescriptionVariable),
      console_baud_rate: cdktf.stringToTerraform(this._consoleBaudRate),
      console_baud_rate_variable: cdktf.stringToTerraform(this._consoleBaudRateVariable),
      control_session_pps: cdktf.numberToTerraform(this._controlSessionPps),
      control_session_pps_variable: cdktf.stringToTerraform(this._controlSessionPpsVariable),
      controller_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._controllerGroups),
      controller_groups_variable: cdktf.stringToTerraform(this._controllerGroupsVariable),
      description: cdktf.stringToTerraform(this._description),
      device_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceGroups),
      device_groups_variable: cdktf.stringToTerraform(this._deviceGroupsVariable),
      enhanced_app_aware_routing: cdktf.stringToTerraform(this._enhancedAppAwareRouting),
      enhanced_app_aware_routing_variable: cdktf.stringToTerraform(this._enhancedAppAwareRoutingVariable),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      gps_geo_fencing_enable: cdktf.booleanToTerraform(this._gpsGeoFencingEnable),
      gps_geo_fencing_range: cdktf.numberToTerraform(this._gpsGeoFencingRange),
      gps_geo_fencing_range_variable: cdktf.stringToTerraform(this._gpsGeoFencingRangeVariable),
      gps_latitude: cdktf.numberToTerraform(this._gpsLatitude),
      gps_latitude_variable: cdktf.stringToTerraform(this._gpsLatitudeVariable),
      gps_longitude: cdktf.numberToTerraform(this._gpsLongitude),
      gps_longitude_variable: cdktf.stringToTerraform(this._gpsLongitudeVariable),
      gps_sms_enable: cdktf.booleanToTerraform(this._gpsSmsEnable),
      gps_sms_mobile_numbers: cdktf.listMapper(systemBasicFeatureGpsSmsMobileNumbersToTerraform, false)(this._gpsSmsMobileNumbers.internalValue),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      idle_timeout_variable: cdktf.stringToTerraform(this._idleTimeoutVariable),
      location: cdktf.stringToTerraform(this._location),
      location_variable: cdktf.stringToTerraform(this._locationVariable),
      max_omp_sessions: cdktf.numberToTerraform(this._maxOmpSessions),
      max_omp_sessions_variable: cdktf.stringToTerraform(this._maxOmpSessionsVariable),
      multi_tenant: cdktf.booleanToTerraform(this._multiTenant),
      multi_tenant_variable: cdktf.stringToTerraform(this._multiTenantVariable),
      name: cdktf.stringToTerraform(this._name),
      on_demand_enable: cdktf.booleanToTerraform(this._onDemandEnable),
      on_demand_enable_variable: cdktf.stringToTerraform(this._onDemandEnableVariable),
      on_demand_idle_timeout: cdktf.numberToTerraform(this._onDemandIdleTimeout),
      on_demand_idle_timeout_variable: cdktf.stringToTerraform(this._onDemandIdleTimeoutVariable),
      overlay_id: cdktf.numberToTerraform(this._overlayId),
      overlay_id_variable: cdktf.stringToTerraform(this._overlayIdVariable),
      port_hopping: cdktf.booleanToTerraform(this._portHopping),
      port_hopping_variable: cdktf.stringToTerraform(this._portHoppingVariable),
      port_offset: cdktf.numberToTerraform(this._portOffset),
      port_offset_variable: cdktf.stringToTerraform(this._portOffsetVariable),
      site_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._siteTypes),
      site_types_variable: cdktf.stringToTerraform(this._siteTypesVariable),
      timezone: cdktf.stringToTerraform(this._timezone),
      timezone_variable: cdktf.stringToTerraform(this._timezoneVariable),
      track_default_gateway: cdktf.booleanToTerraform(this._trackDefaultGateway),
      track_default_gateway_variable: cdktf.stringToTerraform(this._trackDefaultGatewayVariable),
      track_interface_tag: cdktf.numberToTerraform(this._trackInterfaceTag),
      track_interface_tag_variable: cdktf.stringToTerraform(this._trackInterfaceTagVariable),
      track_transport: cdktf.booleanToTerraform(this._trackTransport),
      track_transport_variable: cdktf.stringToTerraform(this._trackTransportVariable),
      transport_gateway: cdktf.booleanToTerraform(this._transportGateway),
      transport_gateway_variable: cdktf.stringToTerraform(this._transportGatewayVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_tech_on_failure: {
        value: cdktf.booleanToHclTerraform(this._adminTechOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      admin_tech_on_failure_variable: {
        value: cdktf.stringToHclTerraform(this._adminTechOnFailureVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      affinity_group_number: {
        value: cdktf.numberToHclTerraform(this._affinityGroupNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      affinity_group_number_variable: {
        value: cdktf.stringToHclTerraform(this._affinityGroupNumberVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      affinity_group_preferences: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._affinityGroupPreferences),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      affinity_group_preferences_variable: {
        value: cdktf.stringToHclTerraform(this._affinityGroupPreferencesVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      affinity_per_vrfs: {
        value: cdktf.listMapperHcl(systemBasicFeatureAffinityPerVrfsToHclTerraform, false)(this._affinityPerVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemBasicFeatureAffinityPerVrfsList",
      },
      affinity_preference_auto: {
        value: cdktf.booleanToHclTerraform(this._affinityPreferenceAuto),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      affinity_preference_auto_variable: {
        value: cdktf.stringToHclTerraform(this._affinityPreferenceAutoVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_description: {
        value: cdktf.stringToHclTerraform(this._configDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_description_variable: {
        value: cdktf.stringToHclTerraform(this._configDescriptionVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      console_baud_rate: {
        value: cdktf.stringToHclTerraform(this._consoleBaudRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      console_baud_rate_variable: {
        value: cdktf.stringToHclTerraform(this._consoleBaudRateVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_session_pps: {
        value: cdktf.numberToHclTerraform(this._controlSessionPps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      control_session_pps_variable: {
        value: cdktf.stringToHclTerraform(this._controlSessionPpsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._controllerGroups),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      controller_groups_variable: {
        value: cdktf.stringToHclTerraform(this._controllerGroupsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_groups_variable: {
        value: cdktf.stringToHclTerraform(this._deviceGroupsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_app_aware_routing: {
        value: cdktf.stringToHclTerraform(this._enhancedAppAwareRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_app_aware_routing_variable: {
        value: cdktf.stringToHclTerraform(this._enhancedAppAwareRoutingVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gps_geo_fencing_enable: {
        value: cdktf.booleanToHclTerraform(this._gpsGeoFencingEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gps_geo_fencing_range: {
        value: cdktf.numberToHclTerraform(this._gpsGeoFencingRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gps_geo_fencing_range_variable: {
        value: cdktf.stringToHclTerraform(this._gpsGeoFencingRangeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gps_latitude: {
        value: cdktf.numberToHclTerraform(this._gpsLatitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gps_latitude_variable: {
        value: cdktf.stringToHclTerraform(this._gpsLatitudeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gps_longitude: {
        value: cdktf.numberToHclTerraform(this._gpsLongitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gps_longitude_variable: {
        value: cdktf.stringToHclTerraform(this._gpsLongitudeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gps_sms_enable: {
        value: cdktf.booleanToHclTerraform(this._gpsSmsEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gps_sms_mobile_numbers: {
        value: cdktf.listMapperHcl(systemBasicFeatureGpsSmsMobileNumbersToHclTerraform, false)(this._gpsSmsMobileNumbers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemBasicFeatureGpsSmsMobileNumbersList",
      },
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      idle_timeout_variable: {
        value: cdktf.stringToHclTerraform(this._idleTimeoutVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_variable: {
        value: cdktf.stringToHclTerraform(this._locationVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_omp_sessions: {
        value: cdktf.numberToHclTerraform(this._maxOmpSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_omp_sessions_variable: {
        value: cdktf.stringToHclTerraform(this._maxOmpSessionsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_tenant: {
        value: cdktf.booleanToHclTerraform(this._multiTenant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multi_tenant_variable: {
        value: cdktf.stringToHclTerraform(this._multiTenantVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_demand_enable: {
        value: cdktf.booleanToHclTerraform(this._onDemandEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_demand_enable_variable: {
        value: cdktf.stringToHclTerraform(this._onDemandEnableVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_demand_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._onDemandIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      on_demand_idle_timeout_variable: {
        value: cdktf.stringToHclTerraform(this._onDemandIdleTimeoutVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overlay_id: {
        value: cdktf.numberToHclTerraform(this._overlayId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      overlay_id_variable: {
        value: cdktf.stringToHclTerraform(this._overlayIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_hopping: {
        value: cdktf.booleanToHclTerraform(this._portHopping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_hopping_variable: {
        value: cdktf.stringToHclTerraform(this._portHoppingVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_offset: {
        value: cdktf.numberToHclTerraform(this._portOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_offset_variable: {
        value: cdktf.stringToHclTerraform(this._portOffsetVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._siteTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      site_types_variable: {
        value: cdktf.stringToHclTerraform(this._siteTypesVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone_variable: {
        value: cdktf.stringToHclTerraform(this._timezoneVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      track_default_gateway: {
        value: cdktf.booleanToHclTerraform(this._trackDefaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      track_default_gateway_variable: {
        value: cdktf.stringToHclTerraform(this._trackDefaultGatewayVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      track_interface_tag: {
        value: cdktf.numberToHclTerraform(this._trackInterfaceTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      track_interface_tag_variable: {
        value: cdktf.stringToHclTerraform(this._trackInterfaceTagVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      track_transport: {
        value: cdktf.booleanToHclTerraform(this._trackTransport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      track_transport_variable: {
        value: cdktf.stringToHclTerraform(this._trackTransportVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_gateway: {
        value: cdktf.booleanToHclTerraform(this._transportGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transport_gateway_variable: {
        value: cdktf.stringToHclTerraform(this._transportGatewayVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
