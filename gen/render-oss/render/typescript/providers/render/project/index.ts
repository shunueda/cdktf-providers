// https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of environments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/project#environments Project#environments}
  */
  readonly environments: { [key: string]: ProjectEnvironments } | cdktf.IResolvable;
  /**
  * Name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/project#name Project#name}
  */
  readonly name: string;
}
export interface ProjectEnvironments {
  /**
  * Unique identifier of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Whether services within this environment are isolated from network requests from other environments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/project#network_isolated Project#network_isolated}
  */
  readonly networkIsolated?: boolean | cdktf.IResolvable;
  /**
  * Protected environment status. One of `protected`, `unprotected`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/project#protected_status Project#protected_status}
  */
  readonly protectedStatus: string;
}

export function projectEnvironmentsToTerraform(struct?: ProjectEnvironments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    network_isolated: cdktf.booleanToTerraform(struct!.networkIsolated),
    protected_status: cdktf.stringToTerraform(struct!.protectedStatus),
  }
}


export function projectEnvironmentsToHclTerraform(struct?: ProjectEnvironments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_isolated: {
      value: cdktf.booleanToHclTerraform(struct!.networkIsolated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protected_status: {
      value: cdktf.stringToHclTerraform(struct!.protectedStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectEnvironmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ProjectEnvironments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkIsolated !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkIsolated = this._networkIsolated;
    }
    if (this._protectedStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedStatus = this._protectedStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectEnvironments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._networkIsolated = undefined;
      this._protectedStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._networkIsolated = value.networkIsolated;
      this._protectedStatus = value.protectedStatus;
    }
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

  // network_isolated - computed: true, optional: true, required: false
  private _networkIsolated?: boolean | cdktf.IResolvable; 
  public get networkIsolated() {
    return this.getBooleanAttribute('network_isolated');
  }
  public set networkIsolated(value: boolean | cdktf.IResolvable) {
    this._networkIsolated = value;
  }
  public resetNetworkIsolated() {
    this._networkIsolated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIsolatedInput() {
    return this._networkIsolated;
  }

  // protected_status - computed: false, optional: false, required: true
  private _protectedStatus?: string; 
  public get protectedStatus() {
    return this.getStringAttribute('protected_status');
  }
  public set protectedStatus(value: string) {
    this._protectedStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedStatusInput() {
    return this._protectedStatus;
  }
}

export class ProjectEnvironmentsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ProjectEnvironments } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): ProjectEnvironmentsOutputReference {
    return new ProjectEnvironmentsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/project render_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "render_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "render_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/project render_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'render_project',
      terraformGeneratorMetadata: {
        providerName: 'render',
        providerVersion: '1.7.5',
        providerVersionConstraint: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environments.internalValue = config.environments;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environments - computed: false, optional: false, required: true
  private _environments = new ProjectEnvironmentsMap(this, "environments");
  public get environments() {
    return this._environments;
  }
  public putEnvironments(value: { [key: string]: ProjectEnvironments } | cdktf.IResolvable) {
    this._environments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environments: cdktf.hashMapper(projectEnvironmentsToTerraform)(this._environments.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environments: {
        value: cdktf.hashMapperHcl(projectEnvironmentsToHclTerraform)(this._environments.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "ProjectEnvironmentsMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
