// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrafanaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add [disk storage](https://aiven.io/docs/platform/howto/add-storage-space) in increments of 30  GiB to scale your service. The maximum value depends on the service type and cloud provider. Removing additional storage causes the service nodes to go through a rolling restart, and there might be a short downtime for services without an autoscaler integration or high availability capabilities. The field can be safely removed when autoscaler is enabled without causing any changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#additional_disk_space Grafana#additional_disk_space}
  */
  readonly additionalDiskSpace?: string;
  /**
  * The cloud provider and region the service is hosted in. The format is `provider-region`, for example: `google-europe-west1`. The [available cloud regions](https://aiven.io/docs/platform/reference/list_of_clouds) can differ per project and service. Changing this value [migrates the service to another cloud provider or region](https://aiven.io/docs/platform/howto/migrate-services-cloud-region). The migration runs in the background and includes a DNS update to redirect traffic to the new region. Most services experience no downtime, but some databases may have a brief interruption during DNS propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#cloud_name Grafana#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * Service disk space. Possible values depend on the service type, the cloud provider and the project. Therefore, reducing will result in the service rebalancing. Please use `additional_disk_space` to specify the space to be added to the default disk space defined by the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#disk_space Grafana#disk_space}
  */
  readonly diskSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#id Grafana#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Day of week when maintenance operations should be performed. One monday, tuesday, wednesday, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#maintenance_window_dow Grafana#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Time of day when maintenance operations should be performed. UTC time in HH:mm:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#maintenance_window_time Grafana#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Defines what kind of computing resources are allocated for the service. It can be changed after creation, though there are some restrictions when going to a smaller plan such as the new plan must have sufficient amount of disk space to store all current data and switching to a plan with fewer nodes might not be supported. The basic plan names are `hobbyist`, `startup-x`, `business-x` and `premium-x` where `x` is (roughly) the amount of memory on each node (also other attributes like number of CPUs and amount of disk space varies but naming is based on memory). The available options can be seen from the [Aiven pricing page](https://aiven.io/pricing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#plan Grafana#plan}
  */
  readonly plan: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#project Grafana#project}
  */
  readonly project: string;
  /**
  * Specifies the VPC the service should run in. If the value is not set, the service runs on the Public Internet. When set, the value should be given as a reference to set up dependencies correctly, and the VPC must be in the same cloud and region as the service itself. The service can be freely moved to and from VPC after creation, but doing so triggers migration to new servers, so the operation can take a significant amount of time to complete if the service has a lot of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#project_vpc_id Grafana#project_vpc_id}
  */
  readonly projectVpcId?: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#service_name Grafana#service_name}
  */
  readonly serviceName: string;
  /**
  * Static IPs that are going to be associated with this service. Please assign a value using the 'toset' function. Once a static ip resource is in the 'assigned' state it cannot be unbound from the node again
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#static_ips Grafana#static_ips}
  */
  readonly staticIps?: string[];
  /**
  * Prevents the service from being deleted. It is recommended to set this to `true` for all production services to prevent unintentional service deletion. This does not shield against deleting databases or topics but for services with backups much of the content can at least be restored from backup in case accidental deletion is done.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#termination_protection Grafana#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * grafana block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#grafana Grafana#grafana}
  */
  readonly grafana?: GrafanaGrafana;
  /**
  * grafana_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#grafana_user_config Grafana#grafana_user_config}
  */
  readonly grafanaUserConfig?: GrafanaGrafanaUserConfig;
  /**
  * service_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#service_integrations Grafana#service_integrations}
  */
  readonly serviceIntegrations?: GrafanaServiceIntegrations[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#tag Grafana#tag}
  */
  readonly tag?: GrafanaTag[] | cdktf.IResolvable;
  /**
  * tech_emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#tech_emails Grafana#tech_emails}
  */
  readonly techEmails?: GrafanaTechEmails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#timeouts Grafana#timeouts}
  */
  readonly timeouts?: GrafanaTimeouts;
}
export interface GrafanaComponents {
}

export function grafanaComponentsToTerraform(struct?: GrafanaComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function grafanaComponentsToHclTerraform(struct?: GrafanaComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GrafanaComponentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GrafanaComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // connection_uri - computed: true, optional: false, required: false
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // kafka_authentication_method - computed: true, optional: false, required: false
  public get kafkaAuthenticationMethod() {
    return this.getStringAttribute('kafka_authentication_method');
  }

  // kafka_ssl_ca - computed: true, optional: false, required: false
  public get kafkaSslCa() {
    return this.getStringAttribute('kafka_ssl_ca');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}

export class GrafanaComponentsList extends cdktf.ComplexList {

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
  public get(index: number): GrafanaComponentsOutputReference {
    return new GrafanaComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrafanaGrafana {
  /**
  * Grafana server URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#uris Grafana#uris}
  */
  readonly uris?: string[];
}

export function grafanaGrafanaToTerraform(struct?: GrafanaGrafanaOutputReference | GrafanaGrafana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function grafanaGrafanaToHclTerraform(struct?: GrafanaGrafanaOutputReference | GrafanaGrafana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaGrafanaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrafanaGrafana | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaGrafana | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uris = value.uris;
    }
  }

  // uris - computed: true, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}
export interface GrafanaGrafanaUserConfigAuthAzuread {
  /**
  * Automatically sign-up users on successful sign-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#allow_sign_up Grafana#allow_sign_up}
  */
  readonly allowSignUp?: boolean | cdktf.IResolvable;
  /**
  * Allowed domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#allowed_domains Grafana#allowed_domains}
  */
  readonly allowedDomains?: string[];
  /**
  * Require users to belong to one of given groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#allowed_groups Grafana#allowed_groups}
  */
  readonly allowedGroups?: string[];
  /**
  * Authorization URL. Example: `https://login.microsoftonline.com/<AZURE_TENANT_ID>/oauth2/v2.0/authorize`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#auth_url Grafana#auth_url}
  */
  readonly authUrl: string;
  /**
  * Client ID from provider. Example: `b1ba0bf54a4c2c0a1c29`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#client_id Grafana#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret from provider. Example: `bfa6gea4f129076761dcba8ce5e1e406bd83af7b`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#client_secret Grafana#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Token URL. Example: `https://login.microsoftonline.com/<AZURE_TENANT_ID>/oauth2/v2.0/token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#token_url Grafana#token_url}
  */
  readonly tokenUrl: string;
}

export function grafanaGrafanaUserConfigAuthAzureadToTerraform(struct?: GrafanaGrafanaUserConfigAuthAzureadOutputReference | GrafanaGrafanaUserConfigAuthAzuread): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_sign_up: cdktf.booleanToTerraform(struct!.allowSignUp),
    allowed_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedDomains),
    allowed_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedGroups),
    auth_url: cdktf.stringToTerraform(struct!.authUrl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function grafanaGrafanaUserConfigAuthAzureadToHclTerraform(struct?: GrafanaGrafanaUserConfigAuthAzureadOutputReference | GrafanaGrafanaUserConfigAuthAzuread): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_sign_up: {
      value: cdktf.booleanToHclTerraform(struct!.allowSignUp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth_url: {
      value: cdktf.stringToHclTerraform(struct!.authUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaGrafanaUserConfigAuthAzureadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrafanaGrafanaUserConfigAuthAzuread | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSignUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSignUp = this._allowSignUp;
    }
    if (this._allowedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDomains = this._allowedDomains;
    }
    if (this._allowedGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedGroups = this._allowedGroups;
    }
    if (this._authUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUrl = this._authUrl;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaGrafanaUserConfigAuthAzuread | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSignUp = undefined;
      this._allowedDomains = undefined;
      this._allowedGroups = undefined;
      this._authUrl = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tokenUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSignUp = value.allowSignUp;
      this._allowedDomains = value.allowedDomains;
      this._allowedGroups = value.allowedGroups;
      this._authUrl = value.authUrl;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // allow_sign_up - computed: false, optional: true, required: false
  private _allowSignUp?: boolean | cdktf.IResolvable; 
  public get allowSignUp() {
    return this.getBooleanAttribute('allow_sign_up');
  }
  public set allowSignUp(value: boolean | cdktf.IResolvable) {
    this._allowSignUp = value;
  }
  public resetAllowSignUp() {
    this._allowSignUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSignUpInput() {
    return this._allowSignUp;
  }

  // allowed_domains - computed: false, optional: true, required: false
  private _allowedDomains?: string[]; 
  public get allowedDomains() {
    return this.getListAttribute('allowed_domains');
  }
  public set allowedDomains(value: string[]) {
    this._allowedDomains = value;
  }
  public resetAllowedDomains() {
    this._allowedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains;
  }

  // allowed_groups - computed: false, optional: true, required: false
  private _allowedGroups?: string[]; 
  public get allowedGroups() {
    return this.getListAttribute('allowed_groups');
  }
  public set allowedGroups(value: string[]) {
    this._allowedGroups = value;
  }
  public resetAllowedGroups() {
    this._allowedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedGroupsInput() {
    return this._allowedGroups;
  }

  // auth_url - computed: false, optional: false, required: true
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface GrafanaGrafanaUserConfigAuthGenericOauth {
  /**
  * Automatically sign-up users on successful sign-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#allow_sign_up Grafana#allow_sign_up}
  */
  readonly allowSignUp?: boolean | cdktf.IResolvable;
  /**
  * Allowed domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#allowed_domains Grafana#allowed_domains}
  */
  readonly allowedDomains?: string[];
  /**
  * Require user to be member of one of the listed organizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#allowed_organizations Grafana#allowed_organizations}
  */
  readonly allowedOrganizations?: string[];
  /**
  * API URL. Example: `https://yourprovider.com/api`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#api_url Grafana#api_url}
  */
  readonly apiUrl: string;
  /**
  * Authorization URL. Example: `https://yourprovider.com/oauth/authorize`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#auth_url Grafana#auth_url}
  */
  readonly authUrl: string;
  /**
  * Allow users to bypass the login screen and automatically log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#auto_login Grafana#auto_login}
  */
  readonly autoLogin?: boolean | cdktf.IResolvable;
  /**
  * Client ID from provider. Example: `b1ba0bf54a4c2c0a1c29`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#client_id Grafana#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret from provider. Example: `bfa6gea4f129076761dcba8ce5e1e406bd83af7b`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#client_secret Grafana#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Name of the OAuth integration. Example: `My authentication`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#name Grafana#name}
  */
  readonly name?: string;
  /**
  * OAuth scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#scopes Grafana#scopes}
  */
  readonly scopes?: string[];
  /**
  * Token URL. Example: `https://yourprovider.com/oauth/token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#token_url Grafana#token_url}
  */
  readonly tokenUrl: string;
  /**
  * Set to true to use refresh token and check access token expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#use_refresh_token Grafana#use_refresh_token}
  */
  readonly useRefreshToken?: boolean | cdktf.IResolvable;
}

export function grafanaGrafanaUserConfigAuthGenericOauthToTerraform(struct?: GrafanaGrafanaUserConfigAuthGenericOauthOutputReference | GrafanaGrafanaUserConfigAuthGenericOauth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_sign_up: cdktf.booleanToTerraform(struct!.allowSignUp),
    allowed_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedDomains),
    allowed_organizations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrganizations),
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    auth_url: cdktf.stringToTerraform(struct!.authUrl),
    auto_login: cdktf.booleanToTerraform(struct!.autoLogin),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    name: cdktf.stringToTerraform(struct!.name),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
    use_refresh_token: cdktf.booleanToTerraform(struct!.useRefreshToken),
  }
}


export function grafanaGrafanaUserConfigAuthGenericOauthToHclTerraform(struct?: GrafanaGrafanaUserConfigAuthGenericOauthOutputReference | GrafanaGrafanaUserConfigAuthGenericOauth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_sign_up: {
      value: cdktf.booleanToHclTerraform(struct!.allowSignUp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_organizations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrganizations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    api_url: {
      value: cdktf.stringToHclTerraform(struct!.apiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_url: {
      value: cdktf.stringToHclTerraform(struct!.authUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_login: {
      value: cdktf.booleanToHclTerraform(struct!.autoLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_refresh_token: {
      value: cdktf.booleanToHclTerraform(struct!.useRefreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaGrafanaUserConfigAuthGenericOauthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrafanaGrafanaUserConfigAuthGenericOauth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSignUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSignUp = this._allowSignUp;
    }
    if (this._allowedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDomains = this._allowedDomains;
    }
    if (this._allowedOrganizations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrganizations = this._allowedOrganizations;
    }
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._authUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUrl = this._authUrl;
    }
    if (this._autoLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoLogin = this._autoLogin;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    if (this._useRefreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRefreshToken = this._useRefreshToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaGrafanaUserConfigAuthGenericOauth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSignUp = undefined;
      this._allowedDomains = undefined;
      this._allowedOrganizations = undefined;
      this._apiUrl = undefined;
      this._authUrl = undefined;
      this._autoLogin = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._name = undefined;
      this._scopes = undefined;
      this._tokenUrl = undefined;
      this._useRefreshToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSignUp = value.allowSignUp;
      this._allowedDomains = value.allowedDomains;
      this._allowedOrganizations = value.allowedOrganizations;
      this._apiUrl = value.apiUrl;
      this._authUrl = value.authUrl;
      this._autoLogin = value.autoLogin;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._name = value.name;
      this._scopes = value.scopes;
      this._tokenUrl = value.tokenUrl;
      this._useRefreshToken = value.useRefreshToken;
    }
  }

  // allow_sign_up - computed: false, optional: true, required: false
  private _allowSignUp?: boolean | cdktf.IResolvable; 
  public get allowSignUp() {
    return this.getBooleanAttribute('allow_sign_up');
  }
  public set allowSignUp(value: boolean | cdktf.IResolvable) {
    this._allowSignUp = value;
  }
  public resetAllowSignUp() {
    this._allowSignUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSignUpInput() {
    return this._allowSignUp;
  }

  // allowed_domains - computed: false, optional: true, required: false
  private _allowedDomains?: string[]; 
  public get allowedDomains() {
    return this.getListAttribute('allowed_domains');
  }
  public set allowedDomains(value: string[]) {
    this._allowedDomains = value;
  }
  public resetAllowedDomains() {
    this._allowedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains;
  }

  // allowed_organizations - computed: false, optional: true, required: false
  private _allowedOrganizations?: string[]; 
  public get allowedOrganizations() {
    return this.getListAttribute('allowed_organizations');
  }
  public set allowedOrganizations(value: string[]) {
    this._allowedOrganizations = value;
  }
  public resetAllowedOrganizations() {
    this._allowedOrganizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOrganizationsInput() {
    return this._allowedOrganizations;
  }

  // api_url - computed: false, optional: false, required: true
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // auth_url - computed: false, optional: false, required: true
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // auto_login - computed: false, optional: true, required: false
  private _autoLogin?: boolean | cdktf.IResolvable; 
  public get autoLogin() {
    return this.getBooleanAttribute('auto_login');
  }
  public set autoLogin(value: boolean | cdktf.IResolvable) {
    this._autoLogin = value;
  }
  public resetAutoLogin() {
    this._autoLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLoginInput() {
    return this._autoLogin;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }

  // use_refresh_token - computed: false, optional: true, required: false
  private _useRefreshToken?: boolean | cdktf.IResolvable; 
  public get useRefreshToken() {
    return this.getBooleanAttribute('use_refresh_token');
  }
  public set useRefreshToken(value: boolean | cdktf.IResolvable) {
    this._useRefreshToken = value;
  }
  public resetUseRefreshToken() {
    this._useRefreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRefreshTokenInput() {
    return this._useRefreshToken;
  }
}
export interface GrafanaGrafanaUserConfigAuthGithub {
  /**
  * Automatically sign-up users on successful sign-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#allow_sign_up Grafana#allow_sign_up}
  */
  readonly allowSignUp?: boolean | cdktf.IResolvable;
  /**
  * Require users to belong to one of given organizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#allowed_organizations Grafana#allowed_organizations}
  */
  readonly allowedOrganizations?: string[];
  /**
  * Allow users to bypass the login screen and automatically log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#auto_login Grafana#auto_login}
  */
  readonly autoLogin?: boolean | cdktf.IResolvable;
  /**
  * Client ID from provider. Example: `b1ba0bf54a4c2c0a1c29`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#client_id Grafana#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret from provider. Example: `bfa6gea4f129076761dcba8ce5e1e406bd83af7b`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#client_secret Grafana#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Stop automatically syncing user roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#skip_org_role_sync Grafana#skip_org_role_sync}
  */
  readonly skipOrgRoleSync?: boolean | cdktf.IResolvable;
  /**
  * Require users to belong to one of given team IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#team_ids Grafana#team_ids}
  */
  readonly teamIds?: number[];
}

export function grafanaGrafanaUserConfigAuthGithubToTerraform(struct?: GrafanaGrafanaUserConfigAuthGithubOutputReference | GrafanaGrafanaUserConfigAuthGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_sign_up: cdktf.booleanToTerraform(struct!.allowSignUp),
    allowed_organizations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrganizations),
    auto_login: cdktf.booleanToTerraform(struct!.autoLogin),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    skip_org_role_sync: cdktf.booleanToTerraform(struct!.skipOrgRoleSync),
    team_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.teamIds),
  }
}


export function grafanaGrafanaUserConfigAuthGithubToHclTerraform(struct?: GrafanaGrafanaUserConfigAuthGithubOutputReference | GrafanaGrafanaUserConfigAuthGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_sign_up: {
      value: cdktf.booleanToHclTerraform(struct!.allowSignUp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_organizations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrganizations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auto_login: {
      value: cdktf.booleanToHclTerraform(struct!.autoLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_org_role_sync: {
      value: cdktf.booleanToHclTerraform(struct!.skipOrgRoleSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    team_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.teamIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaGrafanaUserConfigAuthGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrafanaGrafanaUserConfigAuthGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSignUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSignUp = this._allowSignUp;
    }
    if (this._allowedOrganizations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrganizations = this._allowedOrganizations;
    }
    if (this._autoLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoLogin = this._autoLogin;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._skipOrgRoleSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipOrgRoleSync = this._skipOrgRoleSync;
    }
    if (this._teamIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamIds = this._teamIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaGrafanaUserConfigAuthGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSignUp = undefined;
      this._allowedOrganizations = undefined;
      this._autoLogin = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._skipOrgRoleSync = undefined;
      this._teamIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSignUp = value.allowSignUp;
      this._allowedOrganizations = value.allowedOrganizations;
      this._autoLogin = value.autoLogin;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._skipOrgRoleSync = value.skipOrgRoleSync;
      this._teamIds = value.teamIds;
    }
  }

  // allow_sign_up - computed: false, optional: true, required: false
  private _allowSignUp?: boolean | cdktf.IResolvable; 
  public get allowSignUp() {
    return this.getBooleanAttribute('allow_sign_up');
  }
  public set allowSignUp(value: boolean | cdktf.IResolvable) {
    this._allowSignUp = value;
  }
  public resetAllowSignUp() {
    this._allowSignUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSignUpInput() {
    return this._allowSignUp;
  }

  // allowed_organizations - computed: false, optional: true, required: false
  private _allowedOrganizations?: string[]; 
  public get allowedOrganizations() {
    return this.getListAttribute('allowed_organizations');
  }
  public set allowedOrganizations(value: string[]) {
    this._allowedOrganizations = value;
  }
  public resetAllowedOrganizations() {
    this._allowedOrganizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOrganizationsInput() {
    return this._allowedOrganizations;
  }

  // auto_login - computed: false, optional: true, required: false
  private _autoLogin?: boolean | cdktf.IResolvable; 
  public get autoLogin() {
    return this.getBooleanAttribute('auto_login');
  }
  public set autoLogin(value: boolean | cdktf.IResolvable) {
    this._autoLogin = value;
  }
  public resetAutoLogin() {
    this._autoLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLoginInput() {
    return this._autoLogin;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // skip_org_role_sync - computed: false, optional: true, required: false
  private _skipOrgRoleSync?: boolean | cdktf.IResolvable; 
  public get skipOrgRoleSync() {
    return this.getBooleanAttribute('skip_org_role_sync');
  }
  public set skipOrgRoleSync(value: boolean | cdktf.IResolvable) {
    this._skipOrgRoleSync = value;
  }
  public resetSkipOrgRoleSync() {
    this._skipOrgRoleSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOrgRoleSyncInput() {
    return this._skipOrgRoleSync;
  }

  // team_ids - computed: false, optional: true, required: false
  private _teamIds?: number[]; 
  public get teamIds() {
    return this.getNumberListAttribute('team_ids');
  }
  public set teamIds(value: number[]) {
    this._teamIds = value;
  }
  public resetTeamIds() {
    this._teamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdsInput() {
    return this._teamIds;
  }
}
export interface GrafanaGrafanaUserConfigAuthGitlab {
  /**
  * Automatically sign-up users on successful sign-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#allow_sign_up Grafana#allow_sign_up}
  */
  readonly allowSignUp?: boolean | cdktf.IResolvable;
  /**
  * Require users to belong to one of given groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#allowed_groups Grafana#allowed_groups}
  */
  readonly allowedGroups: string[];
  /**
  * This only needs to be set when using self hosted GitLab. Example: `https://gitlab.com/api/v4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#api_url Grafana#api_url}
  */
  readonly apiUrl?: string;
  /**
  * This only needs to be set when using self hosted GitLab. Example: `https://gitlab.com/oauth/authorize`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#auth_url Grafana#auth_url}
  */
  readonly authUrl?: string;
  /**
  * Client ID from provider. Example: `b1ba0bf54a4c2c0a1c29`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#client_id Grafana#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret from provider. Example: `bfa6gea4f129076761dcba8ce5e1e406bd83af7b`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#client_secret Grafana#client_secret}
  */
  readonly clientSecret: string;
  /**
  * This only needs to be set when using self hosted GitLab. Example: `https://gitlab.com/oauth/token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#token_url Grafana#token_url}
  */
  readonly tokenUrl?: string;
}

export function grafanaGrafanaUserConfigAuthGitlabToTerraform(struct?: GrafanaGrafanaUserConfigAuthGitlabOutputReference | GrafanaGrafanaUserConfigAuthGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_sign_up: cdktf.booleanToTerraform(struct!.allowSignUp),
    allowed_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedGroups),
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    auth_url: cdktf.stringToTerraform(struct!.authUrl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function grafanaGrafanaUserConfigAuthGitlabToHclTerraform(struct?: GrafanaGrafanaUserConfigAuthGitlabOutputReference | GrafanaGrafanaUserConfigAuthGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_sign_up: {
      value: cdktf.booleanToHclTerraform(struct!.allowSignUp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    api_url: {
      value: cdktf.stringToHclTerraform(struct!.apiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_url: {
      value: cdktf.stringToHclTerraform(struct!.authUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaGrafanaUserConfigAuthGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrafanaGrafanaUserConfigAuthGitlab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSignUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSignUp = this._allowSignUp;
    }
    if (this._allowedGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedGroups = this._allowedGroups;
    }
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._authUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUrl = this._authUrl;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaGrafanaUserConfigAuthGitlab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSignUp = undefined;
      this._allowedGroups = undefined;
      this._apiUrl = undefined;
      this._authUrl = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tokenUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSignUp = value.allowSignUp;
      this._allowedGroups = value.allowedGroups;
      this._apiUrl = value.apiUrl;
      this._authUrl = value.authUrl;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // allow_sign_up - computed: false, optional: true, required: false
  private _allowSignUp?: boolean | cdktf.IResolvable; 
  public get allowSignUp() {
    return this.getBooleanAttribute('allow_sign_up');
  }
  public set allowSignUp(value: boolean | cdktf.IResolvable) {
    this._allowSignUp = value;
  }
  public resetAllowSignUp() {
    this._allowSignUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSignUpInput() {
    return this._allowSignUp;
  }

  // allowed_groups - computed: false, optional: false, required: true
  private _allowedGroups?: string[]; 
  public get allowedGroups() {
    return this.getListAttribute('allowed_groups');
  }
  public set allowedGroups(value: string[]) {
    this._allowedGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedGroupsInput() {
    return this._allowedGroups;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // auth_url - computed: false, optional: true, required: false
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  public resetAuthUrl() {
    this._authUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // token_url - computed: false, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface GrafanaGrafanaUserConfigAuthGoogle {
  /**
  * Automatically sign-up users on successful sign-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#allow_sign_up Grafana#allow_sign_up}
  */
  readonly allowSignUp?: boolean | cdktf.IResolvable;
  /**
  * Domains allowed to sign-in to this Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#allowed_domains Grafana#allowed_domains}
  */
  readonly allowedDomains: string[];
  /**
  * Client ID from provider. Example: `b1ba0bf54a4c2c0a1c29`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#client_id Grafana#client_id}
  */
  readonly clientId: string;
  /**
  * Client secret from provider. Example: `bfa6gea4f129076761dcba8ce5e1e406bd83af7b`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#client_secret Grafana#client_secret}
  */
  readonly clientSecret: string;
}

export function grafanaGrafanaUserConfigAuthGoogleToTerraform(struct?: GrafanaGrafanaUserConfigAuthGoogleOutputReference | GrafanaGrafanaUserConfigAuthGoogle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_sign_up: cdktf.booleanToTerraform(struct!.allowSignUp),
    allowed_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedDomains),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function grafanaGrafanaUserConfigAuthGoogleToHclTerraform(struct?: GrafanaGrafanaUserConfigAuthGoogleOutputReference | GrafanaGrafanaUserConfigAuthGoogle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_sign_up: {
      value: cdktf.booleanToHclTerraform(struct!.allowSignUp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaGrafanaUserConfigAuthGoogleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrafanaGrafanaUserConfigAuthGoogle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSignUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSignUp = this._allowSignUp;
    }
    if (this._allowedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDomains = this._allowedDomains;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaGrafanaUserConfigAuthGoogle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSignUp = undefined;
      this._allowedDomains = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSignUp = value.allowSignUp;
      this._allowedDomains = value.allowedDomains;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
    }
  }

  // allow_sign_up - computed: false, optional: true, required: false
  private _allowSignUp?: boolean | cdktf.IResolvable; 
  public get allowSignUp() {
    return this.getBooleanAttribute('allow_sign_up');
  }
  public set allowSignUp(value: boolean | cdktf.IResolvable) {
    this._allowSignUp = value;
  }
  public resetAllowSignUp() {
    this._allowSignUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSignUpInput() {
    return this._allowSignUp;
  }

  // allowed_domains - computed: false, optional: false, required: true
  private _allowedDomains?: string[]; 
  public get allowedDomains() {
    return this.getListAttribute('allowed_domains');
  }
  public set allowedDomains(value: string[]) {
    this._allowedDomains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }
}
export interface GrafanaGrafanaUserConfigDateFormats {
  /**
  * Default time zone for user preferences. Value `browser` uses browser local time zone. Example: `Europe/Helsinki`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#default_timezone Grafana#default_timezone}
  */
  readonly defaultTimezone?: string;
  /**
  * Moment.js style format string for cases where full date is shown. Example: `YYYY MM DD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#full_date Grafana#full_date}
  */
  readonly fullDate?: string;
  /**
  * Moment.js style format string used when a time requiring day accuracy is shown. Example: `MM/DD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#interval_day Grafana#interval_day}
  */
  readonly intervalDay?: string;
  /**
  * Moment.js style format string used when a time requiring hour accuracy is shown. Example: `MM/DD HH:mm`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#interval_hour Grafana#interval_hour}
  */
  readonly intervalHour?: string;
  /**
  * Moment.js style format string used when a time requiring minute accuracy is shown. Example: `HH:mm`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#interval_minute Grafana#interval_minute}
  */
  readonly intervalMinute?: string;
  /**
  * Moment.js style format string used when a time requiring month accuracy is shown. Example: `YYYY-MM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#interval_month Grafana#interval_month}
  */
  readonly intervalMonth?: string;
  /**
  * Moment.js style format string used when a time requiring second accuracy is shown. Example: `HH:mm:ss`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#interval_second Grafana#interval_second}
  */
  readonly intervalSecond?: string;
  /**
  * Moment.js style format string used when a time requiring year accuracy is shown. Example: `YYYY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#interval_year Grafana#interval_year}
  */
  readonly intervalYear?: string;
}

export function grafanaGrafanaUserConfigDateFormatsToTerraform(struct?: GrafanaGrafanaUserConfigDateFormatsOutputReference | GrafanaGrafanaUserConfigDateFormats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_timezone: cdktf.stringToTerraform(struct!.defaultTimezone),
    full_date: cdktf.stringToTerraform(struct!.fullDate),
    interval_day: cdktf.stringToTerraform(struct!.intervalDay),
    interval_hour: cdktf.stringToTerraform(struct!.intervalHour),
    interval_minute: cdktf.stringToTerraform(struct!.intervalMinute),
    interval_month: cdktf.stringToTerraform(struct!.intervalMonth),
    interval_second: cdktf.stringToTerraform(struct!.intervalSecond),
    interval_year: cdktf.stringToTerraform(struct!.intervalYear),
  }
}


export function grafanaGrafanaUserConfigDateFormatsToHclTerraform(struct?: GrafanaGrafanaUserConfigDateFormatsOutputReference | GrafanaGrafanaUserConfigDateFormats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_timezone: {
      value: cdktf.stringToHclTerraform(struct!.defaultTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_date: {
      value: cdktf.stringToHclTerraform(struct!.fullDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_day: {
      value: cdktf.stringToHclTerraform(struct!.intervalDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_hour: {
      value: cdktf.stringToHclTerraform(struct!.intervalHour),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_minute: {
      value: cdktf.stringToHclTerraform(struct!.intervalMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_month: {
      value: cdktf.stringToHclTerraform(struct!.intervalMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_second: {
      value: cdktf.stringToHclTerraform(struct!.intervalSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_year: {
      value: cdktf.stringToHclTerraform(struct!.intervalYear),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaGrafanaUserConfigDateFormatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrafanaGrafanaUserConfigDateFormats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTimezone = this._defaultTimezone;
    }
    if (this._fullDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullDate = this._fullDate;
    }
    if (this._intervalDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalDay = this._intervalDay;
    }
    if (this._intervalHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalHour = this._intervalHour;
    }
    if (this._intervalMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalMinute = this._intervalMinute;
    }
    if (this._intervalMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalMonth = this._intervalMonth;
    }
    if (this._intervalSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSecond = this._intervalSecond;
    }
    if (this._intervalYear !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalYear = this._intervalYear;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaGrafanaUserConfigDateFormats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTimezone = undefined;
      this._fullDate = undefined;
      this._intervalDay = undefined;
      this._intervalHour = undefined;
      this._intervalMinute = undefined;
      this._intervalMonth = undefined;
      this._intervalSecond = undefined;
      this._intervalYear = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTimezone = value.defaultTimezone;
      this._fullDate = value.fullDate;
      this._intervalDay = value.intervalDay;
      this._intervalHour = value.intervalHour;
      this._intervalMinute = value.intervalMinute;
      this._intervalMonth = value.intervalMonth;
      this._intervalSecond = value.intervalSecond;
      this._intervalYear = value.intervalYear;
    }
  }

  // default_timezone - computed: false, optional: true, required: false
  private _defaultTimezone?: string; 
  public get defaultTimezone() {
    return this.getStringAttribute('default_timezone');
  }
  public set defaultTimezone(value: string) {
    this._defaultTimezone = value;
  }
  public resetDefaultTimezone() {
    this._defaultTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimezoneInput() {
    return this._defaultTimezone;
  }

  // full_date - computed: false, optional: true, required: false
  private _fullDate?: string; 
  public get fullDate() {
    return this.getStringAttribute('full_date');
  }
  public set fullDate(value: string) {
    this._fullDate = value;
  }
  public resetFullDate() {
    this._fullDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullDateInput() {
    return this._fullDate;
  }

  // interval_day - computed: false, optional: true, required: false
  private _intervalDay?: string; 
  public get intervalDay() {
    return this.getStringAttribute('interval_day');
  }
  public set intervalDay(value: string) {
    this._intervalDay = value;
  }
  public resetIntervalDay() {
    this._intervalDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalDayInput() {
    return this._intervalDay;
  }

  // interval_hour - computed: false, optional: true, required: false
  private _intervalHour?: string; 
  public get intervalHour() {
    return this.getStringAttribute('interval_hour');
  }
  public set intervalHour(value: string) {
    this._intervalHour = value;
  }
  public resetIntervalHour() {
    this._intervalHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalHourInput() {
    return this._intervalHour;
  }

  // interval_minute - computed: false, optional: true, required: false
  private _intervalMinute?: string; 
  public get intervalMinute() {
    return this.getStringAttribute('interval_minute');
  }
  public set intervalMinute(value: string) {
    this._intervalMinute = value;
  }
  public resetIntervalMinute() {
    this._intervalMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMinuteInput() {
    return this._intervalMinute;
  }

  // interval_month - computed: false, optional: true, required: false
  private _intervalMonth?: string; 
  public get intervalMonth() {
    return this.getStringAttribute('interval_month');
  }
  public set intervalMonth(value: string) {
    this._intervalMonth = value;
  }
  public resetIntervalMonth() {
    this._intervalMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMonthInput() {
    return this._intervalMonth;
  }

  // interval_second - computed: false, optional: true, required: false
  private _intervalSecond?: string; 
  public get intervalSecond() {
    return this.getStringAttribute('interval_second');
  }
  public set intervalSecond(value: string) {
    this._intervalSecond = value;
  }
  public resetIntervalSecond() {
    this._intervalSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondInput() {
    return this._intervalSecond;
  }

  // interval_year - computed: false, optional: true, required: false
  private _intervalYear?: string; 
  public get intervalYear() {
    return this.getStringAttribute('interval_year');
  }
  public set intervalYear(value: string) {
    this._intervalYear = value;
  }
  public resetIntervalYear() {
    this._intervalYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalYearInput() {
    return this._intervalYear;
  }
}
export interface GrafanaGrafanaUserConfigExternalImageStorage {
  /**
  * S3 access key. Requires permissions to the S3 bucket for the s3:PutObject and s3:PutObjectAcl actions. Example: `AAAAAAAAAAAAAAAAAAA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#access_key Grafana#access_key}
  */
  readonly accessKey: string;
  /**
  * Bucket URL for S3. Example: `https://grafana.s3-ap-southeast-2.amazonaws.com/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#bucket_url Grafana#bucket_url}
  */
  readonly bucketUrl: string;
  /**
  * Enum: `s3`. External image store provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#provider Grafana#provider}
  */
  readonly provider: string;
  /**
  * S3 secret key. Example: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#secret_key Grafana#secret_key}
  */
  readonly secretKey: string;
}

export function grafanaGrafanaUserConfigExternalImageStorageToTerraform(struct?: GrafanaGrafanaUserConfigExternalImageStorageOutputReference | GrafanaGrafanaUserConfigExternalImageStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket_url: cdktf.stringToTerraform(struct!.bucketUrl),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function grafanaGrafanaUserConfigExternalImageStorageToHclTerraform(struct?: GrafanaGrafanaUserConfigExternalImageStorageOutputReference | GrafanaGrafanaUserConfigExternalImageStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_url: {
      value: cdktf.stringToHclTerraform(struct!.bucketUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaGrafanaUserConfigExternalImageStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrafanaGrafanaUserConfigExternalImageStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucketUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketUrl = this._bucketUrl;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaGrafanaUserConfigExternalImageStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._bucketUrl = undefined;
      this._provider = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._bucketUrl = value.bucketUrl;
      this._provider = value.provider;
      this._secretKey = value.secretKey;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // bucket_url - computed: false, optional: false, required: true
  private _bucketUrl?: string; 
  public get bucketUrl() {
    return this.getStringAttribute('bucket_url');
  }
  public set bucketUrl(value: string) {
    this._bucketUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketUrlInput() {
    return this._bucketUrl;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface GrafanaGrafanaUserConfigIpFilterObject {
  /**
  * Description for IP filter list entry. Example: `Production service IP range`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#description Grafana#description}
  */
  readonly description?: string;
  /**
  * CIDR address block. Example: `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#network Grafana#network}
  */
  readonly network: string;
}

export function grafanaGrafanaUserConfigIpFilterObjectToTerraform(struct?: GrafanaGrafanaUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function grafanaGrafanaUserConfigIpFilterObjectToHclTerraform(struct?: GrafanaGrafanaUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaGrafanaUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrafanaGrafanaUserConfigIpFilterObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaGrafanaUserConfigIpFilterObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._network = value.network;
    }
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}

export class GrafanaGrafanaUserConfigIpFilterObjectList extends cdktf.ComplexList {
  public internalValue? : GrafanaGrafanaUserConfigIpFilterObject[] | cdktf.IResolvable

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
  public get(index: number): GrafanaGrafanaUserConfigIpFilterObjectOutputReference {
    return new GrafanaGrafanaUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrafanaGrafanaUserConfigPrivateAccess {
  /**
  * Allow clients to connect to grafana with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#grafana Grafana#grafana}
  */
  readonly grafana?: boolean | cdktf.IResolvable;
}

export function grafanaGrafanaUserConfigPrivateAccessToTerraform(struct?: GrafanaGrafanaUserConfigPrivateAccessOutputReference | GrafanaGrafanaUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grafana: cdktf.booleanToTerraform(struct!.grafana),
  }
}


export function grafanaGrafanaUserConfigPrivateAccessToHclTerraform(struct?: GrafanaGrafanaUserConfigPrivateAccessOutputReference | GrafanaGrafanaUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grafana: {
      value: cdktf.booleanToHclTerraform(struct!.grafana),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaGrafanaUserConfigPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrafanaGrafanaUserConfigPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grafana !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafana = this._grafana;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaGrafanaUserConfigPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grafana = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grafana = value.grafana;
    }
  }

  // grafana - computed: false, optional: true, required: false
  private _grafana?: boolean | cdktf.IResolvable; 
  public get grafana() {
    return this.getBooleanAttribute('grafana');
  }
  public set grafana(value: boolean | cdktf.IResolvable) {
    this._grafana = value;
  }
  public resetGrafana() {
    this._grafana = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaInput() {
    return this._grafana;
  }
}
export interface GrafanaGrafanaUserConfigPrivatelinkAccess {
  /**
  * Enable grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#grafana Grafana#grafana}
  */
  readonly grafana?: boolean | cdktf.IResolvable;
}

export function grafanaGrafanaUserConfigPrivatelinkAccessToTerraform(struct?: GrafanaGrafanaUserConfigPrivatelinkAccessOutputReference | GrafanaGrafanaUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grafana: cdktf.booleanToTerraform(struct!.grafana),
  }
}


export function grafanaGrafanaUserConfigPrivatelinkAccessToHclTerraform(struct?: GrafanaGrafanaUserConfigPrivatelinkAccessOutputReference | GrafanaGrafanaUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grafana: {
      value: cdktf.booleanToHclTerraform(struct!.grafana),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaGrafanaUserConfigPrivatelinkAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrafanaGrafanaUserConfigPrivatelinkAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grafana !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafana = this._grafana;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaGrafanaUserConfigPrivatelinkAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grafana = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grafana = value.grafana;
    }
  }

  // grafana - computed: false, optional: true, required: false
  private _grafana?: boolean | cdktf.IResolvable; 
  public get grafana() {
    return this.getBooleanAttribute('grafana');
  }
  public set grafana(value: boolean | cdktf.IResolvable) {
    this._grafana = value;
  }
  public resetGrafana() {
    this._grafana = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaInput() {
    return this._grafana;
  }
}
export interface GrafanaGrafanaUserConfigPublicAccess {
  /**
  * Allow clients to connect to grafana from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#grafana Grafana#grafana}
  */
  readonly grafana?: boolean | cdktf.IResolvable;
}

export function grafanaGrafanaUserConfigPublicAccessToTerraform(struct?: GrafanaGrafanaUserConfigPublicAccessOutputReference | GrafanaGrafanaUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grafana: cdktf.booleanToTerraform(struct!.grafana),
  }
}


export function grafanaGrafanaUserConfigPublicAccessToHclTerraform(struct?: GrafanaGrafanaUserConfigPublicAccessOutputReference | GrafanaGrafanaUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grafana: {
      value: cdktf.booleanToHclTerraform(struct!.grafana),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaGrafanaUserConfigPublicAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrafanaGrafanaUserConfigPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grafana !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafana = this._grafana;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaGrafanaUserConfigPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grafana = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grafana = value.grafana;
    }
  }

  // grafana - computed: false, optional: true, required: false
  private _grafana?: boolean | cdktf.IResolvable; 
  public get grafana() {
    return this.getBooleanAttribute('grafana');
  }
  public set grafana(value: boolean | cdktf.IResolvable) {
    this._grafana = value;
  }
  public resetGrafana() {
    this._grafana = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaInput() {
    return this._grafana;
  }
}
export interface GrafanaGrafanaUserConfigSmtpServer {
  /**
  * Address used for sending emails. Example: `yourgrafanauser@yourdomain.example.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#from_address Grafana#from_address}
  */
  readonly fromAddress: string;
  /**
  * Name used in outgoing emails, defaults to Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#from_name Grafana#from_name}
  */
  readonly fromName?: string;
  /**
  * Server hostname or IP. Example: `smtp.example.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#host Grafana#host}
  */
  readonly host: string;
  /**
  * Password for SMTP authentication. Example: `ein0eemeev5eeth3Ahfu`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#password Grafana#password}
  */
  readonly password?: string;
  /**
  * SMTP server port. Example: `25`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#port Grafana#port}
  */
  readonly port: number;
  /**
  * Skip verifying server certificate. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#skip_verify Grafana#skip_verify}
  */
  readonly skipVerify?: boolean | cdktf.IResolvable;
  /**
  * Enum: `MandatoryStartTLS`, `NoStartTLS`, `OpportunisticStartTLS`. Either OpportunisticStartTLS, MandatoryStartTLS or NoStartTLS. Default is OpportunisticStartTLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#starttls_policy Grafana#starttls_policy}
  */
  readonly starttlsPolicy?: string;
  /**
  * Username for SMTP authentication. Example: `smtpuser`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#username Grafana#username}
  */
  readonly username?: string;
}

export function grafanaGrafanaUserConfigSmtpServerToTerraform(struct?: GrafanaGrafanaUserConfigSmtpServerOutputReference | GrafanaGrafanaUserConfigSmtpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_address: cdktf.stringToTerraform(struct!.fromAddress),
    from_name: cdktf.stringToTerraform(struct!.fromName),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    skip_verify: cdktf.booleanToTerraform(struct!.skipVerify),
    starttls_policy: cdktf.stringToTerraform(struct!.starttlsPolicy),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function grafanaGrafanaUserConfigSmtpServerToHclTerraform(struct?: GrafanaGrafanaUserConfigSmtpServerOutputReference | GrafanaGrafanaUserConfigSmtpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_address: {
      value: cdktf.stringToHclTerraform(struct!.fromAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_name: {
      value: cdktf.stringToHclTerraform(struct!.fromName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.skipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    starttls_policy: {
      value: cdktf.stringToHclTerraform(struct!.starttlsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaGrafanaUserConfigSmtpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrafanaGrafanaUserConfigSmtpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromAddress = this._fromAddress;
    }
    if (this._fromName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromName = this._fromName;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._skipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipVerify = this._skipVerify;
    }
    if (this._starttlsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.starttlsPolicy = this._starttlsPolicy;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaGrafanaUserConfigSmtpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fromAddress = undefined;
      this._fromName = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._skipVerify = undefined;
      this._starttlsPolicy = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fromAddress = value.fromAddress;
      this._fromName = value.fromName;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._skipVerify = value.skipVerify;
      this._starttlsPolicy = value.starttlsPolicy;
      this._username = value.username;
    }
  }

  // from_address - computed: false, optional: false, required: true
  private _fromAddress?: string; 
  public get fromAddress() {
    return this.getStringAttribute('from_address');
  }
  public set fromAddress(value: string) {
    this._fromAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromAddressInput() {
    return this._fromAddress;
  }

  // from_name - computed: false, optional: true, required: false
  private _fromName?: string; 
  public get fromName() {
    return this.getStringAttribute('from_name');
  }
  public set fromName(value: string) {
    this._fromName = value;
  }
  public resetFromName() {
    this._fromName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromNameInput() {
    return this._fromName;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // skip_verify - computed: false, optional: true, required: false
  private _skipVerify?: boolean | cdktf.IResolvable; 
  public get skipVerify() {
    return this.getBooleanAttribute('skip_verify');
  }
  public set skipVerify(value: boolean | cdktf.IResolvable) {
    this._skipVerify = value;
  }
  public resetSkipVerify() {
    this._skipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVerifyInput() {
    return this._skipVerify;
  }

  // starttls_policy - computed: false, optional: true, required: false
  private _starttlsPolicy?: string; 
  public get starttlsPolicy() {
    return this.getStringAttribute('starttls_policy');
  }
  public set starttlsPolicy(value: string) {
    this._starttlsPolicy = value;
  }
  public resetStarttlsPolicy() {
    this._starttlsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starttlsPolicyInput() {
    return this._starttlsPolicy;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GrafanaGrafanaUserConfig {
  /**
  * Additional Cloud Regions for Backup Replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#additional_backup_regions Grafana#additional_backup_regions}
  */
  readonly additionalBackupRegions?: string[];
  /**
  * Setting has no effect with Grafana 11 and onward. Enable or disable Grafana legacy alerting functionality. This should not be enabled with unified_alerting_enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#alerting_enabled Grafana#alerting_enabled}
  */
  readonly alertingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enum: `alerting`, `keep_state`. Default error or timeout setting for new alerting rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#alerting_error_or_timeout Grafana#alerting_error_or_timeout}
  */
  readonly alertingErrorOrTimeout?: string;
  /**
  * Max number of alert annotations that Grafana stores. 0 (default) keeps all alert annotations. Example: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#alerting_max_annotations_to_keep Grafana#alerting_max_annotations_to_keep}
  */
  readonly alertingMaxAnnotationsToKeep?: number;
  /**
  * Enum: `alerting`, `keep_state`, `no_data`, `ok`. Default value for 'no data or null values' for new alerting rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#alerting_nodata_or_nullvalues Grafana#alerting_nodata_or_nullvalues}
  */
  readonly alertingNodataOrNullvalues?: string;
  /**
  * Allow embedding Grafana dashboards with iframe/frame/object/embed tags. Disabled by default to limit impact of clickjacking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#allow_embedding Grafana#allow_embedding}
  */
  readonly allowEmbedding?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable basic authentication form, used by Grafana built-in login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#auth_basic_enabled Grafana#auth_basic_enabled}
  */
  readonly authBasicEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enum: `lax`, `none`, `strict`. Cookie SameSite attribute: `strict` prevents sending cookie for cross-site requests, effectively disabling direct linking from other sites to Grafana. `lax` is the default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#cookie_samesite Grafana#cookie_samesite}
  */
  readonly cookieSamesite?: string;
  /**
  * Serve the web frontend using a custom CNAME pointing to the Aiven DNS name. Example: `grafana.example.org`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#custom_domain Grafana#custom_domain}
  */
  readonly customDomain?: string;
  /**
  * Enable browsing of dashboards in grid (pictures) mode. This feature is new in Grafana 9 and is quite resource intensive. It may cause low-end plans to work more slowly while the dashboard previews are rendering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#dashboard_previews_enabled Grafana#dashboard_previews_enabled}
  */
  readonly dashboardPreviewsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable use of the Grafana Scenes Library as the dashboard engine. i.e. the `dashboardScene` feature flag. Upstream blog post at https://grafana.com/blog/2024/10/31/grafana-dashboards-are-now-powered-by-scenes-big-changes-same-ui/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#dashboard_scenes_enabled Grafana#dashboard_scenes_enabled}
  */
  readonly dashboardScenesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Signed sequence of decimal numbers, followed by a unit suffix (ms, s, m, h, d), e.g. 30s, 1h. Example: `5s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#dashboards_min_refresh_interval Grafana#dashboards_min_refresh_interval}
  */
  readonly dashboardsMinRefreshInterval?: string;
  /**
  * Dashboard versions to keep per dashboard. Example: `20`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#dashboards_versions_to_keep Grafana#dashboards_versions_to_keep}
  */
  readonly dashboardsVersionsToKeep?: number;
  /**
  * Send `X-Grafana-User` header to data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#dataproxy_send_user_header Grafana#dataproxy_send_user_header}
  */
  readonly dataproxySendUserHeader?: boolean | cdktf.IResolvable;
  /**
  * Timeout for data proxy requests in seconds. Example: `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#dataproxy_timeout Grafana#dataproxy_timeout}
  */
  readonly dataproxyTimeout?: number;
  /**
  * Set to true to disable gravatar. Defaults to false (gravatar is enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#disable_gravatar Grafana#disable_gravatar}
  */
  readonly disableGravatar?: boolean | cdktf.IResolvable;
  /**
  * Editors can manage folders, teams and dashboards created by them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#editors_can_admin Grafana#editors_can_admin}
  */
  readonly editorsCanAdmin?: boolean | cdktf.IResolvable;
  /**
  * Google Analytics ID. Example: `UA-123456-4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#google_analytics_ua_id Grafana#google_analytics_ua_id}
  */
  readonly googleAnalyticsUaId?: string;
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#ip_filter Grafana#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#ip_filter_string Grafana#ip_filter_string}
  */
  readonly ipFilterString?: string[];
  /**
  * Enable Grafana's /metrics endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#metrics_enabled Grafana#metrics_enabled}
  */
  readonly metricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enforce user lookup based on email instead of the unique ID provided by the IdP. This setup introduces significant security risks, such as potential phishing, spoofing, and other data breaches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#oauth_allow_insecure_email_lookup Grafana#oauth_allow_insecure_email_lookup}
  */
  readonly oauthAllowInsecureEmailLookup?: boolean | cdktf.IResolvable;
  /**
  * Name of another project to fork a service from. This has effect only when a new service is being created. Example: `anotherprojectname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#project_to_fork_from Grafana#project_to_fork_from}
  */
  readonly projectToForkFrom?: string;
  /**
  * Name of the basebackup to restore in forked service. Example: `backup-20191112t091354293891z`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#recovery_basebackup_name Grafana#recovery_basebackup_name}
  */
  readonly recoveryBasebackupName?: string;
  /**
  * Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#service_log Grafana#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * Name of another service to fork from. This has effect only when a new service is being created. Example: `anotherservicename`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#service_to_fork_from Grafana#service_to_fork_from}
  */
  readonly serviceToForkFrom?: string;
  /**
  * Use static public IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#static_ips Grafana#static_ips}
  */
  readonly staticIps?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable Grafana unified alerting functionality. By default this is enabled and any legacy alerts will be migrated on upgrade to Grafana 9+. To stay on legacy alerting, set unified_alerting_enabled to false and alerting_enabled to true. See https://grafana.com/docs/grafana/latest/alerting/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#unified_alerting_enabled Grafana#unified_alerting_enabled}
  */
  readonly unifiedAlertingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Auto-assign new users on signup to main organization. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#user_auto_assign_org Grafana#user_auto_assign_org}
  */
  readonly userAutoAssignOrg?: boolean | cdktf.IResolvable;
  /**
  * Enum: `Admin`, `Editor`, `Viewer`. Set role for new signups. Defaults to Viewer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#user_auto_assign_org_role Grafana#user_auto_assign_org_role}
  */
  readonly userAutoAssignOrgRole?: string;
  /**
  * Users with view-only permission can edit but not save dashboards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#viewers_can_edit Grafana#viewers_can_edit}
  */
  readonly viewersCanEdit?: boolean | cdktf.IResolvable;
  /**
  * Setting to enable/disable Write-Ahead Logging. The default value is false (disabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#wal Grafana#wal}
  */
  readonly wal?: boolean | cdktf.IResolvable;
  /**
  * auth_azuread block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#auth_azuread Grafana#auth_azuread}
  */
  readonly authAzuread?: GrafanaGrafanaUserConfigAuthAzuread;
  /**
  * auth_generic_oauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#auth_generic_oauth Grafana#auth_generic_oauth}
  */
  readonly authGenericOauth?: GrafanaGrafanaUserConfigAuthGenericOauth;
  /**
  * auth_github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#auth_github Grafana#auth_github}
  */
  readonly authGithub?: GrafanaGrafanaUserConfigAuthGithub;
  /**
  * auth_gitlab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#auth_gitlab Grafana#auth_gitlab}
  */
  readonly authGitlab?: GrafanaGrafanaUserConfigAuthGitlab;
  /**
  * auth_google block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#auth_google Grafana#auth_google}
  */
  readonly authGoogle?: GrafanaGrafanaUserConfigAuthGoogle;
  /**
  * date_formats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#date_formats Grafana#date_formats}
  */
  readonly dateFormats?: GrafanaGrafanaUserConfigDateFormats;
  /**
  * external_image_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#external_image_storage Grafana#external_image_storage}
  */
  readonly externalImageStorage?: GrafanaGrafanaUserConfigExternalImageStorage;
  /**
  * ip_filter_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#ip_filter_object Grafana#ip_filter_object}
  */
  readonly ipFilterObject?: GrafanaGrafanaUserConfigIpFilterObject[] | cdktf.IResolvable;
  /**
  * private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#private_access Grafana#private_access}
  */
  readonly privateAccess?: GrafanaGrafanaUserConfigPrivateAccess;
  /**
  * privatelink_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#privatelink_access Grafana#privatelink_access}
  */
  readonly privatelinkAccess?: GrafanaGrafanaUserConfigPrivatelinkAccess;
  /**
  * public_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#public_access Grafana#public_access}
  */
  readonly publicAccess?: GrafanaGrafanaUserConfigPublicAccess;
  /**
  * smtp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#smtp_server Grafana#smtp_server}
  */
  readonly smtpServer?: GrafanaGrafanaUserConfigSmtpServer;
}

export function grafanaGrafanaUserConfigToTerraform(struct?: GrafanaGrafanaUserConfigOutputReference | GrafanaGrafanaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_backup_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalBackupRegions),
    alerting_enabled: cdktf.booleanToTerraform(struct!.alertingEnabled),
    alerting_error_or_timeout: cdktf.stringToTerraform(struct!.alertingErrorOrTimeout),
    alerting_max_annotations_to_keep: cdktf.numberToTerraform(struct!.alertingMaxAnnotationsToKeep),
    alerting_nodata_or_nullvalues: cdktf.stringToTerraform(struct!.alertingNodataOrNullvalues),
    allow_embedding: cdktf.booleanToTerraform(struct!.allowEmbedding),
    auth_basic_enabled: cdktf.booleanToTerraform(struct!.authBasicEnabled),
    cookie_samesite: cdktf.stringToTerraform(struct!.cookieSamesite),
    custom_domain: cdktf.stringToTerraform(struct!.customDomain),
    dashboard_previews_enabled: cdktf.booleanToTerraform(struct!.dashboardPreviewsEnabled),
    dashboard_scenes_enabled: cdktf.booleanToTerraform(struct!.dashboardScenesEnabled),
    dashboards_min_refresh_interval: cdktf.stringToTerraform(struct!.dashboardsMinRefreshInterval),
    dashboards_versions_to_keep: cdktf.numberToTerraform(struct!.dashboardsVersionsToKeep),
    dataproxy_send_user_header: cdktf.booleanToTerraform(struct!.dataproxySendUserHeader),
    dataproxy_timeout: cdktf.numberToTerraform(struct!.dataproxyTimeout),
    disable_gravatar: cdktf.booleanToTerraform(struct!.disableGravatar),
    editors_can_admin: cdktf.booleanToTerraform(struct!.editorsCanAdmin),
    google_analytics_ua_id: cdktf.stringToTerraform(struct!.googleAnalyticsUaId),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    ip_filter_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilterString),
    metrics_enabled: cdktf.booleanToTerraform(struct!.metricsEnabled),
    oauth_allow_insecure_email_lookup: cdktf.booleanToTerraform(struct!.oauthAllowInsecureEmailLookup),
    project_to_fork_from: cdktf.stringToTerraform(struct!.projectToForkFrom),
    recovery_basebackup_name: cdktf.stringToTerraform(struct!.recoveryBasebackupName),
    service_log: cdktf.booleanToTerraform(struct!.serviceLog),
    service_to_fork_from: cdktf.stringToTerraform(struct!.serviceToForkFrom),
    static_ips: cdktf.booleanToTerraform(struct!.staticIps),
    unified_alerting_enabled: cdktf.booleanToTerraform(struct!.unifiedAlertingEnabled),
    user_auto_assign_org: cdktf.booleanToTerraform(struct!.userAutoAssignOrg),
    user_auto_assign_org_role: cdktf.stringToTerraform(struct!.userAutoAssignOrgRole),
    viewers_can_edit: cdktf.booleanToTerraform(struct!.viewersCanEdit),
    wal: cdktf.booleanToTerraform(struct!.wal),
    auth_azuread: grafanaGrafanaUserConfigAuthAzureadToTerraform(struct!.authAzuread),
    auth_generic_oauth: grafanaGrafanaUserConfigAuthGenericOauthToTerraform(struct!.authGenericOauth),
    auth_github: grafanaGrafanaUserConfigAuthGithubToTerraform(struct!.authGithub),
    auth_gitlab: grafanaGrafanaUserConfigAuthGitlabToTerraform(struct!.authGitlab),
    auth_google: grafanaGrafanaUserConfigAuthGoogleToTerraform(struct!.authGoogle),
    date_formats: grafanaGrafanaUserConfigDateFormatsToTerraform(struct!.dateFormats),
    external_image_storage: grafanaGrafanaUserConfigExternalImageStorageToTerraform(struct!.externalImageStorage),
    ip_filter_object: cdktf.listMapper(grafanaGrafanaUserConfigIpFilterObjectToTerraform, true)(struct!.ipFilterObject),
    private_access: grafanaGrafanaUserConfigPrivateAccessToTerraform(struct!.privateAccess),
    privatelink_access: grafanaGrafanaUserConfigPrivatelinkAccessToTerraform(struct!.privatelinkAccess),
    public_access: grafanaGrafanaUserConfigPublicAccessToTerraform(struct!.publicAccess),
    smtp_server: grafanaGrafanaUserConfigSmtpServerToTerraform(struct!.smtpServer),
  }
}


export function grafanaGrafanaUserConfigToHclTerraform(struct?: GrafanaGrafanaUserConfigOutputReference | GrafanaGrafanaUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_backup_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalBackupRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    alerting_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.alertingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alerting_error_or_timeout: {
      value: cdktf.stringToHclTerraform(struct!.alertingErrorOrTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alerting_max_annotations_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.alertingMaxAnnotationsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alerting_nodata_or_nullvalues: {
      value: cdktf.stringToHclTerraform(struct!.alertingNodataOrNullvalues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_embedding: {
      value: cdktf.booleanToHclTerraform(struct!.allowEmbedding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_basic_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.authBasicEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie_samesite: {
      value: cdktf.stringToHclTerraform(struct!.cookieSamesite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_domain: {
      value: cdktf.stringToHclTerraform(struct!.customDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dashboard_previews_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dashboardPreviewsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dashboard_scenes_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dashboardScenesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dashboards_min_refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.dashboardsMinRefreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dashboards_versions_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.dashboardsVersionsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dataproxy_send_user_header: {
      value: cdktf.booleanToHclTerraform(struct!.dataproxySendUserHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dataproxy_timeout: {
      value: cdktf.numberToHclTerraform(struct!.dataproxyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_gravatar: {
      value: cdktf.booleanToHclTerraform(struct!.disableGravatar),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    editors_can_admin: {
      value: cdktf.booleanToHclTerraform(struct!.editorsCanAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    google_analytics_ua_id: {
      value: cdktf.stringToHclTerraform(struct!.googleAnalyticsUaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_filter_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilterString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    metrics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.metricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oauth_allow_insecure_email_lookup: {
      value: cdktf.booleanToHclTerraform(struct!.oauthAllowInsecureEmailLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project_to_fork_from: {
      value: cdktf.stringToHclTerraform(struct!.projectToForkFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_basebackup_name: {
      value: cdktf.stringToHclTerraform(struct!.recoveryBasebackupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_log: {
      value: cdktf.booleanToHclTerraform(struct!.serviceLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_to_fork_from: {
      value: cdktf.stringToHclTerraform(struct!.serviceToForkFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ips: {
      value: cdktf.booleanToHclTerraform(struct!.staticIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unified_alerting_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.unifiedAlertingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_auto_assign_org: {
      value: cdktf.booleanToHclTerraform(struct!.userAutoAssignOrg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_auto_assign_org_role: {
      value: cdktf.stringToHclTerraform(struct!.userAutoAssignOrgRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    viewers_can_edit: {
      value: cdktf.booleanToHclTerraform(struct!.viewersCanEdit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wal: {
      value: cdktf.booleanToHclTerraform(struct!.wal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_azuread: {
      value: grafanaGrafanaUserConfigAuthAzureadToHclTerraform(struct!.authAzuread),
      isBlock: true,
      type: "list",
      storageClassType: "GrafanaGrafanaUserConfigAuthAzureadList",
    },
    auth_generic_oauth: {
      value: grafanaGrafanaUserConfigAuthGenericOauthToHclTerraform(struct!.authGenericOauth),
      isBlock: true,
      type: "list",
      storageClassType: "GrafanaGrafanaUserConfigAuthGenericOauthList",
    },
    auth_github: {
      value: grafanaGrafanaUserConfigAuthGithubToHclTerraform(struct!.authGithub),
      isBlock: true,
      type: "list",
      storageClassType: "GrafanaGrafanaUserConfigAuthGithubList",
    },
    auth_gitlab: {
      value: grafanaGrafanaUserConfigAuthGitlabToHclTerraform(struct!.authGitlab),
      isBlock: true,
      type: "list",
      storageClassType: "GrafanaGrafanaUserConfigAuthGitlabList",
    },
    auth_google: {
      value: grafanaGrafanaUserConfigAuthGoogleToHclTerraform(struct!.authGoogle),
      isBlock: true,
      type: "list",
      storageClassType: "GrafanaGrafanaUserConfigAuthGoogleList",
    },
    date_formats: {
      value: grafanaGrafanaUserConfigDateFormatsToHclTerraform(struct!.dateFormats),
      isBlock: true,
      type: "list",
      storageClassType: "GrafanaGrafanaUserConfigDateFormatsList",
    },
    external_image_storage: {
      value: grafanaGrafanaUserConfigExternalImageStorageToHclTerraform(struct!.externalImageStorage),
      isBlock: true,
      type: "list",
      storageClassType: "GrafanaGrafanaUserConfigExternalImageStorageList",
    },
    ip_filter_object: {
      value: cdktf.listMapperHcl(grafanaGrafanaUserConfigIpFilterObjectToHclTerraform, true)(struct!.ipFilterObject),
      isBlock: true,
      type: "set",
      storageClassType: "GrafanaGrafanaUserConfigIpFilterObjectList",
    },
    private_access: {
      value: grafanaGrafanaUserConfigPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "list",
      storageClassType: "GrafanaGrafanaUserConfigPrivateAccessList",
    },
    privatelink_access: {
      value: grafanaGrafanaUserConfigPrivatelinkAccessToHclTerraform(struct!.privatelinkAccess),
      isBlock: true,
      type: "list",
      storageClassType: "GrafanaGrafanaUserConfigPrivatelinkAccessList",
    },
    public_access: {
      value: grafanaGrafanaUserConfigPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "list",
      storageClassType: "GrafanaGrafanaUserConfigPublicAccessList",
    },
    smtp_server: {
      value: grafanaGrafanaUserConfigSmtpServerToHclTerraform(struct!.smtpServer),
      isBlock: true,
      type: "list",
      storageClassType: "GrafanaGrafanaUserConfigSmtpServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaGrafanaUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrafanaGrafanaUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalBackupRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalBackupRegions = this._additionalBackupRegions;
    }
    if (this._alertingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingEnabled = this._alertingEnabled;
    }
    if (this._alertingErrorOrTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingErrorOrTimeout = this._alertingErrorOrTimeout;
    }
    if (this._alertingMaxAnnotationsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingMaxAnnotationsToKeep = this._alertingMaxAnnotationsToKeep;
    }
    if (this._alertingNodataOrNullvalues !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingNodataOrNullvalues = this._alertingNodataOrNullvalues;
    }
    if (this._allowEmbedding !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmbedding = this._allowEmbedding;
    }
    if (this._authBasicEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.authBasicEnabled = this._authBasicEnabled;
    }
    if (this._cookieSamesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieSamesite = this._cookieSamesite;
    }
    if (this._customDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDomain = this._customDomain;
    }
    if (this._dashboardPreviewsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardPreviewsEnabled = this._dashboardPreviewsEnabled;
    }
    if (this._dashboardScenesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardScenesEnabled = this._dashboardScenesEnabled;
    }
    if (this._dashboardsMinRefreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardsMinRefreshInterval = this._dashboardsMinRefreshInterval;
    }
    if (this._dashboardsVersionsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardsVersionsToKeep = this._dashboardsVersionsToKeep;
    }
    if (this._dataproxySendUserHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataproxySendUserHeader = this._dataproxySendUserHeader;
    }
    if (this._dataproxyTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataproxyTimeout = this._dataproxyTimeout;
    }
    if (this._disableGravatar !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableGravatar = this._disableGravatar;
    }
    if (this._editorsCanAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.editorsCanAdmin = this._editorsCanAdmin;
    }
    if (this._googleAnalyticsUaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAnalyticsUaId = this._googleAnalyticsUaId;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._ipFilterString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterString = this._ipFilterString;
    }
    if (this._metricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsEnabled = this._metricsEnabled;
    }
    if (this._oauthAllowInsecureEmailLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthAllowInsecureEmailLookup = this._oauthAllowInsecureEmailLookup;
    }
    if (this._projectToForkFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectToForkFrom = this._projectToForkFrom;
    }
    if (this._recoveryBasebackupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryBasebackupName = this._recoveryBasebackupName;
    }
    if (this._serviceLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLog = this._serviceLog;
    }
    if (this._serviceToForkFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToForkFrom = this._serviceToForkFrom;
    }
    if (this._staticIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIps = this._staticIps;
    }
    if (this._unifiedAlertingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.unifiedAlertingEnabled = this._unifiedAlertingEnabled;
    }
    if (this._userAutoAssignOrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAutoAssignOrg = this._userAutoAssignOrg;
    }
    if (this._userAutoAssignOrgRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAutoAssignOrgRole = this._userAutoAssignOrgRole;
    }
    if (this._viewersCanEdit !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewersCanEdit = this._viewersCanEdit;
    }
    if (this._wal !== undefined) {
      hasAnyValues = true;
      internalValueResult.wal = this._wal;
    }
    if (this._authAzuread?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authAzuread = this._authAzuread?.internalValue;
    }
    if (this._authGenericOauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authGenericOauth = this._authGenericOauth?.internalValue;
    }
    if (this._authGithub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authGithub = this._authGithub?.internalValue;
    }
    if (this._authGitlab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authGitlab = this._authGitlab?.internalValue;
    }
    if (this._authGoogle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authGoogle = this._authGoogle?.internalValue;
    }
    if (this._dateFormats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFormats = this._dateFormats?.internalValue;
    }
    if (this._externalImageStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalImageStorage = this._externalImageStorage?.internalValue;
    }
    if (this._ipFilterObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterObject = this._ipFilterObject?.internalValue;
    }
    if (this._privateAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAccess = this._privateAccess?.internalValue;
    }
    if (this._privatelinkAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatelinkAccess = this._privatelinkAccess?.internalValue;
    }
    if (this._publicAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess?.internalValue;
    }
    if (this._smtpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpServer = this._smtpServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaGrafanaUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalBackupRegions = undefined;
      this._alertingEnabled = undefined;
      this._alertingErrorOrTimeout = undefined;
      this._alertingMaxAnnotationsToKeep = undefined;
      this._alertingNodataOrNullvalues = undefined;
      this._allowEmbedding = undefined;
      this._authBasicEnabled = undefined;
      this._cookieSamesite = undefined;
      this._customDomain = undefined;
      this._dashboardPreviewsEnabled = undefined;
      this._dashboardScenesEnabled = undefined;
      this._dashboardsMinRefreshInterval = undefined;
      this._dashboardsVersionsToKeep = undefined;
      this._dataproxySendUserHeader = undefined;
      this._dataproxyTimeout = undefined;
      this._disableGravatar = undefined;
      this._editorsCanAdmin = undefined;
      this._googleAnalyticsUaId = undefined;
      this._ipFilter = undefined;
      this._ipFilterString = undefined;
      this._metricsEnabled = undefined;
      this._oauthAllowInsecureEmailLookup = undefined;
      this._projectToForkFrom = undefined;
      this._recoveryBasebackupName = undefined;
      this._serviceLog = undefined;
      this._serviceToForkFrom = undefined;
      this._staticIps = undefined;
      this._unifiedAlertingEnabled = undefined;
      this._userAutoAssignOrg = undefined;
      this._userAutoAssignOrgRole = undefined;
      this._viewersCanEdit = undefined;
      this._wal = undefined;
      this._authAzuread.internalValue = undefined;
      this._authGenericOauth.internalValue = undefined;
      this._authGithub.internalValue = undefined;
      this._authGitlab.internalValue = undefined;
      this._authGoogle.internalValue = undefined;
      this._dateFormats.internalValue = undefined;
      this._externalImageStorage.internalValue = undefined;
      this._ipFilterObject.internalValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._privatelinkAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
      this._smtpServer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalBackupRegions = value.additionalBackupRegions;
      this._alertingEnabled = value.alertingEnabled;
      this._alertingErrorOrTimeout = value.alertingErrorOrTimeout;
      this._alertingMaxAnnotationsToKeep = value.alertingMaxAnnotationsToKeep;
      this._alertingNodataOrNullvalues = value.alertingNodataOrNullvalues;
      this._allowEmbedding = value.allowEmbedding;
      this._authBasicEnabled = value.authBasicEnabled;
      this._cookieSamesite = value.cookieSamesite;
      this._customDomain = value.customDomain;
      this._dashboardPreviewsEnabled = value.dashboardPreviewsEnabled;
      this._dashboardScenesEnabled = value.dashboardScenesEnabled;
      this._dashboardsMinRefreshInterval = value.dashboardsMinRefreshInterval;
      this._dashboardsVersionsToKeep = value.dashboardsVersionsToKeep;
      this._dataproxySendUserHeader = value.dataproxySendUserHeader;
      this._dataproxyTimeout = value.dataproxyTimeout;
      this._disableGravatar = value.disableGravatar;
      this._editorsCanAdmin = value.editorsCanAdmin;
      this._googleAnalyticsUaId = value.googleAnalyticsUaId;
      this._ipFilter = value.ipFilter;
      this._ipFilterString = value.ipFilterString;
      this._metricsEnabled = value.metricsEnabled;
      this._oauthAllowInsecureEmailLookup = value.oauthAllowInsecureEmailLookup;
      this._projectToForkFrom = value.projectToForkFrom;
      this._recoveryBasebackupName = value.recoveryBasebackupName;
      this._serviceLog = value.serviceLog;
      this._serviceToForkFrom = value.serviceToForkFrom;
      this._staticIps = value.staticIps;
      this._unifiedAlertingEnabled = value.unifiedAlertingEnabled;
      this._userAutoAssignOrg = value.userAutoAssignOrg;
      this._userAutoAssignOrgRole = value.userAutoAssignOrgRole;
      this._viewersCanEdit = value.viewersCanEdit;
      this._wal = value.wal;
      this._authAzuread.internalValue = value.authAzuread;
      this._authGenericOauth.internalValue = value.authGenericOauth;
      this._authGithub.internalValue = value.authGithub;
      this._authGitlab.internalValue = value.authGitlab;
      this._authGoogle.internalValue = value.authGoogle;
      this._dateFormats.internalValue = value.dateFormats;
      this._externalImageStorage.internalValue = value.externalImageStorage;
      this._ipFilterObject.internalValue = value.ipFilterObject;
      this._privateAccess.internalValue = value.privateAccess;
      this._privatelinkAccess.internalValue = value.privatelinkAccess;
      this._publicAccess.internalValue = value.publicAccess;
      this._smtpServer.internalValue = value.smtpServer;
    }
  }

  // additional_backup_regions - computed: false, optional: true, required: false
  private _additionalBackupRegions?: string[]; 
  public get additionalBackupRegions() {
    return this.getListAttribute('additional_backup_regions');
  }
  public set additionalBackupRegions(value: string[]) {
    this._additionalBackupRegions = value;
  }
  public resetAdditionalBackupRegions() {
    this._additionalBackupRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalBackupRegionsInput() {
    return this._additionalBackupRegions;
  }

  // alerting_enabled - computed: false, optional: true, required: false
  private _alertingEnabled?: boolean | cdktf.IResolvable; 
  public get alertingEnabled() {
    return this.getBooleanAttribute('alerting_enabled');
  }
  public set alertingEnabled(value: boolean | cdktf.IResolvable) {
    this._alertingEnabled = value;
  }
  public resetAlertingEnabled() {
    this._alertingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingEnabledInput() {
    return this._alertingEnabled;
  }

  // alerting_error_or_timeout - computed: false, optional: true, required: false
  private _alertingErrorOrTimeout?: string; 
  public get alertingErrorOrTimeout() {
    return this.getStringAttribute('alerting_error_or_timeout');
  }
  public set alertingErrorOrTimeout(value: string) {
    this._alertingErrorOrTimeout = value;
  }
  public resetAlertingErrorOrTimeout() {
    this._alertingErrorOrTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingErrorOrTimeoutInput() {
    return this._alertingErrorOrTimeout;
  }

  // alerting_max_annotations_to_keep - computed: false, optional: true, required: false
  private _alertingMaxAnnotationsToKeep?: number; 
  public get alertingMaxAnnotationsToKeep() {
    return this.getNumberAttribute('alerting_max_annotations_to_keep');
  }
  public set alertingMaxAnnotationsToKeep(value: number) {
    this._alertingMaxAnnotationsToKeep = value;
  }
  public resetAlertingMaxAnnotationsToKeep() {
    this._alertingMaxAnnotationsToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingMaxAnnotationsToKeepInput() {
    return this._alertingMaxAnnotationsToKeep;
  }

  // alerting_nodata_or_nullvalues - computed: false, optional: true, required: false
  private _alertingNodataOrNullvalues?: string; 
  public get alertingNodataOrNullvalues() {
    return this.getStringAttribute('alerting_nodata_or_nullvalues');
  }
  public set alertingNodataOrNullvalues(value: string) {
    this._alertingNodataOrNullvalues = value;
  }
  public resetAlertingNodataOrNullvalues() {
    this._alertingNodataOrNullvalues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingNodataOrNullvaluesInput() {
    return this._alertingNodataOrNullvalues;
  }

  // allow_embedding - computed: false, optional: true, required: false
  private _allowEmbedding?: boolean | cdktf.IResolvable; 
  public get allowEmbedding() {
    return this.getBooleanAttribute('allow_embedding');
  }
  public set allowEmbedding(value: boolean | cdktf.IResolvable) {
    this._allowEmbedding = value;
  }
  public resetAllowEmbedding() {
    this._allowEmbedding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmbeddingInput() {
    return this._allowEmbedding;
  }

  // auth_basic_enabled - computed: false, optional: true, required: false
  private _authBasicEnabled?: boolean | cdktf.IResolvable; 
  public get authBasicEnabled() {
    return this.getBooleanAttribute('auth_basic_enabled');
  }
  public set authBasicEnabled(value: boolean | cdktf.IResolvable) {
    this._authBasicEnabled = value;
  }
  public resetAuthBasicEnabled() {
    this._authBasicEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authBasicEnabledInput() {
    return this._authBasicEnabled;
  }

  // cookie_samesite - computed: false, optional: true, required: false
  private _cookieSamesite?: string; 
  public get cookieSamesite() {
    return this.getStringAttribute('cookie_samesite');
  }
  public set cookieSamesite(value: string) {
    this._cookieSamesite = value;
  }
  public resetCookieSamesite() {
    this._cookieSamesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieSamesiteInput() {
    return this._cookieSamesite;
  }

  // custom_domain - computed: false, optional: true, required: false
  private _customDomain?: string; 
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }
  public set customDomain(value: string) {
    this._customDomain = value;
  }
  public resetCustomDomain() {
    this._customDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainInput() {
    return this._customDomain;
  }

  // dashboard_previews_enabled - computed: false, optional: true, required: false
  private _dashboardPreviewsEnabled?: boolean | cdktf.IResolvable; 
  public get dashboardPreviewsEnabled() {
    return this.getBooleanAttribute('dashboard_previews_enabled');
  }
  public set dashboardPreviewsEnabled(value: boolean | cdktf.IResolvable) {
    this._dashboardPreviewsEnabled = value;
  }
  public resetDashboardPreviewsEnabled() {
    this._dashboardPreviewsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardPreviewsEnabledInput() {
    return this._dashboardPreviewsEnabled;
  }

  // dashboard_scenes_enabled - computed: false, optional: true, required: false
  private _dashboardScenesEnabled?: boolean | cdktf.IResolvable; 
  public get dashboardScenesEnabled() {
    return this.getBooleanAttribute('dashboard_scenes_enabled');
  }
  public set dashboardScenesEnabled(value: boolean | cdktf.IResolvable) {
    this._dashboardScenesEnabled = value;
  }
  public resetDashboardScenesEnabled() {
    this._dashboardScenesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardScenesEnabledInput() {
    return this._dashboardScenesEnabled;
  }

  // dashboards_min_refresh_interval - computed: false, optional: true, required: false
  private _dashboardsMinRefreshInterval?: string; 
  public get dashboardsMinRefreshInterval() {
    return this.getStringAttribute('dashboards_min_refresh_interval');
  }
  public set dashboardsMinRefreshInterval(value: string) {
    this._dashboardsMinRefreshInterval = value;
  }
  public resetDashboardsMinRefreshInterval() {
    this._dashboardsMinRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardsMinRefreshIntervalInput() {
    return this._dashboardsMinRefreshInterval;
  }

  // dashboards_versions_to_keep - computed: false, optional: true, required: false
  private _dashboardsVersionsToKeep?: number; 
  public get dashboardsVersionsToKeep() {
    return this.getNumberAttribute('dashboards_versions_to_keep');
  }
  public set dashboardsVersionsToKeep(value: number) {
    this._dashboardsVersionsToKeep = value;
  }
  public resetDashboardsVersionsToKeep() {
    this._dashboardsVersionsToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardsVersionsToKeepInput() {
    return this._dashboardsVersionsToKeep;
  }

  // dataproxy_send_user_header - computed: false, optional: true, required: false
  private _dataproxySendUserHeader?: boolean | cdktf.IResolvable; 
  public get dataproxySendUserHeader() {
    return this.getBooleanAttribute('dataproxy_send_user_header');
  }
  public set dataproxySendUserHeader(value: boolean | cdktf.IResolvable) {
    this._dataproxySendUserHeader = value;
  }
  public resetDataproxySendUserHeader() {
    this._dataproxySendUserHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataproxySendUserHeaderInput() {
    return this._dataproxySendUserHeader;
  }

  // dataproxy_timeout - computed: false, optional: true, required: false
  private _dataproxyTimeout?: number; 
  public get dataproxyTimeout() {
    return this.getNumberAttribute('dataproxy_timeout');
  }
  public set dataproxyTimeout(value: number) {
    this._dataproxyTimeout = value;
  }
  public resetDataproxyTimeout() {
    this._dataproxyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataproxyTimeoutInput() {
    return this._dataproxyTimeout;
  }

  // disable_gravatar - computed: false, optional: true, required: false
  private _disableGravatar?: boolean | cdktf.IResolvable; 
  public get disableGravatar() {
    return this.getBooleanAttribute('disable_gravatar');
  }
  public set disableGravatar(value: boolean | cdktf.IResolvable) {
    this._disableGravatar = value;
  }
  public resetDisableGravatar() {
    this._disableGravatar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableGravatarInput() {
    return this._disableGravatar;
  }

  // editors_can_admin - computed: false, optional: true, required: false
  private _editorsCanAdmin?: boolean | cdktf.IResolvable; 
  public get editorsCanAdmin() {
    return this.getBooleanAttribute('editors_can_admin');
  }
  public set editorsCanAdmin(value: boolean | cdktf.IResolvable) {
    this._editorsCanAdmin = value;
  }
  public resetEditorsCanAdmin() {
    this._editorsCanAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editorsCanAdminInput() {
    return this._editorsCanAdmin;
  }

  // google_analytics_ua_id - computed: false, optional: true, required: false
  private _googleAnalyticsUaId?: string; 
  public get googleAnalyticsUaId() {
    return this.getStringAttribute('google_analytics_ua_id');
  }
  public set googleAnalyticsUaId(value: string) {
    this._googleAnalyticsUaId = value;
  }
  public resetGoogleAnalyticsUaId() {
    this._googleAnalyticsUaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAnalyticsUaIdInput() {
    return this._googleAnalyticsUaId;
  }

  // ip_filter - computed: false, optional: true, required: false
  private _ipFilter?: string[]; 
  public get ipFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter'));
  }
  public set ipFilter(value: string[]) {
    this._ipFilter = value;
  }
  public resetIpFilter() {
    this._ipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter;
  }

  // ip_filter_string - computed: false, optional: true, required: false
  private _ipFilterString?: string[]; 
  public get ipFilterString() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter_string'));
  }
  public set ipFilterString(value: string[]) {
    this._ipFilterString = value;
  }
  public resetIpFilterString() {
    this._ipFilterString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterStringInput() {
    return this._ipFilterString;
  }

  // metrics_enabled - computed: false, optional: true, required: false
  private _metricsEnabled?: boolean | cdktf.IResolvable; 
  public get metricsEnabled() {
    return this.getBooleanAttribute('metrics_enabled');
  }
  public set metricsEnabled(value: boolean | cdktf.IResolvable) {
    this._metricsEnabled = value;
  }
  public resetMetricsEnabled() {
    this._metricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEnabledInput() {
    return this._metricsEnabled;
  }

  // oauth_allow_insecure_email_lookup - computed: false, optional: true, required: false
  private _oauthAllowInsecureEmailLookup?: boolean | cdktf.IResolvable; 
  public get oauthAllowInsecureEmailLookup() {
    return this.getBooleanAttribute('oauth_allow_insecure_email_lookup');
  }
  public set oauthAllowInsecureEmailLookup(value: boolean | cdktf.IResolvable) {
    this._oauthAllowInsecureEmailLookup = value;
  }
  public resetOauthAllowInsecureEmailLookup() {
    this._oauthAllowInsecureEmailLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAllowInsecureEmailLookupInput() {
    return this._oauthAllowInsecureEmailLookup;
  }

  // project_to_fork_from - computed: false, optional: true, required: false
  private _projectToForkFrom?: string; 
  public get projectToForkFrom() {
    return this.getStringAttribute('project_to_fork_from');
  }
  public set projectToForkFrom(value: string) {
    this._projectToForkFrom = value;
  }
  public resetProjectToForkFrom() {
    this._projectToForkFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectToForkFromInput() {
    return this._projectToForkFrom;
  }

  // recovery_basebackup_name - computed: false, optional: true, required: false
  private _recoveryBasebackupName?: string; 
  public get recoveryBasebackupName() {
    return this.getStringAttribute('recovery_basebackup_name');
  }
  public set recoveryBasebackupName(value: string) {
    this._recoveryBasebackupName = value;
  }
  public resetRecoveryBasebackupName() {
    this._recoveryBasebackupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryBasebackupNameInput() {
    return this._recoveryBasebackupName;
  }

  // service_log - computed: false, optional: true, required: false
  private _serviceLog?: boolean | cdktf.IResolvable; 
  public get serviceLog() {
    return this.getBooleanAttribute('service_log');
  }
  public set serviceLog(value: boolean | cdktf.IResolvable) {
    this._serviceLog = value;
  }
  public resetServiceLog() {
    this._serviceLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLogInput() {
    return this._serviceLog;
  }

  // service_to_fork_from - computed: false, optional: true, required: false
  private _serviceToForkFrom?: string; 
  public get serviceToForkFrom() {
    return this.getStringAttribute('service_to_fork_from');
  }
  public set serviceToForkFrom(value: string) {
    this._serviceToForkFrom = value;
  }
  public resetServiceToForkFrom() {
    this._serviceToForkFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceToForkFromInput() {
    return this._serviceToForkFrom;
  }

  // static_ips - computed: false, optional: true, required: false
  private _staticIps?: boolean | cdktf.IResolvable; 
  public get staticIps() {
    return this.getBooleanAttribute('static_ips');
  }
  public set staticIps(value: boolean | cdktf.IResolvable) {
    this._staticIps = value;
  }
  public resetStaticIps() {
    this._staticIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpsInput() {
    return this._staticIps;
  }

  // unified_alerting_enabled - computed: false, optional: true, required: false
  private _unifiedAlertingEnabled?: boolean | cdktf.IResolvable; 
  public get unifiedAlertingEnabled() {
    return this.getBooleanAttribute('unified_alerting_enabled');
  }
  public set unifiedAlertingEnabled(value: boolean | cdktf.IResolvable) {
    this._unifiedAlertingEnabled = value;
  }
  public resetUnifiedAlertingEnabled() {
    this._unifiedAlertingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedAlertingEnabledInput() {
    return this._unifiedAlertingEnabled;
  }

  // user_auto_assign_org - computed: false, optional: true, required: false
  private _userAutoAssignOrg?: boolean | cdktf.IResolvable; 
  public get userAutoAssignOrg() {
    return this.getBooleanAttribute('user_auto_assign_org');
  }
  public set userAutoAssignOrg(value: boolean | cdktf.IResolvable) {
    this._userAutoAssignOrg = value;
  }
  public resetUserAutoAssignOrg() {
    this._userAutoAssignOrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAutoAssignOrgInput() {
    return this._userAutoAssignOrg;
  }

  // user_auto_assign_org_role - computed: false, optional: true, required: false
  private _userAutoAssignOrgRole?: string; 
  public get userAutoAssignOrgRole() {
    return this.getStringAttribute('user_auto_assign_org_role');
  }
  public set userAutoAssignOrgRole(value: string) {
    this._userAutoAssignOrgRole = value;
  }
  public resetUserAutoAssignOrgRole() {
    this._userAutoAssignOrgRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAutoAssignOrgRoleInput() {
    return this._userAutoAssignOrgRole;
  }

  // viewers_can_edit - computed: false, optional: true, required: false
  private _viewersCanEdit?: boolean | cdktf.IResolvable; 
  public get viewersCanEdit() {
    return this.getBooleanAttribute('viewers_can_edit');
  }
  public set viewersCanEdit(value: boolean | cdktf.IResolvable) {
    this._viewersCanEdit = value;
  }
  public resetViewersCanEdit() {
    this._viewersCanEdit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewersCanEditInput() {
    return this._viewersCanEdit;
  }

  // wal - computed: false, optional: true, required: false
  private _wal?: boolean | cdktf.IResolvable; 
  public get wal() {
    return this.getBooleanAttribute('wal');
  }
  public set wal(value: boolean | cdktf.IResolvable) {
    this._wal = value;
  }
  public resetWal() {
    this._wal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walInput() {
    return this._wal;
  }

  // auth_azuread - computed: false, optional: true, required: false
  private _authAzuread = new GrafanaGrafanaUserConfigAuthAzureadOutputReference(this, "auth_azuread");
  public get authAzuread() {
    return this._authAzuread;
  }
  public putAuthAzuread(value: GrafanaGrafanaUserConfigAuthAzuread) {
    this._authAzuread.internalValue = value;
  }
  public resetAuthAzuread() {
    this._authAzuread.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAzureadInput() {
    return this._authAzuread.internalValue;
  }

  // auth_generic_oauth - computed: false, optional: true, required: false
  private _authGenericOauth = new GrafanaGrafanaUserConfigAuthGenericOauthOutputReference(this, "auth_generic_oauth");
  public get authGenericOauth() {
    return this._authGenericOauth;
  }
  public putAuthGenericOauth(value: GrafanaGrafanaUserConfigAuthGenericOauth) {
    this._authGenericOauth.internalValue = value;
  }
  public resetAuthGenericOauth() {
    this._authGenericOauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authGenericOauthInput() {
    return this._authGenericOauth.internalValue;
  }

  // auth_github - computed: false, optional: true, required: false
  private _authGithub = new GrafanaGrafanaUserConfigAuthGithubOutputReference(this, "auth_github");
  public get authGithub() {
    return this._authGithub;
  }
  public putAuthGithub(value: GrafanaGrafanaUserConfigAuthGithub) {
    this._authGithub.internalValue = value;
  }
  public resetAuthGithub() {
    this._authGithub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authGithubInput() {
    return this._authGithub.internalValue;
  }

  // auth_gitlab - computed: false, optional: true, required: false
  private _authGitlab = new GrafanaGrafanaUserConfigAuthGitlabOutputReference(this, "auth_gitlab");
  public get authGitlab() {
    return this._authGitlab;
  }
  public putAuthGitlab(value: GrafanaGrafanaUserConfigAuthGitlab) {
    this._authGitlab.internalValue = value;
  }
  public resetAuthGitlab() {
    this._authGitlab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authGitlabInput() {
    return this._authGitlab.internalValue;
  }

  // auth_google - computed: false, optional: true, required: false
  private _authGoogle = new GrafanaGrafanaUserConfigAuthGoogleOutputReference(this, "auth_google");
  public get authGoogle() {
    return this._authGoogle;
  }
  public putAuthGoogle(value: GrafanaGrafanaUserConfigAuthGoogle) {
    this._authGoogle.internalValue = value;
  }
  public resetAuthGoogle() {
    this._authGoogle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authGoogleInput() {
    return this._authGoogle.internalValue;
  }

  // date_formats - computed: false, optional: true, required: false
  private _dateFormats = new GrafanaGrafanaUserConfigDateFormatsOutputReference(this, "date_formats");
  public get dateFormats() {
    return this._dateFormats;
  }
  public putDateFormats(value: GrafanaGrafanaUserConfigDateFormats) {
    this._dateFormats.internalValue = value;
  }
  public resetDateFormats() {
    this._dateFormats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFormatsInput() {
    return this._dateFormats.internalValue;
  }

  // external_image_storage - computed: false, optional: true, required: false
  private _externalImageStorage = new GrafanaGrafanaUserConfigExternalImageStorageOutputReference(this, "external_image_storage");
  public get externalImageStorage() {
    return this._externalImageStorage;
  }
  public putExternalImageStorage(value: GrafanaGrafanaUserConfigExternalImageStorage) {
    this._externalImageStorage.internalValue = value;
  }
  public resetExternalImageStorage() {
    this._externalImageStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalImageStorageInput() {
    return this._externalImageStorage.internalValue;
  }

  // ip_filter_object - computed: false, optional: true, required: false
  private _ipFilterObject = new GrafanaGrafanaUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }
  public putIpFilterObject(value: GrafanaGrafanaUserConfigIpFilterObject[] | cdktf.IResolvable) {
    this._ipFilterObject.internalValue = value;
  }
  public resetIpFilterObject() {
    this._ipFilterObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterObjectInput() {
    return this._ipFilterObject.internalValue;
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess = new GrafanaGrafanaUserConfigPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: GrafanaGrafanaUserConfigPrivateAccess) {
    this._privateAccess.internalValue = value;
  }
  public resetPrivateAccess() {
    this._privateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess.internalValue;
  }

  // privatelink_access - computed: false, optional: true, required: false
  private _privatelinkAccess = new GrafanaGrafanaUserConfigPrivatelinkAccessOutputReference(this, "privatelink_access");
  public get privatelinkAccess() {
    return this._privatelinkAccess;
  }
  public putPrivatelinkAccess(value: GrafanaGrafanaUserConfigPrivatelinkAccess) {
    this._privatelinkAccess.internalValue = value;
  }
  public resetPrivatelinkAccess() {
    this._privatelinkAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatelinkAccessInput() {
    return this._privatelinkAccess.internalValue;
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess = new GrafanaGrafanaUserConfigPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: GrafanaGrafanaUserConfigPublicAccess) {
    this._publicAccess.internalValue = value;
  }
  public resetPublicAccess() {
    this._publicAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess.internalValue;
  }

  // smtp_server - computed: false, optional: true, required: false
  private _smtpServer = new GrafanaGrafanaUserConfigSmtpServerOutputReference(this, "smtp_server");
  public get smtpServer() {
    return this._smtpServer;
  }
  public putSmtpServer(value: GrafanaGrafanaUserConfigSmtpServer) {
    this._smtpServer.internalValue = value;
  }
  public resetSmtpServer() {
    this._smtpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpServerInput() {
    return this._smtpServer.internalValue;
  }
}
export interface GrafanaServiceIntegrations {
  /**
  * Type of the service integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#integration_type Grafana#integration_type}
  */
  readonly integrationType: string;
  /**
  * Name of the source service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#source_service_name Grafana#source_service_name}
  */
  readonly sourceServiceName: string;
}

export function grafanaServiceIntegrationsToTerraform(struct?: GrafanaServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
    source_service_name: cdktf.stringToTerraform(struct!.sourceServiceName),
  }
}


export function grafanaServiceIntegrationsToHclTerraform(struct?: GrafanaServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_type: {
      value: cdktf.stringToHclTerraform(struct!.integrationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_service_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrafanaServiceIntegrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationType = this._integrationType;
    }
    if (this._sourceServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceServiceName = this._sourceServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaServiceIntegrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationType = undefined;
      this._sourceServiceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationType = value.integrationType;
      this._sourceServiceName = value.sourceServiceName;
    }
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }

  // source_service_name - computed: false, optional: false, required: true
  private _sourceServiceName?: string; 
  public get sourceServiceName() {
    return this.getStringAttribute('source_service_name');
  }
  public set sourceServiceName(value: string) {
    this._sourceServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceNameInput() {
    return this._sourceServiceName;
  }
}

export class GrafanaServiceIntegrationsList extends cdktf.ComplexList {
  public internalValue? : GrafanaServiceIntegrations[] | cdktf.IResolvable

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
  public get(index: number): GrafanaServiceIntegrationsOutputReference {
    return new GrafanaServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrafanaTag {
  /**
  * Service tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#key Grafana#key}
  */
  readonly key: string;
  /**
  * Service tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#value Grafana#value}
  */
  readonly value: string;
}

export function grafanaTagToTerraform(struct?: GrafanaTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function grafanaTagToHclTerraform(struct?: GrafanaTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrafanaTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GrafanaTagList extends cdktf.ComplexList {
  public internalValue? : GrafanaTag[] | cdktf.IResolvable

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
  public get(index: number): GrafanaTagOutputReference {
    return new GrafanaTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrafanaTechEmails {
  /**
  * An email address to contact for technical issues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#email Grafana#email}
  */
  readonly email: string;
}

export function grafanaTechEmailsToTerraform(struct?: GrafanaTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function grafanaTechEmailsToHclTerraform(struct?: GrafanaTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrafanaTechEmails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaTechEmails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

export class GrafanaTechEmailsList extends cdktf.ComplexList {
  public internalValue? : GrafanaTechEmails[] | cdktf.IResolvable

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
  public get(index: number): GrafanaTechEmailsOutputReference {
    return new GrafanaTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrafanaTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#create Grafana#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#default Grafana#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#delete Grafana#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#read Grafana#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#update Grafana#update}
  */
  readonly update?: string;
}

export function grafanaTimeoutsToTerraform(struct?: GrafanaTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function grafanaTimeoutsToHclTerraform(struct?: GrafanaTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GrafanaTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana aiven_grafana}
*/
export class Grafana extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_grafana";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Grafana resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Grafana to import
  * @param importFromId The id of the existing Grafana that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Grafana to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_grafana", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/grafana aiven_grafana} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrafanaConfig
  */
  public constructor(scope: Construct, id: string, config: GrafanaConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_grafana',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalDiskSpace = config.additionalDiskSpace;
    this._cloudName = config.cloudName;
    this._diskSpace = config.diskSpace;
    this._id = config.id;
    this._maintenanceWindowDow = config.maintenanceWindowDow;
    this._maintenanceWindowTime = config.maintenanceWindowTime;
    this._plan = config.plan;
    this._project = config.project;
    this._projectVpcId = config.projectVpcId;
    this._serviceName = config.serviceName;
    this._staticIps = config.staticIps;
    this._terminationProtection = config.terminationProtection;
    this._grafana.internalValue = config.grafana;
    this._grafanaUserConfig.internalValue = config.grafanaUserConfig;
    this._serviceIntegrations.internalValue = config.serviceIntegrations;
    this._tag.internalValue = config.tag;
    this._techEmails.internalValue = config.techEmails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_disk_space - computed: true, optional: true, required: false
  private _additionalDiskSpace?: string; 
  public get additionalDiskSpace() {
    return this.getStringAttribute('additional_disk_space');
  }
  public set additionalDiskSpace(value: string) {
    this._additionalDiskSpace = value;
  }
  public resetAdditionalDiskSpace() {
    this._additionalDiskSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDiskSpaceInput() {
    return this._additionalDiskSpace;
  }

  // cloud_name - computed: false, optional: true, required: false
  private _cloudName?: string; 
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }
  public set cloudName(value: string) {
    this._cloudName = value;
  }
  public resetCloudName() {
    this._cloudName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNameInput() {
    return this._cloudName;
  }

  // components - computed: true, optional: false, required: false
  private _components = new GrafanaComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // disk_space - computed: false, optional: true, required: false
  private _diskSpace?: string; 
  public get diskSpace() {
    return this.getStringAttribute('disk_space');
  }
  public set diskSpace(value: string) {
    this._diskSpace = value;
  }
  public resetDiskSpace() {
    this._diskSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSpaceInput() {
    return this._diskSpace;
  }

  // disk_space_cap - computed: true, optional: false, required: false
  public get diskSpaceCap() {
    return this.getStringAttribute('disk_space_cap');
  }

  // disk_space_default - computed: true, optional: false, required: false
  public get diskSpaceDefault() {
    return this.getStringAttribute('disk_space_default');
  }

  // disk_space_step - computed: true, optional: false, required: false
  public get diskSpaceStep() {
    return this.getStringAttribute('disk_space_step');
  }

  // disk_space_used - computed: true, optional: false, required: false
  public get diskSpaceUsed() {
    return this.getStringAttribute('disk_space_used');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // maintenance_window_dow - computed: false, optional: true, required: false
  private _maintenanceWindowDow?: string; 
  public get maintenanceWindowDow() {
    return this.getStringAttribute('maintenance_window_dow');
  }
  public set maintenanceWindowDow(value: string) {
    this._maintenanceWindowDow = value;
  }
  public resetMaintenanceWindowDow() {
    this._maintenanceWindowDow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowDowInput() {
    return this._maintenanceWindowDow;
  }

  // maintenance_window_enabled - computed: true, optional: false, required: false
  public get maintenanceWindowEnabled() {
    return this.getBooleanAttribute('maintenance_window_enabled');
  }

  // maintenance_window_time - computed: false, optional: true, required: false
  private _maintenanceWindowTime?: string; 
  public get maintenanceWindowTime() {
    return this.getStringAttribute('maintenance_window_time');
  }
  public set maintenanceWindowTime(value: string) {
    this._maintenanceWindowTime = value;
  }
  public resetMaintenanceWindowTime() {
    this._maintenanceWindowTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowTimeInput() {
    return this._maintenanceWindowTime;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // project_vpc_id - computed: false, optional: true, required: false
  private _projectVpcId?: string; 
  public get projectVpcId() {
    return this.getStringAttribute('project_vpc_id');
  }
  public set projectVpcId(value: string) {
    this._projectVpcId = value;
  }
  public resetProjectVpcId() {
    this._projectVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectVpcIdInput() {
    return this._projectVpcId;
  }

  // service_host - computed: true, optional: false, required: false
  public get serviceHost() {
    return this.getStringAttribute('service_host');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_password - computed: true, optional: false, required: false
  public get servicePassword() {
    return this.getStringAttribute('service_password');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // service_uri - computed: true, optional: false, required: false
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }

  // service_username - computed: true, optional: false, required: false
  public get serviceUsername() {
    return this.getStringAttribute('service_username');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // static_ips - computed: false, optional: true, required: false
  private _staticIps?: string[]; 
  public get staticIps() {
    return cdktf.Fn.tolist(this.getListAttribute('static_ips'));
  }
  public set staticIps(value: string[]) {
    this._staticIps = value;
  }
  public resetStaticIps() {
    this._staticIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpsInput() {
    return this._staticIps;
  }

  // termination_protection - computed: false, optional: true, required: false
  private _terminationProtection?: boolean | cdktf.IResolvable; 
  public get terminationProtection() {
    return this.getBooleanAttribute('termination_protection');
  }
  public set terminationProtection(value: boolean | cdktf.IResolvable) {
    this._terminationProtection = value;
  }
  public resetTerminationProtection() {
    this._terminationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectionInput() {
    return this._terminationProtection;
  }

  // grafana - computed: false, optional: true, required: false
  private _grafana = new GrafanaGrafanaOutputReference(this, "grafana");
  public get grafana() {
    return this._grafana;
  }
  public putGrafana(value: GrafanaGrafana) {
    this._grafana.internalValue = value;
  }
  public resetGrafana() {
    this._grafana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaInput() {
    return this._grafana.internalValue;
  }

  // grafana_user_config - computed: false, optional: true, required: false
  private _grafanaUserConfig = new GrafanaGrafanaUserConfigOutputReference(this, "grafana_user_config");
  public get grafanaUserConfig() {
    return this._grafanaUserConfig;
  }
  public putGrafanaUserConfig(value: GrafanaGrafanaUserConfig) {
    this._grafanaUserConfig.internalValue = value;
  }
  public resetGrafanaUserConfig() {
    this._grafanaUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaUserConfigInput() {
    return this._grafanaUserConfig.internalValue;
  }

  // service_integrations - computed: false, optional: true, required: false
  private _serviceIntegrations = new GrafanaServiceIntegrationsList(this, "service_integrations", true);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }
  public putServiceIntegrations(value: GrafanaServiceIntegrations[] | cdktf.IResolvable) {
    this._serviceIntegrations.internalValue = value;
  }
  public resetServiceIntegrations() {
    this._serviceIntegrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIntegrationsInput() {
    return this._serviceIntegrations.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new GrafanaTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: GrafanaTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // tech_emails - computed: false, optional: true, required: false
  private _techEmails = new GrafanaTechEmailsList(this, "tech_emails", true);
  public get techEmails() {
    return this._techEmails;
  }
  public putTechEmails(value: GrafanaTechEmails[] | cdktf.IResolvable) {
    this._techEmails.internalValue = value;
  }
  public resetTechEmails() {
    this._techEmails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techEmailsInput() {
    return this._techEmails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GrafanaTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GrafanaTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_disk_space: cdktf.stringToTerraform(this._additionalDiskSpace),
      cloud_name: cdktf.stringToTerraform(this._cloudName),
      disk_space: cdktf.stringToTerraform(this._diskSpace),
      id: cdktf.stringToTerraform(this._id),
      maintenance_window_dow: cdktf.stringToTerraform(this._maintenanceWindowDow),
      maintenance_window_time: cdktf.stringToTerraform(this._maintenanceWindowTime),
      plan: cdktf.stringToTerraform(this._plan),
      project: cdktf.stringToTerraform(this._project),
      project_vpc_id: cdktf.stringToTerraform(this._projectVpcId),
      service_name: cdktf.stringToTerraform(this._serviceName),
      static_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._staticIps),
      termination_protection: cdktf.booleanToTerraform(this._terminationProtection),
      grafana: grafanaGrafanaToTerraform(this._grafana.internalValue),
      grafana_user_config: grafanaGrafanaUserConfigToTerraform(this._grafanaUserConfig.internalValue),
      service_integrations: cdktf.listMapper(grafanaServiceIntegrationsToTerraform, true)(this._serviceIntegrations.internalValue),
      tag: cdktf.listMapper(grafanaTagToTerraform, true)(this._tag.internalValue),
      tech_emails: cdktf.listMapper(grafanaTechEmailsToTerraform, true)(this._techEmails.internalValue),
      timeouts: grafanaTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_disk_space: {
        value: cdktf.stringToHclTerraform(this._additionalDiskSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_name: {
        value: cdktf.stringToHclTerraform(this._cloudName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_space: {
        value: cdktf.stringToHclTerraform(this._diskSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_window_dow: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindowDow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_window_time: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindowTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_vpc_id: {
        value: cdktf.stringToHclTerraform(this._projectVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._staticIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      termination_protection: {
        value: cdktf.booleanToHclTerraform(this._terminationProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grafana: {
        value: grafanaGrafanaToHclTerraform(this._grafana.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrafanaGrafanaList",
      },
      grafana_user_config: {
        value: grafanaGrafanaUserConfigToHclTerraform(this._grafanaUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrafanaGrafanaUserConfigList",
      },
      service_integrations: {
        value: cdktf.listMapperHcl(grafanaServiceIntegrationsToHclTerraform, true)(this._serviceIntegrations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GrafanaServiceIntegrationsList",
      },
      tag: {
        value: cdktf.listMapperHcl(grafanaTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GrafanaTagList",
      },
      tech_emails: {
        value: cdktf.listMapperHcl(grafanaTechEmailsToHclTerraform, true)(this._techEmails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GrafanaTechEmailsList",
      },
      timeouts: {
        value: grafanaTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GrafanaTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
