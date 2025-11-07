// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpc_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNcloudVpcPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpc_peering#id DataNcloudVpcPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpc_peering#name DataNcloudVpcPeering#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpc_peering#source_vpc_name DataNcloudVpcPeering#source_vpc_name}
  */
  readonly sourceVpcName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpc_peering#target_vpc_name DataNcloudVpcPeering#target_vpc_name}
  */
  readonly targetVpcName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpc_peering#vpc_peering_no DataNcloudVpcPeering#vpc_peering_no}
  */
  readonly vpcPeeringNo?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpc_peering#filter DataNcloudVpcPeering#filter}
  */
  readonly filter?: DataNcloudVpcPeeringFilter[] | cdktf.IResolvable;
}
export interface DataNcloudVpcPeeringFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpc_peering#name DataNcloudVpcPeering#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpc_peering#regex DataNcloudVpcPeering#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpc_peering#values DataNcloudVpcPeering#values}
  */
  readonly values: string[];
}

export function dataNcloudVpcPeeringFilterToTerraform(struct?: DataNcloudVpcPeeringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataNcloudVpcPeeringFilterToHclTerraform(struct?: DataNcloudVpcPeeringFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNcloudVpcPeeringFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudVpcPeeringFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudVpcPeeringFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataNcloudVpcPeeringFilterList extends cdktf.ComplexList {
  public internalValue? : DataNcloudVpcPeeringFilter[] | cdktf.IResolvable

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
  public get(index: number): DataNcloudVpcPeeringFilterOutputReference {
    return new DataNcloudVpcPeeringFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpc_peering ncloud_vpc_peering}
*/
export class DataNcloudVpcPeering extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_vpc_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNcloudVpcPeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNcloudVpcPeering to import
  * @param importFromId The id of the existing DataNcloudVpcPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpc_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNcloudVpcPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_vpc_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpc_peering ncloud_vpc_peering} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNcloudVpcPeeringConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNcloudVpcPeeringConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ncloud_vpc_peering',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
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
    this._name = config.name;
    this._sourceVpcName = config.sourceVpcName;
    this._targetVpcName = config.targetVpcName;
    this._vpcPeeringNo = config.vpcPeeringNo;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // has_reverse_vpc_peering - computed: true, optional: false, required: false
  public get hasReverseVpcPeering() {
    return this.getBooleanAttribute('has_reverse_vpc_peering');
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

  // is_between_accounts - computed: true, optional: false, required: false
  public get isBetweenAccounts() {
    return this.getBooleanAttribute('is_between_accounts');
  }

  // name - computed: true, optional: true, required: false
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

  // source_vpc_name - computed: true, optional: true, required: false
  private _sourceVpcName?: string; 
  public get sourceVpcName() {
    return this.getStringAttribute('source_vpc_name');
  }
  public set sourceVpcName(value: string) {
    this._sourceVpcName = value;
  }
  public resetSourceVpcName() {
    this._sourceVpcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVpcNameInput() {
    return this._sourceVpcName;
  }

  // source_vpc_no - computed: true, optional: false, required: false
  public get sourceVpcNo() {
    return this.getStringAttribute('source_vpc_no');
  }

  // target_vpc_login_id - computed: true, optional: false, required: false
  public get targetVpcLoginId() {
    return this.getStringAttribute('target_vpc_login_id');
  }

  // target_vpc_name - computed: true, optional: true, required: false
  private _targetVpcName?: string; 
  public get targetVpcName() {
    return this.getStringAttribute('target_vpc_name');
  }
  public set targetVpcName(value: string) {
    this._targetVpcName = value;
  }
  public resetTargetVpcName() {
    this._targetVpcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVpcNameInput() {
    return this._targetVpcName;
  }

  // target_vpc_no - computed: true, optional: false, required: false
  public get targetVpcNo() {
    return this.getStringAttribute('target_vpc_no');
  }

  // vpc_peering_no - computed: true, optional: true, required: false
  private _vpcPeeringNo?: string; 
  public get vpcPeeringNo() {
    return this.getStringAttribute('vpc_peering_no');
  }
  public set vpcPeeringNo(value: string) {
    this._vpcPeeringNo = value;
  }
  public resetVpcPeeringNo() {
    this._vpcPeeringNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringNoInput() {
    return this._vpcPeeringNo;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNcloudVpcPeeringFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNcloudVpcPeeringFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      source_vpc_name: cdktf.stringToTerraform(this._sourceVpcName),
      target_vpc_name: cdktf.stringToTerraform(this._targetVpcName),
      vpc_peering_no: cdktf.stringToTerraform(this._vpcPeeringNo),
      filter: cdktf.listMapper(dataNcloudVpcPeeringFilterToTerraform, true)(this._filter.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_vpc_name: {
        value: cdktf.stringToHclTerraform(this._sourceVpcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_vpc_name: {
        value: cdktf.stringToHclTerraform(this._targetVpcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peering_no: {
        value: cdktf.stringToHclTerraform(this._vpcPeeringNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataNcloudVpcPeeringFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNcloudVpcPeeringFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
