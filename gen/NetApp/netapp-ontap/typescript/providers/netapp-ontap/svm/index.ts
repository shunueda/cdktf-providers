// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/svm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SvmConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of Aggregates to be assigned use for svm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/svm#aggregates Svm#aggregates}
  */
  readonly aggregates: SvmAggregates[] | cdktf.IResolvable;
  /**
  * Comment for svm to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/svm#comment Svm#comment}
  */
  readonly comment?: string;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/svm#cx_profile_name Svm#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * The name of the ipspace to manage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/svm#ipspace Svm#ipspace}
  */
  readonly ipspace?: string;
  /**
  * Language to use for svm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/svm#language Svm#language}
  */
  readonly language?: string;
  /**
  * Maximum number of volumes that can be created on the svm. Expects an integer or unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/svm#max_volumes Svm#max_volumes}
  */
  readonly maxVolumes?: string;
  /**
  * The name of the svm to manage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/svm#name Svm#name}
  */
  readonly name: string;
  /**
  * The name of the snapshot policy to manage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/svm#snapshot_policy Svm#snapshot_policy}
  */
  readonly snapshotPolicy?: string;
  /**
  * Maximum storage permitted on svm, in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/svm#storage_limit Svm#storage_limit}
  */
  readonly storageLimit?: number;
  /**
  * The subtype for svm to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/svm#subtype Svm#subtype}
  */
  readonly subtype?: string;
}
export interface SvmAggregates {
  /**
  * Name of the aggregate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/svm#name Svm#name}
  */
  readonly name: string;
}

export function svmAggregatesToTerraform(struct?: SvmAggregates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function svmAggregatesToHclTerraform(struct?: SvmAggregates | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SvmAggregatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SvmAggregates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SvmAggregates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class SvmAggregatesList extends cdktf.ComplexList {
  public internalValue? : SvmAggregates[] | cdktf.IResolvable

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
  public get(index: number): SvmAggregatesOutputReference {
    return new SvmAggregatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/svm netapp-ontap_svm}
*/
export class Svm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_svm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Svm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Svm to import
  * @param importFromId The id of the existing Svm that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/svm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Svm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_svm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/svm netapp-ontap_svm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SvmConfig
  */
  public constructor(scope: Construct, id: string, config: SvmConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_svm',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregates.internalValue = config.aggregates;
    this._comment = config.comment;
    this._cxProfileName = config.cxProfileName;
    this._ipspace = config.ipspace;
    this._language = config.language;
    this._maxVolumes = config.maxVolumes;
    this._name = config.name;
    this._snapshotPolicy = config.snapshotPolicy;
    this._storageLimit = config.storageLimit;
    this._subtype = config.subtype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregates - computed: false, optional: false, required: true
  private _aggregates = new SvmAggregatesList(this, "aggregates", true);
  public get aggregates() {
    return this._aggregates;
  }
  public putAggregates(value: SvmAggregates[] | cdktf.IResolvable) {
    this._aggregates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatesInput() {
    return this._aggregates.internalValue;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipspace - computed: false, optional: true, required: false
  private _ipspace?: string; 
  public get ipspace() {
    return this.getStringAttribute('ipspace');
  }
  public set ipspace(value: string) {
    this._ipspace = value;
  }
  public resetIpspace() {
    this._ipspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipspaceInput() {
    return this._ipspace;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // max_volumes - computed: false, optional: true, required: false
  private _maxVolumes?: string; 
  public get maxVolumes() {
    return this.getStringAttribute('max_volumes');
  }
  public set maxVolumes(value: string) {
    this._maxVolumes = value;
  }
  public resetMaxVolumes() {
    this._maxVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVolumesInput() {
    return this._maxVolumes;
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

  // snapshot_policy - computed: false, optional: true, required: false
  private _snapshotPolicy?: string; 
  public get snapshotPolicy() {
    return this.getStringAttribute('snapshot_policy');
  }
  public set snapshotPolicy(value: string) {
    this._snapshotPolicy = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy;
  }

  // storage_limit - computed: false, optional: true, required: false
  private _storageLimit?: number; 
  public get storageLimit() {
    return this.getNumberAttribute('storage_limit');
  }
  public set storageLimit(value: number) {
    this._storageLimit = value;
  }
  public resetStorageLimit() {
    this._storageLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLimitInput() {
    return this._storageLimit;
  }

  // subtype - computed: false, optional: true, required: false
  private _subtype?: string; 
  public get subtype() {
    return this.getStringAttribute('subtype');
  }
  public set subtype(value: string) {
    this._subtype = value;
  }
  public resetSubtype() {
    this._subtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtypeInput() {
    return this._subtype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregates: cdktf.listMapper(svmAggregatesToTerraform, false)(this._aggregates.internalValue),
      comment: cdktf.stringToTerraform(this._comment),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      ipspace: cdktf.stringToTerraform(this._ipspace),
      language: cdktf.stringToTerraform(this._language),
      max_volumes: cdktf.stringToTerraform(this._maxVolumes),
      name: cdktf.stringToTerraform(this._name),
      snapshot_policy: cdktf.stringToTerraform(this._snapshotPolicy),
      storage_limit: cdktf.numberToTerraform(this._storageLimit),
      subtype: cdktf.stringToTerraform(this._subtype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregates: {
        value: cdktf.listMapperHcl(svmAggregatesToHclTerraform, false)(this._aggregates.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SvmAggregatesList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipspace: {
        value: cdktf.stringToHclTerraform(this._ipspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_volumes: {
        value: cdktf.stringToHclTerraform(this._maxVolumes),
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
      snapshot_policy: {
        value: cdktf.stringToHclTerraform(this._snapshotPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_limit: {
        value: cdktf.numberToHclTerraform(this._storageLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subtype: {
        value: cdktf.stringToHclTerraform(this._subtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
