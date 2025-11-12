// https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/network_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boolean value that determines device licensing mode: bring your own license or subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/network_file#byol NetworkFile#byol}
  */
  readonly byol: boolean | cdktf.IResolvable;
  /**
  * Uploaded file content, expected to be a UTF-8 encoded string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/network_file#content NetworkFile#content}
  */
  readonly content: string;
  /**
  * Device type code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/network_file#device_type_code NetworkFile#device_type_code}
  */
  readonly deviceTypeCode: string;
  /**
  * File name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/network_file#file_name NetworkFile#file_name}
  */
  readonly fileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/network_file#id NetworkFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * File upload location metro code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/network_file#metro_code NetworkFile#metro_code}
  */
  readonly metroCode: string;
  /**
  * File process type (LICENSE or CLOUD_INIT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/network_file#process_type NetworkFile#process_type}
  */
  readonly processType: string;
  /**
  * Boolean value that determines device management mode: self-managed or equinix-managed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/network_file#self_managed NetworkFile#self_managed}
  */
  readonly selfManaged: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/network_file equinix_network_file}
*/
export class NetworkFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_network_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkFile to import
  * @param importFromId The id of the existing NetworkFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/network_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_network_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.10.0/docs/resources/network_file equinix_network_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkFileConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkFileConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_network_file',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.10.0',
        providerVersionConstraint: '4.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._byol = config.byol;
    this._content = config.content;
    this._deviceTypeCode = config.deviceTypeCode;
    this._fileName = config.fileName;
    this._id = config.id;
    this._metroCode = config.metroCode;
    this._processType = config.processType;
    this._selfManaged = config.selfManaged;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // byol - computed: false, optional: false, required: true
  private _byol?: boolean | cdktf.IResolvable; 
  public get byol() {
    return this.getBooleanAttribute('byol');
  }
  public set byol(value: boolean | cdktf.IResolvable) {
    this._byol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get byolInput() {
    return this._byol;
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // device_type_code - computed: false, optional: false, required: true
  private _deviceTypeCode?: string; 
  public get deviceTypeCode() {
    return this.getStringAttribute('device_type_code');
  }
  public set deviceTypeCode(value: string) {
    this._deviceTypeCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeCodeInput() {
    return this._deviceTypeCode;
  }

  // file_name - computed: false, optional: false, required: true
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
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

  // metro_code - computed: false, optional: false, required: true
  private _metroCode?: string; 
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }
  public set metroCode(value: string) {
    this._metroCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metroCodeInput() {
    return this._metroCode;
  }

  // process_type - computed: false, optional: false, required: true
  private _processType?: string; 
  public get processType() {
    return this.getStringAttribute('process_type');
  }
  public set processType(value: string) {
    this._processType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processTypeInput() {
    return this._processType;
  }

  // self_managed - computed: false, optional: false, required: true
  private _selfManaged?: boolean | cdktf.IResolvable; 
  public get selfManaged() {
    return this.getBooleanAttribute('self_managed');
  }
  public set selfManaged(value: boolean | cdktf.IResolvable) {
    this._selfManaged = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedInput() {
    return this._selfManaged;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      byol: cdktf.booleanToTerraform(this._byol),
      content: cdktf.stringToTerraform(this._content),
      device_type_code: cdktf.stringToTerraform(this._deviceTypeCode),
      file_name: cdktf.stringToTerraform(this._fileName),
      id: cdktf.stringToTerraform(this._id),
      metro_code: cdktf.stringToTerraform(this._metroCode),
      process_type: cdktf.stringToTerraform(this._processType),
      self_managed: cdktf.booleanToTerraform(this._selfManaged),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      byol: {
        value: cdktf.booleanToHclTerraform(this._byol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_type_code: {
        value: cdktf.stringToHclTerraform(this._deviceTypeCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_name: {
        value: cdktf.stringToHclTerraform(this._fileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metro_code: {
        value: cdktf.stringToHclTerraform(this._metroCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_type: {
        value: cdktf.stringToHclTerraform(this._processType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      self_managed: {
        value: cdktf.booleanToHclTerraform(this._selfManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
