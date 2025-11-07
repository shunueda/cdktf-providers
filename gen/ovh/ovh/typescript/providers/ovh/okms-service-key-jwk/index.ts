// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OkmsServiceKeyJwkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Context of the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#context OkmsServiceKeyJwk#context}
  */
  readonly context?: string;
  /**
  * Set of JSON Web Keys to import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#keys OkmsServiceKeyJwk#keys}
  */
  readonly keys: OkmsServiceKeyJwkKeys[] | cdktf.IResolvable;
  /**
  * Key name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#name OkmsServiceKeyJwk#name}
  */
  readonly name: string;
  /**
  * Okms ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#okms_id OkmsServiceKeyJwk#okms_id}
  */
  readonly okmsId: string;
}
export interface OkmsServiceKeyJwkIam {
}

export function okmsServiceKeyJwkIamToTerraform(struct?: OkmsServiceKeyJwkIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function okmsServiceKeyJwkIamToHclTerraform(struct?: OkmsServiceKeyJwkIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OkmsServiceKeyJwkIamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OkmsServiceKeyJwkIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OkmsServiceKeyJwkIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
  }
}
export interface OkmsServiceKeyJwkKeys {
  /**
  * The algorithm intended to be used with the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#alg OkmsServiceKeyJwk#alg}
  */
  readonly alg?: string;
  /**
  * The cryptographic curve used with the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#crv OkmsServiceKeyJwk#crv}
  */
  readonly crv?: string;
  /**
  * The RSA or EC private exponent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#d OkmsServiceKeyJwk#d}
  */
  readonly d?: string;
  /**
  * The RSA private key's first factor CRT exponent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#dp OkmsServiceKeyJwk#dp}
  */
  readonly dp?: string;
  /**
  * The RSA private key's second factor CRT exponent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#dq OkmsServiceKeyJwk#dq}
  */
  readonly dq?: string;
  /**
  * The exponent value for the RSA public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#e OkmsServiceKeyJwk#e}
  */
  readonly e?: string;
  /**
  * The value of the symmetric (or other single-valued) key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#k OkmsServiceKeyJwk#k}
  */
  readonly k?: string;
  /**
  * The operation for which the key is intended to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#key_ops OkmsServiceKeyJwk#key_ops}
  */
  readonly keyOps: string[];
  /**
  * Key type parameter identifies the cryptographic algorithm family used with the key, such as RSA or EC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#kty OkmsServiceKeyJwk#kty}
  */
  readonly kty: string;
  /**
  * The modulus value for the RSA public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#n OkmsServiceKeyJwk#n}
  */
  readonly n?: string;
  /**
  * The first prime factor of the RSA private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#p OkmsServiceKeyJwk#p}
  */
  readonly p?: string;
  /**
  * The second prime factor of the RSA private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#q OkmsServiceKeyJwk#q}
  */
  readonly q?: string;
  /**
  * The CRT coefficient of the second factor of the RSA private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#qi OkmsServiceKeyJwk#qi}
  */
  readonly qi?: string;
  /**
  * The intended use of the public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#use OkmsServiceKeyJwk#use}
  */
  readonly use?: string;
  /**
  * The x coordinate for the Elliptic Curve point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#x OkmsServiceKeyJwk#x}
  */
  readonly x?: string;
  /**
  * The y coordinate for the Elliptic Curve point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#y OkmsServiceKeyJwk#y}
  */
  readonly y?: string;
}

export function okmsServiceKeyJwkKeysToTerraform(struct?: OkmsServiceKeyJwkKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alg: cdktf.stringToTerraform(struct!.alg),
    crv: cdktf.stringToTerraform(struct!.crv),
    d: cdktf.stringToTerraform(struct!.d),
    dp: cdktf.stringToTerraform(struct!.dp),
    dq: cdktf.stringToTerraform(struct!.dq),
    e: cdktf.stringToTerraform(struct!.e),
    k: cdktf.stringToTerraform(struct!.k),
    key_ops: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyOps),
    kty: cdktf.stringToTerraform(struct!.kty),
    n: cdktf.stringToTerraform(struct!.n),
    p: cdktf.stringToTerraform(struct!.p),
    q: cdktf.stringToTerraform(struct!.q),
    qi: cdktf.stringToTerraform(struct!.qi),
    use: cdktf.stringToTerraform(struct!.use),
    x: cdktf.stringToTerraform(struct!.x),
    y: cdktf.stringToTerraform(struct!.y),
  }
}


export function okmsServiceKeyJwkKeysToHclTerraform(struct?: OkmsServiceKeyJwkKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alg: {
      value: cdktf.stringToHclTerraform(struct!.alg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crv: {
      value: cdktf.stringToHclTerraform(struct!.crv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    d: {
      value: cdktf.stringToHclTerraform(struct!.d),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dp: {
      value: cdktf.stringToHclTerraform(struct!.dp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dq: {
      value: cdktf.stringToHclTerraform(struct!.dq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e: {
      value: cdktf.stringToHclTerraform(struct!.e),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    k: {
      value: cdktf.stringToHclTerraform(struct!.k),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_ops: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyOps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kty: {
      value: cdktf.stringToHclTerraform(struct!.kty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    n: {
      value: cdktf.stringToHclTerraform(struct!.n),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    p: {
      value: cdktf.stringToHclTerraform(struct!.p),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    q: {
      value: cdktf.stringToHclTerraform(struct!.q),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qi: {
      value: cdktf.stringToHclTerraform(struct!.qi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use: {
      value: cdktf.stringToHclTerraform(struct!.use),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x: {
      value: cdktf.stringToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y: {
      value: cdktf.stringToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OkmsServiceKeyJwkKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OkmsServiceKeyJwkKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alg !== undefined) {
      hasAnyValues = true;
      internalValueResult.alg = this._alg;
    }
    if (this._crv !== undefined) {
      hasAnyValues = true;
      internalValueResult.crv = this._crv;
    }
    if (this._d !== undefined) {
      hasAnyValues = true;
      internalValueResult.d = this._d;
    }
    if (this._dp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dp = this._dp;
    }
    if (this._dq !== undefined) {
      hasAnyValues = true;
      internalValueResult.dq = this._dq;
    }
    if (this._e !== undefined) {
      hasAnyValues = true;
      internalValueResult.e = this._e;
    }
    if (this._k !== undefined) {
      hasAnyValues = true;
      internalValueResult.k = this._k;
    }
    if (this._keyOps !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOps = this._keyOps;
    }
    if (this._kty !== undefined) {
      hasAnyValues = true;
      internalValueResult.kty = this._kty;
    }
    if (this._n !== undefined) {
      hasAnyValues = true;
      internalValueResult.n = this._n;
    }
    if (this._p !== undefined) {
      hasAnyValues = true;
      internalValueResult.p = this._p;
    }
    if (this._q !== undefined) {
      hasAnyValues = true;
      internalValueResult.q = this._q;
    }
    if (this._qi !== undefined) {
      hasAnyValues = true;
      internalValueResult.qi = this._qi;
    }
    if (this._use !== undefined) {
      hasAnyValues = true;
      internalValueResult.use = this._use;
    }
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OkmsServiceKeyJwkKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alg = undefined;
      this._crv = undefined;
      this._d = undefined;
      this._dp = undefined;
      this._dq = undefined;
      this._e = undefined;
      this._k = undefined;
      this._keyOps = undefined;
      this._kty = undefined;
      this._n = undefined;
      this._p = undefined;
      this._q = undefined;
      this._qi = undefined;
      this._use = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alg = value.alg;
      this._crv = value.crv;
      this._d = value.d;
      this._dp = value.dp;
      this._dq = value.dq;
      this._e = value.e;
      this._k = value.k;
      this._keyOps = value.keyOps;
      this._kty = value.kty;
      this._n = value.n;
      this._p = value.p;
      this._q = value.q;
      this._qi = value.qi;
      this._use = value.use;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // alg - computed: false, optional: true, required: false
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  public resetAlg() {
    this._alg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
  }

  // crv - computed: false, optional: true, required: false
  private _crv?: string; 
  public get crv() {
    return this.getStringAttribute('crv');
  }
  public set crv(value: string) {
    this._crv = value;
  }
  public resetCrv() {
    this._crv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crvInput() {
    return this._crv;
  }

  // d - computed: false, optional: true, required: false
  private _d?: string; 
  public get d() {
    return this.getStringAttribute('d');
  }
  public set d(value: string) {
    this._d = value;
  }
  public resetD() {
    this._d = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dInput() {
    return this._d;
  }

  // dp - computed: false, optional: true, required: false
  private _dp?: string; 
  public get dp() {
    return this.getStringAttribute('dp');
  }
  public set dp(value: string) {
    this._dp = value;
  }
  public resetDp() {
    this._dp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpInput() {
    return this._dp;
  }

  // dq - computed: false, optional: true, required: false
  private _dq?: string; 
  public get dq() {
    return this.getStringAttribute('dq');
  }
  public set dq(value: string) {
    this._dq = value;
  }
  public resetDq() {
    this._dq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dqInput() {
    return this._dq;
  }

  // e - computed: false, optional: true, required: false
  private _e?: string; 
  public get e() {
    return this.getStringAttribute('e');
  }
  public set e(value: string) {
    this._e = value;
  }
  public resetE() {
    this._e = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eInput() {
    return this._e;
  }

  // k - computed: false, optional: true, required: false
  private _k?: string; 
  public get k() {
    return this.getStringAttribute('k');
  }
  public set k(value: string) {
    this._k = value;
  }
  public resetK() {
    this._k = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kInput() {
    return this._k;
  }

  // key_ops - computed: false, optional: false, required: true
  private _keyOps?: string[]; 
  public get keyOps() {
    return this.getListAttribute('key_ops');
  }
  public set keyOps(value: string[]) {
    this._keyOps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOpsInput() {
    return this._keyOps;
  }

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // kty - computed: false, optional: false, required: true
  private _kty?: string; 
  public get kty() {
    return this.getStringAttribute('kty');
  }
  public set kty(value: string) {
    this._kty = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ktyInput() {
    return this._kty;
  }

  // n - computed: false, optional: true, required: false
  private _n?: string; 
  public get n() {
    return this.getStringAttribute('n');
  }
  public set n(value: string) {
    this._n = value;
  }
  public resetN() {
    this._n = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nInput() {
    return this._n;
  }

  // p - computed: false, optional: true, required: false
  private _p?: string; 
  public get p() {
    return this.getStringAttribute('p');
  }
  public set p(value: string) {
    this._p = value;
  }
  public resetP() {
    this._p = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pInput() {
    return this._p;
  }

  // q - computed: false, optional: true, required: false
  private _q?: string; 
  public get q() {
    return this.getStringAttribute('q');
  }
  public set q(value: string) {
    this._q = value;
  }
  public resetQ() {
    this._q = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qInput() {
    return this._q;
  }

  // qi - computed: false, optional: true, required: false
  private _qi?: string; 
  public get qi() {
    return this.getStringAttribute('qi');
  }
  public set qi(value: string) {
    this._qi = value;
  }
  public resetQi() {
    this._qi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qiInput() {
    return this._qi;
  }

  // use - computed: false, optional: true, required: false
  private _use?: string; 
  public get use() {
    return this.getStringAttribute('use');
  }
  public set use(value: string) {
    this._use = value;
  }
  public resetUse() {
    this._use = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }

  // x - computed: false, optional: true, required: false
  private _x?: string; 
  public get x() {
    return this.getStringAttribute('x');
  }
  public set x(value: string) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: true, required: false
  private _y?: string; 
  public get y() {
    return this.getStringAttribute('y');
  }
  public set y(value: string) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}

export class OkmsServiceKeyJwkKeysList extends cdktf.ComplexList {
  public internalValue? : OkmsServiceKeyJwkKeys[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OkmsServiceKeyJwkKeysOutputReference {
    return new OkmsServiceKeyJwkKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk ovh_okms_service_key_jwk}
*/
export class OkmsServiceKeyJwk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_okms_service_key_jwk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OkmsServiceKeyJwk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OkmsServiceKeyJwk to import
  * @param importFromId The id of the existing OkmsServiceKeyJwk that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OkmsServiceKeyJwk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_okms_service_key_jwk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_service_key_jwk ovh_okms_service_key_jwk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OkmsServiceKeyJwkConfig
  */
  public constructor(scope: Construct, id: string, config: OkmsServiceKeyJwkConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_okms_service_key_jwk',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._context = config.context;
    this._keys.internalValue = config.keys;
    this._name = config.name;
    this._okmsId = config.okmsId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deactivation_reason - computed: true, optional: false, required: false
  public get deactivationReason() {
    return this.getStringAttribute('deactivation_reason');
  }

  // iam - computed: true, optional: false, required: false
  private _iam = new OkmsServiceKeyJwkIamOutputReference(this, "iam");
  public get iam() {
    return this._iam;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keys - computed: false, optional: false, required: true
  private _keys = new OkmsServiceKeyJwkKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }
  public putKeys(value: OkmsServiceKeyJwkKeys[] | cdktf.IResolvable) {
    this._keys.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys.internalValue;
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

  // okms_id - computed: false, optional: false, required: true
  private _okmsId?: string; 
  public get okmsId() {
    return this.getStringAttribute('okms_id');
  }
  public set okmsId(value: string) {
    this._okmsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get okmsIdInput() {
    return this._okmsId;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context: cdktf.stringToTerraform(this._context),
      keys: cdktf.listMapper(okmsServiceKeyJwkKeysToTerraform, false)(this._keys.internalValue),
      name: cdktf.stringToTerraform(this._name),
      okms_id: cdktf.stringToTerraform(this._okmsId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keys: {
        value: cdktf.listMapperHcl(okmsServiceKeyJwkKeysToHclTerraform, false)(this._keys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OkmsServiceKeyJwkKeysList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okms_id: {
        value: cdktf.stringToHclTerraform(this._okmsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
