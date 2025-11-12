// https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs/resources/ruler_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RulerNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * User supplied namespace's groups rules definition to create in Grafana Mimir as YAML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs/resources/ruler_namespace#config_yaml RulerNamespace#config_yaml}
  */
  readonly configYaml: string;
  /**
  * The name of the namespace to create in Grafana Mimir.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs/resources/ruler_namespace#namespace RulerNamespace#namespace}
  */
  readonly namespace: string;
  /**
  * Controls whether to run recording rule checks entirely.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs/resources/ruler_namespace#recording_rule_check RulerNamespace#recording_rule_check}
  */
  readonly recordingRuleCheck?: boolean | cdktf.IResolvable;
  /**
  * The namespace's groups rules definition stored in Grafana Mimir as YAML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs/resources/ruler_namespace#remote_config_yaml RulerNamespace#remote_config_yaml}
  */
  readonly remoteConfigYaml?: string;
  /**
  * Fails rules checks that do not match best practices exactly. See: https://prometheus.io/docs/practices/rules/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs/resources/ruler_namespace#strict_recording_rule_check RulerNamespace#strict_recording_rule_check}
  */
  readonly strictRecordingRuleCheck?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs/resources/ruler_namespace mimirtool_ruler_namespace}
*/
export class RulerNamespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mimirtool_ruler_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RulerNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RulerNamespace to import
  * @param importFromId The id of the existing RulerNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs/resources/ruler_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RulerNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mimirtool_ruler_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs/resources/ruler_namespace mimirtool_ruler_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RulerNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: RulerNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'mimirtool_ruler_namespace',
      terraformGeneratorMetadata: {
        providerName: 'mimirtool',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configYaml = config.configYaml;
    this._namespace = config.namespace;
    this._recordingRuleCheck = config.recordingRuleCheck;
    this._remoteConfigYaml = config.remoteConfigYaml;
    this._strictRecordingRuleCheck = config.strictRecordingRuleCheck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_yaml - computed: false, optional: false, required: true
  private _configYaml?: string; 
  public get configYaml() {
    return this.getStringAttribute('config_yaml');
  }
  public set configYaml(value: string) {
    this._configYaml = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configYamlInput() {
    return this._configYaml;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // recording_rule_check - computed: true, optional: true, required: false
  private _recordingRuleCheck?: boolean | cdktf.IResolvable; 
  public get recordingRuleCheck() {
    return this.getBooleanAttribute('recording_rule_check');
  }
  public set recordingRuleCheck(value: boolean | cdktf.IResolvable) {
    this._recordingRuleCheck = value;
  }
  public resetRecordingRuleCheck() {
    this._recordingRuleCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingRuleCheckInput() {
    return this._recordingRuleCheck;
  }

  // remote_config_yaml - computed: true, optional: true, required: false
  private _remoteConfigYaml?: string; 
  public get remoteConfigYaml() {
    return this.getStringAttribute('remote_config_yaml');
  }
  public set remoteConfigYaml(value: string) {
    this._remoteConfigYaml = value;
  }
  public resetRemoteConfigYaml() {
    this._remoteConfigYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteConfigYamlInput() {
    return this._remoteConfigYaml;
  }

  // strict_recording_rule_check - computed: true, optional: true, required: false
  private _strictRecordingRuleCheck?: boolean | cdktf.IResolvable; 
  public get strictRecordingRuleCheck() {
    return this.getBooleanAttribute('strict_recording_rule_check');
  }
  public set strictRecordingRuleCheck(value: boolean | cdktf.IResolvable) {
    this._strictRecordingRuleCheck = value;
  }
  public resetStrictRecordingRuleCheck() {
    this._strictRecordingRuleCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictRecordingRuleCheckInput() {
    return this._strictRecordingRuleCheck;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_yaml: cdktf.stringToTerraform(this._configYaml),
      namespace: cdktf.stringToTerraform(this._namespace),
      recording_rule_check: cdktf.booleanToTerraform(this._recordingRuleCheck),
      remote_config_yaml: cdktf.stringToTerraform(this._remoteConfigYaml),
      strict_recording_rule_check: cdktf.booleanToTerraform(this._strictRecordingRuleCheck),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_yaml: {
        value: cdktf.stringToHclTerraform(this._configYaml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recording_rule_check: {
        value: cdktf.booleanToHclTerraform(this._recordingRuleCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote_config_yaml: {
        value: cdktf.stringToHclTerraform(this._remoteConfigYaml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_recording_rule_check: {
        value: cdktf.booleanToHclTerraform(this._strictRecordingRuleCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
