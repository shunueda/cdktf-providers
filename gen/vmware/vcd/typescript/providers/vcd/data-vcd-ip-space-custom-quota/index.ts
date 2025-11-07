// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_custom_quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdIpSpaceCustomQuotaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_custom_quota#id DataVcdIpSpaceCustomQuota#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of IP Space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_custom_quota#ip_space_id DataVcdIpSpaceCustomQuota#ip_space_id}
  */
  readonly ipSpaceId: string;
  /**
  * Organization ID for which custom quota is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_custom_quota#org_id DataVcdIpSpaceCustomQuota#org_id}
  */
  readonly orgId: string;
}
export interface DataVcdIpSpaceCustomQuotaIpPrefixQuota {
}

export function dataVcdIpSpaceCustomQuotaIpPrefixQuotaToTerraform(struct?: DataVcdIpSpaceCustomQuotaIpPrefixQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdIpSpaceCustomQuotaIpPrefixQuotaToHclTerraform(struct?: DataVcdIpSpaceCustomQuotaIpPrefixQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdIpSpaceCustomQuotaIpPrefixQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdIpSpaceCustomQuotaIpPrefixQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdIpSpaceCustomQuotaIpPrefixQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }

  // quota - computed: true, optional: false, required: false
  public get quota() {
    return this.getStringAttribute('quota');
  }
}

export class DataVcdIpSpaceCustomQuotaIpPrefixQuotaList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdIpSpaceCustomQuotaIpPrefixQuotaOutputReference {
    return new DataVcdIpSpaceCustomQuotaIpPrefixQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_custom_quota vcd_ip_space_custom_quota}
*/
export class DataVcdIpSpaceCustomQuota extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_ip_space_custom_quota";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdIpSpaceCustomQuota resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdIpSpaceCustomQuota to import
  * @param importFromId The id of the existing DataVcdIpSpaceCustomQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_custom_quota#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdIpSpaceCustomQuota to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_ip_space_custom_quota", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/ip_space_custom_quota vcd_ip_space_custom_quota} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdIpSpaceCustomQuotaConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdIpSpaceCustomQuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_ip_space_custom_quota',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
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
    this._ipSpaceId = config.ipSpaceId;
    this._orgId = config.orgId;
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

  // ip_prefix_quota - computed: true, optional: false, required: false
  private _ipPrefixQuota = new DataVcdIpSpaceCustomQuotaIpPrefixQuotaList(this, "ip_prefix_quota", true);
  public get ipPrefixQuota() {
    return this._ipPrefixQuota;
  }

  // ip_range_quota - computed: true, optional: false, required: false
  public get ipRangeQuota() {
    return this.getStringAttribute('ip_range_quota');
  }

  // ip_space_id - computed: false, optional: false, required: true
  private _ipSpaceId?: string; 
  public get ipSpaceId() {
    return this.getStringAttribute('ip_space_id');
  }
  public set ipSpaceId(value: string) {
    this._ipSpaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSpaceIdInput() {
    return this._ipSpaceId;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip_space_id: cdktf.stringToTerraform(this._ipSpaceId),
      org_id: cdktf.stringToTerraform(this._orgId),
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
      ip_space_id: {
        value: cdktf.stringToHclTerraform(this._ipSpaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
