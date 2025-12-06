// https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/drive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DriveConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of host Ids that are using this drive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/drive#hosts Drive#hosts}
  */
  readonly hosts?: string[];
  /**
  * Drive infrastructure Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/drive#infrastructure_id Drive#infrastructure_id}
  */
  readonly infrastructureId: string;
  /**
  * Drive label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/drive#label Drive#label}
  */
  readonly label?: string;
  /**
  * Logical Network Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/drive#logical_network_id Drive#logical_network_id}
  */
  readonly logicalNetworkId?: string;
  /**
  * Drive size in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/drive#size_mbytes Drive#size_mbytes}
  */
  readonly sizeMbytes: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/drive metalcloud_drive}
*/
export class Drive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metalcloud_drive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Drive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Drive to import
  * @param importFromId The id of the existing Drive that should be imported. Refer to the {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/drive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Drive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metalcloud_drive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metalsoft-io/metalcloud/7.1.0/docs/resources/drive metalcloud_drive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DriveConfig
  */
  public constructor(scope: Construct, id: string, config: DriveConfig) {
    super(scope, id, {
      terraformResourceType: 'metalcloud_drive',
      terraformGeneratorMetadata: {
        providerName: 'metalcloud',
        providerVersion: '7.1.0',
        providerVersionConstraint: '7.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hosts = config.hosts;
    this._infrastructureId = config.infrastructureId;
    this._label = config.label;
    this._logicalNetworkId = config.logicalNetworkId;
    this._sizeMbytes = config.sizeMbytes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // drive_id - computed: true, optional: false, required: false
  public get driveId() {
    return this.getStringAttribute('drive_id');
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // infrastructure_id - computed: false, optional: false, required: true
  private _infrastructureId?: string; 
  public get infrastructureId() {
    return this.getStringAttribute('infrastructure_id');
  }
  public set infrastructureId(value: string) {
    this._infrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureIdInput() {
    return this._infrastructureId;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // logical_network_id - computed: false, optional: true, required: false
  private _logicalNetworkId?: string; 
  public get logicalNetworkId() {
    return this.getStringAttribute('logical_network_id');
  }
  public set logicalNetworkId(value: string) {
    this._logicalNetworkId = value;
  }
  public resetLogicalNetworkId() {
    this._logicalNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalNetworkIdInput() {
    return this._logicalNetworkId;
  }

  // size_mbytes - computed: false, optional: false, required: true
  private _sizeMbytes?: number; 
  public get sizeMbytes() {
    return this.getNumberAttribute('size_mbytes');
  }
  public set sizeMbytes(value: number) {
    this._sizeMbytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeMbytesInput() {
    return this._sizeMbytes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      infrastructure_id: cdktf.stringToTerraform(this._infrastructureId),
      label: cdktf.stringToTerraform(this._label),
      logical_network_id: cdktf.stringToTerraform(this._logicalNetworkId),
      size_mbytes: cdktf.numberToTerraform(this._sizeMbytes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._infrastructureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_network_id: {
        value: cdktf.stringToHclTerraform(this._logicalNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size_mbytes: {
        value: cdktf.numberToHclTerraform(this._sizeMbytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
