// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_inter_region_traffic_qos_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCenInterRegionTrafficQosPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_inter_region_traffic_qos_policies#id DataAlicloudCenInterRegionTrafficQosPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_inter_region_traffic_qos_policies#ids DataAlicloudCenInterRegionTrafficQosPolicies#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_inter_region_traffic_qos_policies#name_regex DataAlicloudCenInterRegionTrafficQosPolicies#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_inter_region_traffic_qos_policies#output_file DataAlicloudCenInterRegionTrafficQosPolicies#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_inter_region_traffic_qos_policies#status DataAlicloudCenInterRegionTrafficQosPolicies#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_inter_region_traffic_qos_policies#traffic_qos_policy_description DataAlicloudCenInterRegionTrafficQosPolicies#traffic_qos_policy_description}
  */
  readonly trafficQosPolicyDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_inter_region_traffic_qos_policies#traffic_qos_policy_id DataAlicloudCenInterRegionTrafficQosPolicies#traffic_qos_policy_id}
  */
  readonly trafficQosPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_inter_region_traffic_qos_policies#traffic_qos_policy_name DataAlicloudCenInterRegionTrafficQosPolicies#traffic_qos_policy_name}
  */
  readonly trafficQosPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_inter_region_traffic_qos_policies#transit_router_attachment_id DataAlicloudCenInterRegionTrafficQosPolicies#transit_router_attachment_id}
  */
  readonly transitRouterAttachmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_inter_region_traffic_qos_policies#transit_router_id DataAlicloudCenInterRegionTrafficQosPolicies#transit_router_id}
  */
  readonly transitRouterId: string;
}
export interface DataAlicloudCenInterRegionTrafficQosPoliciesPolicies {
}

export function dataAlicloudCenInterRegionTrafficQosPoliciesPoliciesToTerraform(struct?: DataAlicloudCenInterRegionTrafficQosPoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCenInterRegionTrafficQosPoliciesPoliciesToHclTerraform(struct?: DataAlicloudCenInterRegionTrafficQosPoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCenInterRegionTrafficQosPoliciesPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCenInterRegionTrafficQosPoliciesPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCenInterRegionTrafficQosPoliciesPolicies | undefined) {
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

  // inter_region_traffic_qos_policy_description - computed: true, optional: false, required: false
  public get interRegionTrafficQosPolicyDescription() {
    return this.getStringAttribute('inter_region_traffic_qos_policy_description');
  }

  // inter_region_traffic_qos_policy_id - computed: true, optional: false, required: false
  public get interRegionTrafficQosPolicyId() {
    return this.getStringAttribute('inter_region_traffic_qos_policy_id');
  }

  // inter_region_traffic_qos_policy_name - computed: true, optional: false, required: false
  public get interRegionTrafficQosPolicyName() {
    return this.getStringAttribute('inter_region_traffic_qos_policy_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_router_attachment_id - computed: true, optional: false, required: false
  public get transitRouterAttachmentId() {
    return this.getStringAttribute('transit_router_attachment_id');
  }

  // transit_router_id - computed: true, optional: false, required: false
  public get transitRouterId() {
    return this.getStringAttribute('transit_router_id');
  }
}

export class DataAlicloudCenInterRegionTrafficQosPoliciesPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCenInterRegionTrafficQosPoliciesPoliciesOutputReference {
    return new DataAlicloudCenInterRegionTrafficQosPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_inter_region_traffic_qos_policies alicloud_cen_inter_region_traffic_qos_policies}
*/
export class DataAlicloudCenInterRegionTrafficQosPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_inter_region_traffic_qos_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCenInterRegionTrafficQosPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCenInterRegionTrafficQosPolicies to import
  * @param importFromId The id of the existing DataAlicloudCenInterRegionTrafficQosPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_inter_region_traffic_qos_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCenInterRegionTrafficQosPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_inter_region_traffic_qos_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/cen_inter_region_traffic_qos_policies alicloud_cen_inter_region_traffic_qos_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCenInterRegionTrafficQosPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCenInterRegionTrafficQosPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_inter_region_traffic_qos_policies',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
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
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._status = config.status;
    this._trafficQosPolicyDescription = config.trafficQosPolicyDescription;
    this._trafficQosPolicyId = config.trafficQosPolicyId;
    this._trafficQosPolicyName = config.trafficQosPolicyName;
    this._transitRouterAttachmentId = config.transitRouterAttachmentId;
    this._transitRouterId = config.transitRouterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataAlicloudCenInterRegionTrafficQosPoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // traffic_qos_policy_description - computed: false, optional: true, required: false
  private _trafficQosPolicyDescription?: string; 
  public get trafficQosPolicyDescription() {
    return this.getStringAttribute('traffic_qos_policy_description');
  }
  public set trafficQosPolicyDescription(value: string) {
    this._trafficQosPolicyDescription = value;
  }
  public resetTrafficQosPolicyDescription() {
    this._trafficQosPolicyDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficQosPolicyDescriptionInput() {
    return this._trafficQosPolicyDescription;
  }

  // traffic_qos_policy_id - computed: false, optional: true, required: false
  private _trafficQosPolicyId?: string; 
  public get trafficQosPolicyId() {
    return this.getStringAttribute('traffic_qos_policy_id');
  }
  public set trafficQosPolicyId(value: string) {
    this._trafficQosPolicyId = value;
  }
  public resetTrafficQosPolicyId() {
    this._trafficQosPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficQosPolicyIdInput() {
    return this._trafficQosPolicyId;
  }

  // traffic_qos_policy_name - computed: false, optional: true, required: false
  private _trafficQosPolicyName?: string; 
  public get trafficQosPolicyName() {
    return this.getStringAttribute('traffic_qos_policy_name');
  }
  public set trafficQosPolicyName(value: string) {
    this._trafficQosPolicyName = value;
  }
  public resetTrafficQosPolicyName() {
    this._trafficQosPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficQosPolicyNameInput() {
    return this._trafficQosPolicyName;
  }

  // transit_router_attachment_id - computed: false, optional: false, required: true
  private _transitRouterAttachmentId?: string; 
  public get transitRouterAttachmentId() {
    return this.getStringAttribute('transit_router_attachment_id');
  }
  public set transitRouterAttachmentId(value: string) {
    this._transitRouterAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterAttachmentIdInput() {
    return this._transitRouterAttachmentId;
  }

  // transit_router_id - computed: false, optional: false, required: true
  private _transitRouterId?: string; 
  public get transitRouterId() {
    return this.getStringAttribute('transit_router_id');
  }
  public set transitRouterId(value: string) {
    this._transitRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterIdInput() {
    return this._transitRouterId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
      traffic_qos_policy_description: cdktf.stringToTerraform(this._trafficQosPolicyDescription),
      traffic_qos_policy_id: cdktf.stringToTerraform(this._trafficQosPolicyId),
      traffic_qos_policy_name: cdktf.stringToTerraform(this._trafficQosPolicyName),
      transit_router_attachment_id: cdktf.stringToTerraform(this._transitRouterAttachmentId),
      transit_router_id: cdktf.stringToTerraform(this._transitRouterId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_qos_policy_description: {
        value: cdktf.stringToHclTerraform(this._trafficQosPolicyDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_qos_policy_id: {
        value: cdktf.stringToHclTerraform(this._trafficQosPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_qos_policy_name: {
        value: cdktf.stringToHclTerraform(this._trafficQosPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_attachment_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
