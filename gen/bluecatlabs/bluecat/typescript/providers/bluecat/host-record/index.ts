// https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.1/docs/resources/host_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Host record. Must be FQDN if the Zone is not provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.1/docs/resources/host_record#absolute_name HostRecord#absolute_name}
  */
  readonly absoluteName: string;
  /**
  * Whether or not to use batch mode when selectively deploying
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.1/docs/resources/host_record#batch_mode HostRecord#batch_mode}
  */
  readonly batchMode?: string;
  /**
  * The Configuration. Creating the Host record in the default Configuration if doesn't specify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.1/docs/resources/host_record#configuration HostRecord#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.1/docs/resources/host_record#id HostRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IP address that will be linked to the Host record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.1/docs/resources/host_record#ip_address HostRecord#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.1/docs/resources/host_record#properties HostRecord#properties}
  */
  readonly properties?: string;
  /**
  * Whether or not to selectively deploy the Host record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.1/docs/resources/host_record#to_deploy HostRecord#to_deploy}
  */
  readonly toDeploy?: string;
  /**
  * The TTL value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.1/docs/resources/host_record#ttl HostRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * The view which contains the details of the zone. If not provided, record will be created under default view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.1/docs/resources/host_record#view HostRecord#view}
  */
  readonly view?: string;
  /**
  * The Zone in which you want to update a host record. If not provided, the absolute name must be FQDN ones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.1/docs/resources/host_record#zone HostRecord#zone}
  */
  readonly zone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.1/docs/resources/host_record bluecat_host_record}
*/
export class HostRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bluecat_host_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostRecord to import
  * @param importFromId The id of the existing HostRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.1/docs/resources/host_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bluecat_host_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.1/docs/resources/host_record bluecat_host_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostRecordConfig
  */
  public constructor(scope: Construct, id: string, config: HostRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'bluecat_host_record',
      terraformGeneratorMetadata: {
        providerName: 'bluecat',
        providerVersion: '2.2.1',
        providerVersionConstraint: '2.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._absoluteName = config.absoluteName;
    this._batchMode = config.batchMode;
    this._configuration = config.configuration;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._properties = config.properties;
    this._toDeploy = config.toDeploy;
    this._ttl = config.ttl;
    this._view = config.view;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // absolute_name - computed: false, optional: false, required: true
  private _absoluteName?: string; 
  public get absoluteName() {
    return this.getStringAttribute('absolute_name');
  }
  public set absoluteName(value: string) {
    this._absoluteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteNameInput() {
    return this._absoluteName;
  }

  // batch_mode - computed: false, optional: true, required: false
  private _batchMode?: string; 
  public get batchMode() {
    return this.getStringAttribute('batch_mode');
  }
  public set batchMode(value: string) {
    this._batchMode = value;
  }
  public resetBatchMode() {
    this._batchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchModeInput() {
    return this._batchMode;
  }

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

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
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
      absolute_name: cdktf.stringToTerraform(this._absoluteName),
      batch_mode: cdktf.stringToTerraform(this._batchMode),
      configuration: cdktf.stringToTerraform(this._configuration),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      properties: cdktf.stringToTerraform(this._properties),
      to_deploy: cdktf.stringToTerraform(this._toDeploy),
      ttl: cdktf.numberToTerraform(this._ttl),
      view: cdktf.stringToTerraform(this._view),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      absolute_name: {
        value: cdktf.stringToHclTerraform(this._absoluteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      batch_mode: {
        value: cdktf.stringToHclTerraform(this._batchMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      properties: {
        value: cdktf.stringToHclTerraform(this._properties),
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
