// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThanosConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add [disk storage](https://aiven.io/docs/platform/howto/add-storage-space) in increments of 30  GiB to scale your service. The maximum value depends on the service type and cloud provider. Removing additional storage causes the service nodes to go through a rolling restart, and there might be a short downtime for services without an autoscaler integration or high availability capabilities. The field can be safely removed when autoscaler is enabled without causing any changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#additional_disk_space Thanos#additional_disk_space}
  */
  readonly additionalDiskSpace?: string;
  /**
  * The cloud provider and region the service is hosted in. The format is `provider-region`, for example: `google-europe-west1`. The [available cloud regions](https://aiven.io/docs/platform/reference/list_of_clouds) can differ per project and service. Changing this value [migrates the service to another cloud provider or region](https://aiven.io/docs/platform/howto/migrate-services-cloud-region). The migration runs in the background and includes a DNS update to redirect traffic to the new region. Most services experience no downtime, but some databases may have a brief interruption during DNS propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#cloud_name Thanos#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * Service disk space. Possible values depend on the service type, the cloud provider and the project. Therefore, reducing will result in the service rebalancing. Please use `additional_disk_space` to specify the space to be added to the default disk space defined by the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#disk_space Thanos#disk_space}
  */
  readonly diskSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#id Thanos#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Day of week when maintenance operations should be performed. One monday, tuesday, wednesday, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#maintenance_window_dow Thanos#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Time of day when maintenance operations should be performed. UTC time in HH:mm:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#maintenance_window_time Thanos#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Defines what kind of computing resources are allocated for the service. It can be changed after creation, though there are some restrictions when going to a smaller plan such as the new plan must have sufficient amount of disk space to store all current data and switching to a plan with fewer nodes might not be supported. The basic plan names are `hobbyist`, `startup-x`, `business-x` and `premium-x` where `x` is (roughly) the amount of memory on each node (also other attributes like number of CPUs and amount of disk space varies but naming is based on memory). The available options can be seen from the [Aiven pricing page](https://aiven.io/pricing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#plan Thanos#plan}
  */
  readonly plan: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#project Thanos#project}
  */
  readonly project: string;
  /**
  * Specifies the VPC the service should run in. If the value is not set, the service runs on the Public Internet. When set, the value should be given as a reference to set up dependencies correctly, and the VPC must be in the same cloud and region as the service itself. The service can be freely moved to and from VPC after creation, but doing so triggers migration to new servers, so the operation can take a significant amount of time to complete if the service has a lot of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#project_vpc_id Thanos#project_vpc_id}
  */
  readonly projectVpcId?: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#service_name Thanos#service_name}
  */
  readonly serviceName: string;
  /**
  * Static IPs that are going to be associated with this service. Please assign a value using the 'toset' function. Once a static ip resource is in the 'assigned' state it cannot be unbound from the node again
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#static_ips Thanos#static_ips}
  */
  readonly staticIps?: string[];
  /**
  * Prevents the service from being deleted. It is recommended to set this to `true` for all production services to prevent unintentional service deletion. This does not shield against deleting databases or topics but for services with backups much of the content can at least be restored from backup in case accidental deletion is done.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#termination_protection Thanos#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * service_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#service_integrations Thanos#service_integrations}
  */
  readonly serviceIntegrations?: ThanosServiceIntegrations[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#tag Thanos#tag}
  */
  readonly tag?: ThanosTag[] | cdktf.IResolvable;
  /**
  * tech_emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#tech_emails Thanos#tech_emails}
  */
  readonly techEmails?: ThanosTechEmails[] | cdktf.IResolvable;
  /**
  * thanos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#thanos Thanos#thanos}
  */
  readonly thanos?: ThanosThanos;
  /**
  * thanos_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#thanos_user_config Thanos#thanos_user_config}
  */
  readonly thanosUserConfig?: ThanosThanosUserConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#timeouts Thanos#timeouts}
  */
  readonly timeouts?: ThanosTimeouts;
}
export interface ThanosComponents {
}

export function thanosComponentsToTerraform(struct?: ThanosComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function thanosComponentsToHclTerraform(struct?: ThanosComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ThanosComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ThanosComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThanosComponents | undefined) {
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

export class ThanosComponentsList extends cdktf.ComplexList {

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
  public get(index: number): ThanosComponentsOutputReference {
    return new ThanosComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThanosServiceIntegrations {
  /**
  * Type of the service integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#integration_type Thanos#integration_type}
  */
  readonly integrationType: string;
  /**
  * Name of the source service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#source_service_name Thanos#source_service_name}
  */
  readonly sourceServiceName: string;
}

export function thanosServiceIntegrationsToTerraform(struct?: ThanosServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
    source_service_name: cdktf.stringToTerraform(struct!.sourceServiceName),
  }
}


export function thanosServiceIntegrationsToHclTerraform(struct?: ThanosServiceIntegrations | cdktf.IResolvable): any {
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

export class ThanosServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ThanosServiceIntegrations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ThanosServiceIntegrations | cdktf.IResolvable | undefined) {
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

export class ThanosServiceIntegrationsList extends cdktf.ComplexList {
  public internalValue? : ThanosServiceIntegrations[] | cdktf.IResolvable

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
  public get(index: number): ThanosServiceIntegrationsOutputReference {
    return new ThanosServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThanosTag {
  /**
  * Service tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#key Thanos#key}
  */
  readonly key: string;
  /**
  * Service tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#value Thanos#value}
  */
  readonly value: string;
}

export function thanosTagToTerraform(struct?: ThanosTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function thanosTagToHclTerraform(struct?: ThanosTag | cdktf.IResolvable): any {
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

export class ThanosTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ThanosTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ThanosTag | cdktf.IResolvable | undefined) {
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

export class ThanosTagList extends cdktf.ComplexList {
  public internalValue? : ThanosTag[] | cdktf.IResolvable

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
  public get(index: number): ThanosTagOutputReference {
    return new ThanosTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThanosTechEmails {
  /**
  * An email address to contact for technical issues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#email Thanos#email}
  */
  readonly email: string;
}

export function thanosTechEmailsToTerraform(struct?: ThanosTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function thanosTechEmailsToHclTerraform(struct?: ThanosTechEmails | cdktf.IResolvable): any {
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

export class ThanosTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ThanosTechEmails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ThanosTechEmails | cdktf.IResolvable | undefined) {
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

export class ThanosTechEmailsList extends cdktf.ComplexList {
  public internalValue? : ThanosTechEmails[] | cdktf.IResolvable

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
  public get(index: number): ThanosTechEmailsOutputReference {
    return new ThanosTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThanosThanos {
  /**
  * Thanos server URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#uris Thanos#uris}
  */
  readonly uris?: string[];
}

export function thanosThanosToTerraform(struct?: ThanosThanosOutputReference | ThanosThanos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function thanosThanosToHclTerraform(struct?: ThanosThanosOutputReference | ThanosThanos): any {
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

export class ThanosThanosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThanosThanos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThanosThanos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uris = value.uris;
    }
  }

  // query_frontend_uri - computed: true, optional: false, required: false
  public get queryFrontendUri() {
    return this.getStringAttribute('query_frontend_uri');
  }

  // query_uri - computed: true, optional: false, required: false
  public get queryUri() {
    return this.getStringAttribute('query_uri');
  }

  // receiver_remote_write_uri - computed: true, optional: false, required: false
  public get receiverRemoteWriteUri() {
    return this.getStringAttribute('receiver_remote_write_uri');
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
export interface ThanosThanosUserConfigCompactor {
  /**
  * Retention time for data in days for each resolution (5m, 1h, raw).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#retention_days Thanos#retention_days}
  */
  readonly retentionDays?: number;
}

export function thanosThanosUserConfigCompactorToTerraform(struct?: ThanosThanosUserConfigCompactorOutputReference | ThanosThanosUserConfigCompactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
  }
}


export function thanosThanosUserConfigCompactorToHclTerraform(struct?: ThanosThanosUserConfigCompactorOutputReference | ThanosThanosUserConfigCompactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThanosThanosUserConfigCompactorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThanosThanosUserConfigCompactor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThanosThanosUserConfigCompactor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionDays = value.retentionDays;
    }
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }
}
export interface ThanosThanosUserConfigIpFilterObject {
  /**
  * Description for IP filter list entry. Example: `Production service IP range`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#description Thanos#description}
  */
  readonly description?: string;
  /**
  * CIDR address block. Example: `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#network Thanos#network}
  */
  readonly network: string;
}

export function thanosThanosUserConfigIpFilterObjectToTerraform(struct?: ThanosThanosUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function thanosThanosUserConfigIpFilterObjectToHclTerraform(struct?: ThanosThanosUserConfigIpFilterObject | cdktf.IResolvable): any {
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

export class ThanosThanosUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ThanosThanosUserConfigIpFilterObject | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ThanosThanosUserConfigIpFilterObject | cdktf.IResolvable | undefined) {
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

export class ThanosThanosUserConfigIpFilterObjectList extends cdktf.ComplexList {
  public internalValue? : ThanosThanosUserConfigIpFilterObject[] | cdktf.IResolvable

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
  public get(index: number): ThanosThanosUserConfigIpFilterObjectOutputReference {
    return new ThanosThanosUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ThanosThanosUserConfigPrivateAccess {
  /**
  * Allow clients to connect to query_frontend with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#query_frontend Thanos#query_frontend}
  */
  readonly queryFrontend?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to receiver_routing with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#receiver_routing Thanos#receiver_routing}
  */
  readonly receiverRouting?: boolean | cdktf.IResolvable;
}

export function thanosThanosUserConfigPrivateAccessToTerraform(struct?: ThanosThanosUserConfigPrivateAccessOutputReference | ThanosThanosUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_frontend: cdktf.booleanToTerraform(struct!.queryFrontend),
    receiver_routing: cdktf.booleanToTerraform(struct!.receiverRouting),
  }
}


export function thanosThanosUserConfigPrivateAccessToHclTerraform(struct?: ThanosThanosUserConfigPrivateAccessOutputReference | ThanosThanosUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_frontend: {
      value: cdktf.booleanToHclTerraform(struct!.queryFrontend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    receiver_routing: {
      value: cdktf.booleanToHclTerraform(struct!.receiverRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThanosThanosUserConfigPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThanosThanosUserConfigPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryFrontend !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFrontend = this._queryFrontend;
    }
    if (this._receiverRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverRouting = this._receiverRouting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThanosThanosUserConfigPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryFrontend = undefined;
      this._receiverRouting = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryFrontend = value.queryFrontend;
      this._receiverRouting = value.receiverRouting;
    }
  }

  // query_frontend - computed: false, optional: true, required: false
  private _queryFrontend?: boolean | cdktf.IResolvable; 
  public get queryFrontend() {
    return this.getBooleanAttribute('query_frontend');
  }
  public set queryFrontend(value: boolean | cdktf.IResolvable) {
    this._queryFrontend = value;
  }
  public resetQueryFrontend() {
    this._queryFrontend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFrontendInput() {
    return this._queryFrontend;
  }

  // receiver_routing - computed: false, optional: true, required: false
  private _receiverRouting?: boolean | cdktf.IResolvable; 
  public get receiverRouting() {
    return this.getBooleanAttribute('receiver_routing');
  }
  public set receiverRouting(value: boolean | cdktf.IResolvable) {
    this._receiverRouting = value;
  }
  public resetReceiverRouting() {
    this._receiverRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverRoutingInput() {
    return this._receiverRouting;
  }
}
export interface ThanosThanosUserConfigPrivatelinkAccess {
  /**
  * Enable query_frontend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#query_frontend Thanos#query_frontend}
  */
  readonly queryFrontend?: boolean | cdktf.IResolvable;
  /**
  * Enable receiver_routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#receiver_routing Thanos#receiver_routing}
  */
  readonly receiverRouting?: boolean | cdktf.IResolvable;
}

export function thanosThanosUserConfigPrivatelinkAccessToTerraform(struct?: ThanosThanosUserConfigPrivatelinkAccessOutputReference | ThanosThanosUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_frontend: cdktf.booleanToTerraform(struct!.queryFrontend),
    receiver_routing: cdktf.booleanToTerraform(struct!.receiverRouting),
  }
}


export function thanosThanosUserConfigPrivatelinkAccessToHclTerraform(struct?: ThanosThanosUserConfigPrivatelinkAccessOutputReference | ThanosThanosUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_frontend: {
      value: cdktf.booleanToHclTerraform(struct!.queryFrontend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    receiver_routing: {
      value: cdktf.booleanToHclTerraform(struct!.receiverRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThanosThanosUserConfigPrivatelinkAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThanosThanosUserConfigPrivatelinkAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryFrontend !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFrontend = this._queryFrontend;
    }
    if (this._receiverRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverRouting = this._receiverRouting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThanosThanosUserConfigPrivatelinkAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryFrontend = undefined;
      this._receiverRouting = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryFrontend = value.queryFrontend;
      this._receiverRouting = value.receiverRouting;
    }
  }

  // query_frontend - computed: false, optional: true, required: false
  private _queryFrontend?: boolean | cdktf.IResolvable; 
  public get queryFrontend() {
    return this.getBooleanAttribute('query_frontend');
  }
  public set queryFrontend(value: boolean | cdktf.IResolvable) {
    this._queryFrontend = value;
  }
  public resetQueryFrontend() {
    this._queryFrontend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFrontendInput() {
    return this._queryFrontend;
  }

  // receiver_routing - computed: false, optional: true, required: false
  private _receiverRouting?: boolean | cdktf.IResolvable; 
  public get receiverRouting() {
    return this.getBooleanAttribute('receiver_routing');
  }
  public set receiverRouting(value: boolean | cdktf.IResolvable) {
    this._receiverRouting = value;
  }
  public resetReceiverRouting() {
    this._receiverRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverRoutingInput() {
    return this._receiverRouting;
  }
}
export interface ThanosThanosUserConfigPublicAccess {
  /**
  * Allow clients to connect to compactor from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#compactor Thanos#compactor}
  */
  readonly compactor?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to query from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#query Thanos#query}
  */
  readonly query?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to query_frontend from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#query_frontend Thanos#query_frontend}
  */
  readonly queryFrontend?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to receiver_ingesting from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#receiver_ingesting Thanos#receiver_ingesting}
  */
  readonly receiverIngesting?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to receiver_routing from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#receiver_routing Thanos#receiver_routing}
  */
  readonly receiverRouting?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to ruler from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#ruler Thanos#ruler}
  */
  readonly ruler?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to store from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#store Thanos#store}
  */
  readonly store?: boolean | cdktf.IResolvable;
}

export function thanosThanosUserConfigPublicAccessToTerraform(struct?: ThanosThanosUserConfigPublicAccessOutputReference | ThanosThanosUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compactor: cdktf.booleanToTerraform(struct!.compactor),
    query: cdktf.booleanToTerraform(struct!.query),
    query_frontend: cdktf.booleanToTerraform(struct!.queryFrontend),
    receiver_ingesting: cdktf.booleanToTerraform(struct!.receiverIngesting),
    receiver_routing: cdktf.booleanToTerraform(struct!.receiverRouting),
    ruler: cdktf.booleanToTerraform(struct!.ruler),
    store: cdktf.booleanToTerraform(struct!.store),
  }
}


export function thanosThanosUserConfigPublicAccessToHclTerraform(struct?: ThanosThanosUserConfigPublicAccessOutputReference | ThanosThanosUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compactor: {
      value: cdktf.booleanToHclTerraform(struct!.compactor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query: {
      value: cdktf.booleanToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_frontend: {
      value: cdktf.booleanToHclTerraform(struct!.queryFrontend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    receiver_ingesting: {
      value: cdktf.booleanToHclTerraform(struct!.receiverIngesting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    receiver_routing: {
      value: cdktf.booleanToHclTerraform(struct!.receiverRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ruler: {
      value: cdktf.booleanToHclTerraform(struct!.ruler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    store: {
      value: cdktf.booleanToHclTerraform(struct!.store),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThanosThanosUserConfigPublicAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThanosThanosUserConfigPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.compactor = this._compactor;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._queryFrontend !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFrontend = this._queryFrontend;
    }
    if (this._receiverIngesting !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverIngesting = this._receiverIngesting;
    }
    if (this._receiverRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverRouting = this._receiverRouting;
    }
    if (this._ruler !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruler = this._ruler;
    }
    if (this._store !== undefined) {
      hasAnyValues = true;
      internalValueResult.store = this._store;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThanosThanosUserConfigPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compactor = undefined;
      this._query = undefined;
      this._queryFrontend = undefined;
      this._receiverIngesting = undefined;
      this._receiverRouting = undefined;
      this._ruler = undefined;
      this._store = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compactor = value.compactor;
      this._query = value.query;
      this._queryFrontend = value.queryFrontend;
      this._receiverIngesting = value.receiverIngesting;
      this._receiverRouting = value.receiverRouting;
      this._ruler = value.ruler;
      this._store = value.store;
    }
  }

  // compactor - computed: false, optional: true, required: false
  private _compactor?: boolean | cdktf.IResolvable; 
  public get compactor() {
    return this.getBooleanAttribute('compactor');
  }
  public set compactor(value: boolean | cdktf.IResolvable) {
    this._compactor = value;
  }
  public resetCompactor() {
    this._compactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactorInput() {
    return this._compactor;
  }

  // query - computed: false, optional: true, required: false
  private _query?: boolean | cdktf.IResolvable; 
  public get query() {
    return this.getBooleanAttribute('query');
  }
  public set query(value: boolean | cdktf.IResolvable) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // query_frontend - computed: false, optional: true, required: false
  private _queryFrontend?: boolean | cdktf.IResolvable; 
  public get queryFrontend() {
    return this.getBooleanAttribute('query_frontend');
  }
  public set queryFrontend(value: boolean | cdktf.IResolvable) {
    this._queryFrontend = value;
  }
  public resetQueryFrontend() {
    this._queryFrontend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFrontendInput() {
    return this._queryFrontend;
  }

  // receiver_ingesting - computed: false, optional: true, required: false
  private _receiverIngesting?: boolean | cdktf.IResolvable; 
  public get receiverIngesting() {
    return this.getBooleanAttribute('receiver_ingesting');
  }
  public set receiverIngesting(value: boolean | cdktf.IResolvable) {
    this._receiverIngesting = value;
  }
  public resetReceiverIngesting() {
    this._receiverIngesting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverIngestingInput() {
    return this._receiverIngesting;
  }

  // receiver_routing - computed: false, optional: true, required: false
  private _receiverRouting?: boolean | cdktf.IResolvable; 
  public get receiverRouting() {
    return this.getBooleanAttribute('receiver_routing');
  }
  public set receiverRouting(value: boolean | cdktf.IResolvable) {
    this._receiverRouting = value;
  }
  public resetReceiverRouting() {
    this._receiverRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverRoutingInput() {
    return this._receiverRouting;
  }

  // ruler - computed: false, optional: true, required: false
  private _ruler?: boolean | cdktf.IResolvable; 
  public get ruler() {
    return this.getBooleanAttribute('ruler');
  }
  public set ruler(value: boolean | cdktf.IResolvable) {
    this._ruler = value;
  }
  public resetRuler() {
    this._ruler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulerInput() {
    return this._ruler;
  }

  // store - computed: false, optional: true, required: false
  private _store?: boolean | cdktf.IResolvable; 
  public get store() {
    return this.getBooleanAttribute('store');
  }
  public set store(value: boolean | cdktf.IResolvable) {
    this._store = value;
  }
  public resetStore() {
    this._store = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInput() {
    return this._store;
  }
}
export interface ThanosThanosUserConfigQuery {
  /**
  * Set the default evaluation interval for subqueries. Default: `1m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#query_default_evaluation_interval Thanos#query_default_evaluation_interval}
  */
  readonly queryDefaultEvaluationInterval?: string;
  /**
  * The maximum lookback duration for retrieving metrics during expression evaluations in PromQL. PromQL always evaluates the query for a certain timestamp, and it looks back for the given amount of time to get the latest sample. If it exceeds the maximum lookback delta, it assumes the series is stale and returns none (a gap). The lookback delta should be set to at least 2 times the slowest scrape interval. If unset, it will use the promql default of 5m. Default: `5m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#query_lookback_delta Thanos#query_lookback_delta}
  */
  readonly queryLookbackDelta?: string;
  /**
  * The default metadata time range duration for retrieving labels through Labels and Series API when the range parameters are not specified. The zero value means the range covers the time since the beginning. Default: `0s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#query_metadata_default_time_range Thanos#query_metadata_default_time_range}
  */
  readonly queryMetadataDefaultTimeRange?: string;
  /**
  * Maximum time to process a query by the query node. Default: `2m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#query_timeout Thanos#query_timeout}
  */
  readonly queryTimeout?: string;
  /**
  * The maximum samples allowed for a single Series request. The Series call fails if this limit is exceeded. Set to 0 for no limit. NOTE: For efficiency, the limit is internally implemented as 'chunks limit' considering each chunk contains a maximum of 120 samples. The default value is 100 * store.limits.request-series. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#store_limits_request_samples Thanos#store_limits_request_samples}
  */
  readonly storeLimitsRequestSamples?: number;
  /**
  * The maximum series allowed for a single Series request. The Series call fails if this limit is exceeded. Set to 0 for no limit. The default value is 1000 * cpu_count. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#store_limits_request_series Thanos#store_limits_request_series}
  */
  readonly storeLimitsRequestSeries?: number;
}

export function thanosThanosUserConfigQueryToTerraform(struct?: ThanosThanosUserConfigQueryOutputReference | ThanosThanosUserConfigQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_default_evaluation_interval: cdktf.stringToTerraform(struct!.queryDefaultEvaluationInterval),
    query_lookback_delta: cdktf.stringToTerraform(struct!.queryLookbackDelta),
    query_metadata_default_time_range: cdktf.stringToTerraform(struct!.queryMetadataDefaultTimeRange),
    query_timeout: cdktf.stringToTerraform(struct!.queryTimeout),
    store_limits_request_samples: cdktf.numberToTerraform(struct!.storeLimitsRequestSamples),
    store_limits_request_series: cdktf.numberToTerraform(struct!.storeLimitsRequestSeries),
  }
}


export function thanosThanosUserConfigQueryToHclTerraform(struct?: ThanosThanosUserConfigQueryOutputReference | ThanosThanosUserConfigQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_default_evaluation_interval: {
      value: cdktf.stringToHclTerraform(struct!.queryDefaultEvaluationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_lookback_delta: {
      value: cdktf.stringToHclTerraform(struct!.queryLookbackDelta),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_metadata_default_time_range: {
      value: cdktf.stringToHclTerraform(struct!.queryMetadataDefaultTimeRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_timeout: {
      value: cdktf.stringToHclTerraform(struct!.queryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_limits_request_samples: {
      value: cdktf.numberToHclTerraform(struct!.storeLimitsRequestSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    store_limits_request_series: {
      value: cdktf.numberToHclTerraform(struct!.storeLimitsRequestSeries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThanosThanosUserConfigQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThanosThanosUserConfigQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryDefaultEvaluationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryDefaultEvaluationInterval = this._queryDefaultEvaluationInterval;
    }
    if (this._queryLookbackDelta !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryLookbackDelta = this._queryLookbackDelta;
    }
    if (this._queryMetadataDefaultTimeRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryMetadataDefaultTimeRange = this._queryMetadataDefaultTimeRange;
    }
    if (this._queryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTimeout = this._queryTimeout;
    }
    if (this._storeLimitsRequestSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeLimitsRequestSamples = this._storeLimitsRequestSamples;
    }
    if (this._storeLimitsRequestSeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeLimitsRequestSeries = this._storeLimitsRequestSeries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThanosThanosUserConfigQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryDefaultEvaluationInterval = undefined;
      this._queryLookbackDelta = undefined;
      this._queryMetadataDefaultTimeRange = undefined;
      this._queryTimeout = undefined;
      this._storeLimitsRequestSamples = undefined;
      this._storeLimitsRequestSeries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryDefaultEvaluationInterval = value.queryDefaultEvaluationInterval;
      this._queryLookbackDelta = value.queryLookbackDelta;
      this._queryMetadataDefaultTimeRange = value.queryMetadataDefaultTimeRange;
      this._queryTimeout = value.queryTimeout;
      this._storeLimitsRequestSamples = value.storeLimitsRequestSamples;
      this._storeLimitsRequestSeries = value.storeLimitsRequestSeries;
    }
  }

  // query_default_evaluation_interval - computed: false, optional: true, required: false
  private _queryDefaultEvaluationInterval?: string; 
  public get queryDefaultEvaluationInterval() {
    return this.getStringAttribute('query_default_evaluation_interval');
  }
  public set queryDefaultEvaluationInterval(value: string) {
    this._queryDefaultEvaluationInterval = value;
  }
  public resetQueryDefaultEvaluationInterval() {
    this._queryDefaultEvaluationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDefaultEvaluationIntervalInput() {
    return this._queryDefaultEvaluationInterval;
  }

  // query_lookback_delta - computed: false, optional: true, required: false
  private _queryLookbackDelta?: string; 
  public get queryLookbackDelta() {
    return this.getStringAttribute('query_lookback_delta');
  }
  public set queryLookbackDelta(value: string) {
    this._queryLookbackDelta = value;
  }
  public resetQueryLookbackDelta() {
    this._queryLookbackDelta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLookbackDeltaInput() {
    return this._queryLookbackDelta;
  }

  // query_metadata_default_time_range - computed: false, optional: true, required: false
  private _queryMetadataDefaultTimeRange?: string; 
  public get queryMetadataDefaultTimeRange() {
    return this.getStringAttribute('query_metadata_default_time_range');
  }
  public set queryMetadataDefaultTimeRange(value: string) {
    this._queryMetadataDefaultTimeRange = value;
  }
  public resetQueryMetadataDefaultTimeRange() {
    this._queryMetadataDefaultTimeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryMetadataDefaultTimeRangeInput() {
    return this._queryMetadataDefaultTimeRange;
  }

  // query_timeout - computed: false, optional: true, required: false
  private _queryTimeout?: string; 
  public get queryTimeout() {
    return this.getStringAttribute('query_timeout');
  }
  public set queryTimeout(value: string) {
    this._queryTimeout = value;
  }
  public resetQueryTimeout() {
    this._queryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTimeoutInput() {
    return this._queryTimeout;
  }

  // store_limits_request_samples - computed: false, optional: true, required: false
  private _storeLimitsRequestSamples?: number; 
  public get storeLimitsRequestSamples() {
    return this.getNumberAttribute('store_limits_request_samples');
  }
  public set storeLimitsRequestSamples(value: number) {
    this._storeLimitsRequestSamples = value;
  }
  public resetStoreLimitsRequestSamples() {
    this._storeLimitsRequestSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeLimitsRequestSamplesInput() {
    return this._storeLimitsRequestSamples;
  }

  // store_limits_request_series - computed: false, optional: true, required: false
  private _storeLimitsRequestSeries?: number; 
  public get storeLimitsRequestSeries() {
    return this.getNumberAttribute('store_limits_request_series');
  }
  public set storeLimitsRequestSeries(value: number) {
    this._storeLimitsRequestSeries = value;
  }
  public resetStoreLimitsRequestSeries() {
    this._storeLimitsRequestSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeLimitsRequestSeriesInput() {
    return this._storeLimitsRequestSeries;
  }
}
export interface ThanosThanosUserConfigQueryFrontend {
  /**
  * Whether to align the query range boundaries with the step. If enabled, the query range boundaries will be aligned to the step, providing more accurate results for queries with high-resolution data. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#query_range_align_range_with_step Thanos#query_range_align_range_with_step}
  */
  readonly queryRangeAlignRangeWithStep?: boolean | cdktf.IResolvable;
}

export function thanosThanosUserConfigQueryFrontendToTerraform(struct?: ThanosThanosUserConfigQueryFrontendOutputReference | ThanosThanosUserConfigQueryFrontend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_range_align_range_with_step: cdktf.booleanToTerraform(struct!.queryRangeAlignRangeWithStep),
  }
}


export function thanosThanosUserConfigQueryFrontendToHclTerraform(struct?: ThanosThanosUserConfigQueryFrontendOutputReference | ThanosThanosUserConfigQueryFrontend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_range_align_range_with_step: {
      value: cdktf.booleanToHclTerraform(struct!.queryRangeAlignRangeWithStep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThanosThanosUserConfigQueryFrontendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThanosThanosUserConfigQueryFrontend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryRangeAlignRangeWithStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryRangeAlignRangeWithStep = this._queryRangeAlignRangeWithStep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThanosThanosUserConfigQueryFrontend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryRangeAlignRangeWithStep = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryRangeAlignRangeWithStep = value.queryRangeAlignRangeWithStep;
    }
  }

  // query_range_align_range_with_step - computed: false, optional: true, required: false
  private _queryRangeAlignRangeWithStep?: boolean | cdktf.IResolvable; 
  public get queryRangeAlignRangeWithStep() {
    return this.getBooleanAttribute('query_range_align_range_with_step');
  }
  public set queryRangeAlignRangeWithStep(value: boolean | cdktf.IResolvable) {
    this._queryRangeAlignRangeWithStep = value;
  }
  public resetQueryRangeAlignRangeWithStep() {
    this._queryRangeAlignRangeWithStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryRangeAlignRangeWithStepInput() {
    return this._queryRangeAlignRangeWithStep;
  }
}
export interface ThanosThanosUserConfig {
  /**
  * Environmental variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#env Thanos#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#ip_filter Thanos#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#ip_filter_string Thanos#ip_filter_string}
  */
  readonly ipFilterString?: string[];
  /**
  * After exceeding the limit a service alert is going to be raised (0 means not set).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#object_storage_usage_alert_threshold_gb Thanos#object_storage_usage_alert_threshold_gb}
  */
  readonly objectStorageUsageAlertThresholdGb?: number;
  /**
  * Common configuration options for Thanos Receive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#receiver_ingesting Thanos#receiver_ingesting}
  */
  readonly receiverIngesting?: { [key: string]: string };
  /**
  * Configuration options for Thanos Receive Routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#receiver_routing Thanos#receiver_routing}
  */
  readonly receiverRouting?: { [key: string]: string };
  /**
  * Configuration options for Thanos Ruler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#ruler Thanos#ruler}
  */
  readonly ruler?: { [key: string]: string };
  /**
  * Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#service_log Thanos#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * Use static public IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#static_ips Thanos#static_ips}
  */
  readonly staticIps?: boolean | cdktf.IResolvable;
  /**
  * Configuration options for Thanos Store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#store Thanos#store}
  */
  readonly store?: { [key: string]: string };
  /**
  * compactor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#compactor Thanos#compactor}
  */
  readonly compactor?: ThanosThanosUserConfigCompactor;
  /**
  * ip_filter_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#ip_filter_object Thanos#ip_filter_object}
  */
  readonly ipFilterObject?: ThanosThanosUserConfigIpFilterObject[] | cdktf.IResolvable;
  /**
  * private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#private_access Thanos#private_access}
  */
  readonly privateAccess?: ThanosThanosUserConfigPrivateAccess;
  /**
  * privatelink_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#privatelink_access Thanos#privatelink_access}
  */
  readonly privatelinkAccess?: ThanosThanosUserConfigPrivatelinkAccess;
  /**
  * public_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#public_access Thanos#public_access}
  */
  readonly publicAccess?: ThanosThanosUserConfigPublicAccess;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#query Thanos#query}
  */
  readonly query?: ThanosThanosUserConfigQuery;
  /**
  * query_frontend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#query_frontend Thanos#query_frontend}
  */
  readonly queryFrontend?: ThanosThanosUserConfigQueryFrontend;
}

export function thanosThanosUserConfigToTerraform(struct?: ThanosThanosUserConfigOutputReference | ThanosThanosUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    ip_filter_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilterString),
    object_storage_usage_alert_threshold_gb: cdktf.numberToTerraform(struct!.objectStorageUsageAlertThresholdGb),
    receiver_ingesting: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.receiverIngesting),
    receiver_routing: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.receiverRouting),
    ruler: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ruler),
    service_log: cdktf.booleanToTerraform(struct!.serviceLog),
    static_ips: cdktf.booleanToTerraform(struct!.staticIps),
    store: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.store),
    compactor: thanosThanosUserConfigCompactorToTerraform(struct!.compactor),
    ip_filter_object: cdktf.listMapper(thanosThanosUserConfigIpFilterObjectToTerraform, true)(struct!.ipFilterObject),
    private_access: thanosThanosUserConfigPrivateAccessToTerraform(struct!.privateAccess),
    privatelink_access: thanosThanosUserConfigPrivatelinkAccessToTerraform(struct!.privatelinkAccess),
    public_access: thanosThanosUserConfigPublicAccessToTerraform(struct!.publicAccess),
    query: thanosThanosUserConfigQueryToTerraform(struct!.query),
    query_frontend: thanosThanosUserConfigQueryFrontendToTerraform(struct!.queryFrontend),
  }
}


export function thanosThanosUserConfigToHclTerraform(struct?: ThanosThanosUserConfigOutputReference | ThanosThanosUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
    object_storage_usage_alert_threshold_gb: {
      value: cdktf.numberToHclTerraform(struct!.objectStorageUsageAlertThresholdGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receiver_ingesting: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.receiverIngesting),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    receiver_routing: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.receiverRouting),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ruler: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ruler),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_log: {
      value: cdktf.booleanToHclTerraform(struct!.serviceLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_ips: {
      value: cdktf.booleanToHclTerraform(struct!.staticIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    store: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.store),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    compactor: {
      value: thanosThanosUserConfigCompactorToHclTerraform(struct!.compactor),
      isBlock: true,
      type: "list",
      storageClassType: "ThanosThanosUserConfigCompactorList",
    },
    ip_filter_object: {
      value: cdktf.listMapperHcl(thanosThanosUserConfigIpFilterObjectToHclTerraform, true)(struct!.ipFilterObject),
      isBlock: true,
      type: "set",
      storageClassType: "ThanosThanosUserConfigIpFilterObjectList",
    },
    private_access: {
      value: thanosThanosUserConfigPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "list",
      storageClassType: "ThanosThanosUserConfigPrivateAccessList",
    },
    privatelink_access: {
      value: thanosThanosUserConfigPrivatelinkAccessToHclTerraform(struct!.privatelinkAccess),
      isBlock: true,
      type: "list",
      storageClassType: "ThanosThanosUserConfigPrivatelinkAccessList",
    },
    public_access: {
      value: thanosThanosUserConfigPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "list",
      storageClassType: "ThanosThanosUserConfigPublicAccessList",
    },
    query: {
      value: thanosThanosUserConfigQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "ThanosThanosUserConfigQueryList",
    },
    query_frontend: {
      value: thanosThanosUserConfigQueryFrontendToHclTerraform(struct!.queryFrontend),
      isBlock: true,
      type: "list",
      storageClassType: "ThanosThanosUserConfigQueryFrontendList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThanosThanosUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ThanosThanosUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._ipFilterString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterString = this._ipFilterString;
    }
    if (this._objectStorageUsageAlertThresholdGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorageUsageAlertThresholdGb = this._objectStorageUsageAlertThresholdGb;
    }
    if (this._receiverIngesting !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverIngesting = this._receiverIngesting;
    }
    if (this._receiverRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverRouting = this._receiverRouting;
    }
    if (this._ruler !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruler = this._ruler;
    }
    if (this._serviceLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLog = this._serviceLog;
    }
    if (this._staticIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIps = this._staticIps;
    }
    if (this._store !== undefined) {
      hasAnyValues = true;
      internalValueResult.store = this._store;
    }
    if (this._compactor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compactor = this._compactor?.internalValue;
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
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._queryFrontend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFrontend = this._queryFrontend?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThanosThanosUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._env = undefined;
      this._ipFilter = undefined;
      this._ipFilterString = undefined;
      this._objectStorageUsageAlertThresholdGb = undefined;
      this._receiverIngesting = undefined;
      this._receiverRouting = undefined;
      this._ruler = undefined;
      this._serviceLog = undefined;
      this._staticIps = undefined;
      this._store = undefined;
      this._compactor.internalValue = undefined;
      this._ipFilterObject.internalValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._privatelinkAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
      this._query.internalValue = undefined;
      this._queryFrontend.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._env = value.env;
      this._ipFilter = value.ipFilter;
      this._ipFilterString = value.ipFilterString;
      this._objectStorageUsageAlertThresholdGb = value.objectStorageUsageAlertThresholdGb;
      this._receiverIngesting = value.receiverIngesting;
      this._receiverRouting = value.receiverRouting;
      this._ruler = value.ruler;
      this._serviceLog = value.serviceLog;
      this._staticIps = value.staticIps;
      this._store = value.store;
      this._compactor.internalValue = value.compactor;
      this._ipFilterObject.internalValue = value.ipFilterObject;
      this._privateAccess.internalValue = value.privateAccess;
      this._privatelinkAccess.internalValue = value.privatelinkAccess;
      this._publicAccess.internalValue = value.publicAccess;
      this._query.internalValue = value.query;
      this._queryFrontend.internalValue = value.queryFrontend;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
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

  // object_storage_usage_alert_threshold_gb - computed: false, optional: true, required: false
  private _objectStorageUsageAlertThresholdGb?: number; 
  public get objectStorageUsageAlertThresholdGb() {
    return this.getNumberAttribute('object_storage_usage_alert_threshold_gb');
  }
  public set objectStorageUsageAlertThresholdGb(value: number) {
    this._objectStorageUsageAlertThresholdGb = value;
  }
  public resetObjectStorageUsageAlertThresholdGb() {
    this._objectStorageUsageAlertThresholdGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageUsageAlertThresholdGbInput() {
    return this._objectStorageUsageAlertThresholdGb;
  }

  // receiver_ingesting - computed: false, optional: true, required: false
  private _receiverIngesting?: { [key: string]: string }; 
  public get receiverIngesting() {
    return this.getStringMapAttribute('receiver_ingesting');
  }
  public set receiverIngesting(value: { [key: string]: string }) {
    this._receiverIngesting = value;
  }
  public resetReceiverIngesting() {
    this._receiverIngesting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverIngestingInput() {
    return this._receiverIngesting;
  }

  // receiver_routing - computed: false, optional: true, required: false
  private _receiverRouting?: { [key: string]: string }; 
  public get receiverRouting() {
    return this.getStringMapAttribute('receiver_routing');
  }
  public set receiverRouting(value: { [key: string]: string }) {
    this._receiverRouting = value;
  }
  public resetReceiverRouting() {
    this._receiverRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverRoutingInput() {
    return this._receiverRouting;
  }

  // ruler - computed: false, optional: true, required: false
  private _ruler?: { [key: string]: string }; 
  public get ruler() {
    return this.getStringMapAttribute('ruler');
  }
  public set ruler(value: { [key: string]: string }) {
    this._ruler = value;
  }
  public resetRuler() {
    this._ruler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulerInput() {
    return this._ruler;
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

  // store - computed: false, optional: true, required: false
  private _store?: { [key: string]: string }; 
  public get store() {
    return this.getStringMapAttribute('store');
  }
  public set store(value: { [key: string]: string }) {
    this._store = value;
  }
  public resetStore() {
    this._store = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInput() {
    return this._store;
  }

  // compactor - computed: false, optional: true, required: false
  private _compactor = new ThanosThanosUserConfigCompactorOutputReference(this, "compactor");
  public get compactor() {
    return this._compactor;
  }
  public putCompactor(value: ThanosThanosUserConfigCompactor) {
    this._compactor.internalValue = value;
  }
  public resetCompactor() {
    this._compactor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactorInput() {
    return this._compactor.internalValue;
  }

  // ip_filter_object - computed: false, optional: true, required: false
  private _ipFilterObject = new ThanosThanosUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }
  public putIpFilterObject(value: ThanosThanosUserConfigIpFilterObject[] | cdktf.IResolvable) {
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
  private _privateAccess = new ThanosThanosUserConfigPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: ThanosThanosUserConfigPrivateAccess) {
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
  private _privatelinkAccess = new ThanosThanosUserConfigPrivatelinkAccessOutputReference(this, "privatelink_access");
  public get privatelinkAccess() {
    return this._privatelinkAccess;
  }
  public putPrivatelinkAccess(value: ThanosThanosUserConfigPrivatelinkAccess) {
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
  private _publicAccess = new ThanosThanosUserConfigPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: ThanosThanosUserConfigPublicAccess) {
    this._publicAccess.internalValue = value;
  }
  public resetPublicAccess() {
    this._publicAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new ThanosThanosUserConfigQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: ThanosThanosUserConfigQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // query_frontend - computed: false, optional: true, required: false
  private _queryFrontend = new ThanosThanosUserConfigQueryFrontendOutputReference(this, "query_frontend");
  public get queryFrontend() {
    return this._queryFrontend;
  }
  public putQueryFrontend(value: ThanosThanosUserConfigQueryFrontend) {
    this._queryFrontend.internalValue = value;
  }
  public resetQueryFrontend() {
    this._queryFrontend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFrontendInput() {
    return this._queryFrontend.internalValue;
  }
}
export interface ThanosTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#create Thanos#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#default Thanos#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#delete Thanos#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#read Thanos#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#update Thanos#update}
  */
  readonly update?: string;
}

export function thanosTimeoutsToTerraform(struct?: ThanosTimeouts | cdktf.IResolvable): any {
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


export function thanosTimeoutsToHclTerraform(struct?: ThanosTimeouts | cdktf.IResolvable): any {
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

export class ThanosTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThanosTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ThanosTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos aiven_thanos}
*/
export class Thanos extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_thanos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Thanos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Thanos to import
  * @param importFromId The id of the existing Thanos that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Thanos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_thanos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/thanos aiven_thanos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThanosConfig
  */
  public constructor(scope: Construct, id: string, config: ThanosConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_thanos',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1',
        providerVersionConstraint: '4.46.1'
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
    this._serviceIntegrations.internalValue = config.serviceIntegrations;
    this._tag.internalValue = config.tag;
    this._techEmails.internalValue = config.techEmails;
    this._thanos.internalValue = config.thanos;
    this._thanosUserConfig.internalValue = config.thanosUserConfig;
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
  private _components = new ThanosComponentsList(this, "components", false);
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

  // service_integrations - computed: false, optional: true, required: false
  private _serviceIntegrations = new ThanosServiceIntegrationsList(this, "service_integrations", true);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }
  public putServiceIntegrations(value: ThanosServiceIntegrations[] | cdktf.IResolvable) {
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
  private _tag = new ThanosTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ThanosTag[] | cdktf.IResolvable) {
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
  private _techEmails = new ThanosTechEmailsList(this, "tech_emails", true);
  public get techEmails() {
    return this._techEmails;
  }
  public putTechEmails(value: ThanosTechEmails[] | cdktf.IResolvable) {
    this._techEmails.internalValue = value;
  }
  public resetTechEmails() {
    this._techEmails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techEmailsInput() {
    return this._techEmails.internalValue;
  }

  // thanos - computed: false, optional: true, required: false
  private _thanos = new ThanosThanosOutputReference(this, "thanos");
  public get thanos() {
    return this._thanos;
  }
  public putThanos(value: ThanosThanos) {
    this._thanos.internalValue = value;
  }
  public resetThanos() {
    this._thanos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thanosInput() {
    return this._thanos.internalValue;
  }

  // thanos_user_config - computed: false, optional: true, required: false
  private _thanosUserConfig = new ThanosThanosUserConfigOutputReference(this, "thanos_user_config");
  public get thanosUserConfig() {
    return this._thanosUserConfig;
  }
  public putThanosUserConfig(value: ThanosThanosUserConfig) {
    this._thanosUserConfig.internalValue = value;
  }
  public resetThanosUserConfig() {
    this._thanosUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thanosUserConfigInput() {
    return this._thanosUserConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ThanosTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ThanosTimeouts) {
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
      service_integrations: cdktf.listMapper(thanosServiceIntegrationsToTerraform, true)(this._serviceIntegrations.internalValue),
      tag: cdktf.listMapper(thanosTagToTerraform, true)(this._tag.internalValue),
      tech_emails: cdktf.listMapper(thanosTechEmailsToTerraform, true)(this._techEmails.internalValue),
      thanos: thanosThanosToTerraform(this._thanos.internalValue),
      thanos_user_config: thanosThanosUserConfigToTerraform(this._thanosUserConfig.internalValue),
      timeouts: thanosTimeoutsToTerraform(this._timeouts.internalValue),
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
      service_integrations: {
        value: cdktf.listMapperHcl(thanosServiceIntegrationsToHclTerraform, true)(this._serviceIntegrations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ThanosServiceIntegrationsList",
      },
      tag: {
        value: cdktf.listMapperHcl(thanosTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ThanosTagList",
      },
      tech_emails: {
        value: cdktf.listMapperHcl(thanosTechEmailsToHclTerraform, true)(this._techEmails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ThanosTechEmailsList",
      },
      thanos: {
        value: thanosThanosToHclTerraform(this._thanos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ThanosThanosList",
      },
      thanos_user_config: {
        value: thanosThanosUserConfigToHclTerraform(this._thanosUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ThanosThanosUserConfigList",
      },
      timeouts: {
        value: thanosTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThanosTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
