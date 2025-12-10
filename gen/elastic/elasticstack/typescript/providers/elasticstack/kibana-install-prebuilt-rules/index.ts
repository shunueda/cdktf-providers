// https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_install_prebuilt_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KibanaInstallPrebuiltRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * An identifier for the space. If space_id is not provided, the default space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_install_prebuilt_rules#space_id KibanaInstallPrebuiltRules#space_id}
  */
  readonly spaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_install_prebuilt_rules elasticstack_kibana_install_prebuilt_rules}
*/
export class KibanaInstallPrebuiltRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_kibana_install_prebuilt_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KibanaInstallPrebuiltRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KibanaInstallPrebuiltRules to import
  * @param importFromId The id of the existing KibanaInstallPrebuiltRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_install_prebuilt_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KibanaInstallPrebuiltRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_kibana_install_prebuilt_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_install_prebuilt_rules elasticstack_kibana_install_prebuilt_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KibanaInstallPrebuiltRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KibanaInstallPrebuiltRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_kibana_install_prebuilt_rules',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rules_installed - computed: true, optional: false, required: false
  public get rulesInstalled() {
    return this.getNumberAttribute('rules_installed');
  }

  // rules_not_installed - computed: true, optional: false, required: false
  public get rulesNotInstalled() {
    return this.getNumberAttribute('rules_not_installed');
  }

  // rules_not_updated - computed: true, optional: false, required: false
  public get rulesNotUpdated() {
    return this.getNumberAttribute('rules_not_updated');
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // timelines_installed - computed: true, optional: false, required: false
  public get timelinesInstalled() {
    return this.getNumberAttribute('timelines_installed');
  }

  // timelines_not_installed - computed: true, optional: false, required: false
  public get timelinesNotInstalled() {
    return this.getNumberAttribute('timelines_not_installed');
  }

  // timelines_not_updated - computed: true, optional: false, required: false
  public get timelinesNotUpdated() {
    return this.getNumberAttribute('timelines_not_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
