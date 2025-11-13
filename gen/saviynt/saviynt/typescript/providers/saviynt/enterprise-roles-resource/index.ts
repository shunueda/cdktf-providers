// https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnterpriseRolesResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if segregation of duties (SoD) checks should be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#check_sod EnterpriseRolesResource#check_sod}
  */
  readonly checkSod?: string;
  /**
  * Set of child roles associated with the role. Child roles provide conditional access - when a user requests entitlements from a child role, the system checks if they have the parent role entitlements. Conversely, requesting parent role entitlements automatically grants child role entitlements. To add child roles, include them in the set; to remove child roles, exclude them from the set. Each child role requires 'role_name'. Note: This attribute is only available in Saviynt version 25.B and later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#child_roles EnterpriseRolesResource#child_roles}
  */
  readonly childRoles?: EnterpriseRolesResourceChildRoles[] | cdktf.IResolvable;
  /**
  * Select the confidentiality of this role. Valid options: 'None', 'Very Low', 'Low', 'Medium', 'High', 'Critical'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#confidentiality EnterpriseRolesResource#confidentiality}
  */
  readonly confidentiality?: string;
  /**
  * Custom Property 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property1 EnterpriseRolesResource#custom_property1}
  */
  readonly customProperty1?: string;
  /**
  * Custom Property 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property10 EnterpriseRolesResource#custom_property10}
  */
  readonly customProperty10?: string;
  /**
  * Custom Property 11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property11 EnterpriseRolesResource#custom_property11}
  */
  readonly customProperty11?: string;
  /**
  * Custom Property 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property12 EnterpriseRolesResource#custom_property12}
  */
  readonly customProperty12?: string;
  /**
  * Custom Property 13.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property13 EnterpriseRolesResource#custom_property13}
  */
  readonly customProperty13?: string;
  /**
  * Custom Property 14.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property14 EnterpriseRolesResource#custom_property14}
  */
  readonly customProperty14?: string;
  /**
  * Custom Property 15.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property15 EnterpriseRolesResource#custom_property15}
  */
  readonly customProperty15?: string;
  /**
  * Custom Property 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property16 EnterpriseRolesResource#custom_property16}
  */
  readonly customProperty16?: string;
  /**
  * Custom Property 17.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property17 EnterpriseRolesResource#custom_property17}
  */
  readonly customProperty17?: string;
  /**
  * Custom Property 18.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property18 EnterpriseRolesResource#custom_property18}
  */
  readonly customProperty18?: string;
  /**
  * Custom Property 19.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property19 EnterpriseRolesResource#custom_property19}
  */
  readonly customProperty19?: string;
  /**
  * Custom Property 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property2 EnterpriseRolesResource#custom_property2}
  */
  readonly customProperty2?: string;
  /**
  * Custom Property 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property20 EnterpriseRolesResource#custom_property20}
  */
  readonly customProperty20?: string;
  /**
  * Custom Property 21.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property21 EnterpriseRolesResource#custom_property21}
  */
  readonly customProperty21?: string;
  /**
  * Custom Property 22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property22 EnterpriseRolesResource#custom_property22}
  */
  readonly customProperty22?: string;
  /**
  * Custom Property 23.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property23 EnterpriseRolesResource#custom_property23}
  */
  readonly customProperty23?: string;
  /**
  * Custom Property 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property24 EnterpriseRolesResource#custom_property24}
  */
  readonly customProperty24?: string;
  /**
  * Custom Property 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property25 EnterpriseRolesResource#custom_property25}
  */
  readonly customProperty25?: string;
  /**
  * Custom Property 26.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property26 EnterpriseRolesResource#custom_property26}
  */
  readonly customProperty26?: string;
  /**
  * Custom Property 27.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property27 EnterpriseRolesResource#custom_property27}
  */
  readonly customProperty27?: string;
  /**
  * Custom Property 28.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property28 EnterpriseRolesResource#custom_property28}
  */
  readonly customProperty28?: string;
  /**
  * Custom Property 29.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property29 EnterpriseRolesResource#custom_property29}
  */
  readonly customProperty29?: string;
  /**
  * Custom Property 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property3 EnterpriseRolesResource#custom_property3}
  */
  readonly customProperty3?: string;
  /**
  * Custom Property 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property30 EnterpriseRolesResource#custom_property30}
  */
  readonly customProperty30?: string;
  /**
  * Custom Property 31.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property31 EnterpriseRolesResource#custom_property31}
  */
  readonly customProperty31?: string;
  /**
  * Custom Property 32.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property32 EnterpriseRolesResource#custom_property32}
  */
  readonly customProperty32?: string;
  /**
  * Custom Property 33.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property33 EnterpriseRolesResource#custom_property33}
  */
  readonly customProperty33?: string;
  /**
  * Custom Property 34.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property34 EnterpriseRolesResource#custom_property34}
  */
  readonly customProperty34?: string;
  /**
  * Custom Property 35.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property35 EnterpriseRolesResource#custom_property35}
  */
  readonly customProperty35?: string;
  /**
  * Custom Property 36.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property36 EnterpriseRolesResource#custom_property36}
  */
  readonly customProperty36?: string;
  /**
  * Custom Property 37.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property37 EnterpriseRolesResource#custom_property37}
  */
  readonly customProperty37?: string;
  /**
  * Custom Property 38.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property38 EnterpriseRolesResource#custom_property38}
  */
  readonly customProperty38?: string;
  /**
  * Custom Property 39.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property39 EnterpriseRolesResource#custom_property39}
  */
  readonly customProperty39?: string;
  /**
  * Custom Property 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property4 EnterpriseRolesResource#custom_property4}
  */
  readonly customProperty4?: string;
  /**
  * Custom Property 40.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property40 EnterpriseRolesResource#custom_property40}
  */
  readonly customProperty40?: string;
  /**
  * Custom Property 41.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property41 EnterpriseRolesResource#custom_property41}
  */
  readonly customProperty41?: string;
  /**
  * Custom Property 42.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property42 EnterpriseRolesResource#custom_property42}
  */
  readonly customProperty42?: string;
  /**
  * Custom Property 43.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property43 EnterpriseRolesResource#custom_property43}
  */
  readonly customProperty43?: string;
  /**
  * Custom Property 44.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property44 EnterpriseRolesResource#custom_property44}
  */
  readonly customProperty44?: string;
  /**
  * Custom Property 45.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property45 EnterpriseRolesResource#custom_property45}
  */
  readonly customProperty45?: string;
  /**
  * Custom Property 46.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property46 EnterpriseRolesResource#custom_property46}
  */
  readonly customProperty46?: string;
  /**
  * Custom Property 47.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property47 EnterpriseRolesResource#custom_property47}
  */
  readonly customProperty47?: string;
  /**
  * Custom Property 48.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property48 EnterpriseRolesResource#custom_property48}
  */
  readonly customProperty48?: string;
  /**
  * Custom Property 49.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property49 EnterpriseRolesResource#custom_property49}
  */
  readonly customProperty49?: string;
  /**
  * Custom Property 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property5 EnterpriseRolesResource#custom_property5}
  */
  readonly customProperty5?: string;
  /**
  * Custom Property 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property50 EnterpriseRolesResource#custom_property50}
  */
  readonly customProperty50?: string;
  /**
  * Custom Property 51.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property51 EnterpriseRolesResource#custom_property51}
  */
  readonly customProperty51?: string;
  /**
  * Custom Property 52.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property52 EnterpriseRolesResource#custom_property52}
  */
  readonly customProperty52?: string;
  /**
  * Custom Property 53.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property53 EnterpriseRolesResource#custom_property53}
  */
  readonly customProperty53?: string;
  /**
  * Custom Property 54.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property54 EnterpriseRolesResource#custom_property54}
  */
  readonly customProperty54?: string;
  /**
  * Custom Property 55.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property55 EnterpriseRolesResource#custom_property55}
  */
  readonly customProperty55?: string;
  /**
  * Custom Property 56.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property56 EnterpriseRolesResource#custom_property56}
  */
  readonly customProperty56?: string;
  /**
  * Custom Property 57.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property57 EnterpriseRolesResource#custom_property57}
  */
  readonly customProperty57?: string;
  /**
  * Custom Property 58.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property58 EnterpriseRolesResource#custom_property58}
  */
  readonly customProperty58?: string;
  /**
  * Custom Property 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property59 EnterpriseRolesResource#custom_property59}
  */
  readonly customProperty59?: string;
  /**
  * Custom Property 6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property6 EnterpriseRolesResource#custom_property6}
  */
  readonly customProperty6?: string;
  /**
  * Custom Property 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property60 EnterpriseRolesResource#custom_property60}
  */
  readonly customProperty60?: string;
  /**
  * Custom Property 7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property7 EnterpriseRolesResource#custom_property7}
  */
  readonly customProperty7?: string;
  /**
  * Custom Property 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property8 EnterpriseRolesResource#custom_property8}
  */
  readonly customProperty8?: string;
  /**
  * Custom Property 9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#custom_property9 EnterpriseRolesResource#custom_property9}
  */
  readonly customProperty9?: string;
  /**
  * Specify the default time frame (in hours) to request access for a role. This defines how long users will have access when assigned this role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#default_time_frame EnterpriseRolesResource#default_time_frame}
  */
  readonly defaultTimeFrame?: string;
  /**
  * Displays the description of the role. You can change the description, as required. This helps users understand what the role is for and what permissions it grants.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#description EnterpriseRolesResource#description}
  */
  readonly description?: string;
  /**
  * Displays the display name of the role. This is a user-friendly name that can be different from the role_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#display_name EnterpriseRolesResource#display_name}
  */
  readonly displayName?: string;
  /**
  * Name of the endpoint associated with this role. Must be an existing endpoint in Saviynt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#endpoint_name EnterpriseRolesResource#endpoint_name}
  */
  readonly endpointName?: string;
  /**
  * Set of entitlements associated with the role. Entitlements dictate user (role assignee) responsibility in managing an application. To add entitlements, include them in the set; to remove entitlements, exclude them from the set. Each entitlement requires 'entitlement_value', 'entitlement_type', and 'endpoint'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#entitlements EnterpriseRolesResource#entitlements}
  */
  readonly entitlements?: EnterpriseRolesResourceEntitlements[] | cdktf.IResolvable;
  /**
  * Displays the Glossary about the role. This provides additional context and definitions related to the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#glossary EnterpriseRolesResource#glossary}
  */
  readonly glossary?: string;
  /**
  * Enter the hierarchy level of this role. This defines the role's position in the organizational hierarchy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#level EnterpriseRolesResource#level}
  */
  readonly level?: string;
  /**
  * Set of role owners with their respective ranks. Each owner must have 'owner_name' (valid Saviynt username) and 'rank' (1-27, where 1 is highest priority). The same owner can have up to 5 different ranks. To add owners, include them in the set; to remove owners, exclude them from the set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#owners EnterpriseRolesResource#owners}
  */
  readonly owners?: EnterpriseRolesResourceOwners[] | cdktf.IResolvable;
  /**
  * Select the privileged criticality of the role which describes privileges assigned to the role and amount of risk to provide access to this role. Valid options: 'None', 'Very Low', 'Low', 'Medium', 'High', 'Critical'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#privileged EnterpriseRolesResource#privileged}
  */
  readonly privileged?: string;
  /**
  * Specify if you want the users to request for the role. Valid options: 'true' (makes the role requestable), 'false' (makes the role non-requestable). Defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#requestable EnterpriseRolesResource#requestable}
  */
  readonly requestable?: string;
  /**
  * Username of the person requesting the role creation. This should be a valid Saviynt user who has permissions to create roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#requestor EnterpriseRolesResource#requestor}
  */
  readonly requestor: string;
  /**
  * Displays the risk level specified for the role required during the separation of duties based on the roles. Valid options: 'None', 'Very Low', 'Low', 'Medium', 'High', 'Critical'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#risk EnterpriseRolesResource#risk}
  */
  readonly risk?: string;
  /**
  * Unique name of the role. This will be used as the identifier for the role in Saviynt and must be unique across all roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#role_name EnterpriseRolesResource#role_name}
  */
  readonly roleName: string;
  /**
  * Type of the role. Valid values: 'ENABLER', 'TRANSACTIONAL', 'FIREFIGHTER', 'ENTERPRISE', 'APPLICATION', 'ENTITLEMENT'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#role_type EnterpriseRolesResource#role_type}
  */
  readonly roleType: string;
  /**
  * Displays the dynamic attributes associated with the role. For example, there is a Dynamic Attribute A, which is Boolean set as true and false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#show_dynamic_attrs EnterpriseRolesResource#show_dynamic_attrs}
  */
  readonly showDynamicAttrs?: string;
  /**
  * Select the SOX criticality of the role. Valid options: 'None', 'Very Low', 'Low', 'Medium', 'High', 'Critical'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#sox_critical EnterpriseRolesResource#sox_critical}
  */
  readonly soxCritical?: string;
  /**
  * Select the SYS criticality of the role. Valid options: 'None', 'Very Low', 'Low', 'Medium', 'High', 'Critical'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#sys_critical EnterpriseRolesResource#sys_critical}
  */
  readonly sysCritical?: string;
  /**
  * Set of users assigned to the role. To add users to the role, include them in the set; to remove users from the role, exclude them from the set. Each user requires 'user_name' (valid Saviynt username). When users are assigned to a role, they inherit all entitlements and permissions associated with that role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#users EnterpriseRolesResource#users}
  */
  readonly users?: EnterpriseRolesResourceUsers[] | cdktf.IResolvable;
}
export interface EnterpriseRolesResourceChildRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#role_name EnterpriseRolesResource#role_name}
  */
  readonly roleName?: string;
}

export function enterpriseRolesResourceChildRolesToTerraform(struct?: EnterpriseRolesResourceChildRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_name: cdktf.stringToTerraform(struct!.roleName),
  }
}


export function enterpriseRolesResourceChildRolesToHclTerraform(struct?: EnterpriseRolesResourceChildRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnterpriseRolesResourceChildRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnterpriseRolesResourceChildRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseRolesResourceChildRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleName = value.roleName;
    }
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }
}

export class EnterpriseRolesResourceChildRolesList extends cdktf.ComplexList {
  public internalValue? : EnterpriseRolesResourceChildRoles[] | cdktf.IResolvable

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
  public get(index: number): EnterpriseRolesResourceChildRolesOutputReference {
    return new EnterpriseRolesResourceChildRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnterpriseRolesResourceEntitlements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#endpoint EnterpriseRolesResource#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#entitlement_type EnterpriseRolesResource#entitlement_type}
  */
  readonly entitlementType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#entitlement_value EnterpriseRolesResource#entitlement_value}
  */
  readonly entitlementValue?: string;
}

export function enterpriseRolesResourceEntitlementsToTerraform(struct?: EnterpriseRolesResourceEntitlements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    entitlement_type: cdktf.stringToTerraform(struct!.entitlementType),
    entitlement_value: cdktf.stringToTerraform(struct!.entitlementValue),
  }
}


export function enterpriseRolesResourceEntitlementsToHclTerraform(struct?: EnterpriseRolesResourceEntitlements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entitlement_type: {
      value: cdktf.stringToHclTerraform(struct!.entitlementType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entitlement_value: {
      value: cdktf.stringToHclTerraform(struct!.entitlementValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnterpriseRolesResourceEntitlementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnterpriseRolesResourceEntitlements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._entitlementType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitlementType = this._entitlementType;
    }
    if (this._entitlementValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitlementValue = this._entitlementValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseRolesResourceEntitlements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._entitlementType = undefined;
      this._entitlementValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._entitlementType = value.entitlementType;
      this._entitlementValue = value.entitlementValue;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // entitlement_type - computed: false, optional: true, required: false
  private _entitlementType?: string; 
  public get entitlementType() {
    return this.getStringAttribute('entitlement_type');
  }
  public set entitlementType(value: string) {
    this._entitlementType = value;
  }
  public resetEntitlementType() {
    this._entitlementType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementTypeInput() {
    return this._entitlementType;
  }

  // entitlement_value - computed: false, optional: true, required: false
  private _entitlementValue?: string; 
  public get entitlementValue() {
    return this.getStringAttribute('entitlement_value');
  }
  public set entitlementValue(value: string) {
    this._entitlementValue = value;
  }
  public resetEntitlementValue() {
    this._entitlementValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementValueInput() {
    return this._entitlementValue;
  }
}

export class EnterpriseRolesResourceEntitlementsList extends cdktf.ComplexList {
  public internalValue? : EnterpriseRolesResourceEntitlements[] | cdktf.IResolvable

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
  public get(index: number): EnterpriseRolesResourceEntitlementsOutputReference {
    return new EnterpriseRolesResourceEntitlementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnterpriseRolesResourceOwners {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#owner_name EnterpriseRolesResource#owner_name}
  */
  readonly ownerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#rank EnterpriseRolesResource#rank}
  */
  readonly rank?: string;
}

export function enterpriseRolesResourceOwnersToTerraform(struct?: EnterpriseRolesResourceOwners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owner_name: cdktf.stringToTerraform(struct!.ownerName),
    rank: cdktf.stringToTerraform(struct!.rank),
  }
}


export function enterpriseRolesResourceOwnersToHclTerraform(struct?: EnterpriseRolesResourceOwners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    owner_name: {
      value: cdktf.stringToHclTerraform(struct!.ownerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rank: {
      value: cdktf.stringToHclTerraform(struct!.rank),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnterpriseRolesResourceOwnersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnterpriseRolesResourceOwners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerName = this._ownerName;
    }
    if (this._rank !== undefined) {
      hasAnyValues = true;
      internalValueResult.rank = this._rank;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseRolesResourceOwners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ownerName = undefined;
      this._rank = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ownerName = value.ownerName;
      this._rank = value.rank;
    }
  }

  // owner_name - computed: false, optional: true, required: false
  private _ownerName?: string; 
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }
  public resetOwnerName() {
    this._ownerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerNameInput() {
    return this._ownerName;
  }

  // rank - computed: false, optional: true, required: false
  private _rank?: string; 
  public get rank() {
    return this.getStringAttribute('rank');
  }
  public set rank(value: string) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }
}

export class EnterpriseRolesResourceOwnersList extends cdktf.ComplexList {
  public internalValue? : EnterpriseRolesResourceOwners[] | cdktf.IResolvable

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
  public get(index: number): EnterpriseRolesResourceOwnersOutputReference {
    return new EnterpriseRolesResourceOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnterpriseRolesResourceUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#user_name EnterpriseRolesResource#user_name}
  */
  readonly userName?: string;
}

export function enterpriseRolesResourceUsersToTerraform(struct?: EnterpriseRolesResourceUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function enterpriseRolesResourceUsersToHclTerraform(struct?: EnterpriseRolesResourceUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnterpriseRolesResourceUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnterpriseRolesResourceUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseRolesResourceUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userName = value.userName;
    }
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class EnterpriseRolesResourceUsersList extends cdktf.ComplexList {
  public internalValue? : EnterpriseRolesResourceUsers[] | cdktf.IResolvable

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
  public get(index: number): EnterpriseRolesResourceUsersOutputReference {
    return new EnterpriseRolesResourceUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource saviynt_enterprise_roles_resource}
*/
export class EnterpriseRolesResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_enterprise_roles_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnterpriseRolesResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnterpriseRolesResource to import
  * @param importFromId The id of the existing EnterpriseRolesResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnterpriseRolesResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_enterprise_roles_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/enterprise_roles_resource saviynt_enterprise_roles_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnterpriseRolesResourceConfig
  */
  public constructor(scope: Construct, id: string, config: EnterpriseRolesResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_enterprise_roles_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.0',
        providerVersionConstraint: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkSod = config.checkSod;
    this._childRoles.internalValue = config.childRoles;
    this._confidentiality = config.confidentiality;
    this._customProperty1 = config.customProperty1;
    this._customProperty10 = config.customProperty10;
    this._customProperty11 = config.customProperty11;
    this._customProperty12 = config.customProperty12;
    this._customProperty13 = config.customProperty13;
    this._customProperty14 = config.customProperty14;
    this._customProperty15 = config.customProperty15;
    this._customProperty16 = config.customProperty16;
    this._customProperty17 = config.customProperty17;
    this._customProperty18 = config.customProperty18;
    this._customProperty19 = config.customProperty19;
    this._customProperty2 = config.customProperty2;
    this._customProperty20 = config.customProperty20;
    this._customProperty21 = config.customProperty21;
    this._customProperty22 = config.customProperty22;
    this._customProperty23 = config.customProperty23;
    this._customProperty24 = config.customProperty24;
    this._customProperty25 = config.customProperty25;
    this._customProperty26 = config.customProperty26;
    this._customProperty27 = config.customProperty27;
    this._customProperty28 = config.customProperty28;
    this._customProperty29 = config.customProperty29;
    this._customProperty3 = config.customProperty3;
    this._customProperty30 = config.customProperty30;
    this._customProperty31 = config.customProperty31;
    this._customProperty32 = config.customProperty32;
    this._customProperty33 = config.customProperty33;
    this._customProperty34 = config.customProperty34;
    this._customProperty35 = config.customProperty35;
    this._customProperty36 = config.customProperty36;
    this._customProperty37 = config.customProperty37;
    this._customProperty38 = config.customProperty38;
    this._customProperty39 = config.customProperty39;
    this._customProperty4 = config.customProperty4;
    this._customProperty40 = config.customProperty40;
    this._customProperty41 = config.customProperty41;
    this._customProperty42 = config.customProperty42;
    this._customProperty43 = config.customProperty43;
    this._customProperty44 = config.customProperty44;
    this._customProperty45 = config.customProperty45;
    this._customProperty46 = config.customProperty46;
    this._customProperty47 = config.customProperty47;
    this._customProperty48 = config.customProperty48;
    this._customProperty49 = config.customProperty49;
    this._customProperty5 = config.customProperty5;
    this._customProperty50 = config.customProperty50;
    this._customProperty51 = config.customProperty51;
    this._customProperty52 = config.customProperty52;
    this._customProperty53 = config.customProperty53;
    this._customProperty54 = config.customProperty54;
    this._customProperty55 = config.customProperty55;
    this._customProperty56 = config.customProperty56;
    this._customProperty57 = config.customProperty57;
    this._customProperty58 = config.customProperty58;
    this._customProperty59 = config.customProperty59;
    this._customProperty6 = config.customProperty6;
    this._customProperty60 = config.customProperty60;
    this._customProperty7 = config.customProperty7;
    this._customProperty8 = config.customProperty8;
    this._customProperty9 = config.customProperty9;
    this._defaultTimeFrame = config.defaultTimeFrame;
    this._description = config.description;
    this._displayName = config.displayName;
    this._endpointName = config.endpointName;
    this._entitlements.internalValue = config.entitlements;
    this._glossary = config.glossary;
    this._level = config.level;
    this._owners.internalValue = config.owners;
    this._privileged = config.privileged;
    this._requestable = config.requestable;
    this._requestor = config.requestor;
    this._risk = config.risk;
    this._roleName = config.roleName;
    this._roleType = config.roleType;
    this._showDynamicAttrs = config.showDynamicAttrs;
    this._soxCritical = config.soxCritical;
    this._sysCritical = config.sysCritical;
    this._users.internalValue = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_sod - computed: false, optional: true, required: false
  private _checkSod?: string; 
  public get checkSod() {
    return this.getStringAttribute('check_sod');
  }
  public set checkSod(value: string) {
    this._checkSod = value;
  }
  public resetCheckSod() {
    this._checkSod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkSodInput() {
    return this._checkSod;
  }

  // child_roles - computed: false, optional: true, required: false
  private _childRoles = new EnterpriseRolesResourceChildRolesList(this, "child_roles", true);
  public get childRoles() {
    return this._childRoles;
  }
  public putChildRoles(value: EnterpriseRolesResourceChildRoles[] | cdktf.IResolvable) {
    this._childRoles.internalValue = value;
  }
  public resetChildRoles() {
    this._childRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childRolesInput() {
    return this._childRoles.internalValue;
  }

  // confidentiality - computed: true, optional: true, required: false
  private _confidentiality?: string; 
  public get confidentiality() {
    return this.getStringAttribute('confidentiality');
  }
  public set confidentiality(value: string) {
    this._confidentiality = value;
  }
  public resetConfidentiality() {
    this._confidentiality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialityInput() {
    return this._confidentiality;
  }

  // custom_property1 - computed: true, optional: true, required: false
  private _customProperty1?: string; 
  public get customProperty1() {
    return this.getStringAttribute('custom_property1');
  }
  public set customProperty1(value: string) {
    this._customProperty1 = value;
  }
  public resetCustomProperty1() {
    this._customProperty1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty1Input() {
    return this._customProperty1;
  }

  // custom_property10 - computed: true, optional: true, required: false
  private _customProperty10?: string; 
  public get customProperty10() {
    return this.getStringAttribute('custom_property10');
  }
  public set customProperty10(value: string) {
    this._customProperty10 = value;
  }
  public resetCustomProperty10() {
    this._customProperty10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty10Input() {
    return this._customProperty10;
  }

  // custom_property11 - computed: true, optional: true, required: false
  private _customProperty11?: string; 
  public get customProperty11() {
    return this.getStringAttribute('custom_property11');
  }
  public set customProperty11(value: string) {
    this._customProperty11 = value;
  }
  public resetCustomProperty11() {
    this._customProperty11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty11Input() {
    return this._customProperty11;
  }

  // custom_property12 - computed: true, optional: true, required: false
  private _customProperty12?: string; 
  public get customProperty12() {
    return this.getStringAttribute('custom_property12');
  }
  public set customProperty12(value: string) {
    this._customProperty12 = value;
  }
  public resetCustomProperty12() {
    this._customProperty12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty12Input() {
    return this._customProperty12;
  }

  // custom_property13 - computed: true, optional: true, required: false
  private _customProperty13?: string; 
  public get customProperty13() {
    return this.getStringAttribute('custom_property13');
  }
  public set customProperty13(value: string) {
    this._customProperty13 = value;
  }
  public resetCustomProperty13() {
    this._customProperty13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty13Input() {
    return this._customProperty13;
  }

  // custom_property14 - computed: true, optional: true, required: false
  private _customProperty14?: string; 
  public get customProperty14() {
    return this.getStringAttribute('custom_property14');
  }
  public set customProperty14(value: string) {
    this._customProperty14 = value;
  }
  public resetCustomProperty14() {
    this._customProperty14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty14Input() {
    return this._customProperty14;
  }

  // custom_property15 - computed: true, optional: true, required: false
  private _customProperty15?: string; 
  public get customProperty15() {
    return this.getStringAttribute('custom_property15');
  }
  public set customProperty15(value: string) {
    this._customProperty15 = value;
  }
  public resetCustomProperty15() {
    this._customProperty15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty15Input() {
    return this._customProperty15;
  }

  // custom_property16 - computed: true, optional: true, required: false
  private _customProperty16?: string; 
  public get customProperty16() {
    return this.getStringAttribute('custom_property16');
  }
  public set customProperty16(value: string) {
    this._customProperty16 = value;
  }
  public resetCustomProperty16() {
    this._customProperty16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty16Input() {
    return this._customProperty16;
  }

  // custom_property17 - computed: true, optional: true, required: false
  private _customProperty17?: string; 
  public get customProperty17() {
    return this.getStringAttribute('custom_property17');
  }
  public set customProperty17(value: string) {
    this._customProperty17 = value;
  }
  public resetCustomProperty17() {
    this._customProperty17 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty17Input() {
    return this._customProperty17;
  }

  // custom_property18 - computed: true, optional: true, required: false
  private _customProperty18?: string; 
  public get customProperty18() {
    return this.getStringAttribute('custom_property18');
  }
  public set customProperty18(value: string) {
    this._customProperty18 = value;
  }
  public resetCustomProperty18() {
    this._customProperty18 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty18Input() {
    return this._customProperty18;
  }

  // custom_property19 - computed: true, optional: true, required: false
  private _customProperty19?: string; 
  public get customProperty19() {
    return this.getStringAttribute('custom_property19');
  }
  public set customProperty19(value: string) {
    this._customProperty19 = value;
  }
  public resetCustomProperty19() {
    this._customProperty19 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty19Input() {
    return this._customProperty19;
  }

  // custom_property2 - computed: true, optional: true, required: false
  private _customProperty2?: string; 
  public get customProperty2() {
    return this.getStringAttribute('custom_property2');
  }
  public set customProperty2(value: string) {
    this._customProperty2 = value;
  }
  public resetCustomProperty2() {
    this._customProperty2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty2Input() {
    return this._customProperty2;
  }

  // custom_property20 - computed: true, optional: true, required: false
  private _customProperty20?: string; 
  public get customProperty20() {
    return this.getStringAttribute('custom_property20');
  }
  public set customProperty20(value: string) {
    this._customProperty20 = value;
  }
  public resetCustomProperty20() {
    this._customProperty20 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty20Input() {
    return this._customProperty20;
  }

  // custom_property21 - computed: true, optional: true, required: false
  private _customProperty21?: string; 
  public get customProperty21() {
    return this.getStringAttribute('custom_property21');
  }
  public set customProperty21(value: string) {
    this._customProperty21 = value;
  }
  public resetCustomProperty21() {
    this._customProperty21 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty21Input() {
    return this._customProperty21;
  }

  // custom_property22 - computed: true, optional: true, required: false
  private _customProperty22?: string; 
  public get customProperty22() {
    return this.getStringAttribute('custom_property22');
  }
  public set customProperty22(value: string) {
    this._customProperty22 = value;
  }
  public resetCustomProperty22() {
    this._customProperty22 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty22Input() {
    return this._customProperty22;
  }

  // custom_property23 - computed: true, optional: true, required: false
  private _customProperty23?: string; 
  public get customProperty23() {
    return this.getStringAttribute('custom_property23');
  }
  public set customProperty23(value: string) {
    this._customProperty23 = value;
  }
  public resetCustomProperty23() {
    this._customProperty23 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty23Input() {
    return this._customProperty23;
  }

  // custom_property24 - computed: true, optional: true, required: false
  private _customProperty24?: string; 
  public get customProperty24() {
    return this.getStringAttribute('custom_property24');
  }
  public set customProperty24(value: string) {
    this._customProperty24 = value;
  }
  public resetCustomProperty24() {
    this._customProperty24 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty24Input() {
    return this._customProperty24;
  }

  // custom_property25 - computed: true, optional: true, required: false
  private _customProperty25?: string; 
  public get customProperty25() {
    return this.getStringAttribute('custom_property25');
  }
  public set customProperty25(value: string) {
    this._customProperty25 = value;
  }
  public resetCustomProperty25() {
    this._customProperty25 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty25Input() {
    return this._customProperty25;
  }

  // custom_property26 - computed: true, optional: true, required: false
  private _customProperty26?: string; 
  public get customProperty26() {
    return this.getStringAttribute('custom_property26');
  }
  public set customProperty26(value: string) {
    this._customProperty26 = value;
  }
  public resetCustomProperty26() {
    this._customProperty26 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty26Input() {
    return this._customProperty26;
  }

  // custom_property27 - computed: true, optional: true, required: false
  private _customProperty27?: string; 
  public get customProperty27() {
    return this.getStringAttribute('custom_property27');
  }
  public set customProperty27(value: string) {
    this._customProperty27 = value;
  }
  public resetCustomProperty27() {
    this._customProperty27 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty27Input() {
    return this._customProperty27;
  }

  // custom_property28 - computed: true, optional: true, required: false
  private _customProperty28?: string; 
  public get customProperty28() {
    return this.getStringAttribute('custom_property28');
  }
  public set customProperty28(value: string) {
    this._customProperty28 = value;
  }
  public resetCustomProperty28() {
    this._customProperty28 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty28Input() {
    return this._customProperty28;
  }

  // custom_property29 - computed: true, optional: true, required: false
  private _customProperty29?: string; 
  public get customProperty29() {
    return this.getStringAttribute('custom_property29');
  }
  public set customProperty29(value: string) {
    this._customProperty29 = value;
  }
  public resetCustomProperty29() {
    this._customProperty29 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty29Input() {
    return this._customProperty29;
  }

  // custom_property3 - computed: true, optional: true, required: false
  private _customProperty3?: string; 
  public get customProperty3() {
    return this.getStringAttribute('custom_property3');
  }
  public set customProperty3(value: string) {
    this._customProperty3 = value;
  }
  public resetCustomProperty3() {
    this._customProperty3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty3Input() {
    return this._customProperty3;
  }

  // custom_property30 - computed: true, optional: true, required: false
  private _customProperty30?: string; 
  public get customProperty30() {
    return this.getStringAttribute('custom_property30');
  }
  public set customProperty30(value: string) {
    this._customProperty30 = value;
  }
  public resetCustomProperty30() {
    this._customProperty30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty30Input() {
    return this._customProperty30;
  }

  // custom_property31 - computed: true, optional: true, required: false
  private _customProperty31?: string; 
  public get customProperty31() {
    return this.getStringAttribute('custom_property31');
  }
  public set customProperty31(value: string) {
    this._customProperty31 = value;
  }
  public resetCustomProperty31() {
    this._customProperty31 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty31Input() {
    return this._customProperty31;
  }

  // custom_property32 - computed: true, optional: true, required: false
  private _customProperty32?: string; 
  public get customProperty32() {
    return this.getStringAttribute('custom_property32');
  }
  public set customProperty32(value: string) {
    this._customProperty32 = value;
  }
  public resetCustomProperty32() {
    this._customProperty32 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty32Input() {
    return this._customProperty32;
  }

  // custom_property33 - computed: true, optional: true, required: false
  private _customProperty33?: string; 
  public get customProperty33() {
    return this.getStringAttribute('custom_property33');
  }
  public set customProperty33(value: string) {
    this._customProperty33 = value;
  }
  public resetCustomProperty33() {
    this._customProperty33 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty33Input() {
    return this._customProperty33;
  }

  // custom_property34 - computed: true, optional: true, required: false
  private _customProperty34?: string; 
  public get customProperty34() {
    return this.getStringAttribute('custom_property34');
  }
  public set customProperty34(value: string) {
    this._customProperty34 = value;
  }
  public resetCustomProperty34() {
    this._customProperty34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty34Input() {
    return this._customProperty34;
  }

  // custom_property35 - computed: true, optional: true, required: false
  private _customProperty35?: string; 
  public get customProperty35() {
    return this.getStringAttribute('custom_property35');
  }
  public set customProperty35(value: string) {
    this._customProperty35 = value;
  }
  public resetCustomProperty35() {
    this._customProperty35 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty35Input() {
    return this._customProperty35;
  }

  // custom_property36 - computed: true, optional: true, required: false
  private _customProperty36?: string; 
  public get customProperty36() {
    return this.getStringAttribute('custom_property36');
  }
  public set customProperty36(value: string) {
    this._customProperty36 = value;
  }
  public resetCustomProperty36() {
    this._customProperty36 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty36Input() {
    return this._customProperty36;
  }

  // custom_property37 - computed: true, optional: true, required: false
  private _customProperty37?: string; 
  public get customProperty37() {
    return this.getStringAttribute('custom_property37');
  }
  public set customProperty37(value: string) {
    this._customProperty37 = value;
  }
  public resetCustomProperty37() {
    this._customProperty37 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty37Input() {
    return this._customProperty37;
  }

  // custom_property38 - computed: true, optional: true, required: false
  private _customProperty38?: string; 
  public get customProperty38() {
    return this.getStringAttribute('custom_property38');
  }
  public set customProperty38(value: string) {
    this._customProperty38 = value;
  }
  public resetCustomProperty38() {
    this._customProperty38 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty38Input() {
    return this._customProperty38;
  }

  // custom_property39 - computed: true, optional: true, required: false
  private _customProperty39?: string; 
  public get customProperty39() {
    return this.getStringAttribute('custom_property39');
  }
  public set customProperty39(value: string) {
    this._customProperty39 = value;
  }
  public resetCustomProperty39() {
    this._customProperty39 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty39Input() {
    return this._customProperty39;
  }

  // custom_property4 - computed: true, optional: true, required: false
  private _customProperty4?: string; 
  public get customProperty4() {
    return this.getStringAttribute('custom_property4');
  }
  public set customProperty4(value: string) {
    this._customProperty4 = value;
  }
  public resetCustomProperty4() {
    this._customProperty4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty4Input() {
    return this._customProperty4;
  }

  // custom_property40 - computed: true, optional: true, required: false
  private _customProperty40?: string; 
  public get customProperty40() {
    return this.getStringAttribute('custom_property40');
  }
  public set customProperty40(value: string) {
    this._customProperty40 = value;
  }
  public resetCustomProperty40() {
    this._customProperty40 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty40Input() {
    return this._customProperty40;
  }

  // custom_property41 - computed: true, optional: true, required: false
  private _customProperty41?: string; 
  public get customProperty41() {
    return this.getStringAttribute('custom_property41');
  }
  public set customProperty41(value: string) {
    this._customProperty41 = value;
  }
  public resetCustomProperty41() {
    this._customProperty41 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty41Input() {
    return this._customProperty41;
  }

  // custom_property42 - computed: true, optional: true, required: false
  private _customProperty42?: string; 
  public get customProperty42() {
    return this.getStringAttribute('custom_property42');
  }
  public set customProperty42(value: string) {
    this._customProperty42 = value;
  }
  public resetCustomProperty42() {
    this._customProperty42 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty42Input() {
    return this._customProperty42;
  }

  // custom_property43 - computed: true, optional: true, required: false
  private _customProperty43?: string; 
  public get customProperty43() {
    return this.getStringAttribute('custom_property43');
  }
  public set customProperty43(value: string) {
    this._customProperty43 = value;
  }
  public resetCustomProperty43() {
    this._customProperty43 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty43Input() {
    return this._customProperty43;
  }

  // custom_property44 - computed: true, optional: true, required: false
  private _customProperty44?: string; 
  public get customProperty44() {
    return this.getStringAttribute('custom_property44');
  }
  public set customProperty44(value: string) {
    this._customProperty44 = value;
  }
  public resetCustomProperty44() {
    this._customProperty44 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty44Input() {
    return this._customProperty44;
  }

  // custom_property45 - computed: true, optional: true, required: false
  private _customProperty45?: string; 
  public get customProperty45() {
    return this.getStringAttribute('custom_property45');
  }
  public set customProperty45(value: string) {
    this._customProperty45 = value;
  }
  public resetCustomProperty45() {
    this._customProperty45 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty45Input() {
    return this._customProperty45;
  }

  // custom_property46 - computed: true, optional: true, required: false
  private _customProperty46?: string; 
  public get customProperty46() {
    return this.getStringAttribute('custom_property46');
  }
  public set customProperty46(value: string) {
    this._customProperty46 = value;
  }
  public resetCustomProperty46() {
    this._customProperty46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty46Input() {
    return this._customProperty46;
  }

  // custom_property47 - computed: true, optional: true, required: false
  private _customProperty47?: string; 
  public get customProperty47() {
    return this.getStringAttribute('custom_property47');
  }
  public set customProperty47(value: string) {
    this._customProperty47 = value;
  }
  public resetCustomProperty47() {
    this._customProperty47 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty47Input() {
    return this._customProperty47;
  }

  // custom_property48 - computed: true, optional: true, required: false
  private _customProperty48?: string; 
  public get customProperty48() {
    return this.getStringAttribute('custom_property48');
  }
  public set customProperty48(value: string) {
    this._customProperty48 = value;
  }
  public resetCustomProperty48() {
    this._customProperty48 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty48Input() {
    return this._customProperty48;
  }

  // custom_property49 - computed: true, optional: true, required: false
  private _customProperty49?: string; 
  public get customProperty49() {
    return this.getStringAttribute('custom_property49');
  }
  public set customProperty49(value: string) {
    this._customProperty49 = value;
  }
  public resetCustomProperty49() {
    this._customProperty49 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty49Input() {
    return this._customProperty49;
  }

  // custom_property5 - computed: true, optional: true, required: false
  private _customProperty5?: string; 
  public get customProperty5() {
    return this.getStringAttribute('custom_property5');
  }
  public set customProperty5(value: string) {
    this._customProperty5 = value;
  }
  public resetCustomProperty5() {
    this._customProperty5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty5Input() {
    return this._customProperty5;
  }

  // custom_property50 - computed: true, optional: true, required: false
  private _customProperty50?: string; 
  public get customProperty50() {
    return this.getStringAttribute('custom_property50');
  }
  public set customProperty50(value: string) {
    this._customProperty50 = value;
  }
  public resetCustomProperty50() {
    this._customProperty50 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty50Input() {
    return this._customProperty50;
  }

  // custom_property51 - computed: true, optional: true, required: false
  private _customProperty51?: string; 
  public get customProperty51() {
    return this.getStringAttribute('custom_property51');
  }
  public set customProperty51(value: string) {
    this._customProperty51 = value;
  }
  public resetCustomProperty51() {
    this._customProperty51 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty51Input() {
    return this._customProperty51;
  }

  // custom_property52 - computed: true, optional: true, required: false
  private _customProperty52?: string; 
  public get customProperty52() {
    return this.getStringAttribute('custom_property52');
  }
  public set customProperty52(value: string) {
    this._customProperty52 = value;
  }
  public resetCustomProperty52() {
    this._customProperty52 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty52Input() {
    return this._customProperty52;
  }

  // custom_property53 - computed: true, optional: true, required: false
  private _customProperty53?: string; 
  public get customProperty53() {
    return this.getStringAttribute('custom_property53');
  }
  public set customProperty53(value: string) {
    this._customProperty53 = value;
  }
  public resetCustomProperty53() {
    this._customProperty53 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty53Input() {
    return this._customProperty53;
  }

  // custom_property54 - computed: true, optional: true, required: false
  private _customProperty54?: string; 
  public get customProperty54() {
    return this.getStringAttribute('custom_property54');
  }
  public set customProperty54(value: string) {
    this._customProperty54 = value;
  }
  public resetCustomProperty54() {
    this._customProperty54 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty54Input() {
    return this._customProperty54;
  }

  // custom_property55 - computed: true, optional: true, required: false
  private _customProperty55?: string; 
  public get customProperty55() {
    return this.getStringAttribute('custom_property55');
  }
  public set customProperty55(value: string) {
    this._customProperty55 = value;
  }
  public resetCustomProperty55() {
    this._customProperty55 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty55Input() {
    return this._customProperty55;
  }

  // custom_property56 - computed: true, optional: true, required: false
  private _customProperty56?: string; 
  public get customProperty56() {
    return this.getStringAttribute('custom_property56');
  }
  public set customProperty56(value: string) {
    this._customProperty56 = value;
  }
  public resetCustomProperty56() {
    this._customProperty56 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty56Input() {
    return this._customProperty56;
  }

  // custom_property57 - computed: true, optional: true, required: false
  private _customProperty57?: string; 
  public get customProperty57() {
    return this.getStringAttribute('custom_property57');
  }
  public set customProperty57(value: string) {
    this._customProperty57 = value;
  }
  public resetCustomProperty57() {
    this._customProperty57 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty57Input() {
    return this._customProperty57;
  }

  // custom_property58 - computed: true, optional: true, required: false
  private _customProperty58?: string; 
  public get customProperty58() {
    return this.getStringAttribute('custom_property58');
  }
  public set customProperty58(value: string) {
    this._customProperty58 = value;
  }
  public resetCustomProperty58() {
    this._customProperty58 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty58Input() {
    return this._customProperty58;
  }

  // custom_property59 - computed: true, optional: true, required: false
  private _customProperty59?: string; 
  public get customProperty59() {
    return this.getStringAttribute('custom_property59');
  }
  public set customProperty59(value: string) {
    this._customProperty59 = value;
  }
  public resetCustomProperty59() {
    this._customProperty59 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty59Input() {
    return this._customProperty59;
  }

  // custom_property6 - computed: true, optional: true, required: false
  private _customProperty6?: string; 
  public get customProperty6() {
    return this.getStringAttribute('custom_property6');
  }
  public set customProperty6(value: string) {
    this._customProperty6 = value;
  }
  public resetCustomProperty6() {
    this._customProperty6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty6Input() {
    return this._customProperty6;
  }

  // custom_property60 - computed: true, optional: true, required: false
  private _customProperty60?: string; 
  public get customProperty60() {
    return this.getStringAttribute('custom_property60');
  }
  public set customProperty60(value: string) {
    this._customProperty60 = value;
  }
  public resetCustomProperty60() {
    this._customProperty60 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty60Input() {
    return this._customProperty60;
  }

  // custom_property7 - computed: true, optional: true, required: false
  private _customProperty7?: string; 
  public get customProperty7() {
    return this.getStringAttribute('custom_property7');
  }
  public set customProperty7(value: string) {
    this._customProperty7 = value;
  }
  public resetCustomProperty7() {
    this._customProperty7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty7Input() {
    return this._customProperty7;
  }

  // custom_property8 - computed: true, optional: true, required: false
  private _customProperty8?: string; 
  public get customProperty8() {
    return this.getStringAttribute('custom_property8');
  }
  public set customProperty8(value: string) {
    this._customProperty8 = value;
  }
  public resetCustomProperty8() {
    this._customProperty8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty8Input() {
    return this._customProperty8;
  }

  // custom_property9 - computed: true, optional: true, required: false
  private _customProperty9?: string; 
  public get customProperty9() {
    return this.getStringAttribute('custom_property9');
  }
  public set customProperty9(value: string) {
    this._customProperty9 = value;
  }
  public resetCustomProperty9() {
    this._customProperty9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProperty9Input() {
    return this._customProperty9;
  }

  // default_time_frame - computed: true, optional: true, required: false
  private _defaultTimeFrame?: string; 
  public get defaultTimeFrame() {
    return this.getStringAttribute('default_time_frame');
  }
  public set defaultTimeFrame(value: string) {
    this._defaultTimeFrame = value;
  }
  public resetDefaultTimeFrame() {
    this._defaultTimeFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeFrameInput() {
    return this._defaultTimeFrame;
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // endpoint_name - computed: true, optional: true, required: false
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  public resetEndpointName() {
    this._endpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // entitlements - computed: false, optional: true, required: false
  private _entitlements = new EnterpriseRolesResourceEntitlementsList(this, "entitlements", true);
  public get entitlements() {
    return this._entitlements;
  }
  public putEntitlements(value: EnterpriseRolesResourceEntitlements[] | cdktf.IResolvable) {
    this._entitlements.internalValue = value;
  }
  public resetEntitlements() {
    this._entitlements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementsInput() {
    return this._entitlements.internalValue;
  }

  // glossary - computed: true, optional: true, required: false
  private _glossary?: string; 
  public get glossary() {
    return this.getStringAttribute('glossary');
  }
  public set glossary(value: string) {
    this._glossary = value;
  }
  public resetGlossary() {
    this._glossary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glossaryInput() {
    return this._glossary;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // owners - computed: false, optional: true, required: false
  private _owners = new EnterpriseRolesResourceOwnersList(this, "owners", true);
  public get owners() {
    return this._owners;
  }
  public putOwners(value: EnterpriseRolesResourceOwners[] | cdktf.IResolvable) {
    this._owners.internalValue = value;
  }
  public resetOwners() {
    this._owners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners.internalValue;
  }

  // privileged - computed: true, optional: true, required: false
  private _privileged?: string; 
  public get privileged() {
    return this.getStringAttribute('privileged');
  }
  public set privileged(value: string) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // requestable - computed: true, optional: true, required: false
  private _requestable?: string; 
  public get requestable() {
    return this.getStringAttribute('requestable');
  }
  public set requestable(value: string) {
    this._requestable = value;
  }
  public resetRequestable() {
    this._requestable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestableInput() {
    return this._requestable;
  }

  // requestor - computed: false, optional: false, required: true
  private _requestor?: string; 
  public get requestor() {
    return this.getStringAttribute('requestor');
  }
  public set requestor(value: string) {
    this._requestor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestorInput() {
    return this._requestor;
  }

  // risk - computed: true, optional: true, required: false
  private _risk?: string; 
  public get risk() {
    return this.getStringAttribute('risk');
  }
  public set risk(value: string) {
    this._risk = value;
  }
  public resetRisk() {
    this._risk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk;
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // role_type - computed: false, optional: false, required: true
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }

  // show_dynamic_attrs - computed: true, optional: true, required: false
  private _showDynamicAttrs?: string; 
  public get showDynamicAttrs() {
    return this.getStringAttribute('show_dynamic_attrs');
  }
  public set showDynamicAttrs(value: string) {
    this._showDynamicAttrs = value;
  }
  public resetShowDynamicAttrs() {
    this._showDynamicAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDynamicAttrsInput() {
    return this._showDynamicAttrs;
  }

  // sox_critical - computed: true, optional: true, required: false
  private _soxCritical?: string; 
  public get soxCritical() {
    return this.getStringAttribute('sox_critical');
  }
  public set soxCritical(value: string) {
    this._soxCritical = value;
  }
  public resetSoxCritical() {
    this._soxCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soxCriticalInput() {
    return this._soxCritical;
  }

  // sys_critical - computed: true, optional: true, required: false
  private _sysCritical?: string; 
  public get sysCritical() {
    return this.getStringAttribute('sys_critical');
  }
  public set sysCritical(value: string) {
    this._sysCritical = value;
  }
  public resetSysCritical() {
    this._sysCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysCriticalInput() {
    return this._sysCritical;
  }

  // users - computed: false, optional: true, required: false
  private _users = new EnterpriseRolesResourceUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
  public putUsers(value: EnterpriseRolesResourceUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_sod: cdktf.stringToTerraform(this._checkSod),
      child_roles: cdktf.listMapper(enterpriseRolesResourceChildRolesToTerraform, false)(this._childRoles.internalValue),
      confidentiality: cdktf.stringToTerraform(this._confidentiality),
      custom_property1: cdktf.stringToTerraform(this._customProperty1),
      custom_property10: cdktf.stringToTerraform(this._customProperty10),
      custom_property11: cdktf.stringToTerraform(this._customProperty11),
      custom_property12: cdktf.stringToTerraform(this._customProperty12),
      custom_property13: cdktf.stringToTerraform(this._customProperty13),
      custom_property14: cdktf.stringToTerraform(this._customProperty14),
      custom_property15: cdktf.stringToTerraform(this._customProperty15),
      custom_property16: cdktf.stringToTerraform(this._customProperty16),
      custom_property17: cdktf.stringToTerraform(this._customProperty17),
      custom_property18: cdktf.stringToTerraform(this._customProperty18),
      custom_property19: cdktf.stringToTerraform(this._customProperty19),
      custom_property2: cdktf.stringToTerraform(this._customProperty2),
      custom_property20: cdktf.stringToTerraform(this._customProperty20),
      custom_property21: cdktf.stringToTerraform(this._customProperty21),
      custom_property22: cdktf.stringToTerraform(this._customProperty22),
      custom_property23: cdktf.stringToTerraform(this._customProperty23),
      custom_property24: cdktf.stringToTerraform(this._customProperty24),
      custom_property25: cdktf.stringToTerraform(this._customProperty25),
      custom_property26: cdktf.stringToTerraform(this._customProperty26),
      custom_property27: cdktf.stringToTerraform(this._customProperty27),
      custom_property28: cdktf.stringToTerraform(this._customProperty28),
      custom_property29: cdktf.stringToTerraform(this._customProperty29),
      custom_property3: cdktf.stringToTerraform(this._customProperty3),
      custom_property30: cdktf.stringToTerraform(this._customProperty30),
      custom_property31: cdktf.stringToTerraform(this._customProperty31),
      custom_property32: cdktf.stringToTerraform(this._customProperty32),
      custom_property33: cdktf.stringToTerraform(this._customProperty33),
      custom_property34: cdktf.stringToTerraform(this._customProperty34),
      custom_property35: cdktf.stringToTerraform(this._customProperty35),
      custom_property36: cdktf.stringToTerraform(this._customProperty36),
      custom_property37: cdktf.stringToTerraform(this._customProperty37),
      custom_property38: cdktf.stringToTerraform(this._customProperty38),
      custom_property39: cdktf.stringToTerraform(this._customProperty39),
      custom_property4: cdktf.stringToTerraform(this._customProperty4),
      custom_property40: cdktf.stringToTerraform(this._customProperty40),
      custom_property41: cdktf.stringToTerraform(this._customProperty41),
      custom_property42: cdktf.stringToTerraform(this._customProperty42),
      custom_property43: cdktf.stringToTerraform(this._customProperty43),
      custom_property44: cdktf.stringToTerraform(this._customProperty44),
      custom_property45: cdktf.stringToTerraform(this._customProperty45),
      custom_property46: cdktf.stringToTerraform(this._customProperty46),
      custom_property47: cdktf.stringToTerraform(this._customProperty47),
      custom_property48: cdktf.stringToTerraform(this._customProperty48),
      custom_property49: cdktf.stringToTerraform(this._customProperty49),
      custom_property5: cdktf.stringToTerraform(this._customProperty5),
      custom_property50: cdktf.stringToTerraform(this._customProperty50),
      custom_property51: cdktf.stringToTerraform(this._customProperty51),
      custom_property52: cdktf.stringToTerraform(this._customProperty52),
      custom_property53: cdktf.stringToTerraform(this._customProperty53),
      custom_property54: cdktf.stringToTerraform(this._customProperty54),
      custom_property55: cdktf.stringToTerraform(this._customProperty55),
      custom_property56: cdktf.stringToTerraform(this._customProperty56),
      custom_property57: cdktf.stringToTerraform(this._customProperty57),
      custom_property58: cdktf.stringToTerraform(this._customProperty58),
      custom_property59: cdktf.stringToTerraform(this._customProperty59),
      custom_property6: cdktf.stringToTerraform(this._customProperty6),
      custom_property60: cdktf.stringToTerraform(this._customProperty60),
      custom_property7: cdktf.stringToTerraform(this._customProperty7),
      custom_property8: cdktf.stringToTerraform(this._customProperty8),
      custom_property9: cdktf.stringToTerraform(this._customProperty9),
      default_time_frame: cdktf.stringToTerraform(this._defaultTimeFrame),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      endpoint_name: cdktf.stringToTerraform(this._endpointName),
      entitlements: cdktf.listMapper(enterpriseRolesResourceEntitlementsToTerraform, false)(this._entitlements.internalValue),
      glossary: cdktf.stringToTerraform(this._glossary),
      level: cdktf.stringToTerraform(this._level),
      owners: cdktf.listMapper(enterpriseRolesResourceOwnersToTerraform, false)(this._owners.internalValue),
      privileged: cdktf.stringToTerraform(this._privileged),
      requestable: cdktf.stringToTerraform(this._requestable),
      requestor: cdktf.stringToTerraform(this._requestor),
      risk: cdktf.stringToTerraform(this._risk),
      role_name: cdktf.stringToTerraform(this._roleName),
      role_type: cdktf.stringToTerraform(this._roleType),
      show_dynamic_attrs: cdktf.stringToTerraform(this._showDynamicAttrs),
      sox_critical: cdktf.stringToTerraform(this._soxCritical),
      sys_critical: cdktf.stringToTerraform(this._sysCritical),
      users: cdktf.listMapper(enterpriseRolesResourceUsersToTerraform, false)(this._users.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_sod: {
        value: cdktf.stringToHclTerraform(this._checkSod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      child_roles: {
        value: cdktf.listMapperHcl(enterpriseRolesResourceChildRolesToHclTerraform, false)(this._childRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EnterpriseRolesResourceChildRolesList",
      },
      confidentiality: {
        value: cdktf.stringToHclTerraform(this._confidentiality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property1: {
        value: cdktf.stringToHclTerraform(this._customProperty1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property10: {
        value: cdktf.stringToHclTerraform(this._customProperty10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property11: {
        value: cdktf.stringToHclTerraform(this._customProperty11),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property12: {
        value: cdktf.stringToHclTerraform(this._customProperty12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property13: {
        value: cdktf.stringToHclTerraform(this._customProperty13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property14: {
        value: cdktf.stringToHclTerraform(this._customProperty14),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property15: {
        value: cdktf.stringToHclTerraform(this._customProperty15),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property16: {
        value: cdktf.stringToHclTerraform(this._customProperty16),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property17: {
        value: cdktf.stringToHclTerraform(this._customProperty17),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property18: {
        value: cdktf.stringToHclTerraform(this._customProperty18),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property19: {
        value: cdktf.stringToHclTerraform(this._customProperty19),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property2: {
        value: cdktf.stringToHclTerraform(this._customProperty2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property20: {
        value: cdktf.stringToHclTerraform(this._customProperty20),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property21: {
        value: cdktf.stringToHclTerraform(this._customProperty21),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property22: {
        value: cdktf.stringToHclTerraform(this._customProperty22),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property23: {
        value: cdktf.stringToHclTerraform(this._customProperty23),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property24: {
        value: cdktf.stringToHclTerraform(this._customProperty24),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property25: {
        value: cdktf.stringToHclTerraform(this._customProperty25),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property26: {
        value: cdktf.stringToHclTerraform(this._customProperty26),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property27: {
        value: cdktf.stringToHclTerraform(this._customProperty27),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property28: {
        value: cdktf.stringToHclTerraform(this._customProperty28),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property29: {
        value: cdktf.stringToHclTerraform(this._customProperty29),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property3: {
        value: cdktf.stringToHclTerraform(this._customProperty3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property30: {
        value: cdktf.stringToHclTerraform(this._customProperty30),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property31: {
        value: cdktf.stringToHclTerraform(this._customProperty31),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property32: {
        value: cdktf.stringToHclTerraform(this._customProperty32),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property33: {
        value: cdktf.stringToHclTerraform(this._customProperty33),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property34: {
        value: cdktf.stringToHclTerraform(this._customProperty34),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property35: {
        value: cdktf.stringToHclTerraform(this._customProperty35),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property36: {
        value: cdktf.stringToHclTerraform(this._customProperty36),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property37: {
        value: cdktf.stringToHclTerraform(this._customProperty37),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property38: {
        value: cdktf.stringToHclTerraform(this._customProperty38),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property39: {
        value: cdktf.stringToHclTerraform(this._customProperty39),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property4: {
        value: cdktf.stringToHclTerraform(this._customProperty4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property40: {
        value: cdktf.stringToHclTerraform(this._customProperty40),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property41: {
        value: cdktf.stringToHclTerraform(this._customProperty41),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property42: {
        value: cdktf.stringToHclTerraform(this._customProperty42),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property43: {
        value: cdktf.stringToHclTerraform(this._customProperty43),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property44: {
        value: cdktf.stringToHclTerraform(this._customProperty44),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property45: {
        value: cdktf.stringToHclTerraform(this._customProperty45),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property46: {
        value: cdktf.stringToHclTerraform(this._customProperty46),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property47: {
        value: cdktf.stringToHclTerraform(this._customProperty47),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property48: {
        value: cdktf.stringToHclTerraform(this._customProperty48),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property49: {
        value: cdktf.stringToHclTerraform(this._customProperty49),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property5: {
        value: cdktf.stringToHclTerraform(this._customProperty5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property50: {
        value: cdktf.stringToHclTerraform(this._customProperty50),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property51: {
        value: cdktf.stringToHclTerraform(this._customProperty51),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property52: {
        value: cdktf.stringToHclTerraform(this._customProperty52),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property53: {
        value: cdktf.stringToHclTerraform(this._customProperty53),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property54: {
        value: cdktf.stringToHclTerraform(this._customProperty54),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property55: {
        value: cdktf.stringToHclTerraform(this._customProperty55),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property56: {
        value: cdktf.stringToHclTerraform(this._customProperty56),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property57: {
        value: cdktf.stringToHclTerraform(this._customProperty57),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property58: {
        value: cdktf.stringToHclTerraform(this._customProperty58),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property59: {
        value: cdktf.stringToHclTerraform(this._customProperty59),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property6: {
        value: cdktf.stringToHclTerraform(this._customProperty6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property60: {
        value: cdktf.stringToHclTerraform(this._customProperty60),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property7: {
        value: cdktf.stringToHclTerraform(this._customProperty7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property8: {
        value: cdktf.stringToHclTerraform(this._customProperty8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property9: {
        value: cdktf.stringToHclTerraform(this._customProperty9),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_time_frame: {
        value: cdktf.stringToHclTerraform(this._defaultTimeFrame),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_name: {
        value: cdktf.stringToHclTerraform(this._endpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitlements: {
        value: cdktf.listMapperHcl(enterpriseRolesResourceEntitlementsToHclTerraform, false)(this._entitlements.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EnterpriseRolesResourceEntitlementsList",
      },
      glossary: {
        value: cdktf.stringToHclTerraform(this._glossary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.stringToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owners: {
        value: cdktf.listMapperHcl(enterpriseRolesResourceOwnersToHclTerraform, false)(this._owners.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EnterpriseRolesResourceOwnersList",
      },
      privileged: {
        value: cdktf.stringToHclTerraform(this._privileged),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requestable: {
        value: cdktf.stringToHclTerraform(this._requestable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requestor: {
        value: cdktf.stringToHclTerraform(this._requestor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      risk: {
        value: cdktf.stringToHclTerraform(this._risk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_type: {
        value: cdktf.stringToHclTerraform(this._roleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_dynamic_attrs: {
        value: cdktf.stringToHclTerraform(this._showDynamicAttrs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sox_critical: {
        value: cdktf.stringToHclTerraform(this._soxCritical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sys_critical: {
        value: cdktf.stringToHclTerraform(this._sysCritical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(enterpriseRolesResourceUsersToHclTerraform, false)(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EnterpriseRolesResourceUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
