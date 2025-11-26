// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the address object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/address#description Address#description}
  */
  readonly description?: string;
  /**
  * The device in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/address#device Address#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/address#folder Address#folder}
  */
  readonly folder?: string;
  /**
  * Fully qualified domain name
  * 
  * > ℹ️ **Note:** You must specify exactly one of `fqdn`, `ip_netmask`, `ip_range`, and `ip_wildcard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/address#fqdn Address#fqdn}
  */
  readonly fqdn?: string;
  /**
  * IP address with or without CIDR notation
  * 
  * > ℹ️ **Note:** You must specify exactly one of `fqdn`, `ip_netmask`, `ip_range`, and `ip_wildcard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/address#ip_netmask Address#ip_netmask}
  */
  readonly ipNetmask?: string;
  /**
  * Ip range
  * 
  * > ℹ️ **Note:** You must specify exactly one of `fqdn`, `ip_netmask`, `ip_range`, and `ip_wildcard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/address#ip_range Address#ip_range}
  */
  readonly ipRange?: string;
  /**
  * IP wildcard mask
  * 
  * > ℹ️ **Note:** You must specify exactly one of `fqdn`, `ip_netmask`, `ip_range`, and `ip_wildcard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/address#ip_wildcard Address#ip_wildcard}
  */
  readonly ipWildcard?: string;
  /**
  * The name of the address object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/address#name Address#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/address#snippet Address#snippet}
  */
  readonly snippet?: string;
  /**
  * Tags assocaited with the address object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/address#tag Address#tag}
  */
  readonly tag?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/address scm_address}
*/
export class Address extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Address resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Address to import
  * @param importFromId The id of the existing Address that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Address to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/address scm_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AddressConfig
  */
  public constructor(scope: Construct, id: string, config: AddressConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_address',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._device = config.device;
    this._folder = config.folder;
    this._fqdn = config.fqdn;
    this._ipNetmask = config.ipNetmask;
    this._ipRange = config.ipRange;
    this._ipWildcard = config.ipWildcard;
    this._name = config.name;
    this._snippet = config.snippet;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_netmask - computed: false, optional: true, required: false
  private _ipNetmask?: string; 
  public get ipNetmask() {
    return this.getStringAttribute('ip_netmask');
  }
  public set ipNetmask(value: string) {
    this._ipNetmask = value;
  }
  public resetIpNetmask() {
    this._ipNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNetmaskInput() {
    return this._ipNetmask;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  public resetIpRange() {
    this._ipRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }

  // ip_wildcard - computed: false, optional: true, required: false
  private _ipWildcard?: string; 
  public get ipWildcard() {
    return this.getStringAttribute('ip_wildcard');
  }
  public set ipWildcard(value: string) {
    this._ipWildcard = value;
  }
  public resetIpWildcard() {
    this._ipWildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipWildcardInput() {
    return this._ipWildcard;
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

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string[]; 
  public get tag() {
    return this.getListAttribute('tag');
  }
  public set tag(value: string[]) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      ip_netmask: cdktf.stringToTerraform(this._ipNetmask),
      ip_range: cdktf.stringToTerraform(this._ipRange),
      ip_wildcard: cdktf.stringToTerraform(this._ipWildcard),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
      tag: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_netmask: {
        value: cdktf.stringToHclTerraform(this._ipNetmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_range: {
        value: cdktf.stringToHclTerraform(this._ipRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_wildcard: {
        value: cdktf.stringToHclTerraform(this._ipWildcard),
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
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tag),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
