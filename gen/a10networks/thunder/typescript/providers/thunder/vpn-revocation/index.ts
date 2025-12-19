// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_revocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnRevocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate Authority file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_revocation#ca VpnRevocation#ca}
  */
  readonly ca?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_revocation#id VpnRevocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Revocation name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_revocation#name VpnRevocation#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_revocation#user_tag VpnRevocation#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_revocation#uuid VpnRevocation#uuid}
  */
  readonly uuid?: string;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_revocation#crl VpnRevocation#crl}
  */
  readonly crl?: VpnRevocationCrl;
  /**
  * ocsp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_revocation#ocsp VpnRevocation#ocsp}
  */
  readonly ocsp?: VpnRevocationOcsp;
}
export interface VpnRevocationCrl {
  /**
  * Primary CRL URL (http://www.example.com/ocsp) (only .der filetypes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_revocation#crl_pri VpnRevocation#crl_pri}
  */
  readonly crlPri?: string;
  /**
  * Secondary CRL URL (http://www.example.com/ocsp) (only .der filetypes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_revocation#crl_sec VpnRevocation#crl_sec}
  */
  readonly crlSec?: string;
}

export function vpnRevocationCrlToTerraform(struct?: VpnRevocationCrlOutputReference | VpnRevocationCrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crl_pri: cdktf.stringToTerraform(struct!.crlPri),
    crl_sec: cdktf.stringToTerraform(struct!.crlSec),
  }
}


export function vpnRevocationCrlToHclTerraform(struct?: VpnRevocationCrlOutputReference | VpnRevocationCrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crl_pri: {
      value: cdktf.stringToHclTerraform(struct!.crlPri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crl_sec: {
      value: cdktf.stringToHclTerraform(struct!.crlSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnRevocationCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnRevocationCrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crlPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlPri = this._crlPri;
    }
    if (this._crlSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlSec = this._crlSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnRevocationCrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crlPri = undefined;
      this._crlSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crlPri = value.crlPri;
      this._crlSec = value.crlSec;
    }
  }

  // crl_pri - computed: false, optional: true, required: false
  private _crlPri?: string; 
  public get crlPri() {
    return this.getStringAttribute('crl_pri');
  }
  public set crlPri(value: string) {
    this._crlPri = value;
  }
  public resetCrlPri() {
    this._crlPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlPriInput() {
    return this._crlPri;
  }

  // crl_sec - computed: false, optional: true, required: false
  private _crlSec?: string; 
  public get crlSec() {
    return this.getStringAttribute('crl_sec');
  }
  public set crlSec(value: string) {
    this._crlSec = value;
  }
  public resetCrlSec() {
    this._crlSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlSecInput() {
    return this._crlSec;
  }
}
export interface VpnRevocationOcsp {
  /**
  * Primary OCSP Authentication Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_revocation#ocsp_pri VpnRevocation#ocsp_pri}
  */
  readonly ocspPri?: string;
  /**
  * Secondary OCSP Authentication Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_revocation#ocsp_sec VpnRevocation#ocsp_sec}
  */
  readonly ocspSec?: string;
}

export function vpnRevocationOcspToTerraform(struct?: VpnRevocationOcspOutputReference | VpnRevocationOcsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ocsp_pri: cdktf.stringToTerraform(struct!.ocspPri),
    ocsp_sec: cdktf.stringToTerraform(struct!.ocspSec),
  }
}


export function vpnRevocationOcspToHclTerraform(struct?: VpnRevocationOcspOutputReference | VpnRevocationOcsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ocsp_pri: {
      value: cdktf.stringToHclTerraform(struct!.ocspPri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_sec: {
      value: cdktf.stringToHclTerraform(struct!.ocspSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnRevocationOcspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnRevocationOcsp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ocspPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspPri = this._ocspPri;
    }
    if (this._ocspSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspSec = this._ocspSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnRevocationOcsp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ocspPri = undefined;
      this._ocspSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ocspPri = value.ocspPri;
      this._ocspSec = value.ocspSec;
    }
  }

  // ocsp_pri - computed: false, optional: true, required: false
  private _ocspPri?: string; 
  public get ocspPri() {
    return this.getStringAttribute('ocsp_pri');
  }
  public set ocspPri(value: string) {
    this._ocspPri = value;
  }
  public resetOcspPri() {
    this._ocspPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspPriInput() {
    return this._ocspPri;
  }

  // ocsp_sec - computed: false, optional: true, required: false
  private _ocspSec?: string; 
  public get ocspSec() {
    return this.getStringAttribute('ocsp_sec');
  }
  public set ocspSec(value: string) {
    this._ocspSec = value;
  }
  public resetOcspSec() {
    this._ocspSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspSecInput() {
    return this._ocspSec;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_revocation thunder_vpn_revocation}
*/
export class VpnRevocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_revocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnRevocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnRevocation to import
  * @param importFromId The id of the existing VpnRevocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_revocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnRevocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_revocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_revocation thunder_vpn_revocation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnRevocationConfig
  */
  public constructor(scope: Construct, id: string, config: VpnRevocationConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_revocation',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ca = config.ca;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._crl.internalValue = config.crl;
    this._ocsp.internalValue = config.ocsp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // crl - computed: false, optional: true, required: false
  private _crl = new VpnRevocationCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: VpnRevocationCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // ocsp - computed: false, optional: true, required: false
  private _ocsp = new VpnRevocationOcspOutputReference(this, "ocsp");
  public get ocsp() {
    return this._ocsp;
  }
  public putOcsp(value: VpnRevocationOcsp) {
    this._ocsp.internalValue = value;
  }
  public resetOcsp() {
    this._ocsp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspInput() {
    return this._ocsp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca: cdktf.stringToTerraform(this._ca),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      crl: vpnRevocationCrlToTerraform(this._crl.internalValue),
      ocsp: vpnRevocationOcspToTerraform(this._ocsp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca: {
        value: cdktf.stringToHclTerraform(this._ca),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crl: {
        value: vpnRevocationCrlToHclTerraform(this._crl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnRevocationCrlList",
      },
      ocsp: {
        value: vpnRevocationOcspToHclTerraform(this._ocsp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnRevocationOcspList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
