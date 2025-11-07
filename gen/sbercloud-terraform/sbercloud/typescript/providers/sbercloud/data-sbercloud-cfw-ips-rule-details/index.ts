// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_ips_rule_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSbercloudCfwIpsRuleDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the firewall ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_ips_rule_details#fw_instance_id DataSbercloudCfwIpsRuleDetails#fw_instance_id}
  */
  readonly fwInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_ips_rule_details#id DataSbercloudCfwIpsRuleDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the region in which to query the resource. If omitted, the provider-level region will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_ips_rule_details#region DataSbercloudCfwIpsRuleDetails#region}
  */
  readonly region?: string;
}
export interface DataSbercloudCfwIpsRuleDetailsData {
}

export function dataSbercloudCfwIpsRuleDetailsDataToTerraform(struct?: DataSbercloudCfwIpsRuleDetailsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudCfwIpsRuleDetailsDataToHclTerraform(struct?: DataSbercloudCfwIpsRuleDetailsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudCfwIpsRuleDetailsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudCfwIpsRuleDetailsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudCfwIpsRuleDetailsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ips_type - computed: true, optional: false, required: false
  public get ipsType() {
    return this.getNumberAttribute('ips_type');
  }

  // ips_version - computed: true, optional: false, required: false
  public get ipsVersion() {
    return this.getStringAttribute('ips_version');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataSbercloudCfwIpsRuleDetailsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudCfwIpsRuleDetailsDataOutputReference {
    return new DataSbercloudCfwIpsRuleDetailsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_ips_rule_details sbercloud_cfw_ips_rule_details}
*/
export class DataSbercloudCfwIpsRuleDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_cfw_ips_rule_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSbercloudCfwIpsRuleDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSbercloudCfwIpsRuleDetails to import
  * @param importFromId The id of the existing DataSbercloudCfwIpsRuleDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_ips_rule_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSbercloudCfwIpsRuleDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_cfw_ips_rule_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_ips_rule_details sbercloud_cfw_ips_rule_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSbercloudCfwIpsRuleDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataSbercloudCfwIpsRuleDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_cfw_ips_rule_details',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fwInstanceId = config.fwInstanceId;
    this._id = config.id;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataSbercloudCfwIpsRuleDetailsDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // fw_instance_id - computed: false, optional: false, required: true
  private _fwInstanceId?: string; 
  public get fwInstanceId() {
    return this.getStringAttribute('fw_instance_id');
  }
  public set fwInstanceId(value: string) {
    this._fwInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fwInstanceIdInput() {
    return this._fwInstanceId;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fw_instance_id: cdktf.stringToTerraform(this._fwInstanceId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fw_instance_id: {
        value: cdktf.stringToHclTerraform(this._fwInstanceId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
