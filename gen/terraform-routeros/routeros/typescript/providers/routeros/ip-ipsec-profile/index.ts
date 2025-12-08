// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpIpsecProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile#___path___ IpIpsecProfile#___path___}
  */
  readonly path?: string;
  /**
  * Diffie-Hellman group (cipher strength).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile#dh_group IpIpsecProfile#dh_group}
  */
  readonly dhGroup?: string[];
  /**
  * Dead peer detection interval. If set to disable-dpd, dead peer detection will not be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile#dpd_interval IpIpsecProfile#dpd_interval}
  */
  readonly dpdInterval?: string;
  /**
  * Maximum count of failures until peer is considered to be dead. Applicable if DPD is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile#dpd_maximum_failures IpIpsecProfile#dpd_maximum_failures}
  */
  readonly dpdMaximumFailures?: number;
  /**
  * List of encryption algorithms that will be used by the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile#enc_algorithm IpIpsecProfile#enc_algorithm}
  */
  readonly encAlgorithm?: string[];
  /**
  * Hashing algorithm. SHA (Secure Hash Algorithm) is stronger, but slower. MD5 uses 128-bit key, sha1-160bit key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile#hash_algorithm IpIpsecProfile#hash_algorithm}
  */
  readonly hashAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile#id IpIpsecProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Phase 1 lifebytes is used only as administrative value which is added to proposal. Used in cases if remote peer requires specific lifebytes value to establish phase 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile#lifebytes IpIpsecProfile#lifebytes}
  */
  readonly lifebytes?: number;
  /**
  * Phase 1 lifetime: specifies how long the SA will be valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile#lifetime IpIpsecProfile#lifetime}
  */
  readonly lifetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile#name IpIpsecProfile#name}
  */
  readonly name: string;
  /**
  * Use Linux NAT-T mechanism to solve IPsec incompatibility with NAT routers between IPsec peers. This can only be used with ESP protocol (AH is not supported by design, as it signs the complete packet, including the IP header, which is changed by NAT, rendering AH signature invalid). The method encapsulates IPsec ESP traffic into UDP streams in order to overcome some minor issues that made ESP incompatible with NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile#nat_traversal IpIpsecProfile#nat_traversal}
  */
  readonly natTraversal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile#prf_algorithm IpIpsecProfile#prf_algorithm}
  */
  readonly prfAlgorithm?: string;
  /**
  * Phase 2 lifetime check logic:
  *   * claim - take shortest of proposed and configured lifetimes and notify initiator about it
  *   * exact - require lifetimes to be the same
  *   * obey - accept whatever is sent by an initiator
  *   * strict - if the proposed lifetime is longer than the default then reject the proposal otherwise accept a proposed lifetime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile#proposal_check IpIpsecProfile#proposal_check}
  */
  readonly proposalCheck?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile routeros_ip_ipsec_profile}
*/
export class IpIpsecProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_ipsec_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpIpsecProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpIpsecProfile to import
  * @param importFromId The id of the existing IpIpsecProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpIpsecProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_ipsec_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_ipsec_profile routeros_ip_ipsec_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpIpsecProfileConfig
  */
  public constructor(scope: Construct, id: string, config: IpIpsecProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_ipsec_profile',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._dhGroup = config.dhGroup;
    this._dpdInterval = config.dpdInterval;
    this._dpdMaximumFailures = config.dpdMaximumFailures;
    this._encAlgorithm = config.encAlgorithm;
    this._hashAlgorithm = config.hashAlgorithm;
    this._id = config.id;
    this._lifebytes = config.lifebytes;
    this._lifetime = config.lifetime;
    this._name = config.name;
    this._natTraversal = config.natTraversal;
    this._prfAlgorithm = config.prfAlgorithm;
    this._proposalCheck = config.proposalCheck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // dh_group - computed: false, optional: true, required: false
  private _dhGroup?: string[]; 
  public get dhGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('dh_group'));
  }
  public set dhGroup(value: string[]) {
    this._dhGroup = value;
  }
  public resetDhGroup() {
    this._dhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // dpd_interval - computed: false, optional: true, required: false
  private _dpdInterval?: string; 
  public get dpdInterval() {
    return this.getStringAttribute('dpd_interval');
  }
  public set dpdInterval(value: string) {
    this._dpdInterval = value;
  }
  public resetDpdInterval() {
    this._dpdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdIntervalInput() {
    return this._dpdInterval;
  }

  // dpd_maximum_failures - computed: false, optional: true, required: false
  private _dpdMaximumFailures?: number; 
  public get dpdMaximumFailures() {
    return this.getNumberAttribute('dpd_maximum_failures');
  }
  public set dpdMaximumFailures(value: number) {
    this._dpdMaximumFailures = value;
  }
  public resetDpdMaximumFailures() {
    this._dpdMaximumFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdMaximumFailuresInput() {
    return this._dpdMaximumFailures;
  }

  // enc_algorithm - computed: false, optional: true, required: false
  private _encAlgorithm?: string[]; 
  public get encAlgorithm() {
    return cdktf.Fn.tolist(this.getListAttribute('enc_algorithm'));
  }
  public set encAlgorithm(value: string[]) {
    this._encAlgorithm = value;
  }
  public resetEncAlgorithm() {
    this._encAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgorithmInput() {
    return this._encAlgorithm;
  }

  // hash_algorithm - computed: false, optional: true, required: false
  private _hashAlgorithm?: string; 
  public get hashAlgorithm() {
    return this.getStringAttribute('hash_algorithm');
  }
  public set hashAlgorithm(value: string) {
    this._hashAlgorithm = value;
  }
  public resetHashAlgorithm() {
    this._hashAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmInput() {
    return this._hashAlgorithm;
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

  // lifebytes - computed: false, optional: true, required: false
  private _lifebytes?: number; 
  public get lifebytes() {
    return this.getNumberAttribute('lifebytes');
  }
  public set lifebytes(value: number) {
    this._lifebytes = value;
  }
  public resetLifebytes() {
    this._lifebytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifebytesInput() {
    return this._lifebytes;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: string; 
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }
  public set lifetime(value: string) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
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

  // nat_traversal - computed: false, optional: true, required: false
  private _natTraversal?: boolean | cdktf.IResolvable; 
  public get natTraversal() {
    return this.getBooleanAttribute('nat_traversal');
  }
  public set natTraversal(value: boolean | cdktf.IResolvable) {
    this._natTraversal = value;
  }
  public resetNatTraversal() {
    this._natTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTraversalInput() {
    return this._natTraversal;
  }

  // prf_algorithm - computed: false, optional: true, required: false
  private _prfAlgorithm?: string; 
  public get prfAlgorithm() {
    return this.getStringAttribute('prf_algorithm');
  }
  public set prfAlgorithm(value: string) {
    this._prfAlgorithm = value;
  }
  public resetPrfAlgorithm() {
    this._prfAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prfAlgorithmInput() {
    return this._prfAlgorithm;
  }

  // proposal_check - computed: false, optional: true, required: false
  private _proposalCheck?: string; 
  public get proposalCheck() {
    return this.getStringAttribute('proposal_check');
  }
  public set proposalCheck(value: string) {
    this._proposalCheck = value;
  }
  public resetProposalCheck() {
    this._proposalCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proposalCheckInput() {
    return this._proposalCheck;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      dh_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhGroup),
      dpd_interval: cdktf.stringToTerraform(this._dpdInterval),
      dpd_maximum_failures: cdktf.numberToTerraform(this._dpdMaximumFailures),
      enc_algorithm: cdktf.listMapper(cdktf.stringToTerraform, false)(this._encAlgorithm),
      hash_algorithm: cdktf.stringToTerraform(this._hashAlgorithm),
      id: cdktf.stringToTerraform(this._id),
      lifebytes: cdktf.numberToTerraform(this._lifebytes),
      lifetime: cdktf.stringToTerraform(this._lifetime),
      name: cdktf.stringToTerraform(this._name),
      nat_traversal: cdktf.booleanToTerraform(this._natTraversal),
      prf_algorithm: cdktf.stringToTerraform(this._prfAlgorithm),
      proposal_check: cdktf.stringToTerraform(this._proposalCheck),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dpd_interval: {
        value: cdktf.stringToHclTerraform(this._dpdInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dpd_maximum_failures: {
        value: cdktf.numberToHclTerraform(this._dpdMaximumFailures),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enc_algorithm: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._encAlgorithm),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hash_algorithm: {
        value: cdktf.stringToHclTerraform(this._hashAlgorithm),
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
      lifebytes: {
        value: cdktf.numberToHclTerraform(this._lifebytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lifetime: {
        value: cdktf.stringToHclTerraform(this._lifetime),
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
      nat_traversal: {
        value: cdktf.booleanToHclTerraform(this._natTraversal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prf_algorithm: {
        value: cdktf.stringToHclTerraform(this._prfAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proposal_check: {
        value: cdktf.stringToHclTerraform(this._proposalCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
