// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/gcp_service_attachments_accept_list_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpServiceAttachmentsAcceptListV2Config extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/gcp_service_attachments_accept_list_v2#cdc_id GcpServiceAttachmentsAcceptListV2#cdc_id}
  */
  readonly cdcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/gcp_service_attachments_accept_list_v2#id GcpServiceAttachmentsAcceptListV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates if the cluster is currently performing any operation such as being created, updated, or deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/gcp_service_attachments_accept_list_v2#operation_status GcpServiceAttachmentsAcceptListV2#operation_status}
  */
  readonly operationStatus?: string;
  /**
  * consumer_accept_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/gcp_service_attachments_accept_list_v2#consumer_accept_list GcpServiceAttachmentsAcceptListV2#consumer_accept_list}
  */
  readonly consumerAcceptList: GcpServiceAttachmentsAcceptListV2ConsumerAcceptListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/gcp_service_attachments_accept_list_v2#timeouts GcpServiceAttachmentsAcceptListV2#timeouts}
  */
  readonly timeouts?: GcpServiceAttachmentsAcceptListV2Timeouts;
}
export interface GcpServiceAttachmentsAcceptListV2ConsumerAcceptListStruct {
  /**
  * The accepted network name of the parent project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/gcp_service_attachments_accept_list_v2#accept_network_name GcpServiceAttachmentsAcceptListV2#accept_network_name}
  */
  readonly acceptNetworkName?: string;
  /**
  * The accepted project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/gcp_service_attachments_accept_list_v2#accept_project_id GcpServiceAttachmentsAcceptListV2#accept_project_id}
  */
  readonly acceptProjectId: string;
  /**
  * The connection limit for the project or network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/gcp_service_attachments_accept_list_v2#connection_limit GcpServiceAttachmentsAcceptListV2#connection_limit}
  */
  readonly connectionLimit: number;
}

export function gcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructToTerraform(struct?: GcpServiceAttachmentsAcceptListV2ConsumerAcceptListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_network_name: cdktf.stringToTerraform(struct!.acceptNetworkName),
    accept_project_id: cdktf.stringToTerraform(struct!.acceptProjectId),
    connection_limit: cdktf.numberToTerraform(struct!.connectionLimit),
  }
}


export function gcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructToHclTerraform(struct?: GcpServiceAttachmentsAcceptListV2ConsumerAcceptListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_network_name: {
      value: cdktf.stringToHclTerraform(struct!.acceptNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_project_id: {
      value: cdktf.stringToHclTerraform(struct!.acceptProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_limit: {
      value: cdktf.numberToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcpServiceAttachmentsAcceptListV2ConsumerAcceptListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptNetworkName = this._acceptNetworkName;
    }
    if (this._acceptProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptProjectId = this._acceptProjectId;
    }
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpServiceAttachmentsAcceptListV2ConsumerAcceptListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptNetworkName = undefined;
      this._acceptProjectId = undefined;
      this._connectionLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptNetworkName = value.acceptNetworkName;
      this._acceptProjectId = value.acceptProjectId;
      this._connectionLimit = value.connectionLimit;
    }
  }

  // accept_network_name - computed: false, optional: true, required: false
  private _acceptNetworkName?: string; 
  public get acceptNetworkName() {
    return this.getStringAttribute('accept_network_name');
  }
  public set acceptNetworkName(value: string) {
    this._acceptNetworkName = value;
  }
  public resetAcceptNetworkName() {
    this._acceptNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptNetworkNameInput() {
    return this._acceptNetworkName;
  }

  // accept_project_id - computed: false, optional: false, required: true
  private _acceptProjectId?: string; 
  public get acceptProjectId() {
    return this.getStringAttribute('accept_project_id');
  }
  public set acceptProjectId(value: string) {
    this._acceptProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptProjectIdInput() {
    return this._acceptProjectId;
  }

  // connection_limit - computed: false, optional: false, required: true
  private _connectionLimit?: number; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number) {
    this._connectionLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }
}

export class GcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructList extends cdktf.ComplexList {
  public internalValue? : GcpServiceAttachmentsAcceptListV2ConsumerAcceptListStruct[] | cdktf.IResolvable

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
  public get(index: number): GcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructOutputReference {
    return new GcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcpServiceAttachmentsAcceptListV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/gcp_service_attachments_accept_list_v2#default GcpServiceAttachmentsAcceptListV2#default}
  */
  readonly default?: string;
}

export function gcpServiceAttachmentsAcceptListV2TimeoutsToTerraform(struct?: GcpServiceAttachmentsAcceptListV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function gcpServiceAttachmentsAcceptListV2TimeoutsToHclTerraform(struct?: GcpServiceAttachmentsAcceptListV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpServiceAttachmentsAcceptListV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GcpServiceAttachmentsAcceptListV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpServiceAttachmentsAcceptListV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/gcp_service_attachments_accept_list_v2 instaclustr_gcp_service_attachments_accept_list_v2}
*/
export class GcpServiceAttachmentsAcceptListV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_gcp_service_attachments_accept_list_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpServiceAttachmentsAcceptListV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpServiceAttachmentsAcceptListV2 to import
  * @param importFromId The id of the existing GcpServiceAttachmentsAcceptListV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/gcp_service_attachments_accept_list_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpServiceAttachmentsAcceptListV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_gcp_service_attachments_accept_list_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.36/docs/resources/gcp_service_attachments_accept_list_v2 instaclustr_gcp_service_attachments_accept_list_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpServiceAttachmentsAcceptListV2Config
  */
  public constructor(scope: Construct, id: string, config: GcpServiceAttachmentsAcceptListV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_gcp_service_attachments_accept_list_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.36',
        providerVersionConstraint: '2.1.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cdcId = config.cdcId;
    this._id = config.id;
    this._operationStatus = config.operationStatus;
    this._consumerAcceptList.internalValue = config.consumerAcceptList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdc_id - computed: false, optional: false, required: true
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
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

  // operation_status - computed: true, optional: true, required: false
  private _operationStatus?: string; 
  public get operationStatus() {
    return this.getStringAttribute('operation_status');
  }
  public set operationStatus(value: string) {
    this._operationStatus = value;
  }
  public resetOperationStatus() {
    this._operationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationStatusInput() {
    return this._operationStatus;
  }

  // consumer_accept_list - computed: false, optional: false, required: true
  private _consumerAcceptList = new GcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructList(this, "consumer_accept_list", false);
  public get consumerAcceptList() {
    return this._consumerAcceptList;
  }
  public putConsumerAcceptList(value: GcpServiceAttachmentsAcceptListV2ConsumerAcceptListStruct[] | cdktf.IResolvable) {
    this._consumerAcceptList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerAcceptListInput() {
    return this._consumerAcceptList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GcpServiceAttachmentsAcceptListV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GcpServiceAttachmentsAcceptListV2Timeouts) {
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
      cdc_id: cdktf.stringToTerraform(this._cdcId),
      id: cdktf.stringToTerraform(this._id),
      operation_status: cdktf.stringToTerraform(this._operationStatus),
      consumer_accept_list: cdktf.listMapper(gcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructToTerraform, true)(this._consumerAcceptList.internalValue),
      timeouts: gcpServiceAttachmentsAcceptListV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdc_id: {
        value: cdktf.stringToHclTerraform(this._cdcId),
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
      operation_status: {
        value: cdktf.stringToHclTerraform(this._operationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_accept_list: {
        value: cdktf.listMapperHcl(gcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructToHclTerraform, true)(this._consumerAcceptList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructList",
      },
      timeouts: {
        value: gcpServiceAttachmentsAcceptListV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GcpServiceAttachmentsAcceptListV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
