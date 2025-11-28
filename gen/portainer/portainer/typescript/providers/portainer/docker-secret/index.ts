// https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/docker_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DockerSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Base64-encoded secret data (stored in Terraform state).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/docker_secret#data DockerSecret#data}
  */
  readonly data?: string;
  /**
  * Write-only secret data (supports ephemeral values; not stored in Terraform state).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/docker_secret#data_wo DockerSecret#data_wo}
  */
  readonly dataWo?: string;
  /**
  * Version flag for write-only data; must be set when using `data_wo` to trigger updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/docker_secret#data_wo_version DockerSecret#data_wo_version}
  */
  readonly dataWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/docker_secret#driver DockerSecret#driver}
  */
  readonly driver?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/docker_secret#endpoint_id DockerSecret#endpoint_id}
  */
  readonly endpointId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/docker_secret#id DockerSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/docker_secret#labels DockerSecret#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/docker_secret#name DockerSecret#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/docker_secret#templating DockerSecret#templating}
  */
  readonly templating?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/docker_secret portainer_docker_secret}
*/
export class DockerSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_docker_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DockerSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DockerSecret to import
  * @param importFromId The id of the existing DockerSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/docker_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DockerSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_docker_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/docker_secret portainer_docker_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DockerSecretConfig
  */
  public constructor(scope: Construct, id: string, config: DockerSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_docker_secret',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.19.0',
        providerVersionConstraint: '1.19.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._data = config.data;
    this._dataWo = config.dataWo;
    this._dataWoVersion = config.dataWoVersion;
    this._driver = config.driver;
    this._endpointId = config.endpointId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._templating = config.templating;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // data_wo - computed: false, optional: true, required: false
  private _dataWo?: string; 
  public get dataWo() {
    return this.getStringAttribute('data_wo');
  }
  public set dataWo(value: string) {
    this._dataWo = value;
  }
  public resetDataWo() {
    this._dataWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataWoInput() {
    return this._dataWo;
  }

  // data_wo_version - computed: false, optional: true, required: false
  private _dataWoVersion?: number; 
  public get dataWoVersion() {
    return this.getNumberAttribute('data_wo_version');
  }
  public set dataWoVersion(value: number) {
    this._dataWoVersion = value;
  }
  public resetDataWoVersion() {
    this._dataWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataWoVersionInput() {
    return this._dataWoVersion;
  }

  // driver - computed: false, optional: true, required: false
  private _driver?: { [key: string]: string }; 
  public get driver() {
    return this.getStringMapAttribute('driver');
  }
  public set driver(value: { [key: string]: string }) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: number; 
  public get endpointId() {
    return this.getNumberAttribute('endpoint_id');
  }
  public set endpointId(value: number) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // resource_control_id - computed: true, optional: false, required: false
  public get resourceControlId() {
    return this.getNumberAttribute('resource_control_id');
  }

  // templating - computed: false, optional: true, required: false
  private _templating?: { [key: string]: string }; 
  public get templating() {
    return this.getStringMapAttribute('templating');
  }
  public set templating(value: { [key: string]: string }) {
    this._templating = value;
  }
  public resetTemplating() {
    this._templating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatingInput() {
    return this._templating;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data: cdktf.stringToTerraform(this._data),
      data_wo: cdktf.stringToTerraform(this._dataWo),
      data_wo_version: cdktf.numberToTerraform(this._dataWoVersion),
      driver: cdktf.hashMapper(cdktf.stringToTerraform)(this._driver),
      endpoint_id: cdktf.numberToTerraform(this._endpointId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      templating: cdktf.hashMapper(cdktf.stringToTerraform)(this._templating),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_wo: {
        value: cdktf.stringToHclTerraform(this._dataWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_wo_version: {
        value: cdktf.numberToHclTerraform(this._dataWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      driver: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._driver),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      endpoint_id: {
        value: cdktf.numberToHclTerraform(this._endpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      templating: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._templating),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
