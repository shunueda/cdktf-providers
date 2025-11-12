// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_tunnel_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorIpsecTunnelProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the tunnel profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_tunnel_profile#description ConnectorIpsecTunnelProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_tunnel_profile#id ConnectorIpsecTunnelProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IKE DH group number of the IPSec tunnel. The value could be: `MODP1024`, `MODP2048`, `MODP3072`, `MODP4096`, `MODP6144`, `MODP8192`, `ECP256`, `ECP384`, `ECP521`, `CURVE25519`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_tunnel_profile#ike_dh_group ConnectorIpsecTunnelProfile#ike_dh_group}
  */
  readonly ikeDhGroup: string;
  /**
  * IKE encryption algorithm used with IPSec tunnel. The value could be: `AES256CBC`, `AES192CBC`, `AES128CBC`, `3DESCBC`, `AES256GCM16`, `AES192GCM16`, `AES128GCM16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_tunnel_profile#ike_encryption_algorithm ConnectorIpsecTunnelProfile#ike_encryption_algorithm}
  */
  readonly ikeEncryptionAlgorithm: string;
  /**
  * IKE integrity algorithm used with IPSec tunnel. The value could be: `SHA1`, `SHA256`, `SHA384`, `SHA512` and `MD5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_tunnel_profile#ike_integrity_algorithm ConnectorIpsecTunnelProfile#ike_integrity_algorithm}
  */
  readonly ikeIntegrityAlgorithm: string;
  /**
  * ESP DH group number of the IPSec tunnel. The value could be: `MODP1024`, `MODP2048`, `MODP3072`, `MODP4096`, `MODP6144`, `MODP8192`, `ECP256`, `ECP384`, `ECP521`, `CURVE25519` and `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_tunnel_profile#ipsec_dh_group ConnectorIpsecTunnelProfile#ipsec_dh_group}
  */
  readonly ipsecDhGroup: string;
  /**
  * ESP encryption algorithm of the IPSec Tunnel. The value could be: `AES256CBC`, `AES192CBC`, `AES128CBC`, `3DESCBC`, `AES256GCM16`, `AES192GCM16`, `AES128GCM16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_tunnel_profile#ipsec_encryption_algorithm ConnectorIpsecTunnelProfile#ipsec_encryption_algorithm}
  */
  readonly ipsecEncryptionAlgorithm: string;
  /**
  * ESP integrity algorithm of the IPSec tunnel. The value could be: `SHA1`, `SHA256`, `SHA384`, `SHA512` and `MD5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_tunnel_profile#ipsec_integrity_algorithm ConnectorIpsecTunnelProfile#ipsec_integrity_algorithm}
  */
  readonly ipsecIntegrityAlgorithm?: string;
  /**
  * The name of the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_tunnel_profile#name ConnectorIpsecTunnelProfile#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_tunnel_profile alkira_connector_ipsec_tunnel_profile}
*/
export class ConnectorIpsecTunnelProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_ipsec_tunnel_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorIpsecTunnelProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorIpsecTunnelProfile to import
  * @param importFromId The id of the existing ConnectorIpsecTunnelProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_tunnel_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorIpsecTunnelProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_ipsec_tunnel_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_tunnel_profile alkira_connector_ipsec_tunnel_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorIpsecTunnelProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorIpsecTunnelProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_ipsec_tunnel_profile',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
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
    this._id = config.id;
    this._ikeDhGroup = config.ikeDhGroup;
    this._ikeEncryptionAlgorithm = config.ikeEncryptionAlgorithm;
    this._ikeIntegrityAlgorithm = config.ikeIntegrityAlgorithm;
    this._ipsecDhGroup = config.ipsecDhGroup;
    this._ipsecEncryptionAlgorithm = config.ipsecEncryptionAlgorithm;
    this._ipsecIntegrityAlgorithm = config.ipsecIntegrityAlgorithm;
    this._name = config.name;
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

  // ike_dh_group - computed: false, optional: false, required: true
  private _ikeDhGroup?: string; 
  public get ikeDhGroup() {
    return this.getStringAttribute('ike_dh_group');
  }
  public set ikeDhGroup(value: string) {
    this._ikeDhGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeDhGroupInput() {
    return this._ikeDhGroup;
  }

  // ike_encryption_algorithm - computed: false, optional: false, required: true
  private _ikeEncryptionAlgorithm?: string; 
  public get ikeEncryptionAlgorithm() {
    return this.getStringAttribute('ike_encryption_algorithm');
  }
  public set ikeEncryptionAlgorithm(value: string) {
    this._ikeEncryptionAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeEncryptionAlgorithmInput() {
    return this._ikeEncryptionAlgorithm;
  }

  // ike_integrity_algorithm - computed: false, optional: false, required: true
  private _ikeIntegrityAlgorithm?: string; 
  public get ikeIntegrityAlgorithm() {
    return this.getStringAttribute('ike_integrity_algorithm');
  }
  public set ikeIntegrityAlgorithm(value: string) {
    this._ikeIntegrityAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeIntegrityAlgorithmInput() {
    return this._ikeIntegrityAlgorithm;
  }

  // ipsec_dh_group - computed: false, optional: false, required: true
  private _ipsecDhGroup?: string; 
  public get ipsecDhGroup() {
    return this.getStringAttribute('ipsec_dh_group');
  }
  public set ipsecDhGroup(value: string) {
    this._ipsecDhGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecDhGroupInput() {
    return this._ipsecDhGroup;
  }

  // ipsec_encryption_algorithm - computed: false, optional: false, required: true
  private _ipsecEncryptionAlgorithm?: string; 
  public get ipsecEncryptionAlgorithm() {
    return this.getStringAttribute('ipsec_encryption_algorithm');
  }
  public set ipsecEncryptionAlgorithm(value: string) {
    this._ipsecEncryptionAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncryptionAlgorithmInput() {
    return this._ipsecEncryptionAlgorithm;
  }

  // ipsec_integrity_algorithm - computed: false, optional: true, required: false
  private _ipsecIntegrityAlgorithm?: string; 
  public get ipsecIntegrityAlgorithm() {
    return this.getStringAttribute('ipsec_integrity_algorithm');
  }
  public set ipsecIntegrityAlgorithm(value: string) {
    this._ipsecIntegrityAlgorithm = value;
  }
  public resetIpsecIntegrityAlgorithm() {
    this._ipsecIntegrityAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecIntegrityAlgorithmInput() {
    return this._ipsecIntegrityAlgorithm;
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

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ike_dh_group: cdktf.stringToTerraform(this._ikeDhGroup),
      ike_encryption_algorithm: cdktf.stringToTerraform(this._ikeEncryptionAlgorithm),
      ike_integrity_algorithm: cdktf.stringToTerraform(this._ikeIntegrityAlgorithm),
      ipsec_dh_group: cdktf.stringToTerraform(this._ipsecDhGroup),
      ipsec_encryption_algorithm: cdktf.stringToTerraform(this._ipsecEncryptionAlgorithm),
      ipsec_integrity_algorithm: cdktf.stringToTerraform(this._ipsecIntegrityAlgorithm),
      name: cdktf.stringToTerraform(this._name),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_dh_group: {
        value: cdktf.stringToHclTerraform(this._ikeDhGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_encryption_algorithm: {
        value: cdktf.stringToHclTerraform(this._ikeEncryptionAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_integrity_algorithm: {
        value: cdktf.stringToHclTerraform(this._ikeIntegrityAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_dh_group: {
        value: cdktf.stringToHclTerraform(this._ipsecDhGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_encryption_algorithm: {
        value: cdktf.stringToHclTerraform(this._ipsecEncryptionAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_integrity_algorithm: {
        value: cdktf.stringToHclTerraform(this._ipsecIntegrityAlgorithm),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
