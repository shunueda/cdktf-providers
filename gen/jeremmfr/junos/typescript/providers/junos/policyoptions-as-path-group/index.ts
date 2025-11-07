// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_as_path_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyoptionsAsPathGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Object may exist in dynamic database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_as_path_group#dynamic_db PolicyoptionsAsPathGroup#dynamic_db}
  */
  readonly dynamicDb?: boolean | cdktf.IResolvable;
  /**
  * Name to identify AS path group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_as_path_group#name PolicyoptionsAsPathGroup#name}
  */
  readonly name: string;
  /**
  * as_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_as_path_group#as_path PolicyoptionsAsPathGroup#as_path}
  */
  readonly asPath?: PolicyoptionsAsPathGroupAsPath[] | cdktf.IResolvable;
}
export interface PolicyoptionsAsPathGroupAsPath {
  /**
  * Name to identify AS path regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_as_path_group#name PolicyoptionsAsPathGroup#name}
  */
  readonly name: string;
  /**
  * AS path regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_as_path_group#path PolicyoptionsAsPathGroup#path}
  */
  readonly path: string;
}

export function policyoptionsAsPathGroupAsPathToTerraform(struct?: PolicyoptionsAsPathGroupAsPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function policyoptionsAsPathGroupAsPathToHclTerraform(struct?: PolicyoptionsAsPathGroupAsPath | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsAsPathGroupAsPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyoptionsAsPathGroupAsPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsAsPathGroupAsPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class PolicyoptionsAsPathGroupAsPathList extends cdktf.ComplexList {
  public internalValue? : PolicyoptionsAsPathGroupAsPath[] | cdktf.IResolvable

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
  public get(index: number): PolicyoptionsAsPathGroupAsPathOutputReference {
    return new PolicyoptionsAsPathGroupAsPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_as_path_group junos_policyoptions_as_path_group}
*/
export class PolicyoptionsAsPathGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_policyoptions_as_path_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyoptionsAsPathGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyoptionsAsPathGroup to import
  * @param importFromId The id of the existing PolicyoptionsAsPathGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_as_path_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyoptionsAsPathGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_policyoptions_as_path_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_as_path_group junos_policyoptions_as_path_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyoptionsAsPathGroupConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyoptionsAsPathGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_policyoptions_as_path_group',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicDb = config.dynamicDb;
    this._name = config.name;
    this._asPath.internalValue = config.asPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_db - computed: false, optional: true, required: false
  private _dynamicDb?: boolean | cdktf.IResolvable; 
  public get dynamicDb() {
    return this.getBooleanAttribute('dynamic_db');
  }
  public set dynamicDb(value: boolean | cdktf.IResolvable) {
    this._dynamicDb = value;
  }
  public resetDynamicDb() {
    this._dynamicDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDbInput() {
    return this._dynamicDb;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // as_path - computed: false, optional: true, required: false
  private _asPath = new PolicyoptionsAsPathGroupAsPathList(this, "as_path", false);
  public get asPath() {
    return this._asPath;
  }
  public putAsPath(value: PolicyoptionsAsPathGroupAsPath[] | cdktf.IResolvable) {
    this._asPath.internalValue = value;
  }
  public resetAsPath() {
    this._asPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathInput() {
    return this._asPath.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_db: cdktf.booleanToTerraform(this._dynamicDb),
      name: cdktf.stringToTerraform(this._name),
      as_path: cdktf.listMapper(policyoptionsAsPathGroupAsPathToTerraform, true)(this._asPath.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_db: {
        value: cdktf.booleanToHclTerraform(this._dynamicDb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_path: {
        value: cdktf.listMapperHcl(policyoptionsAsPathGroupAsPathToHclTerraform, true)(this._asPath.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyoptionsAsPathGroupAsPathList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
