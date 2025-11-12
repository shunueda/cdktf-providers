// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment_secondary_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciL3OutPathAttachmentSecondaryIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment_secondary_ip#addr DataAciL3OutPathAttachmentSecondaryIp#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment_secondary_ip#annotation DataAciL3OutPathAttachmentSecondaryIp#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment_secondary_ip#description DataAciL3OutPathAttachmentSecondaryIp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment_secondary_ip#dhcp_relay DataAciL3OutPathAttachmentSecondaryIp#dhcp_relay}
  */
  readonly dhcpRelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment_secondary_ip#id DataAciL3OutPathAttachmentSecondaryIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment_secondary_ip#ipv6_dad DataAciL3OutPathAttachmentSecondaryIp#ipv6_dad}
  */
  readonly ipv6Dad?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment_secondary_ip#l3out_path_attachment_dn DataAciL3OutPathAttachmentSecondaryIp#l3out_path_attachment_dn}
  */
  readonly l3OutPathAttachmentDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment_secondary_ip#name_alias DataAciL3OutPathAttachmentSecondaryIp#name_alias}
  */
  readonly nameAlias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment_secondary_ip aci_l3out_path_attachment_secondary_ip}
*/
export class DataAciL3OutPathAttachmentSecondaryIp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l3out_path_attachment_secondary_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciL3OutPathAttachmentSecondaryIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciL3OutPathAttachmentSecondaryIp to import
  * @param importFromId The id of the existing DataAciL3OutPathAttachmentSecondaryIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment_secondary_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciL3OutPathAttachmentSecondaryIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l3out_path_attachment_secondary_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_path_attachment_secondary_ip aci_l3out_path_attachment_secondary_ip} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciL3OutPathAttachmentSecondaryIpConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciL3OutPathAttachmentSecondaryIpConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l3out_path_attachment_secondary_ip',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addr = config.addr;
    this._annotation = config.annotation;
    this._description = config.description;
    this._dhcpRelay = config.dhcpRelay;
    this._id = config.id;
    this._ipv6Dad = config.ipv6Dad;
    this._l3OutPathAttachmentDn = config.l3OutPathAttachmentDn;
    this._nameAlias = config.nameAlias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // description - computed: true, optional: true, required: false
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

  // dhcp_relay - computed: true, optional: true, required: false
  private _dhcpRelay?: string; 
  public get dhcpRelay() {
    return this.getStringAttribute('dhcp_relay');
  }
  public set dhcpRelay(value: string) {
    this._dhcpRelay = value;
  }
  public resetDhcpRelay() {
    this._dhcpRelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayInput() {
    return this._dhcpRelay;
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

  // ipv6_dad - computed: true, optional: true, required: false
  private _ipv6Dad?: string; 
  public get ipv6Dad() {
    return this.getStringAttribute('ipv6_dad');
  }
  public set ipv6Dad(value: string) {
    this._ipv6Dad = value;
  }
  public resetIpv6Dad() {
    this._ipv6Dad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DadInput() {
    return this._ipv6Dad;
  }

  // l3out_path_attachment_dn - computed: false, optional: false, required: true
  private _l3OutPathAttachmentDn?: string; 
  public get l3OutPathAttachmentDn() {
    return this.getStringAttribute('l3out_path_attachment_dn');
  }
  public set l3OutPathAttachmentDn(value: string) {
    this._l3OutPathAttachmentDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l3OutPathAttachmentDnInput() {
    return this._l3OutPathAttachmentDn;
  }

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr: cdktf.stringToTerraform(this._addr),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      dhcp_relay: cdktf.stringToTerraform(this._dhcpRelay),
      id: cdktf.stringToTerraform(this._id),
      ipv6_dad: cdktf.stringToTerraform(this._ipv6Dad),
      l3out_path_attachment_dn: cdktf.stringToTerraform(this._l3OutPathAttachmentDn),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr: {
        value: cdktf.stringToHclTerraform(this._addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_relay: {
        value: cdktf.stringToHclTerraform(this._dhcpRelay),
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
      ipv6_dad: {
        value: cdktf.stringToHclTerraform(this._ipv6Dad),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3out_path_attachment_dn: {
        value: cdktf.stringToHclTerraform(this._l3OutPathAttachmentDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
