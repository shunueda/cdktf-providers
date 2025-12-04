// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_host_groups_v5
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudHssHostGroupsV5Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_host_groups_v5#group_id DataOpentelekomcloudHssHostGroupsV5#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_host_groups_v5#host_num DataOpentelekomcloudHssHostGroupsV5#host_num}
  */
  readonly hostNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_host_groups_v5#id DataOpentelekomcloudHssHostGroupsV5#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_host_groups_v5#name DataOpentelekomcloudHssHostGroupsV5#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_host_groups_v5#risk_host_num DataOpentelekomcloudHssHostGroupsV5#risk_host_num}
  */
  readonly riskHostNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_host_groups_v5#unprotect_host_num DataOpentelekomcloudHssHostGroupsV5#unprotect_host_num}
  */
  readonly unprotectHostNum?: string;
}
export interface DataOpentelekomcloudHssHostGroupsV5Groups {
}

export function dataOpentelekomcloudHssHostGroupsV5GroupsToTerraform(struct?: DataOpentelekomcloudHssHostGroupsV5Groups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudHssHostGroupsV5GroupsToHclTerraform(struct?: DataOpentelekomcloudHssHostGroupsV5Groups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudHssHostGroupsV5Groups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudHssHostGroupsV5Groups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_ids - computed: true, optional: false, required: false
  public get hostIds() {
    return this.getListAttribute('host_ids');
  }

  // host_num - computed: true, optional: false, required: false
  public get hostNum() {
    return this.getNumberAttribute('host_num');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // risk_host_num - computed: true, optional: false, required: false
  public get riskHostNum() {
    return this.getNumberAttribute('risk_host_num');
  }

  // unprotect_host_num - computed: true, optional: false, required: false
  public get unprotectHostNum() {
    return this.getNumberAttribute('unprotect_host_num');
  }
}

export class DataOpentelekomcloudHssHostGroupsV5GroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference {
    return new DataOpentelekomcloudHssHostGroupsV5GroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_host_groups_v5 opentelekomcloud_hss_host_groups_v5}
*/
export class DataOpentelekomcloudHssHostGroupsV5 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_hss_host_groups_v5";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpentelekomcloudHssHostGroupsV5 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpentelekomcloudHssHostGroupsV5 to import
  * @param importFromId The id of the existing DataOpentelekomcloudHssHostGroupsV5 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_host_groups_v5#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpentelekomcloudHssHostGroupsV5 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_hss_host_groups_v5", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/hss_host_groups_v5 opentelekomcloud_hss_host_groups_v5} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudHssHostGroupsV5Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudHssHostGroupsV5Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_hss_host_groups_v5',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.54',
        providerVersionConstraint: '1.36.54'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._hostNum = config.hostNum;
    this._id = config.id;
    this._name = config.name;
    this._riskHostNum = config.riskHostNum;
    this._unprotectHostNum = config.unprotectHostNum;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpentelekomcloudHssHostGroupsV5GroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // host_num - computed: false, optional: true, required: false
  private _hostNum?: string; 
  public get hostNum() {
    return this.getStringAttribute('host_num');
  }
  public set hostNum(value: string) {
    this._hostNum = value;
  }
  public resetHostNum() {
    this._hostNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNumInput() {
    return this._hostNum;
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // risk_host_num - computed: false, optional: true, required: false
  private _riskHostNum?: string; 
  public get riskHostNum() {
    return this.getStringAttribute('risk_host_num');
  }
  public set riskHostNum(value: string) {
    this._riskHostNum = value;
  }
  public resetRiskHostNum() {
    this._riskHostNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskHostNumInput() {
    return this._riskHostNum;
  }

  // unprotect_host_num - computed: false, optional: true, required: false
  private _unprotectHostNum?: string; 
  public get unprotectHostNum() {
    return this.getStringAttribute('unprotect_host_num');
  }
  public set unprotectHostNum(value: string) {
    this._unprotectHostNum = value;
  }
  public resetUnprotectHostNum() {
    this._unprotectHostNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unprotectHostNumInput() {
    return this._unprotectHostNum;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      host_num: cdktf.stringToTerraform(this._hostNum),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      risk_host_num: cdktf.stringToTerraform(this._riskHostNum),
      unprotect_host_num: cdktf.stringToTerraform(this._unprotectHostNum),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_num: {
        value: cdktf.stringToHclTerraform(this._hostNum),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      risk_host_num: {
        value: cdktf.stringToHclTerraform(this._riskHostNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unprotect_host_num: {
        value: cdktf.stringToHclTerraform(this._unprotectHostNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
