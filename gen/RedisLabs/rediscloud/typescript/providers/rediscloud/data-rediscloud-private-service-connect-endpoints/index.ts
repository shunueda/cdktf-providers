// https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/private_service_connect_endpoints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRediscloudPrivateServiceConnectEndpointsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/private_service_connect_endpoints#id DataRediscloudPrivateServiceConnectEndpoints#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the Private Service Connect Service relative to the associated subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/private_service_connect_endpoints#private_service_connect_service_id DataRediscloudPrivateServiceConnectEndpoints#private_service_connect_service_id}
  */
  readonly privateServiceConnectServiceId: number;
  /**
  * The ID of a Pro subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/private_service_connect_endpoints#subscription_id DataRediscloudPrivateServiceConnectEndpoints#subscription_id}
  */
  readonly subscriptionId: string;
}
export interface DataRediscloudPrivateServiceConnectEndpointsEndpointsServiceAttachments {
}

export function dataRediscloudPrivateServiceConnectEndpointsEndpointsServiceAttachmentsToTerraform(struct?: DataRediscloudPrivateServiceConnectEndpointsEndpointsServiceAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudPrivateServiceConnectEndpointsEndpointsServiceAttachmentsToHclTerraform(struct?: DataRediscloudPrivateServiceConnectEndpointsEndpointsServiceAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudPrivateServiceConnectEndpointsEndpointsServiceAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudPrivateServiceConnectEndpointsEndpointsServiceAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudPrivateServiceConnectEndpointsEndpointsServiceAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_record - computed: true, optional: false, required: false
  public get dnsRecord() {
    return this.getStringAttribute('dns_record');
  }

  // forwarding_rule_name - computed: true, optional: false, required: false
  public get forwardingRuleName() {
    return this.getStringAttribute('forwarding_rule_name');
  }

  // ip_address_name - computed: true, optional: false, required: false
  public get ipAddressName() {
    return this.getStringAttribute('ip_address_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataRediscloudPrivateServiceConnectEndpointsEndpointsServiceAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudPrivateServiceConnectEndpointsEndpointsServiceAttachmentsOutputReference {
    return new DataRediscloudPrivateServiceConnectEndpointsEndpointsServiceAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRediscloudPrivateServiceConnectEndpointsEndpoints {
}

export function dataRediscloudPrivateServiceConnectEndpointsEndpointsToTerraform(struct?: DataRediscloudPrivateServiceConnectEndpointsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudPrivateServiceConnectEndpointsEndpointsToHclTerraform(struct?: DataRediscloudPrivateServiceConnectEndpointsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudPrivateServiceConnectEndpointsEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudPrivateServiceConnectEndpointsEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudPrivateServiceConnectEndpointsEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_connection_name - computed: true, optional: false, required: false
  public get endpointConnectionName() {
    return this.getStringAttribute('endpoint_connection_name');
  }

  // gcp_project_id - computed: true, optional: false, required: false
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }

  // gcp_vpc_name - computed: true, optional: false, required: false
  public get gcpVpcName() {
    return this.getStringAttribute('gcp_vpc_name');
  }

  // gcp_vpc_subnet_name - computed: true, optional: false, required: false
  public get gcpVpcSubnetName() {
    return this.getStringAttribute('gcp_vpc_subnet_name');
  }

  // private_service_connect_endpoint_id - computed: true, optional: false, required: false
  public get privateServiceConnectEndpointId() {
    return this.getNumberAttribute('private_service_connect_endpoint_id');
  }

  // service_attachments - computed: true, optional: false, required: false
  private _serviceAttachments = new DataRediscloudPrivateServiceConnectEndpointsEndpointsServiceAttachmentsList(this, "service_attachments", false);
  public get serviceAttachments() {
    return this._serviceAttachments;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataRediscloudPrivateServiceConnectEndpointsEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudPrivateServiceConnectEndpointsEndpointsOutputReference {
    return new DataRediscloudPrivateServiceConnectEndpointsEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/private_service_connect_endpoints rediscloud_private_service_connect_endpoints}
*/
export class DataRediscloudPrivateServiceConnectEndpoints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_private_service_connect_endpoints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRediscloudPrivateServiceConnectEndpoints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRediscloudPrivateServiceConnectEndpoints to import
  * @param importFromId The id of the existing DataRediscloudPrivateServiceConnectEndpoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/private_service_connect_endpoints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRediscloudPrivateServiceConnectEndpoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_private_service_connect_endpoints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/data-sources/private_service_connect_endpoints rediscloud_private_service_connect_endpoints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRediscloudPrivateServiceConnectEndpointsConfig
  */
  public constructor(scope: Construct, id: string, config: DataRediscloudPrivateServiceConnectEndpointsConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_private_service_connect_endpoints',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
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
    this._privateServiceConnectServiceId = config.privateServiceConnectServiceId;
    this._subscriptionId = config.subscriptionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataRediscloudPrivateServiceConnectEndpointsEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
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

  // private_service_connect_service_id - computed: false, optional: false, required: true
  private _privateServiceConnectServiceId?: number; 
  public get privateServiceConnectServiceId() {
    return this.getNumberAttribute('private_service_connect_service_id');
  }
  public set privateServiceConnectServiceId(value: number) {
    this._privateServiceConnectServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateServiceConnectServiceIdInput() {
    return this._privateServiceConnectServiceId;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      private_service_connect_service_id: cdktf.numberToTerraform(this._privateServiceConnectServiceId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
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
      private_service_connect_service_id: {
        value: cdktf.numberToHclTerraform(this._privateServiceConnectServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
