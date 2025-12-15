// https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/private_service_connect_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateServiceConnectEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The endpoint connection name prefix. This prefix that will be used to create the Private Service Connect endpoint in your Google Cloud account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/private_service_connect_endpoint#endpoint_connection_name PrivateServiceConnectEndpoint#endpoint_connection_name}
  */
  readonly endpointConnectionName: string;
  /**
  * The Google Cloud Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/private_service_connect_endpoint#gcp_project_id PrivateServiceConnectEndpoint#gcp_project_id}
  */
  readonly gcpProjectId: string;
  /**
  * The GCP VPC Network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/private_service_connect_endpoint#gcp_vpc_name PrivateServiceConnectEndpoint#gcp_vpc_name}
  */
  readonly gcpVpcName: string;
  /**
  * The GCP Subnet name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/private_service_connect_endpoint#gcp_vpc_subnet_name PrivateServiceConnectEndpoint#gcp_vpc_subnet_name}
  */
  readonly gcpVpcSubnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/private_service_connect_endpoint#id PrivateServiceConnectEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the Private Service Connect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/private_service_connect_endpoint#private_service_connect_service_id PrivateServiceConnectEndpoint#private_service_connect_service_id}
  */
  readonly privateServiceConnectServiceId: number;
  /**
  * The ID of the Pro subscription to attach
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/private_service_connect_endpoint#subscription_id PrivateServiceConnectEndpoint#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/private_service_connect_endpoint#timeouts PrivateServiceConnectEndpoint#timeouts}
  */
  readonly timeouts?: PrivateServiceConnectEndpointTimeouts;
}
export interface PrivateServiceConnectEndpointServiceAttachments {
}

export function privateServiceConnectEndpointServiceAttachmentsToTerraform(struct?: PrivateServiceConnectEndpointServiceAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function privateServiceConnectEndpointServiceAttachmentsToHclTerraform(struct?: PrivateServiceConnectEndpointServiceAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PrivateServiceConnectEndpointServiceAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivateServiceConnectEndpointServiceAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceConnectEndpointServiceAttachments | undefined) {
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

export class PrivateServiceConnectEndpointServiceAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): PrivateServiceConnectEndpointServiceAttachmentsOutputReference {
    return new PrivateServiceConnectEndpointServiceAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivateServiceConnectEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/private_service_connect_endpoint#create PrivateServiceConnectEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/private_service_connect_endpoint#delete PrivateServiceConnectEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/private_service_connect_endpoint#read PrivateServiceConnectEndpoint#read}
  */
  readonly read?: string;
}

export function privateServiceConnectEndpointTimeoutsToTerraform(struct?: PrivateServiceConnectEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function privateServiceConnectEndpointTimeoutsToHclTerraform(struct?: PrivateServiceConnectEndpointTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateServiceConnectEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateServiceConnectEndpointTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateServiceConnectEndpointTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/private_service_connect_endpoint rediscloud_private_service_connect_endpoint}
*/
export class PrivateServiceConnectEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_private_service_connect_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateServiceConnectEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateServiceConnectEndpoint to import
  * @param importFromId The id of the existing PrivateServiceConnectEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/private_service_connect_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateServiceConnectEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_private_service_connect_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/private_service_connect_endpoint rediscloud_private_service_connect_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateServiceConnectEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateServiceConnectEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_private_service_connect_endpoint',
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
    this._endpointConnectionName = config.endpointConnectionName;
    this._gcpProjectId = config.gcpProjectId;
    this._gcpVpcName = config.gcpVpcName;
    this._gcpVpcSubnetName = config.gcpVpcSubnetName;
    this._id = config.id;
    this._privateServiceConnectServiceId = config.privateServiceConnectServiceId;
    this._subscriptionId = config.subscriptionId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_connection_name - computed: false, optional: false, required: true
  private _endpointConnectionName?: string; 
  public get endpointConnectionName() {
    return this.getStringAttribute('endpoint_connection_name');
  }
  public set endpointConnectionName(value: string) {
    this._endpointConnectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConnectionNameInput() {
    return this._endpointConnectionName;
  }

  // gcp_project_id - computed: false, optional: false, required: true
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
  }

  // gcp_vpc_name - computed: false, optional: false, required: true
  private _gcpVpcName?: string; 
  public get gcpVpcName() {
    return this.getStringAttribute('gcp_vpc_name');
  }
  public set gcpVpcName(value: string) {
    this._gcpVpcName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpVpcNameInput() {
    return this._gcpVpcName;
  }

  // gcp_vpc_subnet_name - computed: false, optional: false, required: true
  private _gcpVpcSubnetName?: string; 
  public get gcpVpcSubnetName() {
    return this.getStringAttribute('gcp_vpc_subnet_name');
  }
  public set gcpVpcSubnetName(value: string) {
    this._gcpVpcSubnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpVpcSubnetNameInput() {
    return this._gcpVpcSubnetName;
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

  // private_service_connect_endpoint_id - computed: true, optional: false, required: false
  public get privateServiceConnectEndpointId() {
    return this.getNumberAttribute('private_service_connect_endpoint_id');
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

  // service_attachments - computed: true, optional: false, required: false
  private _serviceAttachments = new PrivateServiceConnectEndpointServiceAttachmentsList(this, "service_attachments", false);
  public get serviceAttachments() {
    return this._serviceAttachments;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivateServiceConnectEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivateServiceConnectEndpointTimeouts) {
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
      endpoint_connection_name: cdktf.stringToTerraform(this._endpointConnectionName),
      gcp_project_id: cdktf.stringToTerraform(this._gcpProjectId),
      gcp_vpc_name: cdktf.stringToTerraform(this._gcpVpcName),
      gcp_vpc_subnet_name: cdktf.stringToTerraform(this._gcpVpcSubnetName),
      id: cdktf.stringToTerraform(this._id),
      private_service_connect_service_id: cdktf.numberToTerraform(this._privateServiceConnectServiceId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      timeouts: privateServiceConnectEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_connection_name: {
        value: cdktf.stringToHclTerraform(this._endpointConnectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_project_id: {
        value: cdktf.stringToHclTerraform(this._gcpProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_vpc_name: {
        value: cdktf.stringToHclTerraform(this._gcpVpcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_vpc_subnet_name: {
        value: cdktf.stringToHclTerraform(this._gcpVpcSubnetName),
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
      timeouts: {
        value: privateServiceConnectEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivateServiceConnectEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
