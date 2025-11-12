// https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/access_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConfluentAccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Access Point, for example, `ap-abc123`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/access_point#id DataConfluentAccessPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/access_point#environment DataConfluentAccessPoint#environment}
  */
  readonly environment: DataConfluentAccessPointEnvironment;
  /**
  * gcp_egress_private_service_connect_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/access_point#gcp_egress_private_service_connect_endpoint DataConfluentAccessPoint#gcp_egress_private_service_connect_endpoint}
  */
  readonly gcpEgressPrivateServiceConnectEndpoint?: DataConfluentAccessPointGcpEgressPrivateServiceConnectEndpoint[] | cdktf.IResolvable;
}
export interface DataConfluentAccessPointAwsEgressPrivateLinkEndpoint {
}

export function dataConfluentAccessPointAwsEgressPrivateLinkEndpointToTerraform(struct?: DataConfluentAccessPointAwsEgressPrivateLinkEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfluentAccessPointAwsEgressPrivateLinkEndpointToHclTerraform(struct?: DataConfluentAccessPointAwsEgressPrivateLinkEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfluentAccessPointAwsEgressPrivateLinkEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfluentAccessPointAwsEgressPrivateLinkEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentAccessPointAwsEgressPrivateLinkEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_high_availability - computed: true, optional: false, required: false
  public get enableHighAvailability() {
    return this.getBooleanAttribute('enable_high_availability');
  }

  // vpc_endpoint_dns_name - computed: true, optional: false, required: false
  public get vpcEndpointDnsName() {
    return this.getStringAttribute('vpc_endpoint_dns_name');
  }

  // vpc_endpoint_id - computed: true, optional: false, required: false
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }

  // vpc_endpoint_service_name - computed: true, optional: false, required: false
  public get vpcEndpointServiceName() {
    return this.getStringAttribute('vpc_endpoint_service_name');
  }
}

export class DataConfluentAccessPointAwsEgressPrivateLinkEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataConfluentAccessPointAwsEgressPrivateLinkEndpointOutputReference {
    return new DataConfluentAccessPointAwsEgressPrivateLinkEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConfluentAccessPointAwsPrivateNetworkInterface {
}

export function dataConfluentAccessPointAwsPrivateNetworkInterfaceToTerraform(struct?: DataConfluentAccessPointAwsPrivateNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfluentAccessPointAwsPrivateNetworkInterfaceToHclTerraform(struct?: DataConfluentAccessPointAwsPrivateNetworkInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfluentAccessPointAwsPrivateNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfluentAccessPointAwsPrivateNetworkInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentAccessPointAwsPrivateNetworkInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // network_interfaces - computed: true, optional: false, required: false
  public get networkInterfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('network_interfaces'));
  }
}

export class DataConfluentAccessPointAwsPrivateNetworkInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataConfluentAccessPointAwsPrivateNetworkInterfaceOutputReference {
    return new DataConfluentAccessPointAwsPrivateNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConfluentAccessPointAzureEgressPrivateLinkEndpoint {
}

export function dataConfluentAccessPointAzureEgressPrivateLinkEndpointToTerraform(struct?: DataConfluentAccessPointAzureEgressPrivateLinkEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfluentAccessPointAzureEgressPrivateLinkEndpointToHclTerraform(struct?: DataConfluentAccessPointAzureEgressPrivateLinkEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfluentAccessPointAzureEgressPrivateLinkEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfluentAccessPointAzureEgressPrivateLinkEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentAccessPointAzureEgressPrivateLinkEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private_endpoint_custom_dns_config_domains - computed: true, optional: false, required: false
  public get privateEndpointCustomDnsConfigDomains() {
    return this.getListAttribute('private_endpoint_custom_dns_config_domains');
  }

  // private_endpoint_domain - computed: true, optional: false, required: false
  public get privateEndpointDomain() {
    return this.getStringAttribute('private_endpoint_domain');
  }

  // private_endpoint_ip_address - computed: true, optional: false, required: false
  public get privateEndpointIpAddress() {
    return this.getStringAttribute('private_endpoint_ip_address');
  }

  // private_endpoint_resource_id - computed: true, optional: false, required: false
  public get privateEndpointResourceId() {
    return this.getStringAttribute('private_endpoint_resource_id');
  }

  // private_link_service_resource_id - computed: true, optional: false, required: false
  public get privateLinkServiceResourceId() {
    return this.getStringAttribute('private_link_service_resource_id');
  }

  // private_link_subresource_name - computed: true, optional: false, required: false
  public get privateLinkSubresourceName() {
    return this.getStringAttribute('private_link_subresource_name');
  }
}

export class DataConfluentAccessPointAzureEgressPrivateLinkEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataConfluentAccessPointAzureEgressPrivateLinkEndpointOutputReference {
    return new DataConfluentAccessPointAzureEgressPrivateLinkEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConfluentAccessPointGateway {
}

export function dataConfluentAccessPointGatewayToTerraform(struct?: DataConfluentAccessPointGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfluentAccessPointGatewayToHclTerraform(struct?: DataConfluentAccessPointGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfluentAccessPointGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfluentAccessPointGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentAccessPointGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataConfluentAccessPointGatewayList extends cdktf.ComplexList {

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
  public get(index: number): DataConfluentAccessPointGatewayOutputReference {
    return new DataConfluentAccessPointGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConfluentAccessPointEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/access_point#id DataConfluentAccessPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataConfluentAccessPointEnvironmentToTerraform(struct?: DataConfluentAccessPointEnvironmentOutputReference | DataConfluentAccessPointEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataConfluentAccessPointEnvironmentToHclTerraform(struct?: DataConfluentAccessPointEnvironmentOutputReference | DataConfluentAccessPointEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataConfluentAccessPointEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataConfluentAccessPointEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentAccessPointEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataConfluentAccessPointGcpEgressPrivateServiceConnectEndpoint {
}

export function dataConfluentAccessPointGcpEgressPrivateServiceConnectEndpointToTerraform(struct?: DataConfluentAccessPointGcpEgressPrivateServiceConnectEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfluentAccessPointGcpEgressPrivateServiceConnectEndpointToHclTerraform(struct?: DataConfluentAccessPointGcpEgressPrivateServiceConnectEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfluentAccessPointGcpEgressPrivateServiceConnectEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfluentAccessPointGcpEgressPrivateServiceConnectEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfluentAccessPointGcpEgressPrivateServiceConnectEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // private_service_connect_endpoint_connection_id - computed: true, optional: false, required: false
  public get privateServiceConnectEndpointConnectionId() {
    return this.getStringAttribute('private_service_connect_endpoint_connection_id');
  }

  // private_service_connect_endpoint_ip_address - computed: true, optional: false, required: false
  public get privateServiceConnectEndpointIpAddress() {
    return this.getStringAttribute('private_service_connect_endpoint_ip_address');
  }

  // private_service_connect_endpoint_name - computed: true, optional: false, required: false
  public get privateServiceConnectEndpointName() {
    return this.getStringAttribute('private_service_connect_endpoint_name');
  }

  // private_service_connect_endpoint_target - computed: true, optional: false, required: false
  public get privateServiceConnectEndpointTarget() {
    return this.getStringAttribute('private_service_connect_endpoint_target');
  }
}

export class DataConfluentAccessPointGcpEgressPrivateServiceConnectEndpointList extends cdktf.ComplexList {
  public internalValue? : DataConfluentAccessPointGcpEgressPrivateServiceConnectEndpoint[] | cdktf.IResolvable

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
  public get(index: number): DataConfluentAccessPointGcpEgressPrivateServiceConnectEndpointOutputReference {
    return new DataConfluentAccessPointGcpEgressPrivateServiceConnectEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/access_point confluent_access_point}
*/
export class DataConfluentAccessPoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_access_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConfluentAccessPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConfluentAccessPoint to import
  * @param importFromId The id of the existing DataConfluentAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/access_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConfluentAccessPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_access_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.51.0/docs/data-sources/access_point confluent_access_point} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConfluentAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: DataConfluentAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_access_point',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.51.0',
        providerVersionConstraint: '2.51.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._environment.internalValue = config.environment;
    this._gcpEgressPrivateServiceConnectEndpoint.internalValue = config.gcpEgressPrivateServiceConnectEndpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_egress_private_link_endpoint - computed: true, optional: false, required: false
  private _awsEgressPrivateLinkEndpoint = new DataConfluentAccessPointAwsEgressPrivateLinkEndpointList(this, "aws_egress_private_link_endpoint", false);
  public get awsEgressPrivateLinkEndpoint() {
    return this._awsEgressPrivateLinkEndpoint;
  }

  // aws_private_network_interface - computed: true, optional: false, required: false
  private _awsPrivateNetworkInterface = new DataConfluentAccessPointAwsPrivateNetworkInterfaceList(this, "aws_private_network_interface", false);
  public get awsPrivateNetworkInterface() {
    return this._awsPrivateNetworkInterface;
  }

  // azure_egress_private_link_endpoint - computed: true, optional: false, required: false
  private _azureEgressPrivateLinkEndpoint = new DataConfluentAccessPointAzureEgressPrivateLinkEndpointList(this, "azure_egress_private_link_endpoint", false);
  public get azureEgressPrivateLinkEndpoint() {
    return this._azureEgressPrivateLinkEndpoint;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // gateway - computed: true, optional: false, required: false
  private _gateway = new DataConfluentAccessPointGatewayList(this, "gateway", false);
  public get gateway() {
    return this._gateway;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // environment - computed: false, optional: false, required: true
  private _environment = new DataConfluentAccessPointEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: DataConfluentAccessPointEnvironment) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // gcp_egress_private_service_connect_endpoint - computed: false, optional: true, required: false
  private _gcpEgressPrivateServiceConnectEndpoint = new DataConfluentAccessPointGcpEgressPrivateServiceConnectEndpointList(this, "gcp_egress_private_service_connect_endpoint", false);
  public get gcpEgressPrivateServiceConnectEndpoint() {
    return this._gcpEgressPrivateServiceConnectEndpoint;
  }
  public putGcpEgressPrivateServiceConnectEndpoint(value: DataConfluentAccessPointGcpEgressPrivateServiceConnectEndpoint[] | cdktf.IResolvable) {
    this._gcpEgressPrivateServiceConnectEndpoint.internalValue = value;
  }
  public resetGcpEgressPrivateServiceConnectEndpoint() {
    this._gcpEgressPrivateServiceConnectEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpEgressPrivateServiceConnectEndpointInput() {
    return this._gcpEgressPrivateServiceConnectEndpoint.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      environment: dataConfluentAccessPointEnvironmentToTerraform(this._environment.internalValue),
      gcp_egress_private_service_connect_endpoint: cdktf.listMapper(dataConfluentAccessPointGcpEgressPrivateServiceConnectEndpointToTerraform, true)(this._gcpEgressPrivateServiceConnectEndpoint.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: dataConfluentAccessPointEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataConfluentAccessPointEnvironmentList",
      },
      gcp_egress_private_service_connect_endpoint: {
        value: cdktf.listMapperHcl(dataConfluentAccessPointGcpEgressPrivateServiceConnectEndpointToHclTerraform, true)(this._gcpEgressPrivateServiceConnectEndpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataConfluentAccessPointGcpEgressPrivateServiceConnectEndpointList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
