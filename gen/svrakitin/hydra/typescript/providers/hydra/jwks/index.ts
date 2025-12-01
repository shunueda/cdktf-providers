// https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JwksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#id Jwks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#name Jwks#name}
  */
  readonly name: string;
  /**
  * generator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#generator Jwks#generator}
  */
  readonly generator?: JwksGenerator;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#key Jwks#key}
  */
  readonly key?: JwksKey[] | cdktf.IResolvable;
}
export interface JwksGenerator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#alg Jwks#alg}
  */
  readonly alg: string;
  /**
  * Arbitrary map of values that, when changed, will trigger recreation of resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#keepers Jwks#keepers}
  */
  readonly keepers: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#kid Jwks#kid}
  */
  readonly kid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#use Jwks#use}
  */
  readonly use: string;
}

export function jwksGeneratorToTerraform(struct?: JwksGeneratorOutputReference | JwksGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alg: cdktf.stringToTerraform(struct!.alg),
    keepers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.keepers),
    kid: cdktf.stringToTerraform(struct!.kid),
    use: cdktf.stringToTerraform(struct!.use),
  }
}


export function jwksGeneratorToHclTerraform(struct?: JwksGeneratorOutputReference | JwksGenerator): any {
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
    keepers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.keepers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kid: {
      value: cdktf.stringToHclTerraform(struct!.kid),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JwksGeneratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JwksGenerator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alg !== undefined) {
      hasAnyValues = true;
      internalValueResult.alg = this._alg;
    }
    if (this._keepers !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepers = this._keepers;
    }
    if (this._kid !== undefined) {
      hasAnyValues = true;
      internalValueResult.kid = this._kid;
    }
    if (this._use !== undefined) {
      hasAnyValues = true;
      internalValueResult.use = this._use;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JwksGenerator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alg = undefined;
      this._keepers = undefined;
      this._kid = undefined;
      this._use = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alg = value.alg;
      this._keepers = value.keepers;
      this._kid = value.kid;
      this._use = value.use;
    }
  }

  // alg - computed: false, optional: false, required: true
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
  }

  // keepers - computed: false, optional: false, required: true
  private _keepers?: { [key: string]: string }; 
  public get keepers() {
    return this.getStringMapAttribute('keepers');
  }
  public set keepers(value: { [key: string]: string }) {
    this._keepers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keepersInput() {
    return this._keepers;
  }

  // kid - computed: false, optional: false, required: true
  private _kid?: string; 
  public get kid() {
    return this.getStringAttribute('kid');
  }
  public set kid(value: string) {
    this._kid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
  }

  // use - computed: false, optional: false, required: true
  private _use?: string; 
  public get use() {
    return this.getStringAttribute('use');
  }
  public set use(value: string) {
    this._use = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }
}
export interface JwksKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#alg Jwks#alg}
  */
  readonly alg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#crv Jwks#crv}
  */
  readonly crv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#d Jwks#d}
  */
  readonly d?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#dp Jwks#dp}
  */
  readonly dp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#dq Jwks#dq}
  */
  readonly dq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#e Jwks#e}
  */
  readonly e?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#k Jwks#k}
  */
  readonly k?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#kid Jwks#kid}
  */
  readonly kid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#kty Jwks#kty}
  */
  readonly kty: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#n Jwks#n}
  */
  readonly n?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#p Jwks#p}
  */
  readonly p?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#q Jwks#q}
  */
  readonly q?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#qi Jwks#qi}
  */
  readonly qi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#use Jwks#use}
  */
  readonly use: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#x Jwks#x}
  */
  readonly x?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#x5c Jwks#x5c}
  */
  readonly x5C?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#y Jwks#y}
  */
  readonly y?: string;
}

export function jwksKeyToTerraform(struct?: JwksKey | cdktf.IResolvable): any {
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
    kid: cdktf.stringToTerraform(struct!.kid),
    kty: cdktf.stringToTerraform(struct!.kty),
    n: cdktf.stringToTerraform(struct!.n),
    p: cdktf.stringToTerraform(struct!.p),
    q: cdktf.stringToTerraform(struct!.q),
    qi: cdktf.stringToTerraform(struct!.qi),
    use: cdktf.stringToTerraform(struct!.use),
    x: cdktf.stringToTerraform(struct!.x),
    x5c: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.x5C),
    y: cdktf.stringToTerraform(struct!.y),
  }
}


export function jwksKeyToHclTerraform(struct?: JwksKey | cdktf.IResolvable): any {
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
    kid: {
      value: cdktf.stringToHclTerraform(struct!.kid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    x5c: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.x5C),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class JwksKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JwksKey | cdktf.IResolvable | undefined {
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
    if (this._kid !== undefined) {
      hasAnyValues = true;
      internalValueResult.kid = this._kid;
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
    if (this._x5C !== undefined) {
      hasAnyValues = true;
      internalValueResult.x5C = this._x5C;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JwksKey | cdktf.IResolvable | undefined) {
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
      this._kid = undefined;
      this._kty = undefined;
      this._n = undefined;
      this._p = undefined;
      this._q = undefined;
      this._qi = undefined;
      this._use = undefined;
      this._x = undefined;
      this._x5C = undefined;
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
      this._kid = value.kid;
      this._kty = value.kty;
      this._n = value.n;
      this._p = value.p;
      this._q = value.q;
      this._qi = value.qi;
      this._use = value.use;
      this._x = value.x;
      this._x5C = value.x5C;
      this._y = value.y;
    }
  }

  // alg - computed: false, optional: false, required: true
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
  }

  // crv - computed: true, optional: true, required: false
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

  // d - computed: true, optional: true, required: false
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

  // dp - computed: true, optional: true, required: false
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

  // dq - computed: true, optional: true, required: false
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

  // e - computed: true, optional: true, required: false
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

  // k - computed: true, optional: true, required: false
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

  // kid - computed: false, optional: false, required: true
  private _kid?: string; 
  public get kid() {
    return this.getStringAttribute('kid');
  }
  public set kid(value: string) {
    this._kid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
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

  // n - computed: true, optional: true, required: false
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

  // p - computed: true, optional: true, required: false
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

  // q - computed: true, optional: true, required: false
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

  // qi - computed: true, optional: true, required: false
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

  // use - computed: false, optional: false, required: true
  private _use?: string; 
  public get use() {
    return this.getStringAttribute('use');
  }
  public set use(value: string) {
    this._use = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }

  // x - computed: true, optional: true, required: false
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

  // x5c - computed: true, optional: true, required: false
  private _x5C?: string[]; 
  public get x5C() {
    return this.getListAttribute('x5c');
  }
  public set x5C(value: string[]) {
    this._x5C = value;
  }
  public resetX5C() {
    this._x5C = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x5CInput() {
    return this._x5C;
  }

  // y - computed: true, optional: true, required: false
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

export class JwksKeyList extends cdktf.ComplexList {
  public internalValue? : JwksKey[] | cdktf.IResolvable

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
  public get(index: number): JwksKeyOutputReference {
    return new JwksKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks hydra_jwks}
*/
export class Jwks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hydra_jwks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Jwks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Jwks to import
  * @param importFromId The id of the existing Jwks that should be imported. Refer to the {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Jwks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hydra_jwks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/svrakitin/hydra/0.5.4/docs/resources/jwks hydra_jwks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JwksConfig
  */
  public constructor(scope: Construct, id: string, config: JwksConfig) {
    super(scope, id, {
      terraformResourceType: 'hydra_jwks',
      terraformGeneratorMetadata: {
        providerName: 'hydra',
        providerVersion: '0.5.4',
        providerVersionConstraint: '0.5.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._generator.internalValue = config.generator;
    this._key.internalValue = config.key;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // generator - computed: false, optional: true, required: false
  private _generator = new JwksGeneratorOutputReference(this, "generator");
  public get generator() {
    return this._generator;
  }
  public putGenerator(value: JwksGenerator) {
    this._generator.internalValue = value;
  }
  public resetGenerator() {
    this._generator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorInput() {
    return this._generator.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key = new JwksKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
  public putKey(value: JwksKey[] | cdktf.IResolvable) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      generator: jwksGeneratorToTerraform(this._generator.internalValue),
      key: cdktf.listMapper(jwksKeyToTerraform, true)(this._key.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      generator: {
        value: jwksGeneratorToHclTerraform(this._generator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JwksGeneratorList",
      },
      key: {
        value: cdktf.listMapperHcl(jwksKeyToHclTerraform, true)(this._key.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JwksKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
