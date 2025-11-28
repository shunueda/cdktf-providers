// https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/primary_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrimaryIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/primary_ip#assignee_id PrimaryIp#assignee_id}
  */
  readonly assigneeId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/primary_ip#assignee_type PrimaryIp#assignee_type}
  */
  readonly assigneeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/primary_ip#auto_delete PrimaryIp#auto_delete}
  */
  readonly autoDelete: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/primary_ip#datacenter PrimaryIp#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/primary_ip#delete_protection PrimaryIp#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/primary_ip#id PrimaryIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/primary_ip#labels PrimaryIp#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/primary_ip#name PrimaryIp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/primary_ip#type PrimaryIp#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/primary_ip hcloud_primary_ip}
*/
export class PrimaryIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_primary_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrimaryIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrimaryIp to import
  * @param importFromId The id of the existing PrimaryIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/primary_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrimaryIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_primary_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/primary_ip hcloud_primary_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrimaryIpConfig
  */
  public constructor(scope: Construct, id: string, config: PrimaryIpConfig) {
    super(scope, id, {
      terraformResourceType: 'hcloud_primary_ip',
      terraformGeneratorMetadata: {
        providerName: 'hcloud',
        providerVersion: '1.57.0',
        providerVersionConstraint: '1.57.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assigneeId = config.assigneeId;
    this._assigneeType = config.assigneeType;
    this._autoDelete = config.autoDelete;
    this._datacenter = config.datacenter;
    this._deleteProtection = config.deleteProtection;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignee_id - computed: true, optional: true, required: false
  private _assigneeId?: number; 
  public get assigneeId() {
    return this.getNumberAttribute('assignee_id');
  }
  public set assigneeId(value: number) {
    this._assigneeId = value;
  }
  public resetAssigneeId() {
    this._assigneeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeIdInput() {
    return this._assigneeId;
  }

  // assignee_type - computed: false, optional: false, required: true
  private _assigneeType?: string; 
  public get assigneeType() {
    return this.getStringAttribute('assignee_type');
  }
  public set assigneeType(value: string) {
    this._assigneeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeTypeInput() {
    return this._assigneeType;
  }

  // auto_delete - computed: false, optional: false, required: true
  private _autoDelete?: boolean | cdktf.IResolvable; 
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }
  public set autoDelete(value: boolean | cdktf.IResolvable) {
    this._autoDelete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // datacenter - computed: true, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: boolean | cdktf.IResolvable; 
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }
  public set deleteProtection(value: boolean | cdktf.IResolvable) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_network - computed: true, optional: false, required: false
  public get ipNetwork() {
    return this.getStringAttribute('ip_network');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignee_id: cdktf.numberToTerraform(this._assigneeId),
      assignee_type: cdktf.stringToTerraform(this._assigneeType),
      auto_delete: cdktf.booleanToTerraform(this._autoDelete),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignee_id: {
        value: cdktf.numberToHclTerraform(this._assigneeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      assignee_type: {
        value: cdktf.stringToHclTerraform(this._assigneeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_delete: {
        value: cdktf.booleanToHclTerraform(this._autoDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      datacenter: {
        value: cdktf.stringToHclTerraform(this._datacenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_protection: {
        value: cdktf.booleanToHclTerraform(this._deleteProtection),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
