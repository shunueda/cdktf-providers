// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_domain_with_all_nodes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiveDirectoryJoinDomainWithAllNodesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_domain_with_all_nodes#additional_data ActiveDirectoryJoinDomainWithAllNodes#additional_data}
  */
  readonly additionalData: ActiveDirectoryJoinDomainWithAllNodesAdditionalData[] | cdktf.IResolvable;
  /**
  * Active Directory Join Point ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_domain_with_all_nodes#join_point_id ActiveDirectoryJoinDomainWithAllNodes#join_point_id}
  */
  readonly joinPointId: string;
}
export interface ActiveDirectoryJoinDomainWithAllNodesAdditionalData {
  /**
  * Additional attribute name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_domain_with_all_nodes#name ActiveDirectoryJoinDomainWithAllNodes#name}
  */
  readonly name: string;
  /**
  * Additional attribute value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_domain_with_all_nodes#value ActiveDirectoryJoinDomainWithAllNodes#value}
  */
  readonly value: string;
}

export function activeDirectoryJoinDomainWithAllNodesAdditionalDataToTerraform(struct?: ActiveDirectoryJoinDomainWithAllNodesAdditionalData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function activeDirectoryJoinDomainWithAllNodesAdditionalDataToHclTerraform(struct?: ActiveDirectoryJoinDomainWithAllNodesAdditionalData | cdktf.IResolvable): any {
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

export class ActiveDirectoryJoinDomainWithAllNodesAdditionalDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActiveDirectoryJoinDomainWithAllNodesAdditionalData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActiveDirectoryJoinDomainWithAllNodesAdditionalData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class ActiveDirectoryJoinDomainWithAllNodesAdditionalDataList extends cdktf.ComplexList {
  public internalValue? : ActiveDirectoryJoinDomainWithAllNodesAdditionalData[] | cdktf.IResolvable

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
  public get(index: number): ActiveDirectoryJoinDomainWithAllNodesAdditionalDataOutputReference {
    return new ActiveDirectoryJoinDomainWithAllNodesAdditionalDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_domain_with_all_nodes ise_active_directory_join_domain_with_all_nodes}
*/
export class ActiveDirectoryJoinDomainWithAllNodes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_active_directory_join_domain_with_all_nodes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActiveDirectoryJoinDomainWithAllNodes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActiveDirectoryJoinDomainWithAllNodes to import
  * @param importFromId The id of the existing ActiveDirectoryJoinDomainWithAllNodes that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_domain_with_all_nodes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActiveDirectoryJoinDomainWithAllNodes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_active_directory_join_domain_with_all_nodes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/active_directory_join_domain_with_all_nodes ise_active_directory_join_domain_with_all_nodes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiveDirectoryJoinDomainWithAllNodesConfig
  */
  public constructor(scope: Construct, id: string, config: ActiveDirectoryJoinDomainWithAllNodesConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_active_directory_join_domain_with_all_nodes',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.13',
        providerVersionConstraint: '0.2.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalData.internalValue = config.additionalData;
    this._joinPointId = config.joinPointId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_data - computed: false, optional: false, required: true
  private _additionalData = new ActiveDirectoryJoinDomainWithAllNodesAdditionalDataList(this, "additional_data", false);
  public get additionalData() {
    return this._additionalData;
  }
  public putAdditionalData(value: ActiveDirectoryJoinDomainWithAllNodesAdditionalData[] | cdktf.IResolvable) {
    this._additionalData.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDataInput() {
    return this._additionalData.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // join_point_id - computed: false, optional: false, required: true
  private _joinPointId?: string; 
  public get joinPointId() {
    return this.getStringAttribute('join_point_id');
  }
  public set joinPointId(value: string) {
    this._joinPointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get joinPointIdInput() {
    return this._joinPointId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_data: cdktf.listMapper(activeDirectoryJoinDomainWithAllNodesAdditionalDataToTerraform, false)(this._additionalData.internalValue),
      join_point_id: cdktf.stringToTerraform(this._joinPointId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_data: {
        value: cdktf.listMapperHcl(activeDirectoryJoinDomainWithAllNodesAdditionalDataToHclTerraform, false)(this._additionalData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ActiveDirectoryJoinDomainWithAllNodesAdditionalDataList",
      },
      join_point_id: {
        value: cdktf.stringToHclTerraform(this._joinPointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
