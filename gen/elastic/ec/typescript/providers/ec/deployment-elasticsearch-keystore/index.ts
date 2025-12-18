// https://registry.terraform.io/providers/elastic/ec/0.12.3/docs/resources/deployment_elasticsearch_keystore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentElasticsearchKeystoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates the the remote keystore setting should be stored as a file. The default is false, which stores the keystore setting as string when value is a plain string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.3/docs/resources/deployment_elasticsearch_keystore#as_file DeploymentElasticsearchKeystore#as_file}
  */
  readonly asFile?: boolean | cdktf.IResolvable;
  /**
  * Deployment ID of the Deployment that holds the Elasticsearch cluster where the keystore setting will be written to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.3/docs/resources/deployment_elasticsearch_keystore#deployment_id DeploymentElasticsearchKeystore#deployment_id}
  */
  readonly deploymentId: string;
  /**
  * Name for the keystore setting, if the setting already exists in the Elasticsearch cluster, it will be overridden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.3/docs/resources/deployment_elasticsearch_keystore#setting_name DeploymentElasticsearchKeystore#setting_name}
  */
  readonly settingName: string;
  /**
  * Value of this setting. This can either be a string or a JSON object that is stored as a JSON string in the keystore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.3/docs/resources/deployment_elasticsearch_keystore#value DeploymentElasticsearchKeystore#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/ec/0.12.3/docs/resources/deployment_elasticsearch_keystore ec_deployment_elasticsearch_keystore}
*/
export class DeploymentElasticsearchKeystore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ec_deployment_elasticsearch_keystore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeploymentElasticsearchKeystore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeploymentElasticsearchKeystore to import
  * @param importFromId The id of the existing DeploymentElasticsearchKeystore that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/ec/0.12.3/docs/resources/deployment_elasticsearch_keystore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeploymentElasticsearchKeystore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ec_deployment_elasticsearch_keystore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/ec/0.12.3/docs/resources/deployment_elasticsearch_keystore ec_deployment_elasticsearch_keystore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentElasticsearchKeystoreConfig
  */
  public constructor(scope: Construct, id: string, config: DeploymentElasticsearchKeystoreConfig) {
    super(scope, id, {
      terraformResourceType: 'ec_deployment_elasticsearch_keystore',
      terraformGeneratorMetadata: {
        providerName: 'ec',
        providerVersion: '0.12.3',
        providerVersionConstraint: '0.12.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asFile = config.asFile;
    this._deploymentId = config.deploymentId;
    this._settingName = config.settingName;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as_file - computed: true, optional: true, required: false
  private _asFile?: boolean | cdktf.IResolvable; 
  public get asFile() {
    return this.getBooleanAttribute('as_file');
  }
  public set asFile(value: boolean | cdktf.IResolvable) {
    this._asFile = value;
  }
  public resetAsFile() {
    this._asFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asFileInput() {
    return this._asFile;
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // setting_name - computed: false, optional: false, required: true
  private _settingName?: string; 
  public get settingName() {
    return this.getStringAttribute('setting_name');
  }
  public set settingName(value: string) {
    this._settingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingNameInput() {
    return this._settingName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_file: cdktf.booleanToTerraform(this._asFile),
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      setting_name: cdktf.stringToTerraform(this._settingName),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as_file: {
        value: cdktf.booleanToHclTerraform(this._asFile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deployment_id: {
        value: cdktf.stringToHclTerraform(this._deploymentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      setting_name: {
        value: cdktf.stringToHclTerraform(this._settingName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
