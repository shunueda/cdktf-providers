// https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnLogsUploaderConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables or disables the config. Default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_config#enabled CdnLogsUploaderConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the config will be applied to all CDN resources. If set to false, the config will be applied to the resources specified in the resources field. Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_config#for_all_resources CdnLogsUploaderConfig#for_all_resources}
  */
  readonly forAllResources?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_config#id CdnLogsUploaderConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_config#name CdnLogsUploaderConfig#name}
  */
  readonly name: string;
  /**
  * ID of the policy that should be assigned to given config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_config#policy CdnLogsUploaderConfig#policy}
  */
  readonly policy: number;
  /**
  * List of resource IDs to which the config should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_config#resources CdnLogsUploaderConfig#resources}
  */
  readonly resources?: number[];
  /**
  * ID of the target to which logs should be uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_config#target CdnLogsUploaderConfig#target}
  */
  readonly target: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_config gcore_cdn_logs_uploader_config}
*/
export class CdnLogsUploaderConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_cdn_logs_uploader_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnLogsUploaderConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnLogsUploaderConfig to import
  * @param importFromId The id of the existing CdnLogsUploaderConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnLogsUploaderConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_cdn_logs_uploader_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_logs_uploader_config gcore_cdn_logs_uploader_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnLogsUploaderConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CdnLogsUploaderConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_cdn_logs_uploader_config',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.4',
        providerVersionConstraint: '0.32.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._forAllResources = config.forAllResources;
    this._id = config.id;
    this._name = config.name;
    this._policy = config.policy;
    this._resources = config.resources;
    this._target = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // for_all_resources - computed: false, optional: true, required: false
  private _forAllResources?: boolean | cdktf.IResolvable; 
  public get forAllResources() {
    return this.getBooleanAttribute('for_all_resources');
  }
  public set forAllResources(value: boolean | cdktf.IResolvable) {
    this._forAllResources = value;
  }
  public resetForAllResources() {
    this._forAllResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forAllResourcesInput() {
    return this._forAllResources;
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

  // policy - computed: false, optional: false, required: true
  private _policy?: number; 
  public get policy() {
    return this.getNumberAttribute('policy');
  }
  public set policy(value: number) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: number[]; 
  public get resources() {
    return this.getNumberListAttribute('resources');
  }
  public set resources(value: number[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      for_all_resources: cdktf.booleanToTerraform(this._forAllResources),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy: cdktf.numberToTerraform(this._policy),
      resources: cdktf.listMapper(cdktf.numberToTerraform, false)(this._resources),
      target: cdktf.numberToTerraform(this._target),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      for_all_resources: {
        value: cdktf.booleanToHclTerraform(this._forAllResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      policy: {
        value: cdktf.numberToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resources: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._resources),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      target: {
        value: cdktf.numberToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
