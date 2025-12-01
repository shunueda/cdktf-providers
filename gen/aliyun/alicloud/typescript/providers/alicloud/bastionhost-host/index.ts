// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BastionhostHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host#active_address_type BastionhostHost#active_address_type}
  */
  readonly activeAddressType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host#comment BastionhostHost#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host#host_name BastionhostHost#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host#host_private_address BastionhostHost#host_private_address}
  */
  readonly hostPrivateAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host#host_public_address BastionhostHost#host_public_address}
  */
  readonly hostPublicAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host#id BastionhostHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host#instance_id BastionhostHost#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host#instance_region_id BastionhostHost#instance_region_id}
  */
  readonly instanceRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host#os_type BastionhostHost#os_type}
  */
  readonly osType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host#source BastionhostHost#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host#source_instance_id BastionhostHost#source_instance_id}
  */
  readonly sourceInstanceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host alicloud_bastionhost_host}
*/
export class BastionhostHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_bastionhost_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BastionhostHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BastionhostHost to import
  * @param importFromId The id of the existing BastionhostHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BastionhostHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_bastionhost_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host alicloud_bastionhost_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BastionhostHostConfig
  */
  public constructor(scope: Construct, id: string, config: BastionhostHostConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_bastionhost_host',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeAddressType = config.activeAddressType;
    this._comment = config.comment;
    this._hostName = config.hostName;
    this._hostPrivateAddress = config.hostPrivateAddress;
    this._hostPublicAddress = config.hostPublicAddress;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceRegionId = config.instanceRegionId;
    this._osType = config.osType;
    this._source = config.source;
    this._sourceInstanceId = config.sourceInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_address_type - computed: false, optional: false, required: true
  private _activeAddressType?: string; 
  public get activeAddressType() {
    return this.getStringAttribute('active_address_type');
  }
  public set activeAddressType(value: string) {
    this._activeAddressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeAddressTypeInput() {
    return this._activeAddressType;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // host_id - computed: true, optional: false, required: false
  public get hostId() {
    return this.getStringAttribute('host_id');
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // host_private_address - computed: false, optional: true, required: false
  private _hostPrivateAddress?: string; 
  public get hostPrivateAddress() {
    return this.getStringAttribute('host_private_address');
  }
  public set hostPrivateAddress(value: string) {
    this._hostPrivateAddress = value;
  }
  public resetHostPrivateAddress() {
    this._hostPrivateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPrivateAddressInput() {
    return this._hostPrivateAddress;
  }

  // host_public_address - computed: false, optional: true, required: false
  private _hostPublicAddress?: string; 
  public get hostPublicAddress() {
    return this.getStringAttribute('host_public_address');
  }
  public set hostPublicAddress(value: string) {
    this._hostPublicAddress = value;
  }
  public resetHostPublicAddress() {
    this._hostPublicAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPublicAddressInput() {
    return this._hostPublicAddress;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_region_id - computed: false, optional: true, required: false
  private _instanceRegionId?: string; 
  public get instanceRegionId() {
    return this.getStringAttribute('instance_region_id');
  }
  public set instanceRegionId(value: string) {
    this._instanceRegionId = value;
  }
  public resetInstanceRegionId() {
    this._instanceRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRegionIdInput() {
    return this._instanceRegionId;
  }

  // os_type - computed: false, optional: false, required: true
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_instance_id - computed: false, optional: true, required: false
  private _sourceInstanceId?: string; 
  public get sourceInstanceId() {
    return this.getStringAttribute('source_instance_id');
  }
  public set sourceInstanceId(value: string) {
    this._sourceInstanceId = value;
  }
  public resetSourceInstanceId() {
    this._sourceInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceIdInput() {
    return this._sourceInstanceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_address_type: cdktf.stringToTerraform(this._activeAddressType),
      comment: cdktf.stringToTerraform(this._comment),
      host_name: cdktf.stringToTerraform(this._hostName),
      host_private_address: cdktf.stringToTerraform(this._hostPrivateAddress),
      host_public_address: cdktf.stringToTerraform(this._hostPublicAddress),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_region_id: cdktf.stringToTerraform(this._instanceRegionId),
      os_type: cdktf.stringToTerraform(this._osType),
      source: cdktf.stringToTerraform(this._source),
      source_instance_id: cdktf.stringToTerraform(this._sourceInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_address_type: {
        value: cdktf.stringToHclTerraform(this._activeAddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_private_address: {
        value: cdktf.stringToHclTerraform(this._hostPrivateAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_public_address: {
        value: cdktf.stringToHclTerraform(this._hostPublicAddress),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_region_id: {
        value: cdktf.stringToHclTerraform(this._instanceRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_instance_id: {
        value: cdktf.stringToHclTerraform(this._sourceInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
