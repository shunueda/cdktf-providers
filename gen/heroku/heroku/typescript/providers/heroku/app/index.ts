// https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app#acm App#acm}
  */
  readonly acm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app#buildpacks App#buildpacks}
  */
  readonly buildpacks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app#config_vars App#config_vars}
  */
  readonly configVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app#id App#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app#internal_routing App#internal_routing}
  */
  readonly internalRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app#name App#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app#region App#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app#sensitive_config_vars App#sensitive_config_vars}
  */
  readonly sensitiveConfigVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app#space App#space}
  */
  readonly space?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app#stack App#stack}
  */
  readonly stack?: string;
  /**
  * organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app#organization App#organization}
  */
  readonly organization?: AppOrganization;
}
export interface AppOrganization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app#locked App#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app#name App#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app#personal App#personal}
  */
  readonly personal?: boolean | cdktf.IResolvable;
}

export function appOrganizationToTerraform(struct?: AppOrganizationOutputReference | AppOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locked: cdktf.booleanToTerraform(struct!.locked),
    name: cdktf.stringToTerraform(struct!.name),
    personal: cdktf.booleanToTerraform(struct!.personal),
  }
}


export function appOrganizationToHclTerraform(struct?: AppOrganizationOutputReference | AppOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locked: {
      value: cdktf.booleanToHclTerraform(struct!.locked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    personal: {
      value: cdktf.booleanToHclTerraform(struct!.personal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locked !== undefined) {
      hasAnyValues = true;
      internalValueResult.locked = this._locked;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._personal !== undefined) {
      hasAnyValues = true;
      internalValueResult.personal = this._personal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locked = undefined;
      this._name = undefined;
      this._personal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locked = value.locked;
      this._name = value.name;
      this._personal = value.personal;
    }
  }

  // locked - computed: true, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
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

  // personal - computed: true, optional: true, required: false
  private _personal?: boolean | cdktf.IResolvable; 
  public get personal() {
    return this.getBooleanAttribute('personal');
  }
  public set personal(value: boolean | cdktf.IResolvable) {
    this._personal = value;
  }
  public resetPersonal() {
    this._personal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalInput() {
    return this._personal;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app heroku_app}
*/
export class App extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "heroku_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a App resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the App to import
  * @param importFromId The id of the existing App that should be imported. Refer to the {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the App to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "heroku_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/heroku/heroku/5.3.2/docs/resources/app heroku_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConfig
  */
  public constructor(scope: Construct, id: string, config: AppConfig) {
    super(scope, id, {
      terraformResourceType: 'heroku_app',
      terraformGeneratorMetadata: {
        providerName: 'heroku',
        providerVersion: '5.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acm = config.acm;
    this._buildpacks = config.buildpacks;
    this._configVars = config.configVars;
    this._id = config.id;
    this._internalRouting = config.internalRouting;
    this._name = config.name;
    this._region = config.region;
    this._sensitiveConfigVars = config.sensitiveConfigVars;
    this._space = config.space;
    this._stack = config.stack;
    this._organization.internalValue = config.organization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acm - computed: true, optional: true, required: false
  private _acm?: boolean | cdktf.IResolvable; 
  public get acm() {
    return this.getBooleanAttribute('acm');
  }
  public set acm(value: boolean | cdktf.IResolvable) {
    this._acm = value;
  }
  public resetAcm() {
    this._acm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmInput() {
    return this._acm;
  }

  // all_config_vars - computed: true, optional: false, required: false
  private _allConfigVars = new cdktf.StringMap(this, "all_config_vars");
  public get allConfigVars() {
    return this._allConfigVars;
  }

  // buildpacks - computed: true, optional: true, required: false
  private _buildpacks?: string[]; 
  public get buildpacks() {
    return this.getListAttribute('buildpacks');
  }
  public set buildpacks(value: string[]) {
    this._buildpacks = value;
  }
  public resetBuildpacks() {
    this._buildpacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildpacksInput() {
    return this._buildpacks;
  }

  // config_vars - computed: true, optional: true, required: false
  private _configVars?: { [key: string]: string }; 
  public get configVars() {
    return this.getStringMapAttribute('config_vars');
  }
  public set configVars(value: { [key: string]: string }) {
    this._configVars = value;
  }
  public resetConfigVars() {
    this._configVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configVarsInput() {
    return this._configVars;
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getStringAttribute('generation');
  }

  // git_url - computed: true, optional: false, required: false
  public get gitUrl() {
    return this.getStringAttribute('git_url');
  }

  // heroku_hostname - computed: true, optional: false, required: false
  public get herokuHostname() {
    return this.getStringAttribute('heroku_hostname');
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

  // internal_routing - computed: true, optional: true, required: false
  private _internalRouting?: boolean | cdktf.IResolvable; 
  public get internalRouting() {
    return this.getBooleanAttribute('internal_routing');
  }
  public set internalRouting(value: boolean | cdktf.IResolvable) {
    this._internalRouting = value;
  }
  public resetInternalRouting() {
    this._internalRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalRoutingInput() {
    return this._internalRouting;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sensitive_config_vars - computed: true, optional: true, required: false
  private _sensitiveConfigVars?: { [key: string]: string }; 
  public get sensitiveConfigVars() {
    return this.getStringMapAttribute('sensitive_config_vars');
  }
  public set sensitiveConfigVars(value: { [key: string]: string }) {
    this._sensitiveConfigVars = value;
  }
  public resetSensitiveConfigVars() {
    this._sensitiveConfigVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveConfigVarsInput() {
    return this._sensitiveConfigVars;
  }

  // space - computed: false, optional: true, required: false
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  public resetSpace() {
    this._space = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // stack - computed: true, optional: true, required: false
  private _stack?: string; 
  public get stack() {
    return this.getStringAttribute('stack');
  }
  public set stack(value: string) {
    this._stack = value;
  }
  public resetStack() {
    this._stack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackInput() {
    return this._stack;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }

  // organization - computed: false, optional: true, required: false
  private _organization = new AppOrganizationOutputReference(this, "organization");
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: AppOrganization) {
    this._organization.internalValue = value;
  }
  public resetOrganization() {
    this._organization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acm: cdktf.booleanToTerraform(this._acm),
      buildpacks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._buildpacks),
      config_vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._configVars),
      id: cdktf.stringToTerraform(this._id),
      internal_routing: cdktf.booleanToTerraform(this._internalRouting),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      sensitive_config_vars: cdktf.hashMapper(cdktf.stringToTerraform)(this._sensitiveConfigVars),
      space: cdktf.stringToTerraform(this._space),
      stack: cdktf.stringToTerraform(this._stack),
      organization: appOrganizationToTerraform(this._organization.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acm: {
        value: cdktf.booleanToHclTerraform(this._acm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      buildpacks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._buildpacks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      config_vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._configVars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_routing: {
        value: cdktf.booleanToHclTerraform(this._internalRouting),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_config_vars: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sensitiveConfigVars),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      space: {
        value: cdktf.stringToHclTerraform(this._space),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack: {
        value: cdktf.stringToHclTerraform(this._stack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: appOrganizationToHclTerraform(this._organization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppOrganizationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
