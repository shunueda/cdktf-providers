// https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ptr_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PtrRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Configuration. Creating the PTR record in the default Configuration if doesn't specify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ptr_record#configuration PtrRecord#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ptr_record#id PtrRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IP address that will be created the PTR record for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ptr_record#ip_address PtrRecord#ip_address}
  */
  readonly ipAddress: string;
  /**
  * The name of the host record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ptr_record#name PtrRecord#name}
  */
  readonly name: string;
  /**
  * Record's properties. Example: attribute=value|
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ptr_record#properties PtrRecord#properties}
  */
  readonly properties?: string;
  /**
  * To create a reverse record for the pass host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ptr_record#reverse_record PtrRecord#reverse_record}
  */
  readonly reverseRecord: string;
  /**
  * Whether or not to selectively deploy the Host record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ptr_record#to_deploy PtrRecord#to_deploy}
  */
  readonly toDeploy?: string;
  /**
  * The TTL value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ptr_record#ttl PtrRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * The view which contains the details of the zone. If not provided, record will be created under default view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ptr_record#view PtrRecord#view}
  */
  readonly view?: string;
  /**
  * The Zone in which you want to update a host record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ptr_record#zone PtrRecord#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ptr_record bluecat_ptr_record}
*/
export class PtrRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bluecat_ptr_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PtrRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PtrRecord to import
  * @param importFromId The id of the existing PtrRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ptr_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PtrRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bluecat_ptr_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ptr_record bluecat_ptr_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PtrRecordConfig
  */
  public constructor(scope: Construct, id: string, config: PtrRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'bluecat_ptr_record',
      terraformGeneratorMetadata: {
        providerName: 'bluecat',
        providerVersion: '2.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration = config.configuration;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._name = config.name;
    this._properties = config.properties;
    this._reverseRecord = config.reverseRecord;
    this._toDeploy = config.toDeploy;
    this._ttl = config.ttl;
    this._view = config.view;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // properties - computed: false, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // reverse_record - computed: false, optional: false, required: true
  private _reverseRecord?: string; 
  public get reverseRecord() {
    return this.getStringAttribute('reverse_record');
  }
  public set reverseRecord(value: string) {
    this._reverseRecord = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseRecordInput() {
    return this._reverseRecord;
  }

  // to_deploy - computed: false, optional: true, required: false
  private _toDeploy?: string; 
  public get toDeploy() {
    return this.getStringAttribute('to_deploy');
  }
  public set toDeploy(value: string) {
    this._toDeploy = value;
  }
  public resetToDeploy() {
    this._toDeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toDeployInput() {
    return this._toDeploy;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // view - computed: false, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: cdktf.stringToTerraform(this._configuration),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      name: cdktf.stringToTerraform(this._name),
      properties: cdktf.stringToTerraform(this._properties),
      reverse_record: cdktf.stringToTerraform(this._reverseRecord),
      to_deploy: cdktf.stringToTerraform(this._toDeploy),
      ttl: cdktf.numberToTerraform(this._ttl),
      view: cdktf.stringToTerraform(this._view),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
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
      properties: {
        value: cdktf.stringToHclTerraform(this._properties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reverse_record: {
        value: cdktf.stringToHclTerraform(this._reverseRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to_deploy: {
        value: cdktf.stringToHclTerraform(this._toDeploy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      view: {
        value: cdktf.stringToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
