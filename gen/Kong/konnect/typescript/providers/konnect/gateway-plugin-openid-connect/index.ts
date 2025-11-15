// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginOpenidConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#config GatewayPluginOpenidConnect#config}
  */
  readonly config: GatewayPluginOpenidConnectConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#control_plane_id GatewayPluginOpenidConnect#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#created_at GatewayPluginOpenidConnect#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#enabled GatewayPluginOpenidConnect#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#id GatewayPluginOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#instance_name GatewayPluginOpenidConnect#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#ordering GatewayPluginOpenidConnect#ordering}
  */
  readonly ordering?: GatewayPluginOpenidConnectOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#partials GatewayPluginOpenidConnect#partials}
  */
  readonly partials?: GatewayPluginOpenidConnectPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#protocols GatewayPluginOpenidConnect#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#route GatewayPluginOpenidConnect#route}
  */
  readonly route?: GatewayPluginOpenidConnectRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#service GatewayPluginOpenidConnect#service}
  */
  readonly service?: GatewayPluginOpenidConnectService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#tags GatewayPluginOpenidConnect#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#updated_at GatewayPluginOpenidConnect#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginOpenidConnectConfigClientJwk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#alg GatewayPluginOpenidConnect#alg}
  */
  readonly alg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#crv GatewayPluginOpenidConnect#crv}
  */
  readonly crv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#d GatewayPluginOpenidConnect#d}
  */
  readonly d?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#dp GatewayPluginOpenidConnect#dp}
  */
  readonly dp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#dq GatewayPluginOpenidConnect#dq}
  */
  readonly dq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#e GatewayPluginOpenidConnect#e}
  */
  readonly e?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#issuer GatewayPluginOpenidConnect#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#k GatewayPluginOpenidConnect#k}
  */
  readonly k?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#key_ops GatewayPluginOpenidConnect#key_ops}
  */
  readonly keyOps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#kid GatewayPluginOpenidConnect#kid}
  */
  readonly kid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#kty GatewayPluginOpenidConnect#kty}
  */
  readonly kty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#n GatewayPluginOpenidConnect#n}
  */
  readonly n?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#oth GatewayPluginOpenidConnect#oth}
  */
  readonly oth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#p GatewayPluginOpenidConnect#p}
  */
  readonly p?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#q GatewayPluginOpenidConnect#q}
  */
  readonly q?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#qi GatewayPluginOpenidConnect#qi}
  */
  readonly qi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#r GatewayPluginOpenidConnect#r}
  */
  readonly r?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#t GatewayPluginOpenidConnect#t}
  */
  readonly t?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#use GatewayPluginOpenidConnect#use}
  */
  readonly use?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#x GatewayPluginOpenidConnect#x}
  */
  readonly x?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#x5c GatewayPluginOpenidConnect#x5c}
  */
  readonly x5C?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#x5t GatewayPluginOpenidConnect#x5t}
  */
  readonly x5T?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#x5t_number_s256 GatewayPluginOpenidConnect#x5t_number_s256}
  */
  readonly x5TNumberS256?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#x5u GatewayPluginOpenidConnect#x5u}
  */
  readonly x5U?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#y GatewayPluginOpenidConnect#y}
  */
  readonly y?: string;
}

export function gatewayPluginOpenidConnectConfigClientJwkToTerraform(struct?: GatewayPluginOpenidConnectConfigClientJwk | cdktf.IResolvable): any {
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
    issuer: cdktf.stringToTerraform(struct!.issuer),
    k: cdktf.stringToTerraform(struct!.k),
    key_ops: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyOps),
    kid: cdktf.stringToTerraform(struct!.kid),
    kty: cdktf.stringToTerraform(struct!.kty),
    n: cdktf.stringToTerraform(struct!.n),
    oth: cdktf.stringToTerraform(struct!.oth),
    p: cdktf.stringToTerraform(struct!.p),
    q: cdktf.stringToTerraform(struct!.q),
    qi: cdktf.stringToTerraform(struct!.qi),
    r: cdktf.stringToTerraform(struct!.r),
    t: cdktf.stringToTerraform(struct!.t),
    use: cdktf.stringToTerraform(struct!.use),
    x: cdktf.stringToTerraform(struct!.x),
    x5c: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.x5C),
    x5t: cdktf.stringToTerraform(struct!.x5T),
    x5t_number_s256: cdktf.stringToTerraform(struct!.x5TNumberS256),
    x5u: cdktf.stringToTerraform(struct!.x5U),
    y: cdktf.stringToTerraform(struct!.y),
  }
}


export function gatewayPluginOpenidConnectConfigClientJwkToHclTerraform(struct?: GatewayPluginOpenidConnectConfigClientJwk | cdktf.IResolvable): any {
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
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
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
    oth: {
      value: cdktf.stringToHclTerraform(struct!.oth),
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
    r: {
      value: cdktf.stringToHclTerraform(struct!.r),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    t: {
      value: cdktf.stringToHclTerraform(struct!.t),
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
    x5t: {
      value: cdktf.stringToHclTerraform(struct!.x5T),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x5t_number_s256: {
      value: cdktf.stringToHclTerraform(struct!.x5TNumberS256),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x5u: {
      value: cdktf.stringToHclTerraform(struct!.x5U),
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

export class GatewayPluginOpenidConnectConfigClientJwkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginOpenidConnectConfigClientJwk | cdktf.IResolvable | undefined {
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
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._k !== undefined) {
      hasAnyValues = true;
      internalValueResult.k = this._k;
    }
    if (this._keyOps !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOps = this._keyOps;
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
    if (this._oth !== undefined) {
      hasAnyValues = true;
      internalValueResult.oth = this._oth;
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
    if (this._r !== undefined) {
      hasAnyValues = true;
      internalValueResult.r = this._r;
    }
    if (this._t !== undefined) {
      hasAnyValues = true;
      internalValueResult.t = this._t;
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
    if (this._x5T !== undefined) {
      hasAnyValues = true;
      internalValueResult.x5T = this._x5T;
    }
    if (this._x5TNumberS256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.x5TNumberS256 = this._x5TNumberS256;
    }
    if (this._x5U !== undefined) {
      hasAnyValues = true;
      internalValueResult.x5U = this._x5U;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOpenidConnectConfigClientJwk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alg = undefined;
      this._crv = undefined;
      this._d = undefined;
      this._dp = undefined;
      this._dq = undefined;
      this._e = undefined;
      this._issuer = undefined;
      this._k = undefined;
      this._keyOps = undefined;
      this._kid = undefined;
      this._kty = undefined;
      this._n = undefined;
      this._oth = undefined;
      this._p = undefined;
      this._q = undefined;
      this._qi = undefined;
      this._r = undefined;
      this._t = undefined;
      this._use = undefined;
      this._x = undefined;
      this._x5C = undefined;
      this._x5T = undefined;
      this._x5TNumberS256 = undefined;
      this._x5U = undefined;
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
      this._issuer = value.issuer;
      this._k = value.k;
      this._keyOps = value.keyOps;
      this._kid = value.kid;
      this._kty = value.kty;
      this._n = value.n;
      this._oth = value.oth;
      this._p = value.p;
      this._q = value.q;
      this._qi = value.qi;
      this._r = value.r;
      this._t = value.t;
      this._use = value.use;
      this._x = value.x;
      this._x5C = value.x5C;
      this._x5T = value.x5T;
      this._x5TNumberS256 = value.x5TNumberS256;
      this._x5U = value.x5U;
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

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
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

  // key_ops - computed: false, optional: true, required: false
  private _keyOps?: string[]; 
  public get keyOps() {
    return this.getListAttribute('key_ops');
  }
  public set keyOps(value: string[]) {
    this._keyOps = value;
  }
  public resetKeyOps() {
    this._keyOps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOpsInput() {
    return this._keyOps;
  }

  // kid - computed: false, optional: true, required: false
  private _kid?: string; 
  public get kid() {
    return this.getStringAttribute('kid');
  }
  public set kid(value: string) {
    this._kid = value;
  }
  public resetKid() {
    this._kid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
  }

  // kty - computed: false, optional: true, required: false
  private _kty?: string; 
  public get kty() {
    return this.getStringAttribute('kty');
  }
  public set kty(value: string) {
    this._kty = value;
  }
  public resetKty() {
    this._kty = undefined;
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

  // oth - computed: false, optional: true, required: false
  private _oth?: string; 
  public get oth() {
    return this.getStringAttribute('oth');
  }
  public set oth(value: string) {
    this._oth = value;
  }
  public resetOth() {
    this._oth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othInput() {
    return this._oth;
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

  // r - computed: false, optional: true, required: false
  private _r?: string; 
  public get r() {
    return this.getStringAttribute('r');
  }
  public set r(value: string) {
    this._r = value;
  }
  public resetR() {
    this._r = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rInput() {
    return this._r;
  }

  // t - computed: false, optional: true, required: false
  private _t?: string; 
  public get t() {
    return this.getStringAttribute('t');
  }
  public set t(value: string) {
    this._t = value;
  }
  public resetT() {
    this._t = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tInput() {
    return this._t;
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

  // x5c - computed: false, optional: true, required: false
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

  // x5t - computed: false, optional: true, required: false
  private _x5T?: string; 
  public get x5T() {
    return this.getStringAttribute('x5t');
  }
  public set x5T(value: string) {
    this._x5T = value;
  }
  public resetX5T() {
    this._x5T = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x5TInput() {
    return this._x5T;
  }

  // x5t_number_s256 - computed: false, optional: true, required: false
  private _x5TNumberS256?: string; 
  public get x5TNumberS256() {
    return this.getStringAttribute('x5t_number_s256');
  }
  public set x5TNumberS256(value: string) {
    this._x5TNumberS256 = value;
  }
  public resetX5TNumberS256() {
    this._x5TNumberS256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x5TNumberS256Input() {
    return this._x5TNumberS256;
  }

  // x5u - computed: false, optional: true, required: false
  private _x5U?: string; 
  public get x5U() {
    return this.getStringAttribute('x5u');
  }
  public set x5U(value: string) {
    this._x5U = value;
  }
  public resetX5U() {
    this._x5U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x5UInput() {
    return this._x5U;
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

export class GatewayPluginOpenidConnectConfigClientJwkList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginOpenidConnectConfigClientJwk[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginOpenidConnectConfigClientJwkOutputReference {
    return new GatewayPluginOpenidConnectConfigClientJwkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#ip GatewayPluginOpenidConnect#ip}
  */
  readonly ip?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#port GatewayPluginOpenidConnect#port}
  */
  readonly port?: number;
}

export function gatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodesToTerraform(struct?: GatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodesToHclTerraform(struct?: GatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
    }
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class GatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodesOutputReference {
    return new GatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#host GatewayPluginOpenidConnect#host}
  */
  readonly host?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#port GatewayPluginOpenidConnect#port}
  */
  readonly port?: number;
}

export function gatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodesToTerraform(struct?: GatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodesToHclTerraform(struct?: GatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class GatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodesOutputReference {
    return new GatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginOpenidConnectConfigClusterCacheRedis {
  /**
  * Maximum retry attempts for redirection. Default: 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#cluster_max_redirections GatewayPluginOpenidConnect#cluster_max_redirections}
  */
  readonly clusterMaxRedirections?: number;
  /**
  * Cluster addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Cluster. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#cluster_nodes GatewayPluginOpenidConnect#cluster_nodes}
  */
  readonly clusterNodes?: GatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodes[] | cdktf.IResolvable;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#connect_timeout GatewayPluginOpenidConnect#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * If the connection to Redis is proxied (e.g. Envoy), set it `true`. Set the `host` and `port` to point to the proxy address. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#connection_is_proxied GatewayPluginOpenidConnect#connection_is_proxied}
  */
  readonly connectionIsProxied?: boolean | cdktf.IResolvable;
  /**
  * Database to use for the Redis connection when using the `redis` strategy. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#database GatewayPluginOpenidConnect#database}
  */
  readonly database?: number;
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#host GatewayPluginOpenidConnect#host}
  */
  readonly host?: string;
  /**
  * Limits the total number of opened connections for a pool. If the connection pool is full, connection queues above the limit go into the backlog queue. If the backlog queue is full, subsequent connect operations fail and return `nil`. Queued operations (subject to set timeouts) resume once the number of connections in the pool is less than `keepalive_pool_size`. If latency is high or throughput is low, try increasing this value. Empirically, this value is larger than `keepalive_pool_size`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#keepalive_backlog GatewayPluginOpenidConnect#keepalive_backlog}
  */
  readonly keepaliveBacklog?: number;
  /**
  * The size limit for every cosocket connection pool associated with every remote server, per worker process. If neither `keepalive_pool_size` nor `keepalive_backlog` is specified, no pool is created. If `keepalive_pool_size` isn't specified but `keepalive_backlog` is specified, then the pool uses the default value. Try to increase (e.g. 512) this value if latency is high or throughput is low. Default: 256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#keepalive_pool_size GatewayPluginOpenidConnect#keepalive_pool_size}
  */
  readonly keepalivePoolSize?: number;
  /**
  * Password to use for Redis connections. If undefined, no AUTH commands are sent to Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#password GatewayPluginOpenidConnect#password}
  */
  readonly password?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#port GatewayPluginOpenidConnect#port}
  */
  readonly port?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#read_timeout GatewayPluginOpenidConnect#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#send_timeout GatewayPluginOpenidConnect#send_timeout}
  */
  readonly sendTimeout?: number;
  /**
  * Sentinel master to use for Redis connections. Defining this value implies using Redis Sentinel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#sentinel_master GatewayPluginOpenidConnect#sentinel_master}
  */
  readonly sentinelMaster?: string;
  /**
  * Sentinel node addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Sentinel. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#sentinel_nodes GatewayPluginOpenidConnect#sentinel_nodes}
  */
  readonly sentinelNodes?: GatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodes[] | cdktf.IResolvable;
  /**
  * Sentinel password to authenticate with a Redis Sentinel instance. If undefined, no AUTH commands are sent to Redis Sentinels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#sentinel_password GatewayPluginOpenidConnect#sentinel_password}
  */
  readonly sentinelPassword?: string;
  /**
  * Sentinel role to use for Redis connections when the `redis` strategy is defined. Defining this value implies using Redis Sentinel. must be one of ["any", "master", "slave"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#sentinel_role GatewayPluginOpenidConnect#sentinel_role}
  */
  readonly sentinelRole?: string;
  /**
  * Sentinel username to authenticate with a Redis Sentinel instance. If undefined, ACL authentication won't be performed. This requires Redis v6.2.0+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#sentinel_username GatewayPluginOpenidConnect#sentinel_username}
  */
  readonly sentinelUsername?: string;
  /**
  * A string representing an SNI (server name indication) value for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#server_name GatewayPluginOpenidConnect#server_name}
  */
  readonly serverName?: string;
  /**
  * If set to true, uses SSL to connect to Redis. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#ssl GatewayPluginOpenidConnect#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * If set to true, verifies the validity of the server SSL certificate. If setting this parameter, also configure `lua_ssl_trusted_certificate` in `kong.conf` to specify the CA (or server) certificate used by your Redis server. You may also need to configure `lua_ssl_verify_depth` accordingly. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#ssl_verify GatewayPluginOpenidConnect#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Username to use for Redis connections. If undefined, ACL authentication won't be performed. This requires Redis v6.0.0+. To be compatible with Redis v5.x.y, you can set it to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#username GatewayPluginOpenidConnect#username}
  */
  readonly username?: string;
}

export function gatewayPluginOpenidConnectConfigClusterCacheRedisToTerraform(struct?: GatewayPluginOpenidConnectConfigClusterCacheRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_max_redirections: cdktf.numberToTerraform(struct!.clusterMaxRedirections),
    cluster_nodes: cdktf.listMapper(gatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodesToTerraform, false)(struct!.clusterNodes),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    connection_is_proxied: cdktf.booleanToTerraform(struct!.connectionIsProxied),
    database: cdktf.numberToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    keepalive_backlog: cdktf.numberToTerraform(struct!.keepaliveBacklog),
    keepalive_pool_size: cdktf.numberToTerraform(struct!.keepalivePoolSize),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    read_timeout: cdktf.numberToTerraform(struct!.readTimeout),
    send_timeout: cdktf.numberToTerraform(struct!.sendTimeout),
    sentinel_master: cdktf.stringToTerraform(struct!.sentinelMaster),
    sentinel_nodes: cdktf.listMapper(gatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodesToTerraform, false)(struct!.sentinelNodes),
    sentinel_password: cdktf.stringToTerraform(struct!.sentinelPassword),
    sentinel_role: cdktf.stringToTerraform(struct!.sentinelRole),
    sentinel_username: cdktf.stringToTerraform(struct!.sentinelUsername),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPluginOpenidConnectConfigClusterCacheRedisToHclTerraform(struct?: GatewayPluginOpenidConnectConfigClusterCacheRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_max_redirections: {
      value: cdktf.numberToHclTerraform(struct!.clusterMaxRedirections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_nodes: {
      value: cdktf.listMapperHcl(gatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodesToHclTerraform, false)(struct!.clusterNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodesList",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_is_proxied: {
      value: cdktf.booleanToHclTerraform(struct!.connectionIsProxied),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database: {
      value: cdktf.numberToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_backlog: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveBacklog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.keepalivePoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sentinel_master: {
      value: cdktf.stringToHclTerraform(struct!.sentinelMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel_nodes: {
      value: cdktf.listMapperHcl(gatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodesToHclTerraform, false)(struct!.sentinelNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodesList",
    },
    sentinel_password: {
      value: cdktf.stringToHclTerraform(struct!.sentinelPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel_role: {
      value: cdktf.stringToHclTerraform(struct!.sentinelRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel_username: {
      value: cdktf.stringToHclTerraform(struct!.sentinelUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl: {
      value: cdktf.booleanToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpenidConnectConfigClusterCacheRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpenidConnectConfigClusterCacheRedis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterMaxRedirections !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMaxRedirections = this._clusterMaxRedirections;
    }
    if (this._clusterNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNodes = this._clusterNodes?.internalValue;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._connectionIsProxied !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionIsProxied = this._connectionIsProxied;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._keepaliveBacklog !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveBacklog = this._keepaliveBacklog;
    }
    if (this._keepalivePoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalivePoolSize = this._keepalivePoolSize;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._sendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeout = this._sendTimeout;
    }
    if (this._sentinelMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelMaster = this._sentinelMaster;
    }
    if (this._sentinelNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelNodes = this._sentinelNodes?.internalValue;
    }
    if (this._sentinelPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelPassword = this._sentinelPassword;
    }
    if (this._sentinelRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelRole = this._sentinelRole;
    }
    if (this._sentinelUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelUsername = this._sentinelUsername;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOpenidConnectConfigClusterCacheRedis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterMaxRedirections = undefined;
      this._clusterNodes.internalValue = undefined;
      this._connectTimeout = undefined;
      this._connectionIsProxied = undefined;
      this._database = undefined;
      this._host = undefined;
      this._keepaliveBacklog = undefined;
      this._keepalivePoolSize = undefined;
      this._password = undefined;
      this._port = undefined;
      this._readTimeout = undefined;
      this._sendTimeout = undefined;
      this._sentinelMaster = undefined;
      this._sentinelNodes.internalValue = undefined;
      this._sentinelPassword = undefined;
      this._sentinelRole = undefined;
      this._sentinelUsername = undefined;
      this._serverName = undefined;
      this._ssl = undefined;
      this._sslVerify = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterMaxRedirections = value.clusterMaxRedirections;
      this._clusterNodes.internalValue = value.clusterNodes;
      this._connectTimeout = value.connectTimeout;
      this._connectionIsProxied = value.connectionIsProxied;
      this._database = value.database;
      this._host = value.host;
      this._keepaliveBacklog = value.keepaliveBacklog;
      this._keepalivePoolSize = value.keepalivePoolSize;
      this._password = value.password;
      this._port = value.port;
      this._readTimeout = value.readTimeout;
      this._sendTimeout = value.sendTimeout;
      this._sentinelMaster = value.sentinelMaster;
      this._sentinelNodes.internalValue = value.sentinelNodes;
      this._sentinelPassword = value.sentinelPassword;
      this._sentinelRole = value.sentinelRole;
      this._sentinelUsername = value.sentinelUsername;
      this._serverName = value.serverName;
      this._ssl = value.ssl;
      this._sslVerify = value.sslVerify;
      this._username = value.username;
    }
  }

  // cluster_max_redirections - computed: true, optional: true, required: false
  private _clusterMaxRedirections?: number; 
  public get clusterMaxRedirections() {
    return this.getNumberAttribute('cluster_max_redirections');
  }
  public set clusterMaxRedirections(value: number) {
    this._clusterMaxRedirections = value;
  }
  public resetClusterMaxRedirections() {
    this._clusterMaxRedirections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMaxRedirectionsInput() {
    return this._clusterMaxRedirections;
  }

  // cluster_nodes - computed: true, optional: true, required: false
  private _clusterNodes = new GatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodesList(this, "cluster_nodes", false);
  public get clusterNodes() {
    return this._clusterNodes;
  }
  public putClusterNodes(value: GatewayPluginOpenidConnectConfigClusterCacheRedisClusterNodes[] | cdktf.IResolvable) {
    this._clusterNodes.internalValue = value;
  }
  public resetClusterNodes() {
    this._clusterNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNodesInput() {
    return this._clusterNodes.internalValue;
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // connection_is_proxied - computed: true, optional: true, required: false
  private _connectionIsProxied?: boolean | cdktf.IResolvable; 
  public get connectionIsProxied() {
    return this.getBooleanAttribute('connection_is_proxied');
  }
  public set connectionIsProxied(value: boolean | cdktf.IResolvable) {
    this._connectionIsProxied = value;
  }
  public resetConnectionIsProxied() {
    this._connectionIsProxied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIsProxiedInput() {
    return this._connectionIsProxied;
  }

  // database - computed: true, optional: true, required: false
  private _database?: number; 
  public get database() {
    return this.getNumberAttribute('database');
  }
  public set database(value: number) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // keepalive_backlog - computed: true, optional: true, required: false
  private _keepaliveBacklog?: number; 
  public get keepaliveBacklog() {
    return this.getNumberAttribute('keepalive_backlog');
  }
  public set keepaliveBacklog(value: number) {
    this._keepaliveBacklog = value;
  }
  public resetKeepaliveBacklog() {
    this._keepaliveBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveBacklogInput() {
    return this._keepaliveBacklog;
  }

  // keepalive_pool_size - computed: true, optional: true, required: false
  private _keepalivePoolSize?: number; 
  public get keepalivePoolSize() {
    return this.getNumberAttribute('keepalive_pool_size');
  }
  public set keepalivePoolSize(value: number) {
    this._keepalivePoolSize = value;
  }
  public resetKeepalivePoolSize() {
    this._keepalivePoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepalivePoolSizeInput() {
    return this._keepalivePoolSize;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // read_timeout - computed: true, optional: true, required: false
  private _readTimeout?: number; 
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }
  public set readTimeout(value: number) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // send_timeout - computed: true, optional: true, required: false
  private _sendTimeout?: number; 
  public get sendTimeout() {
    return this.getNumberAttribute('send_timeout');
  }
  public set sendTimeout(value: number) {
    this._sendTimeout = value;
  }
  public resetSendTimeout() {
    this._sendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTimeoutInput() {
    return this._sendTimeout;
  }

  // sentinel_master - computed: true, optional: true, required: false
  private _sentinelMaster?: string; 
  public get sentinelMaster() {
    return this.getStringAttribute('sentinel_master');
  }
  public set sentinelMaster(value: string) {
    this._sentinelMaster = value;
  }
  public resetSentinelMaster() {
    this._sentinelMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelMasterInput() {
    return this._sentinelMaster;
  }

  // sentinel_nodes - computed: true, optional: true, required: false
  private _sentinelNodes = new GatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodesList(this, "sentinel_nodes", false);
  public get sentinelNodes() {
    return this._sentinelNodes;
  }
  public putSentinelNodes(value: GatewayPluginOpenidConnectConfigClusterCacheRedisSentinelNodes[] | cdktf.IResolvable) {
    this._sentinelNodes.internalValue = value;
  }
  public resetSentinelNodes() {
    this._sentinelNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelNodesInput() {
    return this._sentinelNodes.internalValue;
  }

  // sentinel_password - computed: true, optional: true, required: false
  private _sentinelPassword?: string; 
  public get sentinelPassword() {
    return this.getStringAttribute('sentinel_password');
  }
  public set sentinelPassword(value: string) {
    this._sentinelPassword = value;
  }
  public resetSentinelPassword() {
    this._sentinelPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelPasswordInput() {
    return this._sentinelPassword;
  }

  // sentinel_role - computed: true, optional: true, required: false
  private _sentinelRole?: string; 
  public get sentinelRole() {
    return this.getStringAttribute('sentinel_role');
  }
  public set sentinelRole(value: string) {
    this._sentinelRole = value;
  }
  public resetSentinelRole() {
    this._sentinelRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelRoleInput() {
    return this._sentinelRole;
  }

  // sentinel_username - computed: true, optional: true, required: false
  private _sentinelUsername?: string; 
  public get sentinelUsername() {
    return this.getStringAttribute('sentinel_username');
  }
  public set sentinelUsername(value: string) {
    this._sentinelUsername = value;
  }
  public resetSentinelUsername() {
    this._sentinelUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelUsernameInput() {
    return this._sentinelUsername;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // ssl_verify - computed: true, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this.getBooleanAttribute('ssl_verify');
  }
  public set sslVerify(value: boolean | cdktf.IResolvable) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GatewayPluginOpenidConnectConfigRedisClusterNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#ip GatewayPluginOpenidConnect#ip}
  */
  readonly ip?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#port GatewayPluginOpenidConnect#port}
  */
  readonly port?: number;
}

export function gatewayPluginOpenidConnectConfigRedisClusterNodesToTerraform(struct?: GatewayPluginOpenidConnectConfigRedisClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginOpenidConnectConfigRedisClusterNodesToHclTerraform(struct?: GatewayPluginOpenidConnectConfigRedisClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpenidConnectConfigRedisClusterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginOpenidConnectConfigRedisClusterNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOpenidConnectConfigRedisClusterNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
    }
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class GatewayPluginOpenidConnectConfigRedisClusterNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginOpenidConnectConfigRedisClusterNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginOpenidConnectConfigRedisClusterNodesOutputReference {
    return new GatewayPluginOpenidConnectConfigRedisClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginOpenidConnectConfigRedisSentinelNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#host GatewayPluginOpenidConnect#host}
  */
  readonly host?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#port GatewayPluginOpenidConnect#port}
  */
  readonly port?: number;
}

export function gatewayPluginOpenidConnectConfigRedisSentinelNodesToTerraform(struct?: GatewayPluginOpenidConnectConfigRedisSentinelNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginOpenidConnectConfigRedisSentinelNodesToHclTerraform(struct?: GatewayPluginOpenidConnectConfigRedisSentinelNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpenidConnectConfigRedisSentinelNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginOpenidConnectConfigRedisSentinelNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOpenidConnectConfigRedisSentinelNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class GatewayPluginOpenidConnectConfigRedisSentinelNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginOpenidConnectConfigRedisSentinelNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginOpenidConnectConfigRedisSentinelNodesOutputReference {
    return new GatewayPluginOpenidConnectConfigRedisSentinelNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginOpenidConnectConfigRedis {
  /**
  * Maximum retry attempts for redirection. Default: 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#cluster_max_redirections GatewayPluginOpenidConnect#cluster_max_redirections}
  */
  readonly clusterMaxRedirections?: number;
  /**
  * Cluster addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Cluster. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#cluster_nodes GatewayPluginOpenidConnect#cluster_nodes}
  */
  readonly clusterNodes?: GatewayPluginOpenidConnectConfigRedisClusterNodes[] | cdktf.IResolvable;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#connect_timeout GatewayPluginOpenidConnect#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * If the connection to Redis is proxied (e.g. Envoy), set it `true`. Set the `host` and `port` to point to the proxy address. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#connection_is_proxied GatewayPluginOpenidConnect#connection_is_proxied}
  */
  readonly connectionIsProxied?: boolean | cdktf.IResolvable;
  /**
  * Database to use for the Redis connection when using the `redis` strategy. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#database GatewayPluginOpenidConnect#database}
  */
  readonly database?: number;
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#host GatewayPluginOpenidConnect#host}
  */
  readonly host?: string;
  /**
  * Limits the total number of opened connections for a pool. If the connection pool is full, connection queues above the limit go into the backlog queue. If the backlog queue is full, subsequent connect operations fail and return `nil`. Queued operations (subject to set timeouts) resume once the number of connections in the pool is less than `keepalive_pool_size`. If latency is high or throughput is low, try increasing this value. Empirically, this value is larger than `keepalive_pool_size`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#keepalive_backlog GatewayPluginOpenidConnect#keepalive_backlog}
  */
  readonly keepaliveBacklog?: number;
  /**
  * The size limit for every cosocket connection pool associated with every remote server, per worker process. If neither `keepalive_pool_size` nor `keepalive_backlog` is specified, no pool is created. If `keepalive_pool_size` isn't specified but `keepalive_backlog` is specified, then the pool uses the default value. Try to increase (e.g. 512) this value if latency is high or throughput is low. Default: 256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#keepalive_pool_size GatewayPluginOpenidConnect#keepalive_pool_size}
  */
  readonly keepalivePoolSize?: number;
  /**
  * Password to use for Redis connections. If undefined, no AUTH commands are sent to Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#password GatewayPluginOpenidConnect#password}
  */
  readonly password?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#port GatewayPluginOpenidConnect#port}
  */
  readonly port?: number;
  /**
  * The Redis session key prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#prefix GatewayPluginOpenidConnect#prefix}
  */
  readonly prefix?: string;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#read_timeout GatewayPluginOpenidConnect#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#send_timeout GatewayPluginOpenidConnect#send_timeout}
  */
  readonly sendTimeout?: number;
  /**
  * Sentinel master to use for Redis connections. Defining this value implies using Redis Sentinel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#sentinel_master GatewayPluginOpenidConnect#sentinel_master}
  */
  readonly sentinelMaster?: string;
  /**
  * Sentinel node addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Sentinel. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#sentinel_nodes GatewayPluginOpenidConnect#sentinel_nodes}
  */
  readonly sentinelNodes?: GatewayPluginOpenidConnectConfigRedisSentinelNodes[] | cdktf.IResolvable;
  /**
  * Sentinel password to authenticate with a Redis Sentinel instance. If undefined, no AUTH commands are sent to Redis Sentinels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#sentinel_password GatewayPluginOpenidConnect#sentinel_password}
  */
  readonly sentinelPassword?: string;
  /**
  * Sentinel role to use for Redis connections when the `redis` strategy is defined. Defining this value implies using Redis Sentinel. must be one of ["any", "master", "slave"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#sentinel_role GatewayPluginOpenidConnect#sentinel_role}
  */
  readonly sentinelRole?: string;
  /**
  * Sentinel username to authenticate with a Redis Sentinel instance. If undefined, ACL authentication won't be performed. This requires Redis v6.2.0+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#sentinel_username GatewayPluginOpenidConnect#sentinel_username}
  */
  readonly sentinelUsername?: string;
  /**
  * A string representing an SNI (server name indication) value for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#server_name GatewayPluginOpenidConnect#server_name}
  */
  readonly serverName?: string;
  /**
  * The Redis unix socket path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#socket GatewayPluginOpenidConnect#socket}
  */
  readonly socket?: string;
  /**
  * If set to true, uses SSL to connect to Redis. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#ssl GatewayPluginOpenidConnect#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * If set to true, verifies the validity of the server SSL certificate. If setting this parameter, also configure `lua_ssl_trusted_certificate` in `kong.conf` to specify the CA (or server) certificate used by your Redis server. You may also need to configure `lua_ssl_verify_depth` accordingly. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#ssl_verify GatewayPluginOpenidConnect#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Username to use for Redis connections. If undefined, ACL authentication won't be performed. This requires Redis v6.0.0+. To be compatible with Redis v5.x.y, you can set it to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#username GatewayPluginOpenidConnect#username}
  */
  readonly username?: string;
}

export function gatewayPluginOpenidConnectConfigRedisToTerraform(struct?: GatewayPluginOpenidConnectConfigRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_max_redirections: cdktf.numberToTerraform(struct!.clusterMaxRedirections),
    cluster_nodes: cdktf.listMapper(gatewayPluginOpenidConnectConfigRedisClusterNodesToTerraform, false)(struct!.clusterNodes),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    connection_is_proxied: cdktf.booleanToTerraform(struct!.connectionIsProxied),
    database: cdktf.numberToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    keepalive_backlog: cdktf.numberToTerraform(struct!.keepaliveBacklog),
    keepalive_pool_size: cdktf.numberToTerraform(struct!.keepalivePoolSize),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    read_timeout: cdktf.numberToTerraform(struct!.readTimeout),
    send_timeout: cdktf.numberToTerraform(struct!.sendTimeout),
    sentinel_master: cdktf.stringToTerraform(struct!.sentinelMaster),
    sentinel_nodes: cdktf.listMapper(gatewayPluginOpenidConnectConfigRedisSentinelNodesToTerraform, false)(struct!.sentinelNodes),
    sentinel_password: cdktf.stringToTerraform(struct!.sentinelPassword),
    sentinel_role: cdktf.stringToTerraform(struct!.sentinelRole),
    sentinel_username: cdktf.stringToTerraform(struct!.sentinelUsername),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    socket: cdktf.stringToTerraform(struct!.socket),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPluginOpenidConnectConfigRedisToHclTerraform(struct?: GatewayPluginOpenidConnectConfigRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_max_redirections: {
      value: cdktf.numberToHclTerraform(struct!.clusterMaxRedirections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_nodes: {
      value: cdktf.listMapperHcl(gatewayPluginOpenidConnectConfigRedisClusterNodesToHclTerraform, false)(struct!.clusterNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginOpenidConnectConfigRedisClusterNodesList",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_is_proxied: {
      value: cdktf.booleanToHclTerraform(struct!.connectionIsProxied),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database: {
      value: cdktf.numberToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_backlog: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveBacklog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.keepalivePoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sentinel_master: {
      value: cdktf.stringToHclTerraform(struct!.sentinelMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel_nodes: {
      value: cdktf.listMapperHcl(gatewayPluginOpenidConnectConfigRedisSentinelNodesToHclTerraform, false)(struct!.sentinelNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginOpenidConnectConfigRedisSentinelNodesList",
    },
    sentinel_password: {
      value: cdktf.stringToHclTerraform(struct!.sentinelPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel_role: {
      value: cdktf.stringToHclTerraform(struct!.sentinelRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel_username: {
      value: cdktf.stringToHclTerraform(struct!.sentinelUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socket: {
      value: cdktf.stringToHclTerraform(struct!.socket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl: {
      value: cdktf.booleanToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpenidConnectConfigRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpenidConnectConfigRedis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterMaxRedirections !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMaxRedirections = this._clusterMaxRedirections;
    }
    if (this._clusterNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNodes = this._clusterNodes?.internalValue;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._connectionIsProxied !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionIsProxied = this._connectionIsProxied;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._keepaliveBacklog !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveBacklog = this._keepaliveBacklog;
    }
    if (this._keepalivePoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalivePoolSize = this._keepalivePoolSize;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._sendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeout = this._sendTimeout;
    }
    if (this._sentinelMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelMaster = this._sentinelMaster;
    }
    if (this._sentinelNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelNodes = this._sentinelNodes?.internalValue;
    }
    if (this._sentinelPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelPassword = this._sentinelPassword;
    }
    if (this._sentinelRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelRole = this._sentinelRole;
    }
    if (this._sentinelUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelUsername = this._sentinelUsername;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._socket !== undefined) {
      hasAnyValues = true;
      internalValueResult.socket = this._socket;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOpenidConnectConfigRedis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterMaxRedirections = undefined;
      this._clusterNodes.internalValue = undefined;
      this._connectTimeout = undefined;
      this._connectionIsProxied = undefined;
      this._database = undefined;
      this._host = undefined;
      this._keepaliveBacklog = undefined;
      this._keepalivePoolSize = undefined;
      this._password = undefined;
      this._port = undefined;
      this._prefix = undefined;
      this._readTimeout = undefined;
      this._sendTimeout = undefined;
      this._sentinelMaster = undefined;
      this._sentinelNodes.internalValue = undefined;
      this._sentinelPassword = undefined;
      this._sentinelRole = undefined;
      this._sentinelUsername = undefined;
      this._serverName = undefined;
      this._socket = undefined;
      this._ssl = undefined;
      this._sslVerify = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterMaxRedirections = value.clusterMaxRedirections;
      this._clusterNodes.internalValue = value.clusterNodes;
      this._connectTimeout = value.connectTimeout;
      this._connectionIsProxied = value.connectionIsProxied;
      this._database = value.database;
      this._host = value.host;
      this._keepaliveBacklog = value.keepaliveBacklog;
      this._keepalivePoolSize = value.keepalivePoolSize;
      this._password = value.password;
      this._port = value.port;
      this._prefix = value.prefix;
      this._readTimeout = value.readTimeout;
      this._sendTimeout = value.sendTimeout;
      this._sentinelMaster = value.sentinelMaster;
      this._sentinelNodes.internalValue = value.sentinelNodes;
      this._sentinelPassword = value.sentinelPassword;
      this._sentinelRole = value.sentinelRole;
      this._sentinelUsername = value.sentinelUsername;
      this._serverName = value.serverName;
      this._socket = value.socket;
      this._ssl = value.ssl;
      this._sslVerify = value.sslVerify;
      this._username = value.username;
    }
  }

  // cluster_max_redirections - computed: true, optional: true, required: false
  private _clusterMaxRedirections?: number; 
  public get clusterMaxRedirections() {
    return this.getNumberAttribute('cluster_max_redirections');
  }
  public set clusterMaxRedirections(value: number) {
    this._clusterMaxRedirections = value;
  }
  public resetClusterMaxRedirections() {
    this._clusterMaxRedirections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMaxRedirectionsInput() {
    return this._clusterMaxRedirections;
  }

  // cluster_nodes - computed: true, optional: true, required: false
  private _clusterNodes = new GatewayPluginOpenidConnectConfigRedisClusterNodesList(this, "cluster_nodes", false);
  public get clusterNodes() {
    return this._clusterNodes;
  }
  public putClusterNodes(value: GatewayPluginOpenidConnectConfigRedisClusterNodes[] | cdktf.IResolvable) {
    this._clusterNodes.internalValue = value;
  }
  public resetClusterNodes() {
    this._clusterNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNodesInput() {
    return this._clusterNodes.internalValue;
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // connection_is_proxied - computed: true, optional: true, required: false
  private _connectionIsProxied?: boolean | cdktf.IResolvable; 
  public get connectionIsProxied() {
    return this.getBooleanAttribute('connection_is_proxied');
  }
  public set connectionIsProxied(value: boolean | cdktf.IResolvable) {
    this._connectionIsProxied = value;
  }
  public resetConnectionIsProxied() {
    this._connectionIsProxied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIsProxiedInput() {
    return this._connectionIsProxied;
  }

  // database - computed: true, optional: true, required: false
  private _database?: number; 
  public get database() {
    return this.getNumberAttribute('database');
  }
  public set database(value: number) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // keepalive_backlog - computed: true, optional: true, required: false
  private _keepaliveBacklog?: number; 
  public get keepaliveBacklog() {
    return this.getNumberAttribute('keepalive_backlog');
  }
  public set keepaliveBacklog(value: number) {
    this._keepaliveBacklog = value;
  }
  public resetKeepaliveBacklog() {
    this._keepaliveBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveBacklogInput() {
    return this._keepaliveBacklog;
  }

  // keepalive_pool_size - computed: true, optional: true, required: false
  private _keepalivePoolSize?: number; 
  public get keepalivePoolSize() {
    return this.getNumberAttribute('keepalive_pool_size');
  }
  public set keepalivePoolSize(value: number) {
    this._keepalivePoolSize = value;
  }
  public resetKeepalivePoolSize() {
    this._keepalivePoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepalivePoolSizeInput() {
    return this._keepalivePoolSize;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // read_timeout - computed: true, optional: true, required: false
  private _readTimeout?: number; 
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }
  public set readTimeout(value: number) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // send_timeout - computed: true, optional: true, required: false
  private _sendTimeout?: number; 
  public get sendTimeout() {
    return this.getNumberAttribute('send_timeout');
  }
  public set sendTimeout(value: number) {
    this._sendTimeout = value;
  }
  public resetSendTimeout() {
    this._sendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTimeoutInput() {
    return this._sendTimeout;
  }

  // sentinel_master - computed: true, optional: true, required: false
  private _sentinelMaster?: string; 
  public get sentinelMaster() {
    return this.getStringAttribute('sentinel_master');
  }
  public set sentinelMaster(value: string) {
    this._sentinelMaster = value;
  }
  public resetSentinelMaster() {
    this._sentinelMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelMasterInput() {
    return this._sentinelMaster;
  }

  // sentinel_nodes - computed: true, optional: true, required: false
  private _sentinelNodes = new GatewayPluginOpenidConnectConfigRedisSentinelNodesList(this, "sentinel_nodes", false);
  public get sentinelNodes() {
    return this._sentinelNodes;
  }
  public putSentinelNodes(value: GatewayPluginOpenidConnectConfigRedisSentinelNodes[] | cdktf.IResolvable) {
    this._sentinelNodes.internalValue = value;
  }
  public resetSentinelNodes() {
    this._sentinelNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelNodesInput() {
    return this._sentinelNodes.internalValue;
  }

  // sentinel_password - computed: true, optional: true, required: false
  private _sentinelPassword?: string; 
  public get sentinelPassword() {
    return this.getStringAttribute('sentinel_password');
  }
  public set sentinelPassword(value: string) {
    this._sentinelPassword = value;
  }
  public resetSentinelPassword() {
    this._sentinelPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelPasswordInput() {
    return this._sentinelPassword;
  }

  // sentinel_role - computed: true, optional: true, required: false
  private _sentinelRole?: string; 
  public get sentinelRole() {
    return this.getStringAttribute('sentinel_role');
  }
  public set sentinelRole(value: string) {
    this._sentinelRole = value;
  }
  public resetSentinelRole() {
    this._sentinelRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelRoleInput() {
    return this._sentinelRole;
  }

  // sentinel_username - computed: true, optional: true, required: false
  private _sentinelUsername?: string; 
  public get sentinelUsername() {
    return this.getStringAttribute('sentinel_username');
  }
  public set sentinelUsername(value: string) {
    this._sentinelUsername = value;
  }
  public resetSentinelUsername() {
    this._sentinelUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelUsernameInput() {
    return this._sentinelUsername;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // socket - computed: true, optional: true, required: false
  private _socket?: string; 
  public get socket() {
    return this.getStringAttribute('socket');
  }
  public set socket(value: string) {
    this._socket = value;
  }
  public resetSocket() {
    this._socket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketInput() {
    return this._socket;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // ssl_verify - computed: true, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this.getBooleanAttribute('ssl_verify');
  }
  public set sslVerify(value: boolean | cdktf.IResolvable) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GatewayPluginOpenidConnectConfigA {
  /**
  * An optional string (consumer UUID or username) value that functions as an “anonymous” consumer if authentication fails. If empty (default null), requests that fail authentication will return a `4xx` HTTP status code. This value must refer to the consumer `id` or `username` attribute, and **not** its `custom_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#anonymous GatewayPluginOpenidConnect#anonymous}
  */
  readonly anonymous?: string;
  /**
  * The audience passed to the authorization endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#audience GatewayPluginOpenidConnect#audience}
  */
  readonly audience?: string[];
  /**
  * The claim that contains the audience. If multiple values are set, it means the claim is inside a nested object of the token payload. Default: ["aud"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#audience_claim GatewayPluginOpenidConnect#audience_claim}
  */
  readonly audienceClaim?: string[];
  /**
  * The audiences (`audience_claim` claim) required to be present in the access token (or introspection results) for successful authorization. This config parameter works in both **AND** / **OR** cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#audience_required GatewayPluginOpenidConnect#audience_required}
  */
  readonly audienceRequired?: string[];
  /**
  * Types of credentials/grants to enable. Default: ["authorization_code","bearer","client_credentials","introspection","kong_oauth2","password","refresh_token","session","userinfo"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#auth_methods GatewayPluginOpenidConnect#auth_methods}
  */
  readonly authMethods?: string[];
  /**
  * The claim that contains authenticated groups. This setting can be used together with ACL plugin, but it also enables IdP managed groups with other applications and integrations. If multiple values are set, it means the claim is inside a nested object of the token payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#authenticated_groups_claim GatewayPluginOpenidConnect#authenticated_groups_claim}
  */
  readonly authenticatedGroupsClaim?: string[];
  /**
  * The authorization cookie Domain flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#authorization_cookie_domain GatewayPluginOpenidConnect#authorization_cookie_domain}
  */
  readonly authorizationCookieDomain?: string;
  /**
  * Forbids JavaScript from accessing the cookie, for example, through the `Document.cookie` property. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#authorization_cookie_http_only GatewayPluginOpenidConnect#authorization_cookie_http_only}
  */
  readonly authorizationCookieHttpOnly?: boolean | cdktf.IResolvable;
  /**
  * The authorization cookie name. Default: "authorization"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#authorization_cookie_name GatewayPluginOpenidConnect#authorization_cookie_name}
  */
  readonly authorizationCookieName?: string;
  /**
  * The authorization cookie Path flag. Default: "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#authorization_cookie_path GatewayPluginOpenidConnect#authorization_cookie_path}
  */
  readonly authorizationCookiePath?: string;
  /**
  * Controls whether a cookie is sent with cross-origin requests, providing some protection against cross-site request forgery attacks. Default: "Default"; must be one of ["Default", "Lax", "None", "Strict"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#authorization_cookie_same_site GatewayPluginOpenidConnect#authorization_cookie_same_site}
  */
  readonly authorizationCookieSameSite?: string;
  /**
  * Cookie is only sent to the server when a request is made with the https: scheme (except on localhost), and therefore is more resistant to man-in-the-middle attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#authorization_cookie_secure GatewayPluginOpenidConnect#authorization_cookie_secure}
  */
  readonly authorizationCookieSecure?: boolean | cdktf.IResolvable;
  /**
  * The authorization endpoint. If set it overrides the value in `authorization_endpoint` returned by the discovery endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#authorization_endpoint GatewayPluginOpenidConnect#authorization_endpoint}
  */
  readonly authorizationEndpoint?: string;
  /**
  * Extra query arguments passed from the client to the authorization endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#authorization_query_args_client GatewayPluginOpenidConnect#authorization_query_args_client}
  */
  readonly authorizationQueryArgsClient?: string[];
  /**
  * Extra query argument names passed to the authorization endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#authorization_query_args_names GatewayPluginOpenidConnect#authorization_query_args_names}
  */
  readonly authorizationQueryArgsNames?: string[];
  /**
  * Extra query argument values passed to the authorization endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#authorization_query_args_values GatewayPluginOpenidConnect#authorization_query_args_values}
  */
  readonly authorizationQueryArgsValues?: string[];
  /**
  * Specifies how long the session used for the authorization code flow can be used in seconds until it needs to be renewed. 0 disables the checks and rolling. Default: 600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#authorization_rolling_timeout GatewayPluginOpenidConnect#authorization_rolling_timeout}
  */
  readonly authorizationRollingTimeout?: number;
  /**
  * The name of the cookie in which the bearer token is passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#bearer_token_cookie_name GatewayPluginOpenidConnect#bearer_token_cookie_name}
  */
  readonly bearerTokenCookieName?: string;
  /**
  * Where to look for the bearer token: - `header`: search the `Authorization`, `access-token`, and `x-access-token` HTTP headers - `query`: search the URL's query string - `body`: search the HTTP request body - `cookie`: search the HTTP request cookies specified with `config.bearer_token_cookie_name`. Default: ["body","header","query"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#bearer_token_param_type GatewayPluginOpenidConnect#bearer_token_param_type}
  */
  readonly bearerTokenParamType?: string[];
  /**
  * If `consumer_by` is set to `username`, specify whether `username` can match consumers case-insensitively. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#by_username_ignore_case GatewayPluginOpenidConnect#by_username_ignore_case}
  */
  readonly byUsernameIgnoreCase?: boolean | cdktf.IResolvable;
  /**
  * Cache the introspection endpoint requests. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#cache_introspection GatewayPluginOpenidConnect#cache_introspection}
  */
  readonly cacheIntrospection?: boolean | cdktf.IResolvable;
  /**
  * Cache the token exchange endpoint requests. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#cache_token_exchange GatewayPluginOpenidConnect#cache_token_exchange}
  */
  readonly cacheTokenExchange?: boolean | cdktf.IResolvable;
  /**
  * Cache the token endpoint requests. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#cache_tokens GatewayPluginOpenidConnect#cache_tokens}
  */
  readonly cacheTokens?: boolean | cdktf.IResolvable;
  /**
  * Salt used for generating the cache key that is used for caching the token endpoint requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#cache_tokens_salt GatewayPluginOpenidConnect#cache_tokens_salt}
  */
  readonly cacheTokensSalt?: string;
  /**
  * The default cache ttl in seconds that is used in case the cached object does not specify the expiry. Default: 3600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#cache_ttl GatewayPluginOpenidConnect#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * The maximum cache ttl in seconds (enforced).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#cache_ttl_max GatewayPluginOpenidConnect#cache_ttl_max}
  */
  readonly cacheTtlMax?: number;
  /**
  * The minimum cache ttl in seconds (enforced).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#cache_ttl_min GatewayPluginOpenidConnect#cache_ttl_min}
  */
  readonly cacheTtlMin?: number;
  /**
  * The negative cache ttl in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#cache_ttl_neg GatewayPluginOpenidConnect#cache_ttl_neg}
  */
  readonly cacheTtlNeg?: number;
  /**
  * The resurrection ttl in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#cache_ttl_resurrect GatewayPluginOpenidConnect#cache_ttl_resurrect}
  */
  readonly cacheTtlResurrect?: number;
  /**
  * Cache the user info requests. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#cache_user_info GatewayPluginOpenidConnect#cache_user_info}
  */
  readonly cacheUserInfo?: boolean | cdktf.IResolvable;
  /**
  * If given, these claims are forbidden in the token payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#claims_forbidden GatewayPluginOpenidConnect#claims_forbidden}
  */
  readonly claimsForbidden?: string[];
  /**
  * The algorithm to use for client_secret_jwt (only HS***) or private_key_jwt authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#client_alg GatewayPluginOpenidConnect#client_alg}
  */
  readonly clientAlg?: string[];
  /**
  * The client to use for this request (the selection is made with a request parameter with the same name). Default: "client_id"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#client_arg GatewayPluginOpenidConnect#client_arg}
  */
  readonly clientArg?: string;
  /**
  * The default OpenID Connect client authentication method is 'client_secret_basic' (using 'Authorization: Basic' header), 'client_secret_post' (credentials in body), 'client_secret_jwt' (signed client assertion in body), 'private_key_jwt' (private key-signed assertion), 'tls_client_auth' (client certificate), 'self_signed_tls_client_auth' (self-signed client certificate), and 'none' (no authentication).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#client_auth GatewayPluginOpenidConnect#client_auth}
  */
  readonly clientAuth?: string[];
  /**
  * Where to look for the client credentials: - `header`: search the HTTP headers - `query`: search the URL's query string - `body`: search from the HTTP request body. Default: ["body","header","query"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#client_credentials_param_type GatewayPluginOpenidConnect#client_credentials_param_type}
  */
  readonly clientCredentialsParamType?: string[];
  /**
  * The client id(s) that the plugin uses when it calls authenticated endpoints on the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#client_id GatewayPluginOpenidConnect#client_id}
  */
  readonly clientId?: string[];
  /**
  * The JWK used for the private_key_jwt authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#client_jwk GatewayPluginOpenidConnect#client_jwk}
  */
  readonly clientJwk?: GatewayPluginOpenidConnectConfigClientJwk[] | cdktf.IResolvable;
  /**
  * The client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#client_secret GatewayPluginOpenidConnect#client_secret}
  */
  readonly clientSecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#cluster_cache_redis GatewayPluginOpenidConnect#cluster_cache_redis}
  */
  readonly clusterCacheRedis?: GatewayPluginOpenidConnectConfigClusterCacheRedis;
  /**
  * The strategy to use for the cluster cache. If set, the plugin will share cache with nodes configured with the same strategy backend. Currentlly only introspection cache is shared. Default: "off"; must be one of ["off", "redis"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#cluster_cache_strategy GatewayPluginOpenidConnect#cluster_cache_strategy}
  */
  readonly clusterCacheStrategy?: string;
  /**
  * Consumer fields used for mapping: - `id`: try to find the matching Consumer by `id` - `username`: try to find the matching Consumer by `username` - `custom_id`: try to find the matching Consumer by `custom_id`. Default: ["custom_id","username"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#consumer_by GatewayPluginOpenidConnect#consumer_by}
  */
  readonly consumerBy?: string[];
  /**
  * The claim used for consumer mapping. If multiple values are set, it means the claim is inside a nested object of the token payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#consumer_claim GatewayPluginOpenidConnect#consumer_claim}
  */
  readonly consumerClaim?: string[];
  /**
  * The claim used for consumer groups mapping. If multiple values are set, it means the claim is inside a nested object of the token payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#consumer_groups_claim GatewayPluginOpenidConnect#consumer_groups_claim}
  */
  readonly consumerGroupsClaim?: string[];
  /**
  * Do not terminate the request if consumer groups mapping fails. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#consumer_groups_optional GatewayPluginOpenidConnect#consumer_groups_optional}
  */
  readonly consumerGroupsOptional?: boolean | cdktf.IResolvable;
  /**
  * Do not terminate the request if consumer mapping fails. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#consumer_optional GatewayPluginOpenidConnect#consumer_optional}
  */
  readonly consumerOptional?: boolean | cdktf.IResolvable;
  /**
  * The claim used to derive virtual credentials (e.g. to be consumed by the rate-limiting plugin), in case the consumer mapping is not used. If multiple values are set, it means the claim is inside a nested object of the token payload. Default: ["sub"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#credential_claim GatewayPluginOpenidConnect#credential_claim}
  */
  readonly credentialClaim?: string[];
  /**
  * Disable issuing the session cookie with the specified grants.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#disable_session GatewayPluginOpenidConnect#disable_session}
  */
  readonly disableSession?: string[];
  /**
  * Extra header names passed to the discovery endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#discovery_headers_names GatewayPluginOpenidConnect#discovery_headers_names}
  */
  readonly discoveryHeadersNames?: string[];
  /**
  * Extra header values passed to the discovery endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#discovery_headers_values GatewayPluginOpenidConnect#discovery_headers_values}
  */
  readonly discoveryHeadersValues?: string[];
  /**
  * Display errors on failure responses. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#display_errors GatewayPluginOpenidConnect#display_errors}
  */
  readonly displayErrors?: boolean | cdktf.IResolvable;
  /**
  * The allowed values for the `hd` claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#domains GatewayPluginOpenidConnect#domains}
  */
  readonly domains?: string[];
  /**
  * The downstream access token header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#downstream_access_token_header GatewayPluginOpenidConnect#downstream_access_token_header}
  */
  readonly downstreamAccessTokenHeader?: string;
  /**
  * The downstream access token JWK header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#downstream_access_token_jwk_header GatewayPluginOpenidConnect#downstream_access_token_jwk_header}
  */
  readonly downstreamAccessTokenJwkHeader?: string;
  /**
  * The downstream header claims. If multiple values are set, it means the claim is inside a nested object of the token payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#downstream_headers_claims GatewayPluginOpenidConnect#downstream_headers_claims}
  */
  readonly downstreamHeadersClaims?: string[];
  /**
  * The downstream header names for the claim values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#downstream_headers_names GatewayPluginOpenidConnect#downstream_headers_names}
  */
  readonly downstreamHeadersNames?: string[];
  /**
  * The downstream id token header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#downstream_id_token_header GatewayPluginOpenidConnect#downstream_id_token_header}
  */
  readonly downstreamIdTokenHeader?: string;
  /**
  * The downstream id token JWK header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#downstream_id_token_jwk_header GatewayPluginOpenidConnect#downstream_id_token_jwk_header}
  */
  readonly downstreamIdTokenJwkHeader?: string;
  /**
  * The downstream introspection header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#downstream_introspection_header GatewayPluginOpenidConnect#downstream_introspection_header}
  */
  readonly downstreamIntrospectionHeader?: string;
  /**
  * The downstream introspection JWT header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#downstream_introspection_jwt_header GatewayPluginOpenidConnect#downstream_introspection_jwt_header}
  */
  readonly downstreamIntrospectionJwtHeader?: string;
  /**
  * The downstream refresh token header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#downstream_refresh_token_header GatewayPluginOpenidConnect#downstream_refresh_token_header}
  */
  readonly downstreamRefreshTokenHeader?: string;
  /**
  * The downstream session id header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#downstream_session_id_header GatewayPluginOpenidConnect#downstream_session_id_header}
  */
  readonly downstreamSessionIdHeader?: string;
  /**
  * The downstream user info header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#downstream_user_info_header GatewayPluginOpenidConnect#downstream_user_info_header}
  */
  readonly downstreamUserInfoHeader?: string;
  /**
  * The downstream user info JWT header (in case the user info returns a JWT response).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#downstream_user_info_jwt_header GatewayPluginOpenidConnect#downstream_user_info_jwt_header}
  */
  readonly downstreamUserInfoJwtHeader?: string;
  /**
  * Specifies the lifetime in seconds of the DPoP proof. It determines how long the same proof can be used after creation. The creation time is determined by the nonce creation time if a nonce is used, and the iat claim otherwise. Default: 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#dpop_proof_lifetime GatewayPluginOpenidConnect#dpop_proof_lifetime}
  */
  readonly dpopProofLifetime?: number;
  /**
  * Specifies whether to challenge the client with a nonce value for DPoP proof. When enabled it will also be used to calculate the DPoP proof lifetime. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#dpop_use_nonce GatewayPluginOpenidConnect#dpop_use_nonce}
  */
  readonly dpopUseNonce?: boolean | cdktf.IResolvable;
  /**
  * Enable shared secret, for example, HS256, signatures (when disabled they will not be accepted). Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#enable_hs_signatures GatewayPluginOpenidConnect#enable_hs_signatures}
  */
  readonly enableHsSignatures?: boolean | cdktf.IResolvable;
  /**
  * The end session endpoint. If set it overrides the value in `end_session_endpoint` returned by the discovery endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#end_session_endpoint GatewayPluginOpenidConnect#end_session_endpoint}
  */
  readonly endSessionEndpoint?: string;
  /**
  * Specifies whether to expose the error code header, as defined in RFC 6750. If an authorization request fails, this header is sent in the response. Set to `false` to disable. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#expose_error_code GatewayPluginOpenidConnect#expose_error_code}
  */
  readonly exposeErrorCode?: boolean | cdktf.IResolvable;
  /**
  * JWKS URIs whose public keys are trusted (in addition to the keys found with the discovery).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#extra_jwks_uris GatewayPluginOpenidConnect#extra_jwks_uris}
  */
  readonly extraJwksUris?: string[];
  /**
  * Destroy any active session for the forbidden requests. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#forbidden_destroy_session GatewayPluginOpenidConnect#forbidden_destroy_session}
  */
  readonly forbiddenDestroySession?: boolean | cdktf.IResolvable;
  /**
  * The error message for the forbidden requests (when not using the redirection). Default: "Forbidden"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#forbidden_error_message GatewayPluginOpenidConnect#forbidden_error_message}
  */
  readonly forbiddenErrorMessage?: string;
  /**
  * Where to redirect the client on forbidden requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#forbidden_redirect_uri GatewayPluginOpenidConnect#forbidden_redirect_uri}
  */
  readonly forbiddenRedirectUri?: string[];
  /**
  * The claim that contains the groups. If multiple values are set, it means the claim is inside a nested object of the token payload. Default: ["groups"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#groups_claim GatewayPluginOpenidConnect#groups_claim}
  */
  readonly groupsClaim?: string[];
  /**
  * The groups (`groups_claim` claim) required to be present in the access token (or introspection results) for successful authorization. This config parameter works in both **AND** / **OR** cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#groups_required GatewayPluginOpenidConnect#groups_required}
  */
  readonly groupsRequired?: string[];
  /**
  * Remove the credentials used for authentication from the request. If multiple credentials are sent with the same request, the plugin will remove those that were used for successful authentication. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#hide_credentials GatewayPluginOpenidConnect#hide_credentials}
  */
  readonly hideCredentials?: boolean | cdktf.IResolvable;
  /**
  * The HTTP proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#http_proxy GatewayPluginOpenidConnect#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * The HTTP proxy authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#http_proxy_authorization GatewayPluginOpenidConnect#http_proxy_authorization}
  */
  readonly httpProxyAuthorization?: string;
  /**
  * The HTTP version used for the requests by this plugin: - `1.1`: HTTP 1.1 (the default) - `1.0`: HTTP 1.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#http_version GatewayPluginOpenidConnect#http_version}
  */
  readonly httpVersion?: number;
  /**
  * The HTTPS proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#https_proxy GatewayPluginOpenidConnect#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * The HTTPS proxy authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#https_proxy_authorization GatewayPluginOpenidConnect#https_proxy_authorization}
  */
  readonly httpsProxyAuthorization?: string;
  /**
  * The name of the parameter used to pass the id token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#id_token_param_name GatewayPluginOpenidConnect#id_token_param_name}
  */
  readonly idTokenParamName?: string;
  /**
  * Where to look for the id token: - `header`: search the HTTP headers - `query`: search the URL's query string - `body`: search the HTTP request body. Default: ["body","header","query"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#id_token_param_type GatewayPluginOpenidConnect#id_token_param_type}
  */
  readonly idTokenParamType?: string[];
  /**
  * Skip the token signature verification on certain grants: - `password`: OAuth password grant - `client_credentials`: OAuth client credentials grant - `authorization_code`: authorization code flow - `refresh_token`: OAuth refresh token grant - `session`: session cookie authentication - `introspection`: OAuth introspection - `userinfo`: OpenID Connect user info endpoint authentication. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#ignore_signature GatewayPluginOpenidConnect#ignore_signature}
  */
  readonly ignoreSignature?: string[];
  /**
  * Specifies whether to introspect the JWT access tokens (can be used to check for revocations). Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#introspect_jwt_tokens GatewayPluginOpenidConnect#introspect_jwt_tokens}
  */
  readonly introspectJwtTokens?: boolean | cdktf.IResolvable;
  /**
  * The value of `Accept` header for introspection requests: - `application/json`: introspection response as JSON - `application/token-introspection+jwt`: introspection response as JWT (from the current IETF draft document) - `application/jwt`: introspection response as JWT (from the obsolete IETF draft document). Default: "application/json"; must be one of ["application/json", "application/jwt", "application/token-introspection+jwt"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#introspection_accept GatewayPluginOpenidConnect#introspection_accept}
  */
  readonly introspectionAccept?: string;
  /**
  * Check that the introspection response has an `active` claim with a value of `true`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#introspection_check_active GatewayPluginOpenidConnect#introspection_check_active}
  */
  readonly introspectionCheckActive?: boolean | cdktf.IResolvable;
  /**
  * The introspection endpoint. If set it overrides the value in `introspection_endpoint` returned by the discovery endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#introspection_endpoint GatewayPluginOpenidConnect#introspection_endpoint}
  */
  readonly introspectionEndpoint?: string;
  /**
  * The introspection endpoint authentication method: : `client_secret_basic`, `client_secret_post`, `client_secret_jwt`, `private_key_jwt`, `tls_client_auth`, `self_signed_tls_client_auth`, or `none`: do not authenticate. must be one of ["client_secret_basic", "client_secret_jwt", "client_secret_post", "none", "private_key_jwt", "self_signed_tls_client_auth", "tls_client_auth"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#introspection_endpoint_auth_method GatewayPluginOpenidConnect#introspection_endpoint_auth_method}
  */
  readonly introspectionEndpointAuthMethod?: string;
  /**
  * Extra headers passed from the client to the introspection endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#introspection_headers_client GatewayPluginOpenidConnect#introspection_headers_client}
  */
  readonly introspectionHeadersClient?: string[];
  /**
  * Extra header names passed to the introspection endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#introspection_headers_names GatewayPluginOpenidConnect#introspection_headers_names}
  */
  readonly introspectionHeadersNames?: string[];
  /**
  * Extra header values passed to the introspection endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#introspection_headers_values GatewayPluginOpenidConnect#introspection_headers_values}
  */
  readonly introspectionHeadersValues?: string[];
  /**
  * Introspection hint parameter value passed to the introspection endpoint. Default: "access_token"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#introspection_hint GatewayPluginOpenidConnect#introspection_hint}
  */
  readonly introspectionHint?: string;
  /**
  * Extra post arguments passed from the client to the introspection endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#introspection_post_args_client GatewayPluginOpenidConnect#introspection_post_args_client}
  */
  readonly introspectionPostArgsClient?: string[];
  /**
  * Extra post arguments passed from the client headers to the introspection endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#introspection_post_args_client_headers GatewayPluginOpenidConnect#introspection_post_args_client_headers}
  */
  readonly introspectionPostArgsClientHeaders?: string[];
  /**
  * Extra post argument names passed to the introspection endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#introspection_post_args_names GatewayPluginOpenidConnect#introspection_post_args_names}
  */
  readonly introspectionPostArgsNames?: string[];
  /**
  * Extra post argument values passed to the introspection endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#introspection_post_args_values GatewayPluginOpenidConnect#introspection_post_args_values}
  */
  readonly introspectionPostArgsValues?: string[];
  /**
  * Designate token's parameter name for introspection. Default: "token"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#introspection_token_param_name GatewayPluginOpenidConnect#introspection_token_param_name}
  */
  readonly introspectionTokenParamName?: string;
  /**
  * The discovery endpoint (or the issuer identifier). When there is no discovery endpoint, please also configure `config.using_pseudo_issuer=true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#issuer GatewayPluginOpenidConnect#issuer}
  */
  readonly issuer: string;
  /**
  * The issuers allowed to be present in the tokens (`iss` claim).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#issuers_allowed GatewayPluginOpenidConnect#issuers_allowed}
  */
  readonly issuersAllowed?: string[];
  /**
  * The claim to match against the JWT session cookie. Default: "sid"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#jwt_session_claim GatewayPluginOpenidConnect#jwt_session_claim}
  */
  readonly jwtSessionClaim?: string;
  /**
  * The name of the JWT session cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#jwt_session_cookie GatewayPluginOpenidConnect#jwt_session_cookie}
  */
  readonly jwtSessionCookie?: string;
  /**
  * Use keepalive with the HTTP client. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#keepalive GatewayPluginOpenidConnect#keepalive}
  */
  readonly keepalive?: boolean | cdktf.IResolvable;
  /**
  * Defines leeway time (in seconds) for `auth_time`, `exp`, `iat`, and `nbf` claims. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#leeway GatewayPluginOpenidConnect#leeway}
  */
  readonly leeway?: number;
  /**
  * What to do after successful login: - `upstream`: proxy request to upstream service - `response`: terminate request with a response - `redirect`: redirect to a different location. Default: "upstream"; must be one of ["redirect", "response", "upstream"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#login_action GatewayPluginOpenidConnect#login_action}
  */
  readonly loginAction?: string;
  /**
  * Enable login functionality with specified grants. Default: ["authorization_code"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#login_methods GatewayPluginOpenidConnect#login_methods}
  */
  readonly loginMethods?: string[];
  /**
  * Where to place `login_tokens` when using `redirect` `login_action`: - `query`: place tokens in query string - `fragment`: place tokens in url fragment (not readable by servers). Default: "fragment"; must be one of ["fragment", "query"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#login_redirect_mode GatewayPluginOpenidConnect#login_redirect_mode}
  */
  readonly loginRedirectMode?: string;
  /**
  * Where to redirect the client when `login_action` is set to `redirect`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#login_redirect_uri GatewayPluginOpenidConnect#login_redirect_uri}
  */
  readonly loginRedirectUri?: string[];
  /**
  * What tokens to include in `response` body or `redirect` query string or fragment: - `id_token`: include id token - `access_token`: include access token - `refresh_token`: include refresh token - `tokens`: include the full token endpoint response - `introspection`: include introspection response. Default: ["id_token"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#login_tokens GatewayPluginOpenidConnect#login_tokens}
  */
  readonly loginTokens?: string[];
  /**
  * The request methods that can activate the logout: - `POST`: HTTP POST method - `GET`: HTTP GET method - `DELETE`: HTTP DELETE method. Default: ["DELETE","POST"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#logout_methods GatewayPluginOpenidConnect#logout_methods}
  */
  readonly logoutMethods?: string[];
  /**
  * The request body argument that activates the logout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#logout_post_arg GatewayPluginOpenidConnect#logout_post_arg}
  */
  readonly logoutPostArg?: string;
  /**
  * The request query argument that activates the logout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#logout_query_arg GatewayPluginOpenidConnect#logout_query_arg}
  */
  readonly logoutQueryArg?: string;
  /**
  * Where to redirect the client after the logout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#logout_redirect_uri GatewayPluginOpenidConnect#logout_redirect_uri}
  */
  readonly logoutRedirectUri?: string[];
  /**
  * Revoke tokens as part of the logout.
  * 
  * For more granular token revocation, you can also adjust the `logout_revoke_access_token` and `logout_revoke_refresh_token` parameters.
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#logout_revoke GatewayPluginOpenidConnect#logout_revoke}
  */
  readonly logoutRevoke?: boolean | cdktf.IResolvable;
  /**
  * Revoke the access token as part of the logout. Requires `logout_revoke` to be set to `true`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#logout_revoke_access_token GatewayPluginOpenidConnect#logout_revoke_access_token}
  */
  readonly logoutRevokeAccessToken?: boolean | cdktf.IResolvable;
  /**
  * Revoke the refresh token as part of the logout. Requires `logout_revoke` to be set to `true`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#logout_revoke_refresh_token GatewayPluginOpenidConnect#logout_revoke_refresh_token}
  */
  readonly logoutRevokeRefreshToken?: boolean | cdktf.IResolvable;
  /**
  * The request URI suffix that activates the logout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#logout_uri_suffix GatewayPluginOpenidConnect#logout_uri_suffix}
  */
  readonly logoutUriSuffix?: string;
  /**
  * The maximum age (in seconds) compared to the `auth_time` claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#max_age GatewayPluginOpenidConnect#max_age}
  */
  readonly maxAge?: number;
  /**
  * Alias for the introspection endpoint to be used for mTLS client authentication. If set it overrides the value in `mtls_endpoint_aliases` returned by the discovery endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#mtls_introspection_endpoint GatewayPluginOpenidConnect#mtls_introspection_endpoint}
  */
  readonly mtlsIntrospectionEndpoint?: string;
  /**
  * Alias for the introspection endpoint to be used for mTLS client authentication. If set it overrides the value in `mtls_endpoint_aliases` returned by the discovery endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#mtls_revocation_endpoint GatewayPluginOpenidConnect#mtls_revocation_endpoint}
  */
  readonly mtlsRevocationEndpoint?: string;
  /**
  * Alias for the token endpoint to be used for mTLS client authentication. If set it overrides the value in `mtls_endpoint_aliases` returned by the discovery endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#mtls_token_endpoint GatewayPluginOpenidConnect#mtls_token_endpoint}
  */
  readonly mtlsTokenEndpoint?: string;
  /**
  * Do not use proxy with these hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#no_proxy GatewayPluginOpenidConnect#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * Where to look for the username and password: - `header`: search the HTTP headers - `query`: search the URL's query string - `body`: search the HTTP request body. Default: ["body","header","query"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#password_param_type GatewayPluginOpenidConnect#password_param_type}
  */
  readonly passwordParamType?: string[];
  /**
  * With this parameter, you can preserve request query arguments even when doing authorization code flow. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#preserve_query_args GatewayPluginOpenidConnect#preserve_query_args}
  */
  readonly preserveQueryArgs?: boolean | cdktf.IResolvable;
  /**
  * If set to true, only the auth_methods that are compatible with Proof of Possession (PoP) can be configured when PoP is enabled. If set to false, all auth_methods will be configurable and PoP checks will be silently skipped for those auth_methods that are not compatible with PoP. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#proof_of_possession_auth_methods_validation GatewayPluginOpenidConnect#proof_of_possession_auth_methods_validation}
  */
  readonly proofOfPossessionAuthMethodsValidation?: boolean | cdktf.IResolvable;
  /**
  * Enable Demonstrating Proof-of-Possession (DPoP). If set to strict, all request are verified despite the presence of the DPoP key claim (cnf.jkt). If set to optional, only tokens bound with DPoP's key are verified with the proof. Default: "off"; must be one of ["off", "optional", "strict"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#proof_of_possession_dpop GatewayPluginOpenidConnect#proof_of_possession_dpop}
  */
  readonly proofOfPossessionDpop?: string;
  /**
  * Enable mtls proof of possession. If set to strict, all tokens (from supported auth_methods: bearer, introspection, and session granted with bearer or introspection) are verified, if set to optional, only tokens that contain the certificate hash claim are verified. If the verification fails, the request will be rejected with 401. Default: "off"; must be one of ["off", "optional", "strict"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#proof_of_possession_mtls GatewayPluginOpenidConnect#proof_of_possession_mtls}
  */
  readonly proofOfPossessionMtls?: string;
  /**
  * The pushed authorization endpoint. If set it overrides the value in `pushed_authorization_request_endpoint` returned by the discovery endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#pushed_authorization_request_endpoint GatewayPluginOpenidConnect#pushed_authorization_request_endpoint}
  */
  readonly pushedAuthorizationRequestEndpoint?: string;
  /**
  * The pushed authorization request endpoint authentication method: `client_secret_basic`, `client_secret_post`, `client_secret_jwt`, `private_key_jwt`, `tls_client_auth`, `self_signed_tls_client_auth`, or `none`: do not authenticate. must be one of ["client_secret_basic", "client_secret_jwt", "client_secret_post", "none", "private_key_jwt", "self_signed_tls_client_auth", "tls_client_auth"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#pushed_authorization_request_endpoint_auth_method GatewayPluginOpenidConnect#pushed_authorization_request_endpoint_auth_method}
  */
  readonly pushedAuthorizationRequestEndpointAuthMethod?: string;
  /**
  * The redirect URI passed to the authorization and token endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#redirect_uri GatewayPluginOpenidConnect#redirect_uri}
  */
  readonly redirectUri?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#redis GatewayPluginOpenidConnect#redis}
  */
  readonly redis?: GatewayPluginOpenidConnectConfigRedis;
  /**
  * Specifies how long (in seconds) the plugin waits between discovery attempts. Discovery is still triggered on an as-needed basis. Default: 30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#rediscovery_lifetime GatewayPluginOpenidConnect#rediscovery_lifetime}
  */
  readonly rediscoveryLifetime?: number;
  /**
  * The name of the parameter used to pass the refresh token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#refresh_token_param_name GatewayPluginOpenidConnect#refresh_token_param_name}
  */
  readonly refreshTokenParamName?: string;
  /**
  * Where to look for the refresh token: - `header`: search the HTTP headers - `query`: search the URL's query string - `body`: search the HTTP request body. Default: ["body","header","query"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#refresh_token_param_type GatewayPluginOpenidConnect#refresh_token_param_type}
  */
  readonly refreshTokenParamType?: string[];
  /**
  * Specifies whether the plugin should try to refresh (soon to be) expired access tokens if the plugin has a `refresh_token` available. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#refresh_tokens GatewayPluginOpenidConnect#refresh_tokens}
  */
  readonly refreshTokens?: boolean | cdktf.IResolvable;
  /**
  * Forcibly enable or disable the proof key for code exchange. When not set the value is determined through the discovery using the value of `code_challenge_methods_supported`, and enabled automatically (in case the `code_challenge_methods_supported` is missing, the PKCE will not be enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#require_proof_key_for_code_exchange GatewayPluginOpenidConnect#require_proof_key_for_code_exchange}
  */
  readonly requireProofKeyForCodeExchange?: boolean | cdktf.IResolvable;
  /**
  * Forcibly enable or disable the pushed authorization requests. When not set the value is determined through the discovery using the value of `require_pushed_authorization_requests` (which defaults to `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#require_pushed_authorization_requests GatewayPluginOpenidConnect#require_pushed_authorization_requests}
  */
  readonly requirePushedAuthorizationRequests?: boolean | cdktf.IResolvable;
  /**
  * Forcibly enable or disable the usage of signed request object on authorization or pushed authorization endpoint. When not set the value is determined through the discovery using the value of `require_signed_request_object`, and enabled automatically (in case the `require_signed_request_object` is missing, the feature will not be enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#require_signed_request_object GatewayPluginOpenidConnect#require_signed_request_object}
  */
  readonly requireSignedRequestObject?: boolean | cdktf.IResolvable;
  /**
  * Distributed claims are represented by the `_claim_names` and `_claim_sources` members of the JSON object containing the claims. If this parameter is set to `true`, the plugin explicitly resolves these distributed claims. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#resolve_distributed_claims GatewayPluginOpenidConnect#resolve_distributed_claims}
  */
  readonly resolveDistributedClaims?: boolean | cdktf.IResolvable;
  /**
  * Response mode passed to the authorization endpoint: - `query`: for parameters in query string - `form_post`: for parameters in request body - `fragment`: for parameters in uri fragment (rarely useful as the plugin itself cannot read it) - `query.jwt`, `form_post.jwt`, `fragment.jwt`: similar to `query`, `form_post` and `fragment` but the parameters are encoded in a JWT - `jwt`: shortcut that indicates the default encoding for the requested response type. Default: "query"; must be one of ["form_post", "form_post.jwt", "fragment", "fragment.jwt", "jwt", "query", "query.jwt"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#response_mode GatewayPluginOpenidConnect#response_mode}
  */
  readonly responseMode?: string;
  /**
  * The response type passed to the authorization endpoint. Default: ["code"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#response_type GatewayPluginOpenidConnect#response_type}
  */
  readonly responseType?: string[];
  /**
  * Specifies whether to always verify tokens stored in the session. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#reverify GatewayPluginOpenidConnect#reverify}
  */
  readonly reverify?: boolean | cdktf.IResolvable;
  /**
  * The revocation endpoint. If set it overrides the value in `revocation_endpoint` returned by the discovery endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#revocation_endpoint GatewayPluginOpenidConnect#revocation_endpoint}
  */
  readonly revocationEndpoint?: string;
  /**
  * The revocation endpoint authentication method: : `client_secret_basic`, `client_secret_post`, `client_secret_jwt`, `private_key_jwt`, `tls_client_auth`, `self_signed_tls_client_auth`, or `none`: do not authenticate. must be one of ["client_secret_basic", "client_secret_jwt", "client_secret_post", "none", "private_key_jwt", "self_signed_tls_client_auth", "tls_client_auth"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#revocation_endpoint_auth_method GatewayPluginOpenidConnect#revocation_endpoint_auth_method}
  */
  readonly revocationEndpointAuthMethod?: string;
  /**
  * Designate token's parameter name for revocation. Default: "token"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#revocation_token_param_name GatewayPluginOpenidConnect#revocation_token_param_name}
  */
  readonly revocationTokenParamName?: string;
  /**
  * The claim that contains the roles. If multiple values are set, it means the claim is inside a nested object of the token payload. Default: ["roles"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#roles_claim GatewayPluginOpenidConnect#roles_claim}
  */
  readonly rolesClaim?: string[];
  /**
  * The roles (`roles_claim` claim) required to be present in the access token (or introspection results) for successful authorization. This config parameter works in both **AND** / **OR** cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#roles_required GatewayPluginOpenidConnect#roles_required}
  */
  readonly rolesRequired?: string[];
  /**
  * Specifies whether to run this plugin on pre-flight (`OPTIONS`) requests. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#run_on_preflight GatewayPluginOpenidConnect#run_on_preflight}
  */
  readonly runOnPreflight?: boolean | cdktf.IResolvable;
  /**
  * The scopes passed to the authorization and token endpoints. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#scopes GatewayPluginOpenidConnect#scopes}
  */
  readonly scopes?: string[];
  /**
  * The claim that contains the scopes. If multiple values are set, it means the claim is inside a nested object of the token payload. Default: ["scope"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#scopes_claim GatewayPluginOpenidConnect#scopes_claim}
  */
  readonly scopesClaim?: string[];
  /**
  * The scopes (`scopes_claim` claim) required to be present in the access token (or introspection results) for successful authorization. This config parameter works in both **AND** / **OR** cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#scopes_required GatewayPluginOpenidConnect#scopes_required}
  */
  readonly scopesRequired?: string[];
  /**
  * Specify whether to use the user info endpoint to get additional claims for consumer mapping, credential mapping, authenticated groups, and upstream and downstream headers. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#search_user_info GatewayPluginOpenidConnect#search_user_info}
  */
  readonly searchUserInfo?: boolean | cdktf.IResolvable;
  /**
  * Limits how long the session can be renewed in seconds, until re-authentication is required. 0 disables the checks. Default: 86400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_absolute_timeout GatewayPluginOpenidConnect#session_absolute_timeout}
  */
  readonly sessionAbsoluteTimeout?: number;
  /**
  * The session audience, which is the intended target application. For example `"my-application"`. Default: "default"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_audience GatewayPluginOpenidConnect#session_audience}
  */
  readonly sessionAudience?: string;
  /**
  * Bind the session to data acquired from the HTTP request or connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_bind GatewayPluginOpenidConnect#session_bind}
  */
  readonly sessionBind?: string[];
  /**
  * The session cookie Domain flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_cookie_domain GatewayPluginOpenidConnect#session_cookie_domain}
  */
  readonly sessionCookieDomain?: string;
  /**
  * Forbids JavaScript from accessing the cookie, for example, through the `Document.cookie` property. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_cookie_http_only GatewayPluginOpenidConnect#session_cookie_http_only}
  */
  readonly sessionCookieHttpOnly?: boolean | cdktf.IResolvable;
  /**
  * The session cookie name. Default: "session"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_cookie_name GatewayPluginOpenidConnect#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * The session cookie Path flag. Default: "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_cookie_path GatewayPluginOpenidConnect#session_cookie_path}
  */
  readonly sessionCookiePath?: string;
  /**
  * Controls whether a cookie is sent with cross-origin requests, providing some protection against cross-site request forgery attacks. Default: "Lax"; must be one of ["Default", "Lax", "None", "Strict"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_cookie_same_site GatewayPluginOpenidConnect#session_cookie_same_site}
  */
  readonly sessionCookieSameSite?: string;
  /**
  * Cookie is only sent to the server when a request is made with the https: scheme (except on localhost), and therefore is more resistant to man-in-the-middle attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_cookie_secure GatewayPluginOpenidConnect#session_cookie_secure}
  */
  readonly sessionCookieSecure?: boolean | cdktf.IResolvable;
  /**
  * When set to `true`, audiences are forced to share the same subject. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_enforce_same_subject GatewayPluginOpenidConnect#session_enforce_same_subject}
  */
  readonly sessionEnforceSameSubject?: boolean | cdktf.IResolvable;
  /**
  * When set to `true`, the storage key (session ID) is hashed for extra security. Hashing the storage key means it is impossible to decrypt data from the storage without a cookie. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_hash_storage_key GatewayPluginOpenidConnect#session_hash_storage_key}
  */
  readonly sessionHashStorageKey?: boolean | cdktf.IResolvable;
  /**
  * When set to `true`, the value of subject is hashed before being stored. Only applies when `session_store_metadata` is enabled. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_hash_subject GatewayPluginOpenidConnect#session_hash_subject}
  */
  readonly sessionHashSubject?: boolean | cdktf.IResolvable;
  /**
  * Specifies how long the session can be inactive until it is considered invalid in seconds. 0 disables the checks and touching. Default: 900
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_idling_timeout GatewayPluginOpenidConnect#session_idling_timeout}
  */
  readonly sessionIdlingTimeout?: number;
  /**
  * The memcached host. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_memcached_host GatewayPluginOpenidConnect#session_memcached_host}
  */
  readonly sessionMemcachedHost?: string;
  /**
  * The memcached port. Default: 11211
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_memcached_port GatewayPluginOpenidConnect#session_memcached_port}
  */
  readonly sessionMemcachedPort?: number;
  /**
  * The memcached session key prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_memcached_prefix GatewayPluginOpenidConnect#session_memcached_prefix}
  */
  readonly sessionMemcachedPrefix?: string;
  /**
  * The memcached unix socket path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_memcached_socket GatewayPluginOpenidConnect#session_memcached_socket}
  */
  readonly sessionMemcachedSocket?: string;
  /**
  * Enables or disables persistent sessions. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_remember GatewayPluginOpenidConnect#session_remember}
  */
  readonly sessionRemember?: boolean | cdktf.IResolvable;
  /**
  * Limits how long the persistent session can be renewed in seconds, until re-authentication is required. 0 disables the checks. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_remember_absolute_timeout GatewayPluginOpenidConnect#session_remember_absolute_timeout}
  */
  readonly sessionRememberAbsoluteTimeout?: number;
  /**
  * Persistent session cookie name. Use with the `remember` configuration parameter. Default: "remember"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_remember_cookie_name GatewayPluginOpenidConnect#session_remember_cookie_name}
  */
  readonly sessionRememberCookieName?: string;
  /**
  * Specifies how long the persistent session is considered valid in seconds. 0 disables the checks and rolling. Default: 604800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_remember_rolling_timeout GatewayPluginOpenidConnect#session_remember_rolling_timeout}
  */
  readonly sessionRememberRollingTimeout?: number;
  /**
  * Set of headers to send to upstream, use id, audience, subject, timeout, idling-timeout, rolling-timeout, absolute-timeout. E.g. `[ "id", "timeout" ]` will set Session-Id and Session-Timeout request headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_request_headers GatewayPluginOpenidConnect#session_request_headers}
  */
  readonly sessionRequestHeaders?: string[];
  /**
  * Set of headers to send to downstream, use id, audience, subject, timeout, idling-timeout, rolling-timeout, absolute-timeout. E.g. `[ "id", "timeout" ]` will set Session-Id and Session-Timeout response headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_response_headers GatewayPluginOpenidConnect#session_response_headers}
  */
  readonly sessionResponseHeaders?: string[];
  /**
  * Specifies how long the session can be used in seconds until it needs to be renewed. 0 disables the checks and rolling. Default: 3600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_rolling_timeout GatewayPluginOpenidConnect#session_rolling_timeout}
  */
  readonly sessionRollingTimeout?: number;
  /**
  * The session secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_secret GatewayPluginOpenidConnect#session_secret}
  */
  readonly sessionSecret?: string;
  /**
  * The session storage for session data: - `cookie`: stores session data with the session cookie (the session cannot be invalidated or revoked without changing session secret, but is stateless, and doesn't require a database) - `memcache`: stores session data in memcached - `redis`: stores session data in Redis. Default: "cookie"; must be one of ["cookie", "memcache", "memcached", "redis"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_storage GatewayPluginOpenidConnect#session_storage}
  */
  readonly sessionStorage?: string;
  /**
  * Configures whether or not session metadata should be stored. This metadata includes information about the active sessions for a specific audience belonging to a specific subject. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#session_store_metadata GatewayPluginOpenidConnect#session_store_metadata}
  */
  readonly sessionStoreMetadata?: boolean | cdktf.IResolvable;
  /**
  * Verify identity provider server certificate. If set to `true`, the plugin uses the CA certificate set in the `kong.conf` config parameter `lua_ssl_trusted_certificate`. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#ssl_verify GatewayPluginOpenidConnect#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Network IO timeout in milliseconds. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#timeout GatewayPluginOpenidConnect#timeout}
  */
  readonly timeout?: number;
  /**
  * ID of the Certificate entity representing the client certificate to use for mTLS client authentication for connections between Kong and the Auth Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#tls_client_auth_cert_id GatewayPluginOpenidConnect#tls_client_auth_cert_id}
  */
  readonly tlsClientAuthCertId?: string;
  /**
  * Verify identity provider server certificate during mTLS client authentication. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#tls_client_auth_ssl_verify GatewayPluginOpenidConnect#tls_client_auth_ssl_verify}
  */
  readonly tlsClientAuthSslVerify?: boolean | cdktf.IResolvable;
  /**
  * Include the scope in the token cache key, so token with different scopes are considered diffrent tokens. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#token_cache_key_include_scope GatewayPluginOpenidConnect#token_cache_key_include_scope}
  */
  readonly tokenCacheKeyIncludeScope?: boolean | cdktf.IResolvable;
  /**
  * The token endpoint. If set it overrides the value in `token_endpoint` returned by the discovery endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#token_endpoint GatewayPluginOpenidConnect#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * The token endpoint authentication method: `client_secret_basic`, `client_secret_post`, `client_secret_jwt`, `private_key_jwt`, `tls_client_auth`, `self_signed_tls_client_auth`, or `none`: do not authenticate. must be one of ["client_secret_basic", "client_secret_jwt", "client_secret_post", "none", "private_key_jwt", "self_signed_tls_client_auth", "tls_client_auth"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#token_endpoint_auth_method GatewayPluginOpenidConnect#token_endpoint_auth_method}
  */
  readonly tokenEndpointAuthMethod?: string;
  /**
  * The token exchange endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#token_exchange_endpoint GatewayPluginOpenidConnect#token_exchange_endpoint}
  */
  readonly tokenExchangeEndpoint?: string;
  /**
  * Extra headers passed from the client to the token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#token_headers_client GatewayPluginOpenidConnect#token_headers_client}
  */
  readonly tokenHeadersClient?: string[];
  /**
  * Enable the sending of the token endpoint response headers only with certain grants: - `password`: with OAuth password grant - `client_credentials`: with OAuth client credentials grant - `authorization_code`: with authorization code flow - `refresh_token` with refresh token grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#token_headers_grants GatewayPluginOpenidConnect#token_headers_grants}
  */
  readonly tokenHeadersGrants?: string[];
  /**
  * Extra header names passed to the token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#token_headers_names GatewayPluginOpenidConnect#token_headers_names}
  */
  readonly tokenHeadersNames?: string[];
  /**
  * Add a prefix to the token endpoint response headers before forwarding them to the downstream client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#token_headers_prefix GatewayPluginOpenidConnect#token_headers_prefix}
  */
  readonly tokenHeadersPrefix?: string;
  /**
  * The names of token endpoint response headers to forward to the downstream client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#token_headers_replay GatewayPluginOpenidConnect#token_headers_replay}
  */
  readonly tokenHeadersReplay?: string[];
  /**
  * Extra header values passed to the token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#token_headers_values GatewayPluginOpenidConnect#token_headers_values}
  */
  readonly tokenHeadersValues?: string[];
  /**
  * Pass extra arguments from the client to the OpenID-Connect plugin. If arguments exist, the client can pass them using: - Query parameters - Request Body - Request Header  This parameter can be used with `scope` values, like this:  `config.token_post_args_client=scope`  In this case, the token would take the `scope` value from the query parameter or from the request body or from the header and send it to the token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#token_post_args_client GatewayPluginOpenidConnect#token_post_args_client}
  */
  readonly tokenPostArgsClient?: string[];
  /**
  * Extra post argument names passed to the token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#token_post_args_names GatewayPluginOpenidConnect#token_post_args_names}
  */
  readonly tokenPostArgsNames?: string[];
  /**
  * Extra post argument values passed to the token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#token_post_args_values GatewayPluginOpenidConnect#token_post_args_values}
  */
  readonly tokenPostArgsValues?: string[];
  /**
  * Destroy any active session for the unauthorized requests. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#unauthorized_destroy_session GatewayPluginOpenidConnect#unauthorized_destroy_session}
  */
  readonly unauthorizedDestroySession?: boolean | cdktf.IResolvable;
  /**
  * The error message for the unauthorized requests (when not using the redirection). Default: "Unauthorized"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#unauthorized_error_message GatewayPluginOpenidConnect#unauthorized_error_message}
  */
  readonly unauthorizedErrorMessage?: string;
  /**
  * Where to redirect the client on unauthorized requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#unauthorized_redirect_uri GatewayPluginOpenidConnect#unauthorized_redirect_uri}
  */
  readonly unauthorizedRedirectUri?: string[];
  /**
  * Where to redirect the client when unexpected errors happen with the requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#unexpected_redirect_uri GatewayPluginOpenidConnect#unexpected_redirect_uri}
  */
  readonly unexpectedRedirectUri?: string[];
  /**
  * The upstream access token header. Default: "authorization:bearer"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#upstream_access_token_header GatewayPluginOpenidConnect#upstream_access_token_header}
  */
  readonly upstreamAccessTokenHeader?: string;
  /**
  * The upstream access token JWK header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#upstream_access_token_jwk_header GatewayPluginOpenidConnect#upstream_access_token_jwk_header}
  */
  readonly upstreamAccessTokenJwkHeader?: string;
  /**
  * The upstream header claims. Only top level claims are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#upstream_headers_claims GatewayPluginOpenidConnect#upstream_headers_claims}
  */
  readonly upstreamHeadersClaims?: string[];
  /**
  * The upstream header names for the claim values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#upstream_headers_names GatewayPluginOpenidConnect#upstream_headers_names}
  */
  readonly upstreamHeadersNames?: string[];
  /**
  * The upstream id token header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#upstream_id_token_header GatewayPluginOpenidConnect#upstream_id_token_header}
  */
  readonly upstreamIdTokenHeader?: string;
  /**
  * The upstream id token JWK header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#upstream_id_token_jwk_header GatewayPluginOpenidConnect#upstream_id_token_jwk_header}
  */
  readonly upstreamIdTokenJwkHeader?: string;
  /**
  * The upstream introspection header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#upstream_introspection_header GatewayPluginOpenidConnect#upstream_introspection_header}
  */
  readonly upstreamIntrospectionHeader?: string;
  /**
  * The upstream introspection JWT header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#upstream_introspection_jwt_header GatewayPluginOpenidConnect#upstream_introspection_jwt_header}
  */
  readonly upstreamIntrospectionJwtHeader?: string;
  /**
  * The upstream refresh token header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#upstream_refresh_token_header GatewayPluginOpenidConnect#upstream_refresh_token_header}
  */
  readonly upstreamRefreshTokenHeader?: string;
  /**
  * The upstream session id header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#upstream_session_id_header GatewayPluginOpenidConnect#upstream_session_id_header}
  */
  readonly upstreamSessionIdHeader?: string;
  /**
  * The upstream user info header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#upstream_user_info_header GatewayPluginOpenidConnect#upstream_user_info_header}
  */
  readonly upstreamUserInfoHeader?: string;
  /**
  * The upstream user info JWT header (in case the user info returns a JWT response).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#upstream_user_info_jwt_header GatewayPluginOpenidConnect#upstream_user_info_jwt_header}
  */
  readonly upstreamUserInfoJwtHeader?: string;
  /**
  * The value of `Accept` header for user info requests: - `application/json`: user info response as JSON - `application/jwt`: user info response as JWT (from the obsolete IETF draft document). Default: "application/json"; must be one of ["application/json", "application/jwt"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#userinfo_accept GatewayPluginOpenidConnect#userinfo_accept}
  */
  readonly userinfoAccept?: string;
  /**
  * The user info endpoint. If set it overrides the value in `userinfo_endpoint` returned by the discovery endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#userinfo_endpoint GatewayPluginOpenidConnect#userinfo_endpoint}
  */
  readonly userinfoEndpoint?: string;
  /**
  * Extra headers passed from the client to the user info endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#userinfo_headers_client GatewayPluginOpenidConnect#userinfo_headers_client}
  */
  readonly userinfoHeadersClient?: string[];
  /**
  * Extra header names passed to the user info endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#userinfo_headers_names GatewayPluginOpenidConnect#userinfo_headers_names}
  */
  readonly userinfoHeadersNames?: string[];
  /**
  * Extra header values passed to the user info endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#userinfo_headers_values GatewayPluginOpenidConnect#userinfo_headers_values}
  */
  readonly userinfoHeadersValues?: string[];
  /**
  * Extra query arguments passed from the client to the user info endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#userinfo_query_args_client GatewayPluginOpenidConnect#userinfo_query_args_client}
  */
  readonly userinfoQueryArgsClient?: string[];
  /**
  * Extra query argument names passed to the user info endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#userinfo_query_args_names GatewayPluginOpenidConnect#userinfo_query_args_names}
  */
  readonly userinfoQueryArgsNames?: string[];
  /**
  * Extra query argument values passed to the user info endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#userinfo_query_args_values GatewayPluginOpenidConnect#userinfo_query_args_values}
  */
  readonly userinfoQueryArgsValues?: string[];
  /**
  * If the plugin uses a pseudo issuer. When set to true, the plugin will not discover the configuration from the issuer URL specified with `config.issuer`. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#using_pseudo_issuer GatewayPluginOpenidConnect#using_pseudo_issuer}
  */
  readonly usingPseudoIssuer?: boolean | cdktf.IResolvable;
  /**
  * Verify tokens for standard claims. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#verify_claims GatewayPluginOpenidConnect#verify_claims}
  */
  readonly verifyClaims?: boolean | cdktf.IResolvable;
  /**
  * Verify nonce on authorization code flow. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#verify_nonce GatewayPluginOpenidConnect#verify_nonce}
  */
  readonly verifyNonce?: boolean | cdktf.IResolvable;
  /**
  * Verify plugin configuration against discovery. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#verify_parameters GatewayPluginOpenidConnect#verify_parameters}
  */
  readonly verifyParameters?: boolean | cdktf.IResolvable;
  /**
  * Verify signature of tokens. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#verify_signature GatewayPluginOpenidConnect#verify_signature}
  */
  readonly verifySignature?: boolean | cdktf.IResolvable;
}

export function gatewayPluginOpenidConnectConfigAToTerraform(struct?: GatewayPluginOpenidConnectConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anonymous: cdktf.stringToTerraform(struct!.anonymous),
    audience: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audience),
    audience_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audienceClaim),
    audience_required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audienceRequired),
    auth_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authMethods),
    authenticated_groups_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authenticatedGroupsClaim),
    authorization_cookie_domain: cdktf.stringToTerraform(struct!.authorizationCookieDomain),
    authorization_cookie_http_only: cdktf.booleanToTerraform(struct!.authorizationCookieHttpOnly),
    authorization_cookie_name: cdktf.stringToTerraform(struct!.authorizationCookieName),
    authorization_cookie_path: cdktf.stringToTerraform(struct!.authorizationCookiePath),
    authorization_cookie_same_site: cdktf.stringToTerraform(struct!.authorizationCookieSameSite),
    authorization_cookie_secure: cdktf.booleanToTerraform(struct!.authorizationCookieSecure),
    authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
    authorization_query_args_client: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizationQueryArgsClient),
    authorization_query_args_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizationQueryArgsNames),
    authorization_query_args_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizationQueryArgsValues),
    authorization_rolling_timeout: cdktf.numberToTerraform(struct!.authorizationRollingTimeout),
    bearer_token_cookie_name: cdktf.stringToTerraform(struct!.bearerTokenCookieName),
    bearer_token_param_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bearerTokenParamType),
    by_username_ignore_case: cdktf.booleanToTerraform(struct!.byUsernameIgnoreCase),
    cache_introspection: cdktf.booleanToTerraform(struct!.cacheIntrospection),
    cache_token_exchange: cdktf.booleanToTerraform(struct!.cacheTokenExchange),
    cache_tokens: cdktf.booleanToTerraform(struct!.cacheTokens),
    cache_tokens_salt: cdktf.stringToTerraform(struct!.cacheTokensSalt),
    cache_ttl: cdktf.numberToTerraform(struct!.cacheTtl),
    cache_ttl_max: cdktf.numberToTerraform(struct!.cacheTtlMax),
    cache_ttl_min: cdktf.numberToTerraform(struct!.cacheTtlMin),
    cache_ttl_neg: cdktf.numberToTerraform(struct!.cacheTtlNeg),
    cache_ttl_resurrect: cdktf.numberToTerraform(struct!.cacheTtlResurrect),
    cache_user_info: cdktf.booleanToTerraform(struct!.cacheUserInfo),
    claims_forbidden: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.claimsForbidden),
    client_alg: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientAlg),
    client_arg: cdktf.stringToTerraform(struct!.clientArg),
    client_auth: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientAuth),
    client_credentials_param_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientCredentialsParamType),
    client_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientId),
    client_jwk: cdktf.listMapper(gatewayPluginOpenidConnectConfigClientJwkToTerraform, false)(struct!.clientJwk),
    client_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientSecret),
    cluster_cache_redis: gatewayPluginOpenidConnectConfigClusterCacheRedisToTerraform(struct!.clusterCacheRedis),
    cluster_cache_strategy: cdktf.stringToTerraform(struct!.clusterCacheStrategy),
    consumer_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.consumerBy),
    consumer_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.consumerClaim),
    consumer_groups_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.consumerGroupsClaim),
    consumer_groups_optional: cdktf.booleanToTerraform(struct!.consumerGroupsOptional),
    consumer_optional: cdktf.booleanToTerraform(struct!.consumerOptional),
    credential_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.credentialClaim),
    disable_session: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disableSession),
    discovery_headers_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.discoveryHeadersNames),
    discovery_headers_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.discoveryHeadersValues),
    display_errors: cdktf.booleanToTerraform(struct!.displayErrors),
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    downstream_access_token_header: cdktf.stringToTerraform(struct!.downstreamAccessTokenHeader),
    downstream_access_token_jwk_header: cdktf.stringToTerraform(struct!.downstreamAccessTokenJwkHeader),
    downstream_headers_claims: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.downstreamHeadersClaims),
    downstream_headers_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.downstreamHeadersNames),
    downstream_id_token_header: cdktf.stringToTerraform(struct!.downstreamIdTokenHeader),
    downstream_id_token_jwk_header: cdktf.stringToTerraform(struct!.downstreamIdTokenJwkHeader),
    downstream_introspection_header: cdktf.stringToTerraform(struct!.downstreamIntrospectionHeader),
    downstream_introspection_jwt_header: cdktf.stringToTerraform(struct!.downstreamIntrospectionJwtHeader),
    downstream_refresh_token_header: cdktf.stringToTerraform(struct!.downstreamRefreshTokenHeader),
    downstream_session_id_header: cdktf.stringToTerraform(struct!.downstreamSessionIdHeader),
    downstream_user_info_header: cdktf.stringToTerraform(struct!.downstreamUserInfoHeader),
    downstream_user_info_jwt_header: cdktf.stringToTerraform(struct!.downstreamUserInfoJwtHeader),
    dpop_proof_lifetime: cdktf.numberToTerraform(struct!.dpopProofLifetime),
    dpop_use_nonce: cdktf.booleanToTerraform(struct!.dpopUseNonce),
    enable_hs_signatures: cdktf.booleanToTerraform(struct!.enableHsSignatures),
    end_session_endpoint: cdktf.stringToTerraform(struct!.endSessionEndpoint),
    expose_error_code: cdktf.booleanToTerraform(struct!.exposeErrorCode),
    extra_jwks_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraJwksUris),
    forbidden_destroy_session: cdktf.booleanToTerraform(struct!.forbiddenDestroySession),
    forbidden_error_message: cdktf.stringToTerraform(struct!.forbiddenErrorMessage),
    forbidden_redirect_uri: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forbiddenRedirectUri),
    groups_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupsClaim),
    groups_required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupsRequired),
    hide_credentials: cdktf.booleanToTerraform(struct!.hideCredentials),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    http_proxy_authorization: cdktf.stringToTerraform(struct!.httpProxyAuthorization),
    http_version: cdktf.numberToTerraform(struct!.httpVersion),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    https_proxy_authorization: cdktf.stringToTerraform(struct!.httpsProxyAuthorization),
    id_token_param_name: cdktf.stringToTerraform(struct!.idTokenParamName),
    id_token_param_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.idTokenParamType),
    ignore_signature: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoreSignature),
    introspect_jwt_tokens: cdktf.booleanToTerraform(struct!.introspectJwtTokens),
    introspection_accept: cdktf.stringToTerraform(struct!.introspectionAccept),
    introspection_check_active: cdktf.booleanToTerraform(struct!.introspectionCheckActive),
    introspection_endpoint: cdktf.stringToTerraform(struct!.introspectionEndpoint),
    introspection_endpoint_auth_method: cdktf.stringToTerraform(struct!.introspectionEndpointAuthMethod),
    introspection_headers_client: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.introspectionHeadersClient),
    introspection_headers_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.introspectionHeadersNames),
    introspection_headers_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.introspectionHeadersValues),
    introspection_hint: cdktf.stringToTerraform(struct!.introspectionHint),
    introspection_post_args_client: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.introspectionPostArgsClient),
    introspection_post_args_client_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.introspectionPostArgsClientHeaders),
    introspection_post_args_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.introspectionPostArgsNames),
    introspection_post_args_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.introspectionPostArgsValues),
    introspection_token_param_name: cdktf.stringToTerraform(struct!.introspectionTokenParamName),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    issuers_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.issuersAllowed),
    jwt_session_claim: cdktf.stringToTerraform(struct!.jwtSessionClaim),
    jwt_session_cookie: cdktf.stringToTerraform(struct!.jwtSessionCookie),
    keepalive: cdktf.booleanToTerraform(struct!.keepalive),
    leeway: cdktf.numberToTerraform(struct!.leeway),
    login_action: cdktf.stringToTerraform(struct!.loginAction),
    login_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginMethods),
    login_redirect_mode: cdktf.stringToTerraform(struct!.loginRedirectMode),
    login_redirect_uri: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginRedirectUri),
    login_tokens: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginTokens),
    logout_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logoutMethods),
    logout_post_arg: cdktf.stringToTerraform(struct!.logoutPostArg),
    logout_query_arg: cdktf.stringToTerraform(struct!.logoutQueryArg),
    logout_redirect_uri: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logoutRedirectUri),
    logout_revoke: cdktf.booleanToTerraform(struct!.logoutRevoke),
    logout_revoke_access_token: cdktf.booleanToTerraform(struct!.logoutRevokeAccessToken),
    logout_revoke_refresh_token: cdktf.booleanToTerraform(struct!.logoutRevokeRefreshToken),
    logout_uri_suffix: cdktf.stringToTerraform(struct!.logoutUriSuffix),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    mtls_introspection_endpoint: cdktf.stringToTerraform(struct!.mtlsIntrospectionEndpoint),
    mtls_revocation_endpoint: cdktf.stringToTerraform(struct!.mtlsRevocationEndpoint),
    mtls_token_endpoint: cdktf.stringToTerraform(struct!.mtlsTokenEndpoint),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    password_param_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.passwordParamType),
    preserve_query_args: cdktf.booleanToTerraform(struct!.preserveQueryArgs),
    proof_of_possession_auth_methods_validation: cdktf.booleanToTerraform(struct!.proofOfPossessionAuthMethodsValidation),
    proof_of_possession_dpop: cdktf.stringToTerraform(struct!.proofOfPossessionDpop),
    proof_of_possession_mtls: cdktf.stringToTerraform(struct!.proofOfPossessionMtls),
    pushed_authorization_request_endpoint: cdktf.stringToTerraform(struct!.pushedAuthorizationRequestEndpoint),
    pushed_authorization_request_endpoint_auth_method: cdktf.stringToTerraform(struct!.pushedAuthorizationRequestEndpointAuthMethod),
    redirect_uri: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.redirectUri),
    redis: gatewayPluginOpenidConnectConfigRedisToTerraform(struct!.redis),
    rediscovery_lifetime: cdktf.numberToTerraform(struct!.rediscoveryLifetime),
    refresh_token_param_name: cdktf.stringToTerraform(struct!.refreshTokenParamName),
    refresh_token_param_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.refreshTokenParamType),
    refresh_tokens: cdktf.booleanToTerraform(struct!.refreshTokens),
    require_proof_key_for_code_exchange: cdktf.booleanToTerraform(struct!.requireProofKeyForCodeExchange),
    require_pushed_authorization_requests: cdktf.booleanToTerraform(struct!.requirePushedAuthorizationRequests),
    require_signed_request_object: cdktf.booleanToTerraform(struct!.requireSignedRequestObject),
    resolve_distributed_claims: cdktf.booleanToTerraform(struct!.resolveDistributedClaims),
    response_mode: cdktf.stringToTerraform(struct!.responseMode),
    response_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseType),
    reverify: cdktf.booleanToTerraform(struct!.reverify),
    revocation_endpoint: cdktf.stringToTerraform(struct!.revocationEndpoint),
    revocation_endpoint_auth_method: cdktf.stringToTerraform(struct!.revocationEndpointAuthMethod),
    revocation_token_param_name: cdktf.stringToTerraform(struct!.revocationTokenParamName),
    roles_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rolesClaim),
    roles_required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rolesRequired),
    run_on_preflight: cdktf.booleanToTerraform(struct!.runOnPreflight),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    scopes_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopesClaim),
    scopes_required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopesRequired),
    search_user_info: cdktf.booleanToTerraform(struct!.searchUserInfo),
    session_absolute_timeout: cdktf.numberToTerraform(struct!.sessionAbsoluteTimeout),
    session_audience: cdktf.stringToTerraform(struct!.sessionAudience),
    session_bind: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sessionBind),
    session_cookie_domain: cdktf.stringToTerraform(struct!.sessionCookieDomain),
    session_cookie_http_only: cdktf.booleanToTerraform(struct!.sessionCookieHttpOnly),
    session_cookie_name: cdktf.stringToTerraform(struct!.sessionCookieName),
    session_cookie_path: cdktf.stringToTerraform(struct!.sessionCookiePath),
    session_cookie_same_site: cdktf.stringToTerraform(struct!.sessionCookieSameSite),
    session_cookie_secure: cdktf.booleanToTerraform(struct!.sessionCookieSecure),
    session_enforce_same_subject: cdktf.booleanToTerraform(struct!.sessionEnforceSameSubject),
    session_hash_storage_key: cdktf.booleanToTerraform(struct!.sessionHashStorageKey),
    session_hash_subject: cdktf.booleanToTerraform(struct!.sessionHashSubject),
    session_idling_timeout: cdktf.numberToTerraform(struct!.sessionIdlingTimeout),
    session_memcached_host: cdktf.stringToTerraform(struct!.sessionMemcachedHost),
    session_memcached_port: cdktf.numberToTerraform(struct!.sessionMemcachedPort),
    session_memcached_prefix: cdktf.stringToTerraform(struct!.sessionMemcachedPrefix),
    session_memcached_socket: cdktf.stringToTerraform(struct!.sessionMemcachedSocket),
    session_remember: cdktf.booleanToTerraform(struct!.sessionRemember),
    session_remember_absolute_timeout: cdktf.numberToTerraform(struct!.sessionRememberAbsoluteTimeout),
    session_remember_cookie_name: cdktf.stringToTerraform(struct!.sessionRememberCookieName),
    session_remember_rolling_timeout: cdktf.numberToTerraform(struct!.sessionRememberRollingTimeout),
    session_request_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sessionRequestHeaders),
    session_response_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sessionResponseHeaders),
    session_rolling_timeout: cdktf.numberToTerraform(struct!.sessionRollingTimeout),
    session_secret: cdktf.stringToTerraform(struct!.sessionSecret),
    session_storage: cdktf.stringToTerraform(struct!.sessionStorage),
    session_store_metadata: cdktf.booleanToTerraform(struct!.sessionStoreMetadata),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    tls_client_auth_cert_id: cdktf.stringToTerraform(struct!.tlsClientAuthCertId),
    tls_client_auth_ssl_verify: cdktf.booleanToTerraform(struct!.tlsClientAuthSslVerify),
    token_cache_key_include_scope: cdktf.booleanToTerraform(struct!.tokenCacheKeyIncludeScope),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    token_endpoint_auth_method: cdktf.stringToTerraform(struct!.tokenEndpointAuthMethod),
    token_exchange_endpoint: cdktf.stringToTerraform(struct!.tokenExchangeEndpoint),
    token_headers_client: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tokenHeadersClient),
    token_headers_grants: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tokenHeadersGrants),
    token_headers_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tokenHeadersNames),
    token_headers_prefix: cdktf.stringToTerraform(struct!.tokenHeadersPrefix),
    token_headers_replay: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tokenHeadersReplay),
    token_headers_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tokenHeadersValues),
    token_post_args_client: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tokenPostArgsClient),
    token_post_args_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tokenPostArgsNames),
    token_post_args_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tokenPostArgsValues),
    unauthorized_destroy_session: cdktf.booleanToTerraform(struct!.unauthorizedDestroySession),
    unauthorized_error_message: cdktf.stringToTerraform(struct!.unauthorizedErrorMessage),
    unauthorized_redirect_uri: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unauthorizedRedirectUri),
    unexpected_redirect_uri: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unexpectedRedirectUri),
    upstream_access_token_header: cdktf.stringToTerraform(struct!.upstreamAccessTokenHeader),
    upstream_access_token_jwk_header: cdktf.stringToTerraform(struct!.upstreamAccessTokenJwkHeader),
    upstream_headers_claims: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.upstreamHeadersClaims),
    upstream_headers_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.upstreamHeadersNames),
    upstream_id_token_header: cdktf.stringToTerraform(struct!.upstreamIdTokenHeader),
    upstream_id_token_jwk_header: cdktf.stringToTerraform(struct!.upstreamIdTokenJwkHeader),
    upstream_introspection_header: cdktf.stringToTerraform(struct!.upstreamIntrospectionHeader),
    upstream_introspection_jwt_header: cdktf.stringToTerraform(struct!.upstreamIntrospectionJwtHeader),
    upstream_refresh_token_header: cdktf.stringToTerraform(struct!.upstreamRefreshTokenHeader),
    upstream_session_id_header: cdktf.stringToTerraform(struct!.upstreamSessionIdHeader),
    upstream_user_info_header: cdktf.stringToTerraform(struct!.upstreamUserInfoHeader),
    upstream_user_info_jwt_header: cdktf.stringToTerraform(struct!.upstreamUserInfoJwtHeader),
    userinfo_accept: cdktf.stringToTerraform(struct!.userinfoAccept),
    userinfo_endpoint: cdktf.stringToTerraform(struct!.userinfoEndpoint),
    userinfo_headers_client: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userinfoHeadersClient),
    userinfo_headers_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userinfoHeadersNames),
    userinfo_headers_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userinfoHeadersValues),
    userinfo_query_args_client: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userinfoQueryArgsClient),
    userinfo_query_args_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userinfoQueryArgsNames),
    userinfo_query_args_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userinfoQueryArgsValues),
    using_pseudo_issuer: cdktf.booleanToTerraform(struct!.usingPseudoIssuer),
    verify_claims: cdktf.booleanToTerraform(struct!.verifyClaims),
    verify_nonce: cdktf.booleanToTerraform(struct!.verifyNonce),
    verify_parameters: cdktf.booleanToTerraform(struct!.verifyParameters),
    verify_signature: cdktf.booleanToTerraform(struct!.verifySignature),
  }
}


export function gatewayPluginOpenidConnectConfigAToHclTerraform(struct?: GatewayPluginOpenidConnectConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anonymous: {
      value: cdktf.stringToHclTerraform(struct!.anonymous),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audience: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audience),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    audience_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audienceClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    audience_required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audienceRequired),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    authenticated_groups_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authenticatedGroupsClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    authorization_cookie_domain: {
      value: cdktf.stringToHclTerraform(struct!.authorizationCookieDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_cookie_http_only: {
      value: cdktf.booleanToHclTerraform(struct!.authorizationCookieHttpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authorization_cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.authorizationCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_cookie_path: {
      value: cdktf.stringToHclTerraform(struct!.authorizationCookiePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_cookie_same_site: {
      value: cdktf.stringToHclTerraform(struct!.authorizationCookieSameSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_cookie_secure: {
      value: cdktf.booleanToHclTerraform(struct!.authorizationCookieSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authorization_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authorizationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_query_args_client: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizationQueryArgsClient),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    authorization_query_args_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizationQueryArgsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    authorization_query_args_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizationQueryArgsValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    authorization_rolling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.authorizationRollingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bearer_token_cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.bearerTokenCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bearer_token_param_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bearerTokenParamType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    by_username_ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.byUsernameIgnoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_introspection: {
      value: cdktf.booleanToHclTerraform(struct!.cacheIntrospection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_token_exchange: {
      value: cdktf.booleanToHclTerraform(struct!.cacheTokenExchange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_tokens: {
      value: cdktf.booleanToHclTerraform(struct!.cacheTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_tokens_salt: {
      value: cdktf.stringToHclTerraform(struct!.cacheTokensSalt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_ttl_max: {
      value: cdktf.numberToHclTerraform(struct!.cacheTtlMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_ttl_min: {
      value: cdktf.numberToHclTerraform(struct!.cacheTtlMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_ttl_neg: {
      value: cdktf.numberToHclTerraform(struct!.cacheTtlNeg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_ttl_resurrect: {
      value: cdktf.numberToHclTerraform(struct!.cacheTtlResurrect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_user_info: {
      value: cdktf.booleanToHclTerraform(struct!.cacheUserInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    claims_forbidden: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.claimsForbidden),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_alg: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientAlg),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_arg: {
      value: cdktf.stringToHclTerraform(struct!.clientArg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_auth: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientAuth),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_credentials_param_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientCredentialsParamType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_jwk: {
      value: cdktf.listMapperHcl(gatewayPluginOpenidConnectConfigClientJwkToHclTerraform, false)(struct!.clientJwk),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginOpenidConnectConfigClientJwkList",
    },
    client_secret: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientSecret),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_cache_redis: {
      value: gatewayPluginOpenidConnectConfigClusterCacheRedisToHclTerraform(struct!.clusterCacheRedis),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginOpenidConnectConfigClusterCacheRedis",
    },
    cluster_cache_strategy: {
      value: cdktf.stringToHclTerraform(struct!.clusterCacheStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.consumerBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    consumer_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.consumerClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    consumer_groups_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.consumerGroupsClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    consumer_groups_optional: {
      value: cdktf.booleanToHclTerraform(struct!.consumerGroupsOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    consumer_optional: {
      value: cdktf.booleanToHclTerraform(struct!.consumerOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    credential_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.credentialClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_session: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disableSession),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    discovery_headers_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.discoveryHeadersNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    discovery_headers_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.discoveryHeadersValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    display_errors: {
      value: cdktf.booleanToHclTerraform(struct!.displayErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    downstream_access_token_header: {
      value: cdktf.stringToHclTerraform(struct!.downstreamAccessTokenHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    downstream_access_token_jwk_header: {
      value: cdktf.stringToHclTerraform(struct!.downstreamAccessTokenJwkHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    downstream_headers_claims: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.downstreamHeadersClaims),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    downstream_headers_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.downstreamHeadersNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    downstream_id_token_header: {
      value: cdktf.stringToHclTerraform(struct!.downstreamIdTokenHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    downstream_id_token_jwk_header: {
      value: cdktf.stringToHclTerraform(struct!.downstreamIdTokenJwkHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    downstream_introspection_header: {
      value: cdktf.stringToHclTerraform(struct!.downstreamIntrospectionHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    downstream_introspection_jwt_header: {
      value: cdktf.stringToHclTerraform(struct!.downstreamIntrospectionJwtHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    downstream_refresh_token_header: {
      value: cdktf.stringToHclTerraform(struct!.downstreamRefreshTokenHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    downstream_session_id_header: {
      value: cdktf.stringToHclTerraform(struct!.downstreamSessionIdHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    downstream_user_info_header: {
      value: cdktf.stringToHclTerraform(struct!.downstreamUserInfoHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    downstream_user_info_jwt_header: {
      value: cdktf.stringToHclTerraform(struct!.downstreamUserInfoJwtHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dpop_proof_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.dpopProofLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dpop_use_nonce: {
      value: cdktf.booleanToHclTerraform(struct!.dpopUseNonce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_hs_signatures: {
      value: cdktf.booleanToHclTerraform(struct!.enableHsSignatures),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    end_session_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endSessionEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expose_error_code: {
      value: cdktf.booleanToHclTerraform(struct!.exposeErrorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_jwks_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraJwksUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    forbidden_destroy_session: {
      value: cdktf.booleanToHclTerraform(struct!.forbiddenDestroySession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forbidden_error_message: {
      value: cdktf.stringToHclTerraform(struct!.forbiddenErrorMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forbidden_redirect_uri: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forbiddenRedirectUri),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    groups_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupsClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    groups_required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupsRequired),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hide_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.hideCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_proxy_authorization: {
      value: cdktf.stringToHclTerraform(struct!.httpProxyAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_version: {
      value: cdktf.numberToHclTerraform(struct!.httpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy_authorization: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxyAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_token_param_name: {
      value: cdktf.stringToHclTerraform(struct!.idTokenParamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_token_param_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.idTokenParamType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore_signature: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoreSignature),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    introspect_jwt_tokens: {
      value: cdktf.booleanToHclTerraform(struct!.introspectJwtTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    introspection_accept: {
      value: cdktf.stringToHclTerraform(struct!.introspectionAccept),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    introspection_check_active: {
      value: cdktf.booleanToHclTerraform(struct!.introspectionCheckActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    introspection_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.introspectionEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    introspection_endpoint_auth_method: {
      value: cdktf.stringToHclTerraform(struct!.introspectionEndpointAuthMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    introspection_headers_client: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.introspectionHeadersClient),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    introspection_headers_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.introspectionHeadersNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    introspection_headers_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.introspectionHeadersValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    introspection_hint: {
      value: cdktf.stringToHclTerraform(struct!.introspectionHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    introspection_post_args_client: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.introspectionPostArgsClient),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    introspection_post_args_client_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.introspectionPostArgsClientHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    introspection_post_args_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.introspectionPostArgsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    introspection_post_args_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.introspectionPostArgsValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    introspection_token_param_name: {
      value: cdktf.stringToHclTerraform(struct!.introspectionTokenParamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuers_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.issuersAllowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jwt_session_claim: {
      value: cdktf.stringToHclTerraform(struct!.jwtSessionClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_session_cookie: {
      value: cdktf.stringToHclTerraform(struct!.jwtSessionCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive: {
      value: cdktf.booleanToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    leeway: {
      value: cdktf.numberToHclTerraform(struct!.leeway),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    login_action: {
      value: cdktf.stringToHclTerraform(struct!.loginAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loginMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    login_redirect_mode: {
      value: cdktf.stringToHclTerraform(struct!.loginRedirectMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_redirect_uri: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loginRedirectUri),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    login_tokens: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loginTokens),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    logout_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logoutMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    logout_post_arg: {
      value: cdktf.stringToHclTerraform(struct!.logoutPostArg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_query_arg: {
      value: cdktf.stringToHclTerraform(struct!.logoutQueryArg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_redirect_uri: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logoutRedirectUri),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    logout_revoke: {
      value: cdktf.booleanToHclTerraform(struct!.logoutRevoke),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logout_revoke_access_token: {
      value: cdktf.booleanToHclTerraform(struct!.logoutRevokeAccessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logout_revoke_refresh_token: {
      value: cdktf.booleanToHclTerraform(struct!.logoutRevokeRefreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logout_uri_suffix: {
      value: cdktf.stringToHclTerraform(struct!.logoutUriSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtls_introspection_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.mtlsIntrospectionEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtls_revocation_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.mtlsRevocationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtls_token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.mtlsTokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_param_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.passwordParamType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preserve_query_args: {
      value: cdktf.booleanToHclTerraform(struct!.preserveQueryArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proof_of_possession_auth_methods_validation: {
      value: cdktf.booleanToHclTerraform(struct!.proofOfPossessionAuthMethodsValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proof_of_possession_dpop: {
      value: cdktf.stringToHclTerraform(struct!.proofOfPossessionDpop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proof_of_possession_mtls: {
      value: cdktf.stringToHclTerraform(struct!.proofOfPossessionMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pushed_authorization_request_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.pushedAuthorizationRequestEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pushed_authorization_request_endpoint_auth_method: {
      value: cdktf.stringToHclTerraform(struct!.pushedAuthorizationRequestEndpointAuthMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.redirectUri),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    redis: {
      value: gatewayPluginOpenidConnectConfigRedisToHclTerraform(struct!.redis),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginOpenidConnectConfigRedis",
    },
    rediscovery_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.rediscoveryLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_token_param_name: {
      value: cdktf.stringToHclTerraform(struct!.refreshTokenParamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token_param_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.refreshTokenParamType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    refresh_tokens: {
      value: cdktf.booleanToHclTerraform(struct!.refreshTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_proof_key_for_code_exchange: {
      value: cdktf.booleanToHclTerraform(struct!.requireProofKeyForCodeExchange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_pushed_authorization_requests: {
      value: cdktf.booleanToHclTerraform(struct!.requirePushedAuthorizationRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_signed_request_object: {
      value: cdktf.booleanToHclTerraform(struct!.requireSignedRequestObject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resolve_distributed_claims: {
      value: cdktf.booleanToHclTerraform(struct!.resolveDistributedClaims),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_mode: {
      value: cdktf.stringToHclTerraform(struct!.responseMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reverify: {
      value: cdktf.booleanToHclTerraform(struct!.reverify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    revocation_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.revocationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revocation_endpoint_auth_method: {
      value: cdktf.stringToHclTerraform(struct!.revocationEndpointAuthMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revocation_token_param_name: {
      value: cdktf.stringToHclTerraform(struct!.revocationTokenParamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rolesClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    roles_required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rolesRequired),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    run_on_preflight: {
      value: cdktf.booleanToHclTerraform(struct!.runOnPreflight),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scopes_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopesClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scopes_required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopesRequired),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    search_user_info: {
      value: cdktf.booleanToHclTerraform(struct!.searchUserInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_absolute_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionAbsoluteTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_audience: {
      value: cdktf.stringToHclTerraform(struct!.sessionAudience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_bind: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sessionBind),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    session_cookie_domain: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookieDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_http_only: {
      value: cdktf.booleanToHclTerraform(struct!.sessionCookieHttpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_path: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookiePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_same_site: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookieSameSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_secure: {
      value: cdktf.booleanToHclTerraform(struct!.sessionCookieSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_enforce_same_subject: {
      value: cdktf.booleanToHclTerraform(struct!.sessionEnforceSameSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_hash_storage_key: {
      value: cdktf.booleanToHclTerraform(struct!.sessionHashStorageKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_hash_subject: {
      value: cdktf.booleanToHclTerraform(struct!.sessionHashSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_idling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionIdlingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_memcached_host: {
      value: cdktf.stringToHclTerraform(struct!.sessionMemcachedHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_memcached_port: {
      value: cdktf.numberToHclTerraform(struct!.sessionMemcachedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_memcached_prefix: {
      value: cdktf.stringToHclTerraform(struct!.sessionMemcachedPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_memcached_socket: {
      value: cdktf.stringToHclTerraform(struct!.sessionMemcachedSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_remember: {
      value: cdktf.booleanToHclTerraform(struct!.sessionRemember),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_remember_absolute_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionRememberAbsoluteTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_remember_cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionRememberCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_remember_rolling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionRememberRollingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_request_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sessionRequestHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    session_response_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sessionResponseHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    session_rolling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionRollingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_secret: {
      value: cdktf.stringToHclTerraform(struct!.sessionSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_storage: {
      value: cdktf.stringToHclTerraform(struct!.sessionStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_store_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.sessionStoreMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_client_auth_cert_id: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientAuthCertId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_auth_ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.tlsClientAuthSslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token_cache_key_include_scope: {
      value: cdktf.booleanToHclTerraform(struct!.tokenCacheKeyIncludeScope),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint_auth_method: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpointAuthMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_exchange_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenExchangeEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_headers_client: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tokenHeadersClient),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_headers_grants: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tokenHeadersGrants),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_headers_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tokenHeadersNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_headers_prefix: {
      value: cdktf.stringToHclTerraform(struct!.tokenHeadersPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_headers_replay: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tokenHeadersReplay),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_headers_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tokenHeadersValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_post_args_client: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tokenPostArgsClient),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_post_args_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tokenPostArgsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_post_args_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tokenPostArgsValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    unauthorized_destroy_session: {
      value: cdktf.booleanToHclTerraform(struct!.unauthorizedDestroySession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unauthorized_error_message: {
      value: cdktf.stringToHclTerraform(struct!.unauthorizedErrorMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unauthorized_redirect_uri: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unauthorizedRedirectUri),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    unexpected_redirect_uri: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unexpectedRedirectUri),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    upstream_access_token_header: {
      value: cdktf.stringToHclTerraform(struct!.upstreamAccessTokenHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_access_token_jwk_header: {
      value: cdktf.stringToHclTerraform(struct!.upstreamAccessTokenJwkHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_headers_claims: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.upstreamHeadersClaims),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    upstream_headers_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.upstreamHeadersNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    upstream_id_token_header: {
      value: cdktf.stringToHclTerraform(struct!.upstreamIdTokenHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_id_token_jwk_header: {
      value: cdktf.stringToHclTerraform(struct!.upstreamIdTokenJwkHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_introspection_header: {
      value: cdktf.stringToHclTerraform(struct!.upstreamIntrospectionHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_introspection_jwt_header: {
      value: cdktf.stringToHclTerraform(struct!.upstreamIntrospectionJwtHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_refresh_token_header: {
      value: cdktf.stringToHclTerraform(struct!.upstreamRefreshTokenHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_session_id_header: {
      value: cdktf.stringToHclTerraform(struct!.upstreamSessionIdHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_user_info_header: {
      value: cdktf.stringToHclTerraform(struct!.upstreamUserInfoHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_user_info_jwt_header: {
      value: cdktf.stringToHclTerraform(struct!.upstreamUserInfoJwtHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userinfo_accept: {
      value: cdktf.stringToHclTerraform(struct!.userinfoAccept),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userinfo_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.userinfoEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userinfo_headers_client: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userinfoHeadersClient),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    userinfo_headers_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userinfoHeadersNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    userinfo_headers_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userinfoHeadersValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    userinfo_query_args_client: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userinfoQueryArgsClient),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    userinfo_query_args_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userinfoQueryArgsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    userinfo_query_args_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userinfoQueryArgsValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    using_pseudo_issuer: {
      value: cdktf.booleanToHclTerraform(struct!.usingPseudoIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_claims: {
      value: cdktf.booleanToHclTerraform(struct!.verifyClaims),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_nonce: {
      value: cdktf.booleanToHclTerraform(struct!.verifyNonce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.verifyParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_signature: {
      value: cdktf.booleanToHclTerraform(struct!.verifySignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpenidConnectConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpenidConnectConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anonymous !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymous = this._anonymous;
    }
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._audienceClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.audienceClaim = this._audienceClaim;
    }
    if (this._audienceRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.audienceRequired = this._audienceRequired;
    }
    if (this._authMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethods = this._authMethods;
    }
    if (this._authenticatedGroupsClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatedGroupsClaim = this._authenticatedGroupsClaim;
    }
    if (this._authorizationCookieDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationCookieDomain = this._authorizationCookieDomain;
    }
    if (this._authorizationCookieHttpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationCookieHttpOnly = this._authorizationCookieHttpOnly;
    }
    if (this._authorizationCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationCookieName = this._authorizationCookieName;
    }
    if (this._authorizationCookiePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationCookiePath = this._authorizationCookiePath;
    }
    if (this._authorizationCookieSameSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationCookieSameSite = this._authorizationCookieSameSite;
    }
    if (this._authorizationCookieSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationCookieSecure = this._authorizationCookieSecure;
    }
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._authorizationQueryArgsClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationQueryArgsClient = this._authorizationQueryArgsClient;
    }
    if (this._authorizationQueryArgsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationQueryArgsNames = this._authorizationQueryArgsNames;
    }
    if (this._authorizationQueryArgsValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationQueryArgsValues = this._authorizationQueryArgsValues;
    }
    if (this._authorizationRollingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationRollingTimeout = this._authorizationRollingTimeout;
    }
    if (this._bearerTokenCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenCookieName = this._bearerTokenCookieName;
    }
    if (this._bearerTokenParamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenParamType = this._bearerTokenParamType;
    }
    if (this._byUsernameIgnoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.byUsernameIgnoreCase = this._byUsernameIgnoreCase;
    }
    if (this._cacheIntrospection !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheIntrospection = this._cacheIntrospection;
    }
    if (this._cacheTokenExchange !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTokenExchange = this._cacheTokenExchange;
    }
    if (this._cacheTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTokens = this._cacheTokens;
    }
    if (this._cacheTokensSalt !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTokensSalt = this._cacheTokensSalt;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._cacheTtlMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlMax = this._cacheTtlMax;
    }
    if (this._cacheTtlMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlMin = this._cacheTtlMin;
    }
    if (this._cacheTtlNeg !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlNeg = this._cacheTtlNeg;
    }
    if (this._cacheTtlResurrect !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlResurrect = this._cacheTtlResurrect;
    }
    if (this._cacheUserInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheUserInfo = this._cacheUserInfo;
    }
    if (this._claimsForbidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimsForbidden = this._claimsForbidden;
    }
    if (this._clientAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAlg = this._clientAlg;
    }
    if (this._clientArg !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientArg = this._clientArg;
    }
    if (this._clientAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuth = this._clientAuth;
    }
    if (this._clientCredentialsParamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentialsParamType = this._clientCredentialsParamType;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientJwk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientJwk = this._clientJwk?.internalValue;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clusterCacheRedis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCacheRedis = this._clusterCacheRedis?.internalValue;
    }
    if (this._clusterCacheStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCacheStrategy = this._clusterCacheStrategy;
    }
    if (this._consumerBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerBy = this._consumerBy;
    }
    if (this._consumerClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerClaim = this._consumerClaim;
    }
    if (this._consumerGroupsClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroupsClaim = this._consumerGroupsClaim;
    }
    if (this._consumerGroupsOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerGroupsOptional = this._consumerGroupsOptional;
    }
    if (this._consumerOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerOptional = this._consumerOptional;
    }
    if (this._credentialClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialClaim = this._credentialClaim;
    }
    if (this._disableSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSession = this._disableSession;
    }
    if (this._discoveryHeadersNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryHeadersNames = this._discoveryHeadersNames;
    }
    if (this._discoveryHeadersValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryHeadersValues = this._discoveryHeadersValues;
    }
    if (this._displayErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayErrors = this._displayErrors;
    }
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._downstreamAccessTokenHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.downstreamAccessTokenHeader = this._downstreamAccessTokenHeader;
    }
    if (this._downstreamAccessTokenJwkHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.downstreamAccessTokenJwkHeader = this._downstreamAccessTokenJwkHeader;
    }
    if (this._downstreamHeadersClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.downstreamHeadersClaims = this._downstreamHeadersClaims;
    }
    if (this._downstreamHeadersNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.downstreamHeadersNames = this._downstreamHeadersNames;
    }
    if (this._downstreamIdTokenHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.downstreamIdTokenHeader = this._downstreamIdTokenHeader;
    }
    if (this._downstreamIdTokenJwkHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.downstreamIdTokenJwkHeader = this._downstreamIdTokenJwkHeader;
    }
    if (this._downstreamIntrospectionHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.downstreamIntrospectionHeader = this._downstreamIntrospectionHeader;
    }
    if (this._downstreamIntrospectionJwtHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.downstreamIntrospectionJwtHeader = this._downstreamIntrospectionJwtHeader;
    }
    if (this._downstreamRefreshTokenHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.downstreamRefreshTokenHeader = this._downstreamRefreshTokenHeader;
    }
    if (this._downstreamSessionIdHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.downstreamSessionIdHeader = this._downstreamSessionIdHeader;
    }
    if (this._downstreamUserInfoHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.downstreamUserInfoHeader = this._downstreamUserInfoHeader;
    }
    if (this._downstreamUserInfoJwtHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.downstreamUserInfoJwtHeader = this._downstreamUserInfoJwtHeader;
    }
    if (this._dpopProofLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpopProofLifetime = this._dpopProofLifetime;
    }
    if (this._dpopUseNonce !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpopUseNonce = this._dpopUseNonce;
    }
    if (this._enableHsSignatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHsSignatures = this._enableHsSignatures;
    }
    if (this._endSessionEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSessionEndpoint = this._endSessionEndpoint;
    }
    if (this._exposeErrorCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeErrorCode = this._exposeErrorCode;
    }
    if (this._extraJwksUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraJwksUris = this._extraJwksUris;
    }
    if (this._forbiddenDestroySession !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbiddenDestroySession = this._forbiddenDestroySession;
    }
    if (this._forbiddenErrorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbiddenErrorMessage = this._forbiddenErrorMessage;
    }
    if (this._forbiddenRedirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbiddenRedirectUri = this._forbiddenRedirectUri;
    }
    if (this._groupsClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsClaim = this._groupsClaim;
    }
    if (this._groupsRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsRequired = this._groupsRequired;
    }
    if (this._hideCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideCredentials = this._hideCredentials;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpProxyAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxyAuthorization = this._httpProxyAuthorization;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._httpsProxyAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxyAuthorization = this._httpsProxyAuthorization;
    }
    if (this._idTokenParamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenParamName = this._idTokenParamName;
    }
    if (this._idTokenParamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenParamType = this._idTokenParamType;
    }
    if (this._ignoreSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSignature = this._ignoreSignature;
    }
    if (this._introspectJwtTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectJwtTokens = this._introspectJwtTokens;
    }
    if (this._introspectionAccept !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionAccept = this._introspectionAccept;
    }
    if (this._introspectionCheckActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionCheckActive = this._introspectionCheckActive;
    }
    if (this._introspectionEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionEndpoint = this._introspectionEndpoint;
    }
    if (this._introspectionEndpointAuthMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionEndpointAuthMethod = this._introspectionEndpointAuthMethod;
    }
    if (this._introspectionHeadersClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionHeadersClient = this._introspectionHeadersClient;
    }
    if (this._introspectionHeadersNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionHeadersNames = this._introspectionHeadersNames;
    }
    if (this._introspectionHeadersValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionHeadersValues = this._introspectionHeadersValues;
    }
    if (this._introspectionHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionHint = this._introspectionHint;
    }
    if (this._introspectionPostArgsClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionPostArgsClient = this._introspectionPostArgsClient;
    }
    if (this._introspectionPostArgsClientHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionPostArgsClientHeaders = this._introspectionPostArgsClientHeaders;
    }
    if (this._introspectionPostArgsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionPostArgsNames = this._introspectionPostArgsNames;
    }
    if (this._introspectionPostArgsValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionPostArgsValues = this._introspectionPostArgsValues;
    }
    if (this._introspectionTokenParamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionTokenParamName = this._introspectionTokenParamName;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._issuersAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuersAllowed = this._issuersAllowed;
    }
    if (this._jwtSessionClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtSessionClaim = this._jwtSessionClaim;
    }
    if (this._jwtSessionCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtSessionCookie = this._jwtSessionCookie;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._leeway !== undefined) {
      hasAnyValues = true;
      internalValueResult.leeway = this._leeway;
    }
    if (this._loginAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginAction = this._loginAction;
    }
    if (this._loginMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginMethods = this._loginMethods;
    }
    if (this._loginRedirectMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginRedirectMode = this._loginRedirectMode;
    }
    if (this._loginRedirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginRedirectUri = this._loginRedirectUri;
    }
    if (this._loginTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginTokens = this._loginTokens;
    }
    if (this._logoutMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutMethods = this._logoutMethods;
    }
    if (this._logoutPostArg !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutPostArg = this._logoutPostArg;
    }
    if (this._logoutQueryArg !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutQueryArg = this._logoutQueryArg;
    }
    if (this._logoutRedirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutRedirectUri = this._logoutRedirectUri;
    }
    if (this._logoutRevoke !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutRevoke = this._logoutRevoke;
    }
    if (this._logoutRevokeAccessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutRevokeAccessToken = this._logoutRevokeAccessToken;
    }
    if (this._logoutRevokeRefreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutRevokeRefreshToken = this._logoutRevokeRefreshToken;
    }
    if (this._logoutUriSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutUriSuffix = this._logoutUriSuffix;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._mtlsIntrospectionEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsIntrospectionEndpoint = this._mtlsIntrospectionEndpoint;
    }
    if (this._mtlsRevocationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsRevocationEndpoint = this._mtlsRevocationEndpoint;
    }
    if (this._mtlsTokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsTokenEndpoint = this._mtlsTokenEndpoint;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._passwordParamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordParamType = this._passwordParamType;
    }
    if (this._preserveQueryArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveQueryArgs = this._preserveQueryArgs;
    }
    if (this._proofOfPossessionAuthMethodsValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.proofOfPossessionAuthMethodsValidation = this._proofOfPossessionAuthMethodsValidation;
    }
    if (this._proofOfPossessionDpop !== undefined) {
      hasAnyValues = true;
      internalValueResult.proofOfPossessionDpop = this._proofOfPossessionDpop;
    }
    if (this._proofOfPossessionMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.proofOfPossessionMtls = this._proofOfPossessionMtls;
    }
    if (this._pushedAuthorizationRequestEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushedAuthorizationRequestEndpoint = this._pushedAuthorizationRequestEndpoint;
    }
    if (this._pushedAuthorizationRequestEndpointAuthMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushedAuthorizationRequestEndpointAuthMethod = this._pushedAuthorizationRequestEndpointAuthMethod;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    if (this._redis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redis = this._redis?.internalValue;
    }
    if (this._rediscoveryLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.rediscoveryLifetime = this._rediscoveryLifetime;
    }
    if (this._refreshTokenParamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenParamName = this._refreshTokenParamName;
    }
    if (this._refreshTokenParamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenParamType = this._refreshTokenParamType;
    }
    if (this._refreshTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokens = this._refreshTokens;
    }
    if (this._requireProofKeyForCodeExchange !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireProofKeyForCodeExchange = this._requireProofKeyForCodeExchange;
    }
    if (this._requirePushedAuthorizationRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePushedAuthorizationRequests = this._requirePushedAuthorizationRequests;
    }
    if (this._requireSignedRequestObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSignedRequestObject = this._requireSignedRequestObject;
    }
    if (this._resolveDistributedClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolveDistributedClaims = this._resolveDistributedClaims;
    }
    if (this._responseMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseMode = this._responseMode;
    }
    if (this._responseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseType = this._responseType;
    }
    if (this._reverify !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverify = this._reverify;
    }
    if (this._revocationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.revocationEndpoint = this._revocationEndpoint;
    }
    if (this._revocationEndpointAuthMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.revocationEndpointAuthMethod = this._revocationEndpointAuthMethod;
    }
    if (this._revocationTokenParamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.revocationTokenParamName = this._revocationTokenParamName;
    }
    if (this._rolesClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesClaim = this._rolesClaim;
    }
    if (this._rolesRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesRequired = this._rolesRequired;
    }
    if (this._runOnPreflight !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOnPreflight = this._runOnPreflight;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._scopesClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopesClaim = this._scopesClaim;
    }
    if (this._scopesRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopesRequired = this._scopesRequired;
    }
    if (this._searchUserInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchUserInfo = this._searchUserInfo;
    }
    if (this._sessionAbsoluteTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAbsoluteTimeout = this._sessionAbsoluteTimeout;
    }
    if (this._sessionAudience !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAudience = this._sessionAudience;
    }
    if (this._sessionBind !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionBind = this._sessionBind;
    }
    if (this._sessionCookieDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieDomain = this._sessionCookieDomain;
    }
    if (this._sessionCookieHttpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieHttpOnly = this._sessionCookieHttpOnly;
    }
    if (this._sessionCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieName = this._sessionCookieName;
    }
    if (this._sessionCookiePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookiePath = this._sessionCookiePath;
    }
    if (this._sessionCookieSameSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieSameSite = this._sessionCookieSameSite;
    }
    if (this._sessionCookieSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieSecure = this._sessionCookieSecure;
    }
    if (this._sessionEnforceSameSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEnforceSameSubject = this._sessionEnforceSameSubject;
    }
    if (this._sessionHashStorageKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionHashStorageKey = this._sessionHashStorageKey;
    }
    if (this._sessionHashSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionHashSubject = this._sessionHashSubject;
    }
    if (this._sessionIdlingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionIdlingTimeout = this._sessionIdlingTimeout;
    }
    if (this._sessionMemcachedHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMemcachedHost = this._sessionMemcachedHost;
    }
    if (this._sessionMemcachedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMemcachedPort = this._sessionMemcachedPort;
    }
    if (this._sessionMemcachedPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMemcachedPrefix = this._sessionMemcachedPrefix;
    }
    if (this._sessionMemcachedSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMemcachedSocket = this._sessionMemcachedSocket;
    }
    if (this._sessionRemember !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionRemember = this._sessionRemember;
    }
    if (this._sessionRememberAbsoluteTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionRememberAbsoluteTimeout = this._sessionRememberAbsoluteTimeout;
    }
    if (this._sessionRememberCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionRememberCookieName = this._sessionRememberCookieName;
    }
    if (this._sessionRememberRollingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionRememberRollingTimeout = this._sessionRememberRollingTimeout;
    }
    if (this._sessionRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionRequestHeaders = this._sessionRequestHeaders;
    }
    if (this._sessionResponseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionResponseHeaders = this._sessionResponseHeaders;
    }
    if (this._sessionRollingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionRollingTimeout = this._sessionRollingTimeout;
    }
    if (this._sessionSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionSecret = this._sessionSecret;
    }
    if (this._sessionStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionStorage = this._sessionStorage;
    }
    if (this._sessionStoreMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionStoreMetadata = this._sessionStoreMetadata;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tlsClientAuthCertId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientAuthCertId = this._tlsClientAuthCertId;
    }
    if (this._tlsClientAuthSslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientAuthSslVerify = this._tlsClientAuthSslVerify;
    }
    if (this._tokenCacheKeyIncludeScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenCacheKeyIncludeScope = this._tokenCacheKeyIncludeScope;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._tokenEndpointAuthMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpointAuthMethod = this._tokenEndpointAuthMethod;
    }
    if (this._tokenExchangeEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenExchangeEndpoint = this._tokenExchangeEndpoint;
    }
    if (this._tokenHeadersClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenHeadersClient = this._tokenHeadersClient;
    }
    if (this._tokenHeadersGrants !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenHeadersGrants = this._tokenHeadersGrants;
    }
    if (this._tokenHeadersNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenHeadersNames = this._tokenHeadersNames;
    }
    if (this._tokenHeadersPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenHeadersPrefix = this._tokenHeadersPrefix;
    }
    if (this._tokenHeadersReplay !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenHeadersReplay = this._tokenHeadersReplay;
    }
    if (this._tokenHeadersValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenHeadersValues = this._tokenHeadersValues;
    }
    if (this._tokenPostArgsClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenPostArgsClient = this._tokenPostArgsClient;
    }
    if (this._tokenPostArgsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenPostArgsNames = this._tokenPostArgsNames;
    }
    if (this._tokenPostArgsValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenPostArgsValues = this._tokenPostArgsValues;
    }
    if (this._unauthorizedDestroySession !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthorizedDestroySession = this._unauthorizedDestroySession;
    }
    if (this._unauthorizedErrorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthorizedErrorMessage = this._unauthorizedErrorMessage;
    }
    if (this._unauthorizedRedirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthorizedRedirectUri = this._unauthorizedRedirectUri;
    }
    if (this._unexpectedRedirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.unexpectedRedirectUri = this._unexpectedRedirectUri;
    }
    if (this._upstreamAccessTokenHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamAccessTokenHeader = this._upstreamAccessTokenHeader;
    }
    if (this._upstreamAccessTokenJwkHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamAccessTokenJwkHeader = this._upstreamAccessTokenJwkHeader;
    }
    if (this._upstreamHeadersClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamHeadersClaims = this._upstreamHeadersClaims;
    }
    if (this._upstreamHeadersNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamHeadersNames = this._upstreamHeadersNames;
    }
    if (this._upstreamIdTokenHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamIdTokenHeader = this._upstreamIdTokenHeader;
    }
    if (this._upstreamIdTokenJwkHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamIdTokenJwkHeader = this._upstreamIdTokenJwkHeader;
    }
    if (this._upstreamIntrospectionHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamIntrospectionHeader = this._upstreamIntrospectionHeader;
    }
    if (this._upstreamIntrospectionJwtHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamIntrospectionJwtHeader = this._upstreamIntrospectionJwtHeader;
    }
    if (this._upstreamRefreshTokenHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamRefreshTokenHeader = this._upstreamRefreshTokenHeader;
    }
    if (this._upstreamSessionIdHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamSessionIdHeader = this._upstreamSessionIdHeader;
    }
    if (this._upstreamUserInfoHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamUserInfoHeader = this._upstreamUserInfoHeader;
    }
    if (this._upstreamUserInfoJwtHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamUserInfoJwtHeader = this._upstreamUserInfoJwtHeader;
    }
    if (this._userinfoAccept !== undefined) {
      hasAnyValues = true;
      internalValueResult.userinfoAccept = this._userinfoAccept;
    }
    if (this._userinfoEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.userinfoEndpoint = this._userinfoEndpoint;
    }
    if (this._userinfoHeadersClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.userinfoHeadersClient = this._userinfoHeadersClient;
    }
    if (this._userinfoHeadersNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.userinfoHeadersNames = this._userinfoHeadersNames;
    }
    if (this._userinfoHeadersValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.userinfoHeadersValues = this._userinfoHeadersValues;
    }
    if (this._userinfoQueryArgsClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.userinfoQueryArgsClient = this._userinfoQueryArgsClient;
    }
    if (this._userinfoQueryArgsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.userinfoQueryArgsNames = this._userinfoQueryArgsNames;
    }
    if (this._userinfoQueryArgsValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.userinfoQueryArgsValues = this._userinfoQueryArgsValues;
    }
    if (this._usingPseudoIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.usingPseudoIssuer = this._usingPseudoIssuer;
    }
    if (this._verifyClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyClaims = this._verifyClaims;
    }
    if (this._verifyNonce !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyNonce = this._verifyNonce;
    }
    if (this._verifyParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyParameters = this._verifyParameters;
    }
    if (this._verifySignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifySignature = this._verifySignature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOpenidConnectConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anonymous = undefined;
      this._audience = undefined;
      this._audienceClaim = undefined;
      this._audienceRequired = undefined;
      this._authMethods = undefined;
      this._authenticatedGroupsClaim = undefined;
      this._authorizationCookieDomain = undefined;
      this._authorizationCookieHttpOnly = undefined;
      this._authorizationCookieName = undefined;
      this._authorizationCookiePath = undefined;
      this._authorizationCookieSameSite = undefined;
      this._authorizationCookieSecure = undefined;
      this._authorizationEndpoint = undefined;
      this._authorizationQueryArgsClient = undefined;
      this._authorizationQueryArgsNames = undefined;
      this._authorizationQueryArgsValues = undefined;
      this._authorizationRollingTimeout = undefined;
      this._bearerTokenCookieName = undefined;
      this._bearerTokenParamType = undefined;
      this._byUsernameIgnoreCase = undefined;
      this._cacheIntrospection = undefined;
      this._cacheTokenExchange = undefined;
      this._cacheTokens = undefined;
      this._cacheTokensSalt = undefined;
      this._cacheTtl = undefined;
      this._cacheTtlMax = undefined;
      this._cacheTtlMin = undefined;
      this._cacheTtlNeg = undefined;
      this._cacheTtlResurrect = undefined;
      this._cacheUserInfo = undefined;
      this._claimsForbidden = undefined;
      this._clientAlg = undefined;
      this._clientArg = undefined;
      this._clientAuth = undefined;
      this._clientCredentialsParamType = undefined;
      this._clientId = undefined;
      this._clientJwk.internalValue = undefined;
      this._clientSecret = undefined;
      this._clusterCacheRedis.internalValue = undefined;
      this._clusterCacheStrategy = undefined;
      this._consumerBy = undefined;
      this._consumerClaim = undefined;
      this._consumerGroupsClaim = undefined;
      this._consumerGroupsOptional = undefined;
      this._consumerOptional = undefined;
      this._credentialClaim = undefined;
      this._disableSession = undefined;
      this._discoveryHeadersNames = undefined;
      this._discoveryHeadersValues = undefined;
      this._displayErrors = undefined;
      this._domains = undefined;
      this._downstreamAccessTokenHeader = undefined;
      this._downstreamAccessTokenJwkHeader = undefined;
      this._downstreamHeadersClaims = undefined;
      this._downstreamHeadersNames = undefined;
      this._downstreamIdTokenHeader = undefined;
      this._downstreamIdTokenJwkHeader = undefined;
      this._downstreamIntrospectionHeader = undefined;
      this._downstreamIntrospectionJwtHeader = undefined;
      this._downstreamRefreshTokenHeader = undefined;
      this._downstreamSessionIdHeader = undefined;
      this._downstreamUserInfoHeader = undefined;
      this._downstreamUserInfoJwtHeader = undefined;
      this._dpopProofLifetime = undefined;
      this._dpopUseNonce = undefined;
      this._enableHsSignatures = undefined;
      this._endSessionEndpoint = undefined;
      this._exposeErrorCode = undefined;
      this._extraJwksUris = undefined;
      this._forbiddenDestroySession = undefined;
      this._forbiddenErrorMessage = undefined;
      this._forbiddenRedirectUri = undefined;
      this._groupsClaim = undefined;
      this._groupsRequired = undefined;
      this._hideCredentials = undefined;
      this._httpProxy = undefined;
      this._httpProxyAuthorization = undefined;
      this._httpVersion = undefined;
      this._httpsProxy = undefined;
      this._httpsProxyAuthorization = undefined;
      this._idTokenParamName = undefined;
      this._idTokenParamType = undefined;
      this._ignoreSignature = undefined;
      this._introspectJwtTokens = undefined;
      this._introspectionAccept = undefined;
      this._introspectionCheckActive = undefined;
      this._introspectionEndpoint = undefined;
      this._introspectionEndpointAuthMethod = undefined;
      this._introspectionHeadersClient = undefined;
      this._introspectionHeadersNames = undefined;
      this._introspectionHeadersValues = undefined;
      this._introspectionHint = undefined;
      this._introspectionPostArgsClient = undefined;
      this._introspectionPostArgsClientHeaders = undefined;
      this._introspectionPostArgsNames = undefined;
      this._introspectionPostArgsValues = undefined;
      this._introspectionTokenParamName = undefined;
      this._issuer = undefined;
      this._issuersAllowed = undefined;
      this._jwtSessionClaim = undefined;
      this._jwtSessionCookie = undefined;
      this._keepalive = undefined;
      this._leeway = undefined;
      this._loginAction = undefined;
      this._loginMethods = undefined;
      this._loginRedirectMode = undefined;
      this._loginRedirectUri = undefined;
      this._loginTokens = undefined;
      this._logoutMethods = undefined;
      this._logoutPostArg = undefined;
      this._logoutQueryArg = undefined;
      this._logoutRedirectUri = undefined;
      this._logoutRevoke = undefined;
      this._logoutRevokeAccessToken = undefined;
      this._logoutRevokeRefreshToken = undefined;
      this._logoutUriSuffix = undefined;
      this._maxAge = undefined;
      this._mtlsIntrospectionEndpoint = undefined;
      this._mtlsRevocationEndpoint = undefined;
      this._mtlsTokenEndpoint = undefined;
      this._noProxy = undefined;
      this._passwordParamType = undefined;
      this._preserveQueryArgs = undefined;
      this._proofOfPossessionAuthMethodsValidation = undefined;
      this._proofOfPossessionDpop = undefined;
      this._proofOfPossessionMtls = undefined;
      this._pushedAuthorizationRequestEndpoint = undefined;
      this._pushedAuthorizationRequestEndpointAuthMethod = undefined;
      this._redirectUri = undefined;
      this._redis.internalValue = undefined;
      this._rediscoveryLifetime = undefined;
      this._refreshTokenParamName = undefined;
      this._refreshTokenParamType = undefined;
      this._refreshTokens = undefined;
      this._requireProofKeyForCodeExchange = undefined;
      this._requirePushedAuthorizationRequests = undefined;
      this._requireSignedRequestObject = undefined;
      this._resolveDistributedClaims = undefined;
      this._responseMode = undefined;
      this._responseType = undefined;
      this._reverify = undefined;
      this._revocationEndpoint = undefined;
      this._revocationEndpointAuthMethod = undefined;
      this._revocationTokenParamName = undefined;
      this._rolesClaim = undefined;
      this._rolesRequired = undefined;
      this._runOnPreflight = undefined;
      this._scopes = undefined;
      this._scopesClaim = undefined;
      this._scopesRequired = undefined;
      this._searchUserInfo = undefined;
      this._sessionAbsoluteTimeout = undefined;
      this._sessionAudience = undefined;
      this._sessionBind = undefined;
      this._sessionCookieDomain = undefined;
      this._sessionCookieHttpOnly = undefined;
      this._sessionCookieName = undefined;
      this._sessionCookiePath = undefined;
      this._sessionCookieSameSite = undefined;
      this._sessionCookieSecure = undefined;
      this._sessionEnforceSameSubject = undefined;
      this._sessionHashStorageKey = undefined;
      this._sessionHashSubject = undefined;
      this._sessionIdlingTimeout = undefined;
      this._sessionMemcachedHost = undefined;
      this._sessionMemcachedPort = undefined;
      this._sessionMemcachedPrefix = undefined;
      this._sessionMemcachedSocket = undefined;
      this._sessionRemember = undefined;
      this._sessionRememberAbsoluteTimeout = undefined;
      this._sessionRememberCookieName = undefined;
      this._sessionRememberRollingTimeout = undefined;
      this._sessionRequestHeaders = undefined;
      this._sessionResponseHeaders = undefined;
      this._sessionRollingTimeout = undefined;
      this._sessionSecret = undefined;
      this._sessionStorage = undefined;
      this._sessionStoreMetadata = undefined;
      this._sslVerify = undefined;
      this._timeout = undefined;
      this._tlsClientAuthCertId = undefined;
      this._tlsClientAuthSslVerify = undefined;
      this._tokenCacheKeyIncludeScope = undefined;
      this._tokenEndpoint = undefined;
      this._tokenEndpointAuthMethod = undefined;
      this._tokenExchangeEndpoint = undefined;
      this._tokenHeadersClient = undefined;
      this._tokenHeadersGrants = undefined;
      this._tokenHeadersNames = undefined;
      this._tokenHeadersPrefix = undefined;
      this._tokenHeadersReplay = undefined;
      this._tokenHeadersValues = undefined;
      this._tokenPostArgsClient = undefined;
      this._tokenPostArgsNames = undefined;
      this._tokenPostArgsValues = undefined;
      this._unauthorizedDestroySession = undefined;
      this._unauthorizedErrorMessage = undefined;
      this._unauthorizedRedirectUri = undefined;
      this._unexpectedRedirectUri = undefined;
      this._upstreamAccessTokenHeader = undefined;
      this._upstreamAccessTokenJwkHeader = undefined;
      this._upstreamHeadersClaims = undefined;
      this._upstreamHeadersNames = undefined;
      this._upstreamIdTokenHeader = undefined;
      this._upstreamIdTokenJwkHeader = undefined;
      this._upstreamIntrospectionHeader = undefined;
      this._upstreamIntrospectionJwtHeader = undefined;
      this._upstreamRefreshTokenHeader = undefined;
      this._upstreamSessionIdHeader = undefined;
      this._upstreamUserInfoHeader = undefined;
      this._upstreamUserInfoJwtHeader = undefined;
      this._userinfoAccept = undefined;
      this._userinfoEndpoint = undefined;
      this._userinfoHeadersClient = undefined;
      this._userinfoHeadersNames = undefined;
      this._userinfoHeadersValues = undefined;
      this._userinfoQueryArgsClient = undefined;
      this._userinfoQueryArgsNames = undefined;
      this._userinfoQueryArgsValues = undefined;
      this._usingPseudoIssuer = undefined;
      this._verifyClaims = undefined;
      this._verifyNonce = undefined;
      this._verifyParameters = undefined;
      this._verifySignature = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anonymous = value.anonymous;
      this._audience = value.audience;
      this._audienceClaim = value.audienceClaim;
      this._audienceRequired = value.audienceRequired;
      this._authMethods = value.authMethods;
      this._authenticatedGroupsClaim = value.authenticatedGroupsClaim;
      this._authorizationCookieDomain = value.authorizationCookieDomain;
      this._authorizationCookieHttpOnly = value.authorizationCookieHttpOnly;
      this._authorizationCookieName = value.authorizationCookieName;
      this._authorizationCookiePath = value.authorizationCookiePath;
      this._authorizationCookieSameSite = value.authorizationCookieSameSite;
      this._authorizationCookieSecure = value.authorizationCookieSecure;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._authorizationQueryArgsClient = value.authorizationQueryArgsClient;
      this._authorizationQueryArgsNames = value.authorizationQueryArgsNames;
      this._authorizationQueryArgsValues = value.authorizationQueryArgsValues;
      this._authorizationRollingTimeout = value.authorizationRollingTimeout;
      this._bearerTokenCookieName = value.bearerTokenCookieName;
      this._bearerTokenParamType = value.bearerTokenParamType;
      this._byUsernameIgnoreCase = value.byUsernameIgnoreCase;
      this._cacheIntrospection = value.cacheIntrospection;
      this._cacheTokenExchange = value.cacheTokenExchange;
      this._cacheTokens = value.cacheTokens;
      this._cacheTokensSalt = value.cacheTokensSalt;
      this._cacheTtl = value.cacheTtl;
      this._cacheTtlMax = value.cacheTtlMax;
      this._cacheTtlMin = value.cacheTtlMin;
      this._cacheTtlNeg = value.cacheTtlNeg;
      this._cacheTtlResurrect = value.cacheTtlResurrect;
      this._cacheUserInfo = value.cacheUserInfo;
      this._claimsForbidden = value.claimsForbidden;
      this._clientAlg = value.clientAlg;
      this._clientArg = value.clientArg;
      this._clientAuth = value.clientAuth;
      this._clientCredentialsParamType = value.clientCredentialsParamType;
      this._clientId = value.clientId;
      this._clientJwk.internalValue = value.clientJwk;
      this._clientSecret = value.clientSecret;
      this._clusterCacheRedis.internalValue = value.clusterCacheRedis;
      this._clusterCacheStrategy = value.clusterCacheStrategy;
      this._consumerBy = value.consumerBy;
      this._consumerClaim = value.consumerClaim;
      this._consumerGroupsClaim = value.consumerGroupsClaim;
      this._consumerGroupsOptional = value.consumerGroupsOptional;
      this._consumerOptional = value.consumerOptional;
      this._credentialClaim = value.credentialClaim;
      this._disableSession = value.disableSession;
      this._discoveryHeadersNames = value.discoveryHeadersNames;
      this._discoveryHeadersValues = value.discoveryHeadersValues;
      this._displayErrors = value.displayErrors;
      this._domains = value.domains;
      this._downstreamAccessTokenHeader = value.downstreamAccessTokenHeader;
      this._downstreamAccessTokenJwkHeader = value.downstreamAccessTokenJwkHeader;
      this._downstreamHeadersClaims = value.downstreamHeadersClaims;
      this._downstreamHeadersNames = value.downstreamHeadersNames;
      this._downstreamIdTokenHeader = value.downstreamIdTokenHeader;
      this._downstreamIdTokenJwkHeader = value.downstreamIdTokenJwkHeader;
      this._downstreamIntrospectionHeader = value.downstreamIntrospectionHeader;
      this._downstreamIntrospectionJwtHeader = value.downstreamIntrospectionJwtHeader;
      this._downstreamRefreshTokenHeader = value.downstreamRefreshTokenHeader;
      this._downstreamSessionIdHeader = value.downstreamSessionIdHeader;
      this._downstreamUserInfoHeader = value.downstreamUserInfoHeader;
      this._downstreamUserInfoJwtHeader = value.downstreamUserInfoJwtHeader;
      this._dpopProofLifetime = value.dpopProofLifetime;
      this._dpopUseNonce = value.dpopUseNonce;
      this._enableHsSignatures = value.enableHsSignatures;
      this._endSessionEndpoint = value.endSessionEndpoint;
      this._exposeErrorCode = value.exposeErrorCode;
      this._extraJwksUris = value.extraJwksUris;
      this._forbiddenDestroySession = value.forbiddenDestroySession;
      this._forbiddenErrorMessage = value.forbiddenErrorMessage;
      this._forbiddenRedirectUri = value.forbiddenRedirectUri;
      this._groupsClaim = value.groupsClaim;
      this._groupsRequired = value.groupsRequired;
      this._hideCredentials = value.hideCredentials;
      this._httpProxy = value.httpProxy;
      this._httpProxyAuthorization = value.httpProxyAuthorization;
      this._httpVersion = value.httpVersion;
      this._httpsProxy = value.httpsProxy;
      this._httpsProxyAuthorization = value.httpsProxyAuthorization;
      this._idTokenParamName = value.idTokenParamName;
      this._idTokenParamType = value.idTokenParamType;
      this._ignoreSignature = value.ignoreSignature;
      this._introspectJwtTokens = value.introspectJwtTokens;
      this._introspectionAccept = value.introspectionAccept;
      this._introspectionCheckActive = value.introspectionCheckActive;
      this._introspectionEndpoint = value.introspectionEndpoint;
      this._introspectionEndpointAuthMethod = value.introspectionEndpointAuthMethod;
      this._introspectionHeadersClient = value.introspectionHeadersClient;
      this._introspectionHeadersNames = value.introspectionHeadersNames;
      this._introspectionHeadersValues = value.introspectionHeadersValues;
      this._introspectionHint = value.introspectionHint;
      this._introspectionPostArgsClient = value.introspectionPostArgsClient;
      this._introspectionPostArgsClientHeaders = value.introspectionPostArgsClientHeaders;
      this._introspectionPostArgsNames = value.introspectionPostArgsNames;
      this._introspectionPostArgsValues = value.introspectionPostArgsValues;
      this._introspectionTokenParamName = value.introspectionTokenParamName;
      this._issuer = value.issuer;
      this._issuersAllowed = value.issuersAllowed;
      this._jwtSessionClaim = value.jwtSessionClaim;
      this._jwtSessionCookie = value.jwtSessionCookie;
      this._keepalive = value.keepalive;
      this._leeway = value.leeway;
      this._loginAction = value.loginAction;
      this._loginMethods = value.loginMethods;
      this._loginRedirectMode = value.loginRedirectMode;
      this._loginRedirectUri = value.loginRedirectUri;
      this._loginTokens = value.loginTokens;
      this._logoutMethods = value.logoutMethods;
      this._logoutPostArg = value.logoutPostArg;
      this._logoutQueryArg = value.logoutQueryArg;
      this._logoutRedirectUri = value.logoutRedirectUri;
      this._logoutRevoke = value.logoutRevoke;
      this._logoutRevokeAccessToken = value.logoutRevokeAccessToken;
      this._logoutRevokeRefreshToken = value.logoutRevokeRefreshToken;
      this._logoutUriSuffix = value.logoutUriSuffix;
      this._maxAge = value.maxAge;
      this._mtlsIntrospectionEndpoint = value.mtlsIntrospectionEndpoint;
      this._mtlsRevocationEndpoint = value.mtlsRevocationEndpoint;
      this._mtlsTokenEndpoint = value.mtlsTokenEndpoint;
      this._noProxy = value.noProxy;
      this._passwordParamType = value.passwordParamType;
      this._preserveQueryArgs = value.preserveQueryArgs;
      this._proofOfPossessionAuthMethodsValidation = value.proofOfPossessionAuthMethodsValidation;
      this._proofOfPossessionDpop = value.proofOfPossessionDpop;
      this._proofOfPossessionMtls = value.proofOfPossessionMtls;
      this._pushedAuthorizationRequestEndpoint = value.pushedAuthorizationRequestEndpoint;
      this._pushedAuthorizationRequestEndpointAuthMethod = value.pushedAuthorizationRequestEndpointAuthMethod;
      this._redirectUri = value.redirectUri;
      this._redis.internalValue = value.redis;
      this._rediscoveryLifetime = value.rediscoveryLifetime;
      this._refreshTokenParamName = value.refreshTokenParamName;
      this._refreshTokenParamType = value.refreshTokenParamType;
      this._refreshTokens = value.refreshTokens;
      this._requireProofKeyForCodeExchange = value.requireProofKeyForCodeExchange;
      this._requirePushedAuthorizationRequests = value.requirePushedAuthorizationRequests;
      this._requireSignedRequestObject = value.requireSignedRequestObject;
      this._resolveDistributedClaims = value.resolveDistributedClaims;
      this._responseMode = value.responseMode;
      this._responseType = value.responseType;
      this._reverify = value.reverify;
      this._revocationEndpoint = value.revocationEndpoint;
      this._revocationEndpointAuthMethod = value.revocationEndpointAuthMethod;
      this._revocationTokenParamName = value.revocationTokenParamName;
      this._rolesClaim = value.rolesClaim;
      this._rolesRequired = value.rolesRequired;
      this._runOnPreflight = value.runOnPreflight;
      this._scopes = value.scopes;
      this._scopesClaim = value.scopesClaim;
      this._scopesRequired = value.scopesRequired;
      this._searchUserInfo = value.searchUserInfo;
      this._sessionAbsoluteTimeout = value.sessionAbsoluteTimeout;
      this._sessionAudience = value.sessionAudience;
      this._sessionBind = value.sessionBind;
      this._sessionCookieDomain = value.sessionCookieDomain;
      this._sessionCookieHttpOnly = value.sessionCookieHttpOnly;
      this._sessionCookieName = value.sessionCookieName;
      this._sessionCookiePath = value.sessionCookiePath;
      this._sessionCookieSameSite = value.sessionCookieSameSite;
      this._sessionCookieSecure = value.sessionCookieSecure;
      this._sessionEnforceSameSubject = value.sessionEnforceSameSubject;
      this._sessionHashStorageKey = value.sessionHashStorageKey;
      this._sessionHashSubject = value.sessionHashSubject;
      this._sessionIdlingTimeout = value.sessionIdlingTimeout;
      this._sessionMemcachedHost = value.sessionMemcachedHost;
      this._sessionMemcachedPort = value.sessionMemcachedPort;
      this._sessionMemcachedPrefix = value.sessionMemcachedPrefix;
      this._sessionMemcachedSocket = value.sessionMemcachedSocket;
      this._sessionRemember = value.sessionRemember;
      this._sessionRememberAbsoluteTimeout = value.sessionRememberAbsoluteTimeout;
      this._sessionRememberCookieName = value.sessionRememberCookieName;
      this._sessionRememberRollingTimeout = value.sessionRememberRollingTimeout;
      this._sessionRequestHeaders = value.sessionRequestHeaders;
      this._sessionResponseHeaders = value.sessionResponseHeaders;
      this._sessionRollingTimeout = value.sessionRollingTimeout;
      this._sessionSecret = value.sessionSecret;
      this._sessionStorage = value.sessionStorage;
      this._sessionStoreMetadata = value.sessionStoreMetadata;
      this._sslVerify = value.sslVerify;
      this._timeout = value.timeout;
      this._tlsClientAuthCertId = value.tlsClientAuthCertId;
      this._tlsClientAuthSslVerify = value.tlsClientAuthSslVerify;
      this._tokenCacheKeyIncludeScope = value.tokenCacheKeyIncludeScope;
      this._tokenEndpoint = value.tokenEndpoint;
      this._tokenEndpointAuthMethod = value.tokenEndpointAuthMethod;
      this._tokenExchangeEndpoint = value.tokenExchangeEndpoint;
      this._tokenHeadersClient = value.tokenHeadersClient;
      this._tokenHeadersGrants = value.tokenHeadersGrants;
      this._tokenHeadersNames = value.tokenHeadersNames;
      this._tokenHeadersPrefix = value.tokenHeadersPrefix;
      this._tokenHeadersReplay = value.tokenHeadersReplay;
      this._tokenHeadersValues = value.tokenHeadersValues;
      this._tokenPostArgsClient = value.tokenPostArgsClient;
      this._tokenPostArgsNames = value.tokenPostArgsNames;
      this._tokenPostArgsValues = value.tokenPostArgsValues;
      this._unauthorizedDestroySession = value.unauthorizedDestroySession;
      this._unauthorizedErrorMessage = value.unauthorizedErrorMessage;
      this._unauthorizedRedirectUri = value.unauthorizedRedirectUri;
      this._unexpectedRedirectUri = value.unexpectedRedirectUri;
      this._upstreamAccessTokenHeader = value.upstreamAccessTokenHeader;
      this._upstreamAccessTokenJwkHeader = value.upstreamAccessTokenJwkHeader;
      this._upstreamHeadersClaims = value.upstreamHeadersClaims;
      this._upstreamHeadersNames = value.upstreamHeadersNames;
      this._upstreamIdTokenHeader = value.upstreamIdTokenHeader;
      this._upstreamIdTokenJwkHeader = value.upstreamIdTokenJwkHeader;
      this._upstreamIntrospectionHeader = value.upstreamIntrospectionHeader;
      this._upstreamIntrospectionJwtHeader = value.upstreamIntrospectionJwtHeader;
      this._upstreamRefreshTokenHeader = value.upstreamRefreshTokenHeader;
      this._upstreamSessionIdHeader = value.upstreamSessionIdHeader;
      this._upstreamUserInfoHeader = value.upstreamUserInfoHeader;
      this._upstreamUserInfoJwtHeader = value.upstreamUserInfoJwtHeader;
      this._userinfoAccept = value.userinfoAccept;
      this._userinfoEndpoint = value.userinfoEndpoint;
      this._userinfoHeadersClient = value.userinfoHeadersClient;
      this._userinfoHeadersNames = value.userinfoHeadersNames;
      this._userinfoHeadersValues = value.userinfoHeadersValues;
      this._userinfoQueryArgsClient = value.userinfoQueryArgsClient;
      this._userinfoQueryArgsNames = value.userinfoQueryArgsNames;
      this._userinfoQueryArgsValues = value.userinfoQueryArgsValues;
      this._usingPseudoIssuer = value.usingPseudoIssuer;
      this._verifyClaims = value.verifyClaims;
      this._verifyNonce = value.verifyNonce;
      this._verifyParameters = value.verifyParameters;
      this._verifySignature = value.verifySignature;
    }
  }

  // anonymous - computed: false, optional: true, required: false
  private _anonymous?: string; 
  public get anonymous() {
    return this.getStringAttribute('anonymous');
  }
  public set anonymous(value: string) {
    this._anonymous = value;
  }
  public resetAnonymous() {
    this._anonymous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousInput() {
    return this._anonymous;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string[]; 
  public get audience() {
    return this.getListAttribute('audience');
  }
  public set audience(value: string[]) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // audience_claim - computed: true, optional: true, required: false
  private _audienceClaim?: string[]; 
  public get audienceClaim() {
    return this.getListAttribute('audience_claim');
  }
  public set audienceClaim(value: string[]) {
    this._audienceClaim = value;
  }
  public resetAudienceClaim() {
    this._audienceClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceClaimInput() {
    return this._audienceClaim;
  }

  // audience_required - computed: false, optional: true, required: false
  private _audienceRequired?: string[]; 
  public get audienceRequired() {
    return this.getListAttribute('audience_required');
  }
  public set audienceRequired(value: string[]) {
    this._audienceRequired = value;
  }
  public resetAudienceRequired() {
    this._audienceRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceRequiredInput() {
    return this._audienceRequired;
  }

  // auth_methods - computed: true, optional: true, required: false
  private _authMethods?: string[]; 
  public get authMethods() {
    return this.getListAttribute('auth_methods');
  }
  public set authMethods(value: string[]) {
    this._authMethods = value;
  }
  public resetAuthMethods() {
    this._authMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodsInput() {
    return this._authMethods;
  }

  // authenticated_groups_claim - computed: false, optional: true, required: false
  private _authenticatedGroupsClaim?: string[]; 
  public get authenticatedGroupsClaim() {
    return this.getListAttribute('authenticated_groups_claim');
  }
  public set authenticatedGroupsClaim(value: string[]) {
    this._authenticatedGroupsClaim = value;
  }
  public resetAuthenticatedGroupsClaim() {
    this._authenticatedGroupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatedGroupsClaimInput() {
    return this._authenticatedGroupsClaim;
  }

  // authorization_cookie_domain - computed: false, optional: true, required: false
  private _authorizationCookieDomain?: string; 
  public get authorizationCookieDomain() {
    return this.getStringAttribute('authorization_cookie_domain');
  }
  public set authorizationCookieDomain(value: string) {
    this._authorizationCookieDomain = value;
  }
  public resetAuthorizationCookieDomain() {
    this._authorizationCookieDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCookieDomainInput() {
    return this._authorizationCookieDomain;
  }

  // authorization_cookie_http_only - computed: true, optional: true, required: false
  private _authorizationCookieHttpOnly?: boolean | cdktf.IResolvable; 
  public get authorizationCookieHttpOnly() {
    return this.getBooleanAttribute('authorization_cookie_http_only');
  }
  public set authorizationCookieHttpOnly(value: boolean | cdktf.IResolvable) {
    this._authorizationCookieHttpOnly = value;
  }
  public resetAuthorizationCookieHttpOnly() {
    this._authorizationCookieHttpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCookieHttpOnlyInput() {
    return this._authorizationCookieHttpOnly;
  }

  // authorization_cookie_name - computed: true, optional: true, required: false
  private _authorizationCookieName?: string; 
  public get authorizationCookieName() {
    return this.getStringAttribute('authorization_cookie_name');
  }
  public set authorizationCookieName(value: string) {
    this._authorizationCookieName = value;
  }
  public resetAuthorizationCookieName() {
    this._authorizationCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCookieNameInput() {
    return this._authorizationCookieName;
  }

  // authorization_cookie_path - computed: true, optional: true, required: false
  private _authorizationCookiePath?: string; 
  public get authorizationCookiePath() {
    return this.getStringAttribute('authorization_cookie_path');
  }
  public set authorizationCookiePath(value: string) {
    this._authorizationCookiePath = value;
  }
  public resetAuthorizationCookiePath() {
    this._authorizationCookiePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCookiePathInput() {
    return this._authorizationCookiePath;
  }

  // authorization_cookie_same_site - computed: true, optional: true, required: false
  private _authorizationCookieSameSite?: string; 
  public get authorizationCookieSameSite() {
    return this.getStringAttribute('authorization_cookie_same_site');
  }
  public set authorizationCookieSameSite(value: string) {
    this._authorizationCookieSameSite = value;
  }
  public resetAuthorizationCookieSameSite() {
    this._authorizationCookieSameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCookieSameSiteInput() {
    return this._authorizationCookieSameSite;
  }

  // authorization_cookie_secure - computed: false, optional: true, required: false
  private _authorizationCookieSecure?: boolean | cdktf.IResolvable; 
  public get authorizationCookieSecure() {
    return this.getBooleanAttribute('authorization_cookie_secure');
  }
  public set authorizationCookieSecure(value: boolean | cdktf.IResolvable) {
    this._authorizationCookieSecure = value;
  }
  public resetAuthorizationCookieSecure() {
    this._authorizationCookieSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCookieSecureInput() {
    return this._authorizationCookieSecure;
  }

  // authorization_endpoint - computed: false, optional: true, required: false
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  public resetAuthorizationEndpoint() {
    this._authorizationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
  }

  // authorization_query_args_client - computed: false, optional: true, required: false
  private _authorizationQueryArgsClient?: string[]; 
  public get authorizationQueryArgsClient() {
    return this.getListAttribute('authorization_query_args_client');
  }
  public set authorizationQueryArgsClient(value: string[]) {
    this._authorizationQueryArgsClient = value;
  }
  public resetAuthorizationQueryArgsClient() {
    this._authorizationQueryArgsClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationQueryArgsClientInput() {
    return this._authorizationQueryArgsClient;
  }

  // authorization_query_args_names - computed: false, optional: true, required: false
  private _authorizationQueryArgsNames?: string[]; 
  public get authorizationQueryArgsNames() {
    return this.getListAttribute('authorization_query_args_names');
  }
  public set authorizationQueryArgsNames(value: string[]) {
    this._authorizationQueryArgsNames = value;
  }
  public resetAuthorizationQueryArgsNames() {
    this._authorizationQueryArgsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationQueryArgsNamesInput() {
    return this._authorizationQueryArgsNames;
  }

  // authorization_query_args_values - computed: false, optional: true, required: false
  private _authorizationQueryArgsValues?: string[]; 
  public get authorizationQueryArgsValues() {
    return this.getListAttribute('authorization_query_args_values');
  }
  public set authorizationQueryArgsValues(value: string[]) {
    this._authorizationQueryArgsValues = value;
  }
  public resetAuthorizationQueryArgsValues() {
    this._authorizationQueryArgsValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationQueryArgsValuesInput() {
    return this._authorizationQueryArgsValues;
  }

  // authorization_rolling_timeout - computed: true, optional: true, required: false
  private _authorizationRollingTimeout?: number; 
  public get authorizationRollingTimeout() {
    return this.getNumberAttribute('authorization_rolling_timeout');
  }
  public set authorizationRollingTimeout(value: number) {
    this._authorizationRollingTimeout = value;
  }
  public resetAuthorizationRollingTimeout() {
    this._authorizationRollingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationRollingTimeoutInput() {
    return this._authorizationRollingTimeout;
  }

  // bearer_token_cookie_name - computed: false, optional: true, required: false
  private _bearerTokenCookieName?: string; 
  public get bearerTokenCookieName() {
    return this.getStringAttribute('bearer_token_cookie_name');
  }
  public set bearerTokenCookieName(value: string) {
    this._bearerTokenCookieName = value;
  }
  public resetBearerTokenCookieName() {
    this._bearerTokenCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenCookieNameInput() {
    return this._bearerTokenCookieName;
  }

  // bearer_token_param_type - computed: true, optional: true, required: false
  private _bearerTokenParamType?: string[]; 
  public get bearerTokenParamType() {
    return this.getListAttribute('bearer_token_param_type');
  }
  public set bearerTokenParamType(value: string[]) {
    this._bearerTokenParamType = value;
  }
  public resetBearerTokenParamType() {
    this._bearerTokenParamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenParamTypeInput() {
    return this._bearerTokenParamType;
  }

  // by_username_ignore_case - computed: true, optional: true, required: false
  private _byUsernameIgnoreCase?: boolean | cdktf.IResolvable; 
  public get byUsernameIgnoreCase() {
    return this.getBooleanAttribute('by_username_ignore_case');
  }
  public set byUsernameIgnoreCase(value: boolean | cdktf.IResolvable) {
    this._byUsernameIgnoreCase = value;
  }
  public resetByUsernameIgnoreCase() {
    this._byUsernameIgnoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byUsernameIgnoreCaseInput() {
    return this._byUsernameIgnoreCase;
  }

  // cache_introspection - computed: true, optional: true, required: false
  private _cacheIntrospection?: boolean | cdktf.IResolvable; 
  public get cacheIntrospection() {
    return this.getBooleanAttribute('cache_introspection');
  }
  public set cacheIntrospection(value: boolean | cdktf.IResolvable) {
    this._cacheIntrospection = value;
  }
  public resetCacheIntrospection() {
    this._cacheIntrospection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheIntrospectionInput() {
    return this._cacheIntrospection;
  }

  // cache_token_exchange - computed: true, optional: true, required: false
  private _cacheTokenExchange?: boolean | cdktf.IResolvable; 
  public get cacheTokenExchange() {
    return this.getBooleanAttribute('cache_token_exchange');
  }
  public set cacheTokenExchange(value: boolean | cdktf.IResolvable) {
    this._cacheTokenExchange = value;
  }
  public resetCacheTokenExchange() {
    this._cacheTokenExchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTokenExchangeInput() {
    return this._cacheTokenExchange;
  }

  // cache_tokens - computed: true, optional: true, required: false
  private _cacheTokens?: boolean | cdktf.IResolvable; 
  public get cacheTokens() {
    return this.getBooleanAttribute('cache_tokens');
  }
  public set cacheTokens(value: boolean | cdktf.IResolvable) {
    this._cacheTokens = value;
  }
  public resetCacheTokens() {
    this._cacheTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTokensInput() {
    return this._cacheTokens;
  }

  // cache_tokens_salt - computed: true, optional: true, required: false
  private _cacheTokensSalt?: string; 
  public get cacheTokensSalt() {
    return this.getStringAttribute('cache_tokens_salt');
  }
  public set cacheTokensSalt(value: string) {
    this._cacheTokensSalt = value;
  }
  public resetCacheTokensSalt() {
    this._cacheTokensSalt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTokensSaltInput() {
    return this._cacheTokensSalt;
  }

  // cache_ttl - computed: true, optional: true, required: false
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }
  public set cacheTtl(value: number) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // cache_ttl_max - computed: false, optional: true, required: false
  private _cacheTtlMax?: number; 
  public get cacheTtlMax() {
    return this.getNumberAttribute('cache_ttl_max');
  }
  public set cacheTtlMax(value: number) {
    this._cacheTtlMax = value;
  }
  public resetCacheTtlMax() {
    this._cacheTtlMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlMaxInput() {
    return this._cacheTtlMax;
  }

  // cache_ttl_min - computed: false, optional: true, required: false
  private _cacheTtlMin?: number; 
  public get cacheTtlMin() {
    return this.getNumberAttribute('cache_ttl_min');
  }
  public set cacheTtlMin(value: number) {
    this._cacheTtlMin = value;
  }
  public resetCacheTtlMin() {
    this._cacheTtlMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlMinInput() {
    return this._cacheTtlMin;
  }

  // cache_ttl_neg - computed: false, optional: true, required: false
  private _cacheTtlNeg?: number; 
  public get cacheTtlNeg() {
    return this.getNumberAttribute('cache_ttl_neg');
  }
  public set cacheTtlNeg(value: number) {
    this._cacheTtlNeg = value;
  }
  public resetCacheTtlNeg() {
    this._cacheTtlNeg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlNegInput() {
    return this._cacheTtlNeg;
  }

  // cache_ttl_resurrect - computed: false, optional: true, required: false
  private _cacheTtlResurrect?: number; 
  public get cacheTtlResurrect() {
    return this.getNumberAttribute('cache_ttl_resurrect');
  }
  public set cacheTtlResurrect(value: number) {
    this._cacheTtlResurrect = value;
  }
  public resetCacheTtlResurrect() {
    this._cacheTtlResurrect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlResurrectInput() {
    return this._cacheTtlResurrect;
  }

  // cache_user_info - computed: true, optional: true, required: false
  private _cacheUserInfo?: boolean | cdktf.IResolvable; 
  public get cacheUserInfo() {
    return this.getBooleanAttribute('cache_user_info');
  }
  public set cacheUserInfo(value: boolean | cdktf.IResolvable) {
    this._cacheUserInfo = value;
  }
  public resetCacheUserInfo() {
    this._cacheUserInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheUserInfoInput() {
    return this._cacheUserInfo;
  }

  // claims_forbidden - computed: false, optional: true, required: false
  private _claimsForbidden?: string[]; 
  public get claimsForbidden() {
    return this.getListAttribute('claims_forbidden');
  }
  public set claimsForbidden(value: string[]) {
    this._claimsForbidden = value;
  }
  public resetClaimsForbidden() {
    this._claimsForbidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsForbiddenInput() {
    return this._claimsForbidden;
  }

  // client_alg - computed: false, optional: true, required: false
  private _clientAlg?: string[]; 
  public get clientAlg() {
    return this.getListAttribute('client_alg');
  }
  public set clientAlg(value: string[]) {
    this._clientAlg = value;
  }
  public resetClientAlg() {
    this._clientAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAlgInput() {
    return this._clientAlg;
  }

  // client_arg - computed: true, optional: true, required: false
  private _clientArg?: string; 
  public get clientArg() {
    return this.getStringAttribute('client_arg');
  }
  public set clientArg(value: string) {
    this._clientArg = value;
  }
  public resetClientArg() {
    this._clientArg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientArgInput() {
    return this._clientArg;
  }

  // client_auth - computed: false, optional: true, required: false
  private _clientAuth?: string[]; 
  public get clientAuth() {
    return this.getListAttribute('client_auth');
  }
  public set clientAuth(value: string[]) {
    this._clientAuth = value;
  }
  public resetClientAuth() {
    this._clientAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth;
  }

  // client_credentials_param_type - computed: true, optional: true, required: false
  private _clientCredentialsParamType?: string[]; 
  public get clientCredentialsParamType() {
    return this.getListAttribute('client_credentials_param_type');
  }
  public set clientCredentialsParamType(value: string[]) {
    this._clientCredentialsParamType = value;
  }
  public resetClientCredentialsParamType() {
    this._clientCredentialsParamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsParamTypeInput() {
    return this._clientCredentialsParamType;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string[]; 
  public get clientId() {
    return this.getListAttribute('client_id');
  }
  public set clientId(value: string[]) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_jwk - computed: false, optional: true, required: false
  private _clientJwk = new GatewayPluginOpenidConnectConfigClientJwkList(this, "client_jwk", false);
  public get clientJwk() {
    return this._clientJwk;
  }
  public putClientJwk(value: GatewayPluginOpenidConnectConfigClientJwk[] | cdktf.IResolvable) {
    this._clientJwk.internalValue = value;
  }
  public resetClientJwk() {
    this._clientJwk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientJwkInput() {
    return this._clientJwk.internalValue;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string[]; 
  public get clientSecret() {
    return this.getListAttribute('client_secret');
  }
  public set clientSecret(value: string[]) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // cluster_cache_redis - computed: true, optional: true, required: false
  private _clusterCacheRedis = new GatewayPluginOpenidConnectConfigClusterCacheRedisOutputReference(this, "cluster_cache_redis");
  public get clusterCacheRedis() {
    return this._clusterCacheRedis;
  }
  public putClusterCacheRedis(value: GatewayPluginOpenidConnectConfigClusterCacheRedis) {
    this._clusterCacheRedis.internalValue = value;
  }
  public resetClusterCacheRedis() {
    this._clusterCacheRedis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCacheRedisInput() {
    return this._clusterCacheRedis.internalValue;
  }

  // cluster_cache_strategy - computed: true, optional: true, required: false
  private _clusterCacheStrategy?: string; 
  public get clusterCacheStrategy() {
    return this.getStringAttribute('cluster_cache_strategy');
  }
  public set clusterCacheStrategy(value: string) {
    this._clusterCacheStrategy = value;
  }
  public resetClusterCacheStrategy() {
    this._clusterCacheStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCacheStrategyInput() {
    return this._clusterCacheStrategy;
  }

  // consumer_by - computed: true, optional: true, required: false
  private _consumerBy?: string[]; 
  public get consumerBy() {
    return this.getListAttribute('consumer_by');
  }
  public set consumerBy(value: string[]) {
    this._consumerBy = value;
  }
  public resetConsumerBy() {
    this._consumerBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerByInput() {
    return this._consumerBy;
  }

  // consumer_claim - computed: false, optional: true, required: false
  private _consumerClaim?: string[]; 
  public get consumerClaim() {
    return this.getListAttribute('consumer_claim');
  }
  public set consumerClaim(value: string[]) {
    this._consumerClaim = value;
  }
  public resetConsumerClaim() {
    this._consumerClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerClaimInput() {
    return this._consumerClaim;
  }

  // consumer_groups_claim - computed: false, optional: true, required: false
  private _consumerGroupsClaim?: string[]; 
  public get consumerGroupsClaim() {
    return this.getListAttribute('consumer_groups_claim');
  }
  public set consumerGroupsClaim(value: string[]) {
    this._consumerGroupsClaim = value;
  }
  public resetConsumerGroupsClaim() {
    this._consumerGroupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupsClaimInput() {
    return this._consumerGroupsClaim;
  }

  // consumer_groups_optional - computed: true, optional: true, required: false
  private _consumerGroupsOptional?: boolean | cdktf.IResolvable; 
  public get consumerGroupsOptional() {
    return this.getBooleanAttribute('consumer_groups_optional');
  }
  public set consumerGroupsOptional(value: boolean | cdktf.IResolvable) {
    this._consumerGroupsOptional = value;
  }
  public resetConsumerGroupsOptional() {
    this._consumerGroupsOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupsOptionalInput() {
    return this._consumerGroupsOptional;
  }

  // consumer_optional - computed: true, optional: true, required: false
  private _consumerOptional?: boolean | cdktf.IResolvable; 
  public get consumerOptional() {
    return this.getBooleanAttribute('consumer_optional');
  }
  public set consumerOptional(value: boolean | cdktf.IResolvable) {
    this._consumerOptional = value;
  }
  public resetConsumerOptional() {
    this._consumerOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerOptionalInput() {
    return this._consumerOptional;
  }

  // credential_claim - computed: true, optional: true, required: false
  private _credentialClaim?: string[]; 
  public get credentialClaim() {
    return this.getListAttribute('credential_claim');
  }
  public set credentialClaim(value: string[]) {
    this._credentialClaim = value;
  }
  public resetCredentialClaim() {
    this._credentialClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialClaimInput() {
    return this._credentialClaim;
  }

  // disable_session - computed: false, optional: true, required: false
  private _disableSession?: string[]; 
  public get disableSession() {
    return this.getListAttribute('disable_session');
  }
  public set disableSession(value: string[]) {
    this._disableSession = value;
  }
  public resetDisableSession() {
    this._disableSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSessionInput() {
    return this._disableSession;
  }

  // discovery_headers_names - computed: false, optional: true, required: false
  private _discoveryHeadersNames?: string[]; 
  public get discoveryHeadersNames() {
    return this.getListAttribute('discovery_headers_names');
  }
  public set discoveryHeadersNames(value: string[]) {
    this._discoveryHeadersNames = value;
  }
  public resetDiscoveryHeadersNames() {
    this._discoveryHeadersNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryHeadersNamesInput() {
    return this._discoveryHeadersNames;
  }

  // discovery_headers_values - computed: false, optional: true, required: false
  private _discoveryHeadersValues?: string[]; 
  public get discoveryHeadersValues() {
    return this.getListAttribute('discovery_headers_values');
  }
  public set discoveryHeadersValues(value: string[]) {
    this._discoveryHeadersValues = value;
  }
  public resetDiscoveryHeadersValues() {
    this._discoveryHeadersValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryHeadersValuesInput() {
    return this._discoveryHeadersValues;
  }

  // display_errors - computed: true, optional: true, required: false
  private _displayErrors?: boolean | cdktf.IResolvable; 
  public get displayErrors() {
    return this.getBooleanAttribute('display_errors');
  }
  public set displayErrors(value: boolean | cdktf.IResolvable) {
    this._displayErrors = value;
  }
  public resetDisplayErrors() {
    this._displayErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayErrorsInput() {
    return this._displayErrors;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // downstream_access_token_header - computed: false, optional: true, required: false
  private _downstreamAccessTokenHeader?: string; 
  public get downstreamAccessTokenHeader() {
    return this.getStringAttribute('downstream_access_token_header');
  }
  public set downstreamAccessTokenHeader(value: string) {
    this._downstreamAccessTokenHeader = value;
  }
  public resetDownstreamAccessTokenHeader() {
    this._downstreamAccessTokenHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamAccessTokenHeaderInput() {
    return this._downstreamAccessTokenHeader;
  }

  // downstream_access_token_jwk_header - computed: false, optional: true, required: false
  private _downstreamAccessTokenJwkHeader?: string; 
  public get downstreamAccessTokenJwkHeader() {
    return this.getStringAttribute('downstream_access_token_jwk_header');
  }
  public set downstreamAccessTokenJwkHeader(value: string) {
    this._downstreamAccessTokenJwkHeader = value;
  }
  public resetDownstreamAccessTokenJwkHeader() {
    this._downstreamAccessTokenJwkHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamAccessTokenJwkHeaderInput() {
    return this._downstreamAccessTokenJwkHeader;
  }

  // downstream_headers_claims - computed: false, optional: true, required: false
  private _downstreamHeadersClaims?: string[]; 
  public get downstreamHeadersClaims() {
    return this.getListAttribute('downstream_headers_claims');
  }
  public set downstreamHeadersClaims(value: string[]) {
    this._downstreamHeadersClaims = value;
  }
  public resetDownstreamHeadersClaims() {
    this._downstreamHeadersClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamHeadersClaimsInput() {
    return this._downstreamHeadersClaims;
  }

  // downstream_headers_names - computed: false, optional: true, required: false
  private _downstreamHeadersNames?: string[]; 
  public get downstreamHeadersNames() {
    return this.getListAttribute('downstream_headers_names');
  }
  public set downstreamHeadersNames(value: string[]) {
    this._downstreamHeadersNames = value;
  }
  public resetDownstreamHeadersNames() {
    this._downstreamHeadersNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamHeadersNamesInput() {
    return this._downstreamHeadersNames;
  }

  // downstream_id_token_header - computed: false, optional: true, required: false
  private _downstreamIdTokenHeader?: string; 
  public get downstreamIdTokenHeader() {
    return this.getStringAttribute('downstream_id_token_header');
  }
  public set downstreamIdTokenHeader(value: string) {
    this._downstreamIdTokenHeader = value;
  }
  public resetDownstreamIdTokenHeader() {
    this._downstreamIdTokenHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamIdTokenHeaderInput() {
    return this._downstreamIdTokenHeader;
  }

  // downstream_id_token_jwk_header - computed: false, optional: true, required: false
  private _downstreamIdTokenJwkHeader?: string; 
  public get downstreamIdTokenJwkHeader() {
    return this.getStringAttribute('downstream_id_token_jwk_header');
  }
  public set downstreamIdTokenJwkHeader(value: string) {
    this._downstreamIdTokenJwkHeader = value;
  }
  public resetDownstreamIdTokenJwkHeader() {
    this._downstreamIdTokenJwkHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamIdTokenJwkHeaderInput() {
    return this._downstreamIdTokenJwkHeader;
  }

  // downstream_introspection_header - computed: false, optional: true, required: false
  private _downstreamIntrospectionHeader?: string; 
  public get downstreamIntrospectionHeader() {
    return this.getStringAttribute('downstream_introspection_header');
  }
  public set downstreamIntrospectionHeader(value: string) {
    this._downstreamIntrospectionHeader = value;
  }
  public resetDownstreamIntrospectionHeader() {
    this._downstreamIntrospectionHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamIntrospectionHeaderInput() {
    return this._downstreamIntrospectionHeader;
  }

  // downstream_introspection_jwt_header - computed: false, optional: true, required: false
  private _downstreamIntrospectionJwtHeader?: string; 
  public get downstreamIntrospectionJwtHeader() {
    return this.getStringAttribute('downstream_introspection_jwt_header');
  }
  public set downstreamIntrospectionJwtHeader(value: string) {
    this._downstreamIntrospectionJwtHeader = value;
  }
  public resetDownstreamIntrospectionJwtHeader() {
    this._downstreamIntrospectionJwtHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamIntrospectionJwtHeaderInput() {
    return this._downstreamIntrospectionJwtHeader;
  }

  // downstream_refresh_token_header - computed: false, optional: true, required: false
  private _downstreamRefreshTokenHeader?: string; 
  public get downstreamRefreshTokenHeader() {
    return this.getStringAttribute('downstream_refresh_token_header');
  }
  public set downstreamRefreshTokenHeader(value: string) {
    this._downstreamRefreshTokenHeader = value;
  }
  public resetDownstreamRefreshTokenHeader() {
    this._downstreamRefreshTokenHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamRefreshTokenHeaderInput() {
    return this._downstreamRefreshTokenHeader;
  }

  // downstream_session_id_header - computed: false, optional: true, required: false
  private _downstreamSessionIdHeader?: string; 
  public get downstreamSessionIdHeader() {
    return this.getStringAttribute('downstream_session_id_header');
  }
  public set downstreamSessionIdHeader(value: string) {
    this._downstreamSessionIdHeader = value;
  }
  public resetDownstreamSessionIdHeader() {
    this._downstreamSessionIdHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamSessionIdHeaderInput() {
    return this._downstreamSessionIdHeader;
  }

  // downstream_user_info_header - computed: false, optional: true, required: false
  private _downstreamUserInfoHeader?: string; 
  public get downstreamUserInfoHeader() {
    return this.getStringAttribute('downstream_user_info_header');
  }
  public set downstreamUserInfoHeader(value: string) {
    this._downstreamUserInfoHeader = value;
  }
  public resetDownstreamUserInfoHeader() {
    this._downstreamUserInfoHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamUserInfoHeaderInput() {
    return this._downstreamUserInfoHeader;
  }

  // downstream_user_info_jwt_header - computed: false, optional: true, required: false
  private _downstreamUserInfoJwtHeader?: string; 
  public get downstreamUserInfoJwtHeader() {
    return this.getStringAttribute('downstream_user_info_jwt_header');
  }
  public set downstreamUserInfoJwtHeader(value: string) {
    this._downstreamUserInfoJwtHeader = value;
  }
  public resetDownstreamUserInfoJwtHeader() {
    this._downstreamUserInfoJwtHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamUserInfoJwtHeaderInput() {
    return this._downstreamUserInfoJwtHeader;
  }

  // dpop_proof_lifetime - computed: true, optional: true, required: false
  private _dpopProofLifetime?: number; 
  public get dpopProofLifetime() {
    return this.getNumberAttribute('dpop_proof_lifetime');
  }
  public set dpopProofLifetime(value: number) {
    this._dpopProofLifetime = value;
  }
  public resetDpopProofLifetime() {
    this._dpopProofLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpopProofLifetimeInput() {
    return this._dpopProofLifetime;
  }

  // dpop_use_nonce - computed: true, optional: true, required: false
  private _dpopUseNonce?: boolean | cdktf.IResolvable; 
  public get dpopUseNonce() {
    return this.getBooleanAttribute('dpop_use_nonce');
  }
  public set dpopUseNonce(value: boolean | cdktf.IResolvable) {
    this._dpopUseNonce = value;
  }
  public resetDpopUseNonce() {
    this._dpopUseNonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpopUseNonceInput() {
    return this._dpopUseNonce;
  }

  // enable_hs_signatures - computed: true, optional: true, required: false
  private _enableHsSignatures?: boolean | cdktf.IResolvable; 
  public get enableHsSignatures() {
    return this.getBooleanAttribute('enable_hs_signatures');
  }
  public set enableHsSignatures(value: boolean | cdktf.IResolvable) {
    this._enableHsSignatures = value;
  }
  public resetEnableHsSignatures() {
    this._enableHsSignatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHsSignaturesInput() {
    return this._enableHsSignatures;
  }

  // end_session_endpoint - computed: false, optional: true, required: false
  private _endSessionEndpoint?: string; 
  public get endSessionEndpoint() {
    return this.getStringAttribute('end_session_endpoint');
  }
  public set endSessionEndpoint(value: string) {
    this._endSessionEndpoint = value;
  }
  public resetEndSessionEndpoint() {
    this._endSessionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSessionEndpointInput() {
    return this._endSessionEndpoint;
  }

  // expose_error_code - computed: true, optional: true, required: false
  private _exposeErrorCode?: boolean | cdktf.IResolvable; 
  public get exposeErrorCode() {
    return this.getBooleanAttribute('expose_error_code');
  }
  public set exposeErrorCode(value: boolean | cdktf.IResolvable) {
    this._exposeErrorCode = value;
  }
  public resetExposeErrorCode() {
    this._exposeErrorCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeErrorCodeInput() {
    return this._exposeErrorCode;
  }

  // extra_jwks_uris - computed: false, optional: true, required: false
  private _extraJwksUris?: string[]; 
  public get extraJwksUris() {
    return this.getListAttribute('extra_jwks_uris');
  }
  public set extraJwksUris(value: string[]) {
    this._extraJwksUris = value;
  }
  public resetExtraJwksUris() {
    this._extraJwksUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraJwksUrisInput() {
    return this._extraJwksUris;
  }

  // forbidden_destroy_session - computed: true, optional: true, required: false
  private _forbiddenDestroySession?: boolean | cdktf.IResolvable; 
  public get forbiddenDestroySession() {
    return this.getBooleanAttribute('forbidden_destroy_session');
  }
  public set forbiddenDestroySession(value: boolean | cdktf.IResolvable) {
    this._forbiddenDestroySession = value;
  }
  public resetForbiddenDestroySession() {
    this._forbiddenDestroySession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenDestroySessionInput() {
    return this._forbiddenDestroySession;
  }

  // forbidden_error_message - computed: true, optional: true, required: false
  private _forbiddenErrorMessage?: string; 
  public get forbiddenErrorMessage() {
    return this.getStringAttribute('forbidden_error_message');
  }
  public set forbiddenErrorMessage(value: string) {
    this._forbiddenErrorMessage = value;
  }
  public resetForbiddenErrorMessage() {
    this._forbiddenErrorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenErrorMessageInput() {
    return this._forbiddenErrorMessage;
  }

  // forbidden_redirect_uri - computed: false, optional: true, required: false
  private _forbiddenRedirectUri?: string[]; 
  public get forbiddenRedirectUri() {
    return this.getListAttribute('forbidden_redirect_uri');
  }
  public set forbiddenRedirectUri(value: string[]) {
    this._forbiddenRedirectUri = value;
  }
  public resetForbiddenRedirectUri() {
    this._forbiddenRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenRedirectUriInput() {
    return this._forbiddenRedirectUri;
  }

  // groups_claim - computed: true, optional: true, required: false
  private _groupsClaim?: string[]; 
  public get groupsClaim() {
    return this.getListAttribute('groups_claim');
  }
  public set groupsClaim(value: string[]) {
    this._groupsClaim = value;
  }
  public resetGroupsClaim() {
    this._groupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsClaimInput() {
    return this._groupsClaim;
  }

  // groups_required - computed: false, optional: true, required: false
  private _groupsRequired?: string[]; 
  public get groupsRequired() {
    return this.getListAttribute('groups_required');
  }
  public set groupsRequired(value: string[]) {
    this._groupsRequired = value;
  }
  public resetGroupsRequired() {
    this._groupsRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsRequiredInput() {
    return this._groupsRequired;
  }

  // hide_credentials - computed: true, optional: true, required: false
  private _hideCredentials?: boolean | cdktf.IResolvable; 
  public get hideCredentials() {
    return this.getBooleanAttribute('hide_credentials');
  }
  public set hideCredentials(value: boolean | cdktf.IResolvable) {
    this._hideCredentials = value;
  }
  public resetHideCredentials() {
    this._hideCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideCredentialsInput() {
    return this._hideCredentials;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // http_proxy_authorization - computed: false, optional: true, required: false
  private _httpProxyAuthorization?: string; 
  public get httpProxyAuthorization() {
    return this.getStringAttribute('http_proxy_authorization');
  }
  public set httpProxyAuthorization(value: string) {
    this._httpProxyAuthorization = value;
  }
  public resetHttpProxyAuthorization() {
    this._httpProxyAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyAuthorizationInput() {
    return this._httpProxyAuthorization;
  }

  // http_version - computed: true, optional: true, required: false
  private _httpVersion?: number; 
  public get httpVersion() {
    return this.getNumberAttribute('http_version');
  }
  public set httpVersion(value: number) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // https_proxy_authorization - computed: false, optional: true, required: false
  private _httpsProxyAuthorization?: string; 
  public get httpsProxyAuthorization() {
    return this.getStringAttribute('https_proxy_authorization');
  }
  public set httpsProxyAuthorization(value: string) {
    this._httpsProxyAuthorization = value;
  }
  public resetHttpsProxyAuthorization() {
    this._httpsProxyAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyAuthorizationInput() {
    return this._httpsProxyAuthorization;
  }

  // id_token_param_name - computed: false, optional: true, required: false
  private _idTokenParamName?: string; 
  public get idTokenParamName() {
    return this.getStringAttribute('id_token_param_name');
  }
  public set idTokenParamName(value: string) {
    this._idTokenParamName = value;
  }
  public resetIdTokenParamName() {
    this._idTokenParamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenParamNameInput() {
    return this._idTokenParamName;
  }

  // id_token_param_type - computed: true, optional: true, required: false
  private _idTokenParamType?: string[]; 
  public get idTokenParamType() {
    return this.getListAttribute('id_token_param_type');
  }
  public set idTokenParamType(value: string[]) {
    this._idTokenParamType = value;
  }
  public resetIdTokenParamType() {
    this._idTokenParamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenParamTypeInput() {
    return this._idTokenParamType;
  }

  // ignore_signature - computed: true, optional: true, required: false
  private _ignoreSignature?: string[]; 
  public get ignoreSignature() {
    return this.getListAttribute('ignore_signature');
  }
  public set ignoreSignature(value: string[]) {
    this._ignoreSignature = value;
  }
  public resetIgnoreSignature() {
    this._ignoreSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSignatureInput() {
    return this._ignoreSignature;
  }

  // introspect_jwt_tokens - computed: true, optional: true, required: false
  private _introspectJwtTokens?: boolean | cdktf.IResolvable; 
  public get introspectJwtTokens() {
    return this.getBooleanAttribute('introspect_jwt_tokens');
  }
  public set introspectJwtTokens(value: boolean | cdktf.IResolvable) {
    this._introspectJwtTokens = value;
  }
  public resetIntrospectJwtTokens() {
    this._introspectJwtTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectJwtTokensInput() {
    return this._introspectJwtTokens;
  }

  // introspection_accept - computed: true, optional: true, required: false
  private _introspectionAccept?: string; 
  public get introspectionAccept() {
    return this.getStringAttribute('introspection_accept');
  }
  public set introspectionAccept(value: string) {
    this._introspectionAccept = value;
  }
  public resetIntrospectionAccept() {
    this._introspectionAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionAcceptInput() {
    return this._introspectionAccept;
  }

  // introspection_check_active - computed: true, optional: true, required: false
  private _introspectionCheckActive?: boolean | cdktf.IResolvable; 
  public get introspectionCheckActive() {
    return this.getBooleanAttribute('introspection_check_active');
  }
  public set introspectionCheckActive(value: boolean | cdktf.IResolvable) {
    this._introspectionCheckActive = value;
  }
  public resetIntrospectionCheckActive() {
    this._introspectionCheckActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionCheckActiveInput() {
    return this._introspectionCheckActive;
  }

  // introspection_endpoint - computed: false, optional: true, required: false
  private _introspectionEndpoint?: string; 
  public get introspectionEndpoint() {
    return this.getStringAttribute('introspection_endpoint');
  }
  public set introspectionEndpoint(value: string) {
    this._introspectionEndpoint = value;
  }
  public resetIntrospectionEndpoint() {
    this._introspectionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionEndpointInput() {
    return this._introspectionEndpoint;
  }

  // introspection_endpoint_auth_method - computed: true, optional: true, required: false
  private _introspectionEndpointAuthMethod?: string; 
  public get introspectionEndpointAuthMethod() {
    return this.getStringAttribute('introspection_endpoint_auth_method');
  }
  public set introspectionEndpointAuthMethod(value: string) {
    this._introspectionEndpointAuthMethod = value;
  }
  public resetIntrospectionEndpointAuthMethod() {
    this._introspectionEndpointAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionEndpointAuthMethodInput() {
    return this._introspectionEndpointAuthMethod;
  }

  // introspection_headers_client - computed: false, optional: true, required: false
  private _introspectionHeadersClient?: string[]; 
  public get introspectionHeadersClient() {
    return this.getListAttribute('introspection_headers_client');
  }
  public set introspectionHeadersClient(value: string[]) {
    this._introspectionHeadersClient = value;
  }
  public resetIntrospectionHeadersClient() {
    this._introspectionHeadersClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionHeadersClientInput() {
    return this._introspectionHeadersClient;
  }

  // introspection_headers_names - computed: false, optional: true, required: false
  private _introspectionHeadersNames?: string[]; 
  public get introspectionHeadersNames() {
    return this.getListAttribute('introspection_headers_names');
  }
  public set introspectionHeadersNames(value: string[]) {
    this._introspectionHeadersNames = value;
  }
  public resetIntrospectionHeadersNames() {
    this._introspectionHeadersNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionHeadersNamesInput() {
    return this._introspectionHeadersNames;
  }

  // introspection_headers_values - computed: false, optional: true, required: false
  private _introspectionHeadersValues?: string[]; 
  public get introspectionHeadersValues() {
    return this.getListAttribute('introspection_headers_values');
  }
  public set introspectionHeadersValues(value: string[]) {
    this._introspectionHeadersValues = value;
  }
  public resetIntrospectionHeadersValues() {
    this._introspectionHeadersValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionHeadersValuesInput() {
    return this._introspectionHeadersValues;
  }

  // introspection_hint - computed: true, optional: true, required: false
  private _introspectionHint?: string; 
  public get introspectionHint() {
    return this.getStringAttribute('introspection_hint');
  }
  public set introspectionHint(value: string) {
    this._introspectionHint = value;
  }
  public resetIntrospectionHint() {
    this._introspectionHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionHintInput() {
    return this._introspectionHint;
  }

  // introspection_post_args_client - computed: false, optional: true, required: false
  private _introspectionPostArgsClient?: string[]; 
  public get introspectionPostArgsClient() {
    return this.getListAttribute('introspection_post_args_client');
  }
  public set introspectionPostArgsClient(value: string[]) {
    this._introspectionPostArgsClient = value;
  }
  public resetIntrospectionPostArgsClient() {
    this._introspectionPostArgsClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionPostArgsClientInput() {
    return this._introspectionPostArgsClient;
  }

  // introspection_post_args_client_headers - computed: false, optional: true, required: false
  private _introspectionPostArgsClientHeaders?: string[]; 
  public get introspectionPostArgsClientHeaders() {
    return this.getListAttribute('introspection_post_args_client_headers');
  }
  public set introspectionPostArgsClientHeaders(value: string[]) {
    this._introspectionPostArgsClientHeaders = value;
  }
  public resetIntrospectionPostArgsClientHeaders() {
    this._introspectionPostArgsClientHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionPostArgsClientHeadersInput() {
    return this._introspectionPostArgsClientHeaders;
  }

  // introspection_post_args_names - computed: false, optional: true, required: false
  private _introspectionPostArgsNames?: string[]; 
  public get introspectionPostArgsNames() {
    return this.getListAttribute('introspection_post_args_names');
  }
  public set introspectionPostArgsNames(value: string[]) {
    this._introspectionPostArgsNames = value;
  }
  public resetIntrospectionPostArgsNames() {
    this._introspectionPostArgsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionPostArgsNamesInput() {
    return this._introspectionPostArgsNames;
  }

  // introspection_post_args_values - computed: false, optional: true, required: false
  private _introspectionPostArgsValues?: string[]; 
  public get introspectionPostArgsValues() {
    return this.getListAttribute('introspection_post_args_values');
  }
  public set introspectionPostArgsValues(value: string[]) {
    this._introspectionPostArgsValues = value;
  }
  public resetIntrospectionPostArgsValues() {
    this._introspectionPostArgsValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionPostArgsValuesInput() {
    return this._introspectionPostArgsValues;
  }

  // introspection_token_param_name - computed: true, optional: true, required: false
  private _introspectionTokenParamName?: string; 
  public get introspectionTokenParamName() {
    return this.getStringAttribute('introspection_token_param_name');
  }
  public set introspectionTokenParamName(value: string) {
    this._introspectionTokenParamName = value;
  }
  public resetIntrospectionTokenParamName() {
    this._introspectionTokenParamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionTokenParamNameInput() {
    return this._introspectionTokenParamName;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // issuers_allowed - computed: false, optional: true, required: false
  private _issuersAllowed?: string[]; 
  public get issuersAllowed() {
    return this.getListAttribute('issuers_allowed');
  }
  public set issuersAllowed(value: string[]) {
    this._issuersAllowed = value;
  }
  public resetIssuersAllowed() {
    this._issuersAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuersAllowedInput() {
    return this._issuersAllowed;
  }

  // jwt_session_claim - computed: true, optional: true, required: false
  private _jwtSessionClaim?: string; 
  public get jwtSessionClaim() {
    return this.getStringAttribute('jwt_session_claim');
  }
  public set jwtSessionClaim(value: string) {
    this._jwtSessionClaim = value;
  }
  public resetJwtSessionClaim() {
    this._jwtSessionClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtSessionClaimInput() {
    return this._jwtSessionClaim;
  }

  // jwt_session_cookie - computed: false, optional: true, required: false
  private _jwtSessionCookie?: string; 
  public get jwtSessionCookie() {
    return this.getStringAttribute('jwt_session_cookie');
  }
  public set jwtSessionCookie(value: string) {
    this._jwtSessionCookie = value;
  }
  public resetJwtSessionCookie() {
    this._jwtSessionCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtSessionCookieInput() {
    return this._jwtSessionCookie;
  }

  // keepalive - computed: true, optional: true, required: false
  private _keepalive?: boolean | cdktf.IResolvable; 
  public get keepalive() {
    return this.getBooleanAttribute('keepalive');
  }
  public set keepalive(value: boolean | cdktf.IResolvable) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // leeway - computed: true, optional: true, required: false
  private _leeway?: number; 
  public get leeway() {
    return this.getNumberAttribute('leeway');
  }
  public set leeway(value: number) {
    this._leeway = value;
  }
  public resetLeeway() {
    this._leeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leewayInput() {
    return this._leeway;
  }

  // login_action - computed: true, optional: true, required: false
  private _loginAction?: string; 
  public get loginAction() {
    return this.getStringAttribute('login_action');
  }
  public set loginAction(value: string) {
    this._loginAction = value;
  }
  public resetLoginAction() {
    this._loginAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginActionInput() {
    return this._loginAction;
  }

  // login_methods - computed: true, optional: true, required: false
  private _loginMethods?: string[]; 
  public get loginMethods() {
    return this.getListAttribute('login_methods');
  }
  public set loginMethods(value: string[]) {
    this._loginMethods = value;
  }
  public resetLoginMethods() {
    this._loginMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMethodsInput() {
    return this._loginMethods;
  }

  // login_redirect_mode - computed: true, optional: true, required: false
  private _loginRedirectMode?: string; 
  public get loginRedirectMode() {
    return this.getStringAttribute('login_redirect_mode');
  }
  public set loginRedirectMode(value: string) {
    this._loginRedirectMode = value;
  }
  public resetLoginRedirectMode() {
    this._loginRedirectMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginRedirectModeInput() {
    return this._loginRedirectMode;
  }

  // login_redirect_uri - computed: false, optional: true, required: false
  private _loginRedirectUri?: string[]; 
  public get loginRedirectUri() {
    return this.getListAttribute('login_redirect_uri');
  }
  public set loginRedirectUri(value: string[]) {
    this._loginRedirectUri = value;
  }
  public resetLoginRedirectUri() {
    this._loginRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginRedirectUriInput() {
    return this._loginRedirectUri;
  }

  // login_tokens - computed: true, optional: true, required: false
  private _loginTokens?: string[]; 
  public get loginTokens() {
    return this.getListAttribute('login_tokens');
  }
  public set loginTokens(value: string[]) {
    this._loginTokens = value;
  }
  public resetLoginTokens() {
    this._loginTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginTokensInput() {
    return this._loginTokens;
  }

  // logout_methods - computed: true, optional: true, required: false
  private _logoutMethods?: string[]; 
  public get logoutMethods() {
    return this.getListAttribute('logout_methods');
  }
  public set logoutMethods(value: string[]) {
    this._logoutMethods = value;
  }
  public resetLogoutMethods() {
    this._logoutMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutMethodsInput() {
    return this._logoutMethods;
  }

  // logout_post_arg - computed: false, optional: true, required: false
  private _logoutPostArg?: string; 
  public get logoutPostArg() {
    return this.getStringAttribute('logout_post_arg');
  }
  public set logoutPostArg(value: string) {
    this._logoutPostArg = value;
  }
  public resetLogoutPostArg() {
    this._logoutPostArg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutPostArgInput() {
    return this._logoutPostArg;
  }

  // logout_query_arg - computed: false, optional: true, required: false
  private _logoutQueryArg?: string; 
  public get logoutQueryArg() {
    return this.getStringAttribute('logout_query_arg');
  }
  public set logoutQueryArg(value: string) {
    this._logoutQueryArg = value;
  }
  public resetLogoutQueryArg() {
    this._logoutQueryArg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutQueryArgInput() {
    return this._logoutQueryArg;
  }

  // logout_redirect_uri - computed: false, optional: true, required: false
  private _logoutRedirectUri?: string[]; 
  public get logoutRedirectUri() {
    return this.getListAttribute('logout_redirect_uri');
  }
  public set logoutRedirectUri(value: string[]) {
    this._logoutRedirectUri = value;
  }
  public resetLogoutRedirectUri() {
    this._logoutRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutRedirectUriInput() {
    return this._logoutRedirectUri;
  }

  // logout_revoke - computed: true, optional: true, required: false
  private _logoutRevoke?: boolean | cdktf.IResolvable; 
  public get logoutRevoke() {
    return this.getBooleanAttribute('logout_revoke');
  }
  public set logoutRevoke(value: boolean | cdktf.IResolvable) {
    this._logoutRevoke = value;
  }
  public resetLogoutRevoke() {
    this._logoutRevoke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutRevokeInput() {
    return this._logoutRevoke;
  }

  // logout_revoke_access_token - computed: true, optional: true, required: false
  private _logoutRevokeAccessToken?: boolean | cdktf.IResolvable; 
  public get logoutRevokeAccessToken() {
    return this.getBooleanAttribute('logout_revoke_access_token');
  }
  public set logoutRevokeAccessToken(value: boolean | cdktf.IResolvable) {
    this._logoutRevokeAccessToken = value;
  }
  public resetLogoutRevokeAccessToken() {
    this._logoutRevokeAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutRevokeAccessTokenInput() {
    return this._logoutRevokeAccessToken;
  }

  // logout_revoke_refresh_token - computed: true, optional: true, required: false
  private _logoutRevokeRefreshToken?: boolean | cdktf.IResolvable; 
  public get logoutRevokeRefreshToken() {
    return this.getBooleanAttribute('logout_revoke_refresh_token');
  }
  public set logoutRevokeRefreshToken(value: boolean | cdktf.IResolvable) {
    this._logoutRevokeRefreshToken = value;
  }
  public resetLogoutRevokeRefreshToken() {
    this._logoutRevokeRefreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutRevokeRefreshTokenInput() {
    return this._logoutRevokeRefreshToken;
  }

  // logout_uri_suffix - computed: false, optional: true, required: false
  private _logoutUriSuffix?: string; 
  public get logoutUriSuffix() {
    return this.getStringAttribute('logout_uri_suffix');
  }
  public set logoutUriSuffix(value: string) {
    this._logoutUriSuffix = value;
  }
  public resetLogoutUriSuffix() {
    this._logoutUriSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUriSuffixInput() {
    return this._logoutUriSuffix;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // mtls_introspection_endpoint - computed: false, optional: true, required: false
  private _mtlsIntrospectionEndpoint?: string; 
  public get mtlsIntrospectionEndpoint() {
    return this.getStringAttribute('mtls_introspection_endpoint');
  }
  public set mtlsIntrospectionEndpoint(value: string) {
    this._mtlsIntrospectionEndpoint = value;
  }
  public resetMtlsIntrospectionEndpoint() {
    this._mtlsIntrospectionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsIntrospectionEndpointInput() {
    return this._mtlsIntrospectionEndpoint;
  }

  // mtls_revocation_endpoint - computed: false, optional: true, required: false
  private _mtlsRevocationEndpoint?: string; 
  public get mtlsRevocationEndpoint() {
    return this.getStringAttribute('mtls_revocation_endpoint');
  }
  public set mtlsRevocationEndpoint(value: string) {
    this._mtlsRevocationEndpoint = value;
  }
  public resetMtlsRevocationEndpoint() {
    this._mtlsRevocationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsRevocationEndpointInput() {
    return this._mtlsRevocationEndpoint;
  }

  // mtls_token_endpoint - computed: false, optional: true, required: false
  private _mtlsTokenEndpoint?: string; 
  public get mtlsTokenEndpoint() {
    return this.getStringAttribute('mtls_token_endpoint');
  }
  public set mtlsTokenEndpoint(value: string) {
    this._mtlsTokenEndpoint = value;
  }
  public resetMtlsTokenEndpoint() {
    this._mtlsTokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsTokenEndpointInput() {
    return this._mtlsTokenEndpoint;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // password_param_type - computed: true, optional: true, required: false
  private _passwordParamType?: string[]; 
  public get passwordParamType() {
    return this.getListAttribute('password_param_type');
  }
  public set passwordParamType(value: string[]) {
    this._passwordParamType = value;
  }
  public resetPasswordParamType() {
    this._passwordParamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordParamTypeInput() {
    return this._passwordParamType;
  }

  // preserve_query_args - computed: true, optional: true, required: false
  private _preserveQueryArgs?: boolean | cdktf.IResolvable; 
  public get preserveQueryArgs() {
    return this.getBooleanAttribute('preserve_query_args');
  }
  public set preserveQueryArgs(value: boolean | cdktf.IResolvable) {
    this._preserveQueryArgs = value;
  }
  public resetPreserveQueryArgs() {
    this._preserveQueryArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveQueryArgsInput() {
    return this._preserveQueryArgs;
  }

  // proof_of_possession_auth_methods_validation - computed: true, optional: true, required: false
  private _proofOfPossessionAuthMethodsValidation?: boolean | cdktf.IResolvable; 
  public get proofOfPossessionAuthMethodsValidation() {
    return this.getBooleanAttribute('proof_of_possession_auth_methods_validation');
  }
  public set proofOfPossessionAuthMethodsValidation(value: boolean | cdktf.IResolvable) {
    this._proofOfPossessionAuthMethodsValidation = value;
  }
  public resetProofOfPossessionAuthMethodsValidation() {
    this._proofOfPossessionAuthMethodsValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proofOfPossessionAuthMethodsValidationInput() {
    return this._proofOfPossessionAuthMethodsValidation;
  }

  // proof_of_possession_dpop - computed: true, optional: true, required: false
  private _proofOfPossessionDpop?: string; 
  public get proofOfPossessionDpop() {
    return this.getStringAttribute('proof_of_possession_dpop');
  }
  public set proofOfPossessionDpop(value: string) {
    this._proofOfPossessionDpop = value;
  }
  public resetProofOfPossessionDpop() {
    this._proofOfPossessionDpop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proofOfPossessionDpopInput() {
    return this._proofOfPossessionDpop;
  }

  // proof_of_possession_mtls - computed: true, optional: true, required: false
  private _proofOfPossessionMtls?: string; 
  public get proofOfPossessionMtls() {
    return this.getStringAttribute('proof_of_possession_mtls');
  }
  public set proofOfPossessionMtls(value: string) {
    this._proofOfPossessionMtls = value;
  }
  public resetProofOfPossessionMtls() {
    this._proofOfPossessionMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proofOfPossessionMtlsInput() {
    return this._proofOfPossessionMtls;
  }

  // pushed_authorization_request_endpoint - computed: false, optional: true, required: false
  private _pushedAuthorizationRequestEndpoint?: string; 
  public get pushedAuthorizationRequestEndpoint() {
    return this.getStringAttribute('pushed_authorization_request_endpoint');
  }
  public set pushedAuthorizationRequestEndpoint(value: string) {
    this._pushedAuthorizationRequestEndpoint = value;
  }
  public resetPushedAuthorizationRequestEndpoint() {
    this._pushedAuthorizationRequestEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushedAuthorizationRequestEndpointInput() {
    return this._pushedAuthorizationRequestEndpoint;
  }

  // pushed_authorization_request_endpoint_auth_method - computed: true, optional: true, required: false
  private _pushedAuthorizationRequestEndpointAuthMethod?: string; 
  public get pushedAuthorizationRequestEndpointAuthMethod() {
    return this.getStringAttribute('pushed_authorization_request_endpoint_auth_method');
  }
  public set pushedAuthorizationRequestEndpointAuthMethod(value: string) {
    this._pushedAuthorizationRequestEndpointAuthMethod = value;
  }
  public resetPushedAuthorizationRequestEndpointAuthMethod() {
    this._pushedAuthorizationRequestEndpointAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushedAuthorizationRequestEndpointAuthMethodInput() {
    return this._pushedAuthorizationRequestEndpointAuthMethod;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string[]; 
  public get redirectUri() {
    return this.getListAttribute('redirect_uri');
  }
  public set redirectUri(value: string[]) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }

  // redis - computed: true, optional: true, required: false
  private _redis = new GatewayPluginOpenidConnectConfigRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: GatewayPluginOpenidConnectConfigRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }

  // rediscovery_lifetime - computed: true, optional: true, required: false
  private _rediscoveryLifetime?: number; 
  public get rediscoveryLifetime() {
    return this.getNumberAttribute('rediscovery_lifetime');
  }
  public set rediscoveryLifetime(value: number) {
    this._rediscoveryLifetime = value;
  }
  public resetRediscoveryLifetime() {
    this._rediscoveryLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rediscoveryLifetimeInput() {
    return this._rediscoveryLifetime;
  }

  // refresh_token_param_name - computed: false, optional: true, required: false
  private _refreshTokenParamName?: string; 
  public get refreshTokenParamName() {
    return this.getStringAttribute('refresh_token_param_name');
  }
  public set refreshTokenParamName(value: string) {
    this._refreshTokenParamName = value;
  }
  public resetRefreshTokenParamName() {
    this._refreshTokenParamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenParamNameInput() {
    return this._refreshTokenParamName;
  }

  // refresh_token_param_type - computed: true, optional: true, required: false
  private _refreshTokenParamType?: string[]; 
  public get refreshTokenParamType() {
    return this.getListAttribute('refresh_token_param_type');
  }
  public set refreshTokenParamType(value: string[]) {
    this._refreshTokenParamType = value;
  }
  public resetRefreshTokenParamType() {
    this._refreshTokenParamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenParamTypeInput() {
    return this._refreshTokenParamType;
  }

  // refresh_tokens - computed: true, optional: true, required: false
  private _refreshTokens?: boolean | cdktf.IResolvable; 
  public get refreshTokens() {
    return this.getBooleanAttribute('refresh_tokens');
  }
  public set refreshTokens(value: boolean | cdktf.IResolvable) {
    this._refreshTokens = value;
  }
  public resetRefreshTokens() {
    this._refreshTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokensInput() {
    return this._refreshTokens;
  }

  // require_proof_key_for_code_exchange - computed: false, optional: true, required: false
  private _requireProofKeyForCodeExchange?: boolean | cdktf.IResolvable; 
  public get requireProofKeyForCodeExchange() {
    return this.getBooleanAttribute('require_proof_key_for_code_exchange');
  }
  public set requireProofKeyForCodeExchange(value: boolean | cdktf.IResolvable) {
    this._requireProofKeyForCodeExchange = value;
  }
  public resetRequireProofKeyForCodeExchange() {
    this._requireProofKeyForCodeExchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireProofKeyForCodeExchangeInput() {
    return this._requireProofKeyForCodeExchange;
  }

  // require_pushed_authorization_requests - computed: false, optional: true, required: false
  private _requirePushedAuthorizationRequests?: boolean | cdktf.IResolvable; 
  public get requirePushedAuthorizationRequests() {
    return this.getBooleanAttribute('require_pushed_authorization_requests');
  }
  public set requirePushedAuthorizationRequests(value: boolean | cdktf.IResolvable) {
    this._requirePushedAuthorizationRequests = value;
  }
  public resetRequirePushedAuthorizationRequests() {
    this._requirePushedAuthorizationRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePushedAuthorizationRequestsInput() {
    return this._requirePushedAuthorizationRequests;
  }

  // require_signed_request_object - computed: false, optional: true, required: false
  private _requireSignedRequestObject?: boolean | cdktf.IResolvable; 
  public get requireSignedRequestObject() {
    return this.getBooleanAttribute('require_signed_request_object');
  }
  public set requireSignedRequestObject(value: boolean | cdktf.IResolvable) {
    this._requireSignedRequestObject = value;
  }
  public resetRequireSignedRequestObject() {
    this._requireSignedRequestObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSignedRequestObjectInput() {
    return this._requireSignedRequestObject;
  }

  // resolve_distributed_claims - computed: true, optional: true, required: false
  private _resolveDistributedClaims?: boolean | cdktf.IResolvable; 
  public get resolveDistributedClaims() {
    return this.getBooleanAttribute('resolve_distributed_claims');
  }
  public set resolveDistributedClaims(value: boolean | cdktf.IResolvable) {
    this._resolveDistributedClaims = value;
  }
  public resetResolveDistributedClaims() {
    this._resolveDistributedClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveDistributedClaimsInput() {
    return this._resolveDistributedClaims;
  }

  // response_mode - computed: true, optional: true, required: false
  private _responseMode?: string; 
  public get responseMode() {
    return this.getStringAttribute('response_mode');
  }
  public set responseMode(value: string) {
    this._responseMode = value;
  }
  public resetResponseMode() {
    this._responseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseModeInput() {
    return this._responseMode;
  }

  // response_type - computed: true, optional: true, required: false
  private _responseType?: string[]; 
  public get responseType() {
    return this.getListAttribute('response_type');
  }
  public set responseType(value: string[]) {
    this._responseType = value;
  }
  public resetResponseType() {
    this._responseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypeInput() {
    return this._responseType;
  }

  // reverify - computed: true, optional: true, required: false
  private _reverify?: boolean | cdktf.IResolvable; 
  public get reverify() {
    return this.getBooleanAttribute('reverify');
  }
  public set reverify(value: boolean | cdktf.IResolvable) {
    this._reverify = value;
  }
  public resetReverify() {
    this._reverify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverifyInput() {
    return this._reverify;
  }

  // revocation_endpoint - computed: false, optional: true, required: false
  private _revocationEndpoint?: string; 
  public get revocationEndpoint() {
    return this.getStringAttribute('revocation_endpoint');
  }
  public set revocationEndpoint(value: string) {
    this._revocationEndpoint = value;
  }
  public resetRevocationEndpoint() {
    this._revocationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationEndpointInput() {
    return this._revocationEndpoint;
  }

  // revocation_endpoint_auth_method - computed: true, optional: true, required: false
  private _revocationEndpointAuthMethod?: string; 
  public get revocationEndpointAuthMethod() {
    return this.getStringAttribute('revocation_endpoint_auth_method');
  }
  public set revocationEndpointAuthMethod(value: string) {
    this._revocationEndpointAuthMethod = value;
  }
  public resetRevocationEndpointAuthMethod() {
    this._revocationEndpointAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationEndpointAuthMethodInput() {
    return this._revocationEndpointAuthMethod;
  }

  // revocation_token_param_name - computed: true, optional: true, required: false
  private _revocationTokenParamName?: string; 
  public get revocationTokenParamName() {
    return this.getStringAttribute('revocation_token_param_name');
  }
  public set revocationTokenParamName(value: string) {
    this._revocationTokenParamName = value;
  }
  public resetRevocationTokenParamName() {
    this._revocationTokenParamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationTokenParamNameInput() {
    return this._revocationTokenParamName;
  }

  // roles_claim - computed: true, optional: true, required: false
  private _rolesClaim?: string[]; 
  public get rolesClaim() {
    return this.getListAttribute('roles_claim');
  }
  public set rolesClaim(value: string[]) {
    this._rolesClaim = value;
  }
  public resetRolesClaim() {
    this._rolesClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesClaimInput() {
    return this._rolesClaim;
  }

  // roles_required - computed: false, optional: true, required: false
  private _rolesRequired?: string[]; 
  public get rolesRequired() {
    return this.getListAttribute('roles_required');
  }
  public set rolesRequired(value: string[]) {
    this._rolesRequired = value;
  }
  public resetRolesRequired() {
    this._rolesRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesRequiredInput() {
    return this._rolesRequired;
  }

  // run_on_preflight - computed: true, optional: true, required: false
  private _runOnPreflight?: boolean | cdktf.IResolvable; 
  public get runOnPreflight() {
    return this.getBooleanAttribute('run_on_preflight');
  }
  public set runOnPreflight(value: boolean | cdktf.IResolvable) {
    this._runOnPreflight = value;
  }
  public resetRunOnPreflight() {
    this._runOnPreflight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnPreflightInput() {
    return this._runOnPreflight;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // scopes_claim - computed: true, optional: true, required: false
  private _scopesClaim?: string[]; 
  public get scopesClaim() {
    return this.getListAttribute('scopes_claim');
  }
  public set scopesClaim(value: string[]) {
    this._scopesClaim = value;
  }
  public resetScopesClaim() {
    this._scopesClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesClaimInput() {
    return this._scopesClaim;
  }

  // scopes_required - computed: false, optional: true, required: false
  private _scopesRequired?: string[]; 
  public get scopesRequired() {
    return this.getListAttribute('scopes_required');
  }
  public set scopesRequired(value: string[]) {
    this._scopesRequired = value;
  }
  public resetScopesRequired() {
    this._scopesRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesRequiredInput() {
    return this._scopesRequired;
  }

  // search_user_info - computed: true, optional: true, required: false
  private _searchUserInfo?: boolean | cdktf.IResolvable; 
  public get searchUserInfo() {
    return this.getBooleanAttribute('search_user_info');
  }
  public set searchUserInfo(value: boolean | cdktf.IResolvable) {
    this._searchUserInfo = value;
  }
  public resetSearchUserInfo() {
    this._searchUserInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchUserInfoInput() {
    return this._searchUserInfo;
  }

  // session_absolute_timeout - computed: true, optional: true, required: false
  private _sessionAbsoluteTimeout?: number; 
  public get sessionAbsoluteTimeout() {
    return this.getNumberAttribute('session_absolute_timeout');
  }
  public set sessionAbsoluteTimeout(value: number) {
    this._sessionAbsoluteTimeout = value;
  }
  public resetSessionAbsoluteTimeout() {
    this._sessionAbsoluteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAbsoluteTimeoutInput() {
    return this._sessionAbsoluteTimeout;
  }

  // session_audience - computed: true, optional: true, required: false
  private _sessionAudience?: string; 
  public get sessionAudience() {
    return this.getStringAttribute('session_audience');
  }
  public set sessionAudience(value: string) {
    this._sessionAudience = value;
  }
  public resetSessionAudience() {
    this._sessionAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAudienceInput() {
    return this._sessionAudience;
  }

  // session_bind - computed: false, optional: true, required: false
  private _sessionBind?: string[]; 
  public get sessionBind() {
    return this.getListAttribute('session_bind');
  }
  public set sessionBind(value: string[]) {
    this._sessionBind = value;
  }
  public resetSessionBind() {
    this._sessionBind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionBindInput() {
    return this._sessionBind;
  }

  // session_cookie_domain - computed: false, optional: true, required: false
  private _sessionCookieDomain?: string; 
  public get sessionCookieDomain() {
    return this.getStringAttribute('session_cookie_domain');
  }
  public set sessionCookieDomain(value: string) {
    this._sessionCookieDomain = value;
  }
  public resetSessionCookieDomain() {
    this._sessionCookieDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieDomainInput() {
    return this._sessionCookieDomain;
  }

  // session_cookie_http_only - computed: true, optional: true, required: false
  private _sessionCookieHttpOnly?: boolean | cdktf.IResolvable; 
  public get sessionCookieHttpOnly() {
    return this.getBooleanAttribute('session_cookie_http_only');
  }
  public set sessionCookieHttpOnly(value: boolean | cdktf.IResolvable) {
    this._sessionCookieHttpOnly = value;
  }
  public resetSessionCookieHttpOnly() {
    this._sessionCookieHttpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieHttpOnlyInput() {
    return this._sessionCookieHttpOnly;
  }

  // session_cookie_name - computed: true, optional: true, required: false
  private _sessionCookieName?: string; 
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }
  public set sessionCookieName(value: string) {
    this._sessionCookieName = value;
  }
  public resetSessionCookieName() {
    this._sessionCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieNameInput() {
    return this._sessionCookieName;
  }

  // session_cookie_path - computed: true, optional: true, required: false
  private _sessionCookiePath?: string; 
  public get sessionCookiePath() {
    return this.getStringAttribute('session_cookie_path');
  }
  public set sessionCookiePath(value: string) {
    this._sessionCookiePath = value;
  }
  public resetSessionCookiePath() {
    this._sessionCookiePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookiePathInput() {
    return this._sessionCookiePath;
  }

  // session_cookie_same_site - computed: true, optional: true, required: false
  private _sessionCookieSameSite?: string; 
  public get sessionCookieSameSite() {
    return this.getStringAttribute('session_cookie_same_site');
  }
  public set sessionCookieSameSite(value: string) {
    this._sessionCookieSameSite = value;
  }
  public resetSessionCookieSameSite() {
    this._sessionCookieSameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieSameSiteInput() {
    return this._sessionCookieSameSite;
  }

  // session_cookie_secure - computed: false, optional: true, required: false
  private _sessionCookieSecure?: boolean | cdktf.IResolvable; 
  public get sessionCookieSecure() {
    return this.getBooleanAttribute('session_cookie_secure');
  }
  public set sessionCookieSecure(value: boolean | cdktf.IResolvable) {
    this._sessionCookieSecure = value;
  }
  public resetSessionCookieSecure() {
    this._sessionCookieSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieSecureInput() {
    return this._sessionCookieSecure;
  }

  // session_enforce_same_subject - computed: true, optional: true, required: false
  private _sessionEnforceSameSubject?: boolean | cdktf.IResolvable; 
  public get sessionEnforceSameSubject() {
    return this.getBooleanAttribute('session_enforce_same_subject');
  }
  public set sessionEnforceSameSubject(value: boolean | cdktf.IResolvable) {
    this._sessionEnforceSameSubject = value;
  }
  public resetSessionEnforceSameSubject() {
    this._sessionEnforceSameSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEnforceSameSubjectInput() {
    return this._sessionEnforceSameSubject;
  }

  // session_hash_storage_key - computed: true, optional: true, required: false
  private _sessionHashStorageKey?: boolean | cdktf.IResolvable; 
  public get sessionHashStorageKey() {
    return this.getBooleanAttribute('session_hash_storage_key');
  }
  public set sessionHashStorageKey(value: boolean | cdktf.IResolvable) {
    this._sessionHashStorageKey = value;
  }
  public resetSessionHashStorageKey() {
    this._sessionHashStorageKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionHashStorageKeyInput() {
    return this._sessionHashStorageKey;
  }

  // session_hash_subject - computed: true, optional: true, required: false
  private _sessionHashSubject?: boolean | cdktf.IResolvable; 
  public get sessionHashSubject() {
    return this.getBooleanAttribute('session_hash_subject');
  }
  public set sessionHashSubject(value: boolean | cdktf.IResolvable) {
    this._sessionHashSubject = value;
  }
  public resetSessionHashSubject() {
    this._sessionHashSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionHashSubjectInput() {
    return this._sessionHashSubject;
  }

  // session_idling_timeout - computed: true, optional: true, required: false
  private _sessionIdlingTimeout?: number; 
  public get sessionIdlingTimeout() {
    return this.getNumberAttribute('session_idling_timeout');
  }
  public set sessionIdlingTimeout(value: number) {
    this._sessionIdlingTimeout = value;
  }
  public resetSessionIdlingTimeout() {
    this._sessionIdlingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdlingTimeoutInput() {
    return this._sessionIdlingTimeout;
  }

  // session_memcached_host - computed: true, optional: true, required: false
  private _sessionMemcachedHost?: string; 
  public get sessionMemcachedHost() {
    return this.getStringAttribute('session_memcached_host');
  }
  public set sessionMemcachedHost(value: string) {
    this._sessionMemcachedHost = value;
  }
  public resetSessionMemcachedHost() {
    this._sessionMemcachedHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMemcachedHostInput() {
    return this._sessionMemcachedHost;
  }

  // session_memcached_port - computed: true, optional: true, required: false
  private _sessionMemcachedPort?: number; 
  public get sessionMemcachedPort() {
    return this.getNumberAttribute('session_memcached_port');
  }
  public set sessionMemcachedPort(value: number) {
    this._sessionMemcachedPort = value;
  }
  public resetSessionMemcachedPort() {
    this._sessionMemcachedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMemcachedPortInput() {
    return this._sessionMemcachedPort;
  }

  // session_memcached_prefix - computed: false, optional: true, required: false
  private _sessionMemcachedPrefix?: string; 
  public get sessionMemcachedPrefix() {
    return this.getStringAttribute('session_memcached_prefix');
  }
  public set sessionMemcachedPrefix(value: string) {
    this._sessionMemcachedPrefix = value;
  }
  public resetSessionMemcachedPrefix() {
    this._sessionMemcachedPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMemcachedPrefixInput() {
    return this._sessionMemcachedPrefix;
  }

  // session_memcached_socket - computed: false, optional: true, required: false
  private _sessionMemcachedSocket?: string; 
  public get sessionMemcachedSocket() {
    return this.getStringAttribute('session_memcached_socket');
  }
  public set sessionMemcachedSocket(value: string) {
    this._sessionMemcachedSocket = value;
  }
  public resetSessionMemcachedSocket() {
    this._sessionMemcachedSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMemcachedSocketInput() {
    return this._sessionMemcachedSocket;
  }

  // session_remember - computed: true, optional: true, required: false
  private _sessionRemember?: boolean | cdktf.IResolvable; 
  public get sessionRemember() {
    return this.getBooleanAttribute('session_remember');
  }
  public set sessionRemember(value: boolean | cdktf.IResolvable) {
    this._sessionRemember = value;
  }
  public resetSessionRemember() {
    this._sessionRemember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRememberInput() {
    return this._sessionRemember;
  }

  // session_remember_absolute_timeout - computed: true, optional: true, required: false
  private _sessionRememberAbsoluteTimeout?: number; 
  public get sessionRememberAbsoluteTimeout() {
    return this.getNumberAttribute('session_remember_absolute_timeout');
  }
  public set sessionRememberAbsoluteTimeout(value: number) {
    this._sessionRememberAbsoluteTimeout = value;
  }
  public resetSessionRememberAbsoluteTimeout() {
    this._sessionRememberAbsoluteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRememberAbsoluteTimeoutInput() {
    return this._sessionRememberAbsoluteTimeout;
  }

  // session_remember_cookie_name - computed: true, optional: true, required: false
  private _sessionRememberCookieName?: string; 
  public get sessionRememberCookieName() {
    return this.getStringAttribute('session_remember_cookie_name');
  }
  public set sessionRememberCookieName(value: string) {
    this._sessionRememberCookieName = value;
  }
  public resetSessionRememberCookieName() {
    this._sessionRememberCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRememberCookieNameInput() {
    return this._sessionRememberCookieName;
  }

  // session_remember_rolling_timeout - computed: true, optional: true, required: false
  private _sessionRememberRollingTimeout?: number; 
  public get sessionRememberRollingTimeout() {
    return this.getNumberAttribute('session_remember_rolling_timeout');
  }
  public set sessionRememberRollingTimeout(value: number) {
    this._sessionRememberRollingTimeout = value;
  }
  public resetSessionRememberRollingTimeout() {
    this._sessionRememberRollingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRememberRollingTimeoutInput() {
    return this._sessionRememberRollingTimeout;
  }

  // session_request_headers - computed: false, optional: true, required: false
  private _sessionRequestHeaders?: string[]; 
  public get sessionRequestHeaders() {
    return this.getListAttribute('session_request_headers');
  }
  public set sessionRequestHeaders(value: string[]) {
    this._sessionRequestHeaders = value;
  }
  public resetSessionRequestHeaders() {
    this._sessionRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRequestHeadersInput() {
    return this._sessionRequestHeaders;
  }

  // session_response_headers - computed: false, optional: true, required: false
  private _sessionResponseHeaders?: string[]; 
  public get sessionResponseHeaders() {
    return this.getListAttribute('session_response_headers');
  }
  public set sessionResponseHeaders(value: string[]) {
    this._sessionResponseHeaders = value;
  }
  public resetSessionResponseHeaders() {
    this._sessionResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionResponseHeadersInput() {
    return this._sessionResponseHeaders;
  }

  // session_rolling_timeout - computed: true, optional: true, required: false
  private _sessionRollingTimeout?: number; 
  public get sessionRollingTimeout() {
    return this.getNumberAttribute('session_rolling_timeout');
  }
  public set sessionRollingTimeout(value: number) {
    this._sessionRollingTimeout = value;
  }
  public resetSessionRollingTimeout() {
    this._sessionRollingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRollingTimeoutInput() {
    return this._sessionRollingTimeout;
  }

  // session_secret - computed: false, optional: true, required: false
  private _sessionSecret?: string; 
  public get sessionSecret() {
    return this.getStringAttribute('session_secret');
  }
  public set sessionSecret(value: string) {
    this._sessionSecret = value;
  }
  public resetSessionSecret() {
    this._sessionSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSecretInput() {
    return this._sessionSecret;
  }

  // session_storage - computed: true, optional: true, required: false
  private _sessionStorage?: string; 
  public get sessionStorage() {
    return this.getStringAttribute('session_storage');
  }
  public set sessionStorage(value: string) {
    this._sessionStorage = value;
  }
  public resetSessionStorage() {
    this._sessionStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStorageInput() {
    return this._sessionStorage;
  }

  // session_store_metadata - computed: true, optional: true, required: false
  private _sessionStoreMetadata?: boolean | cdktf.IResolvable; 
  public get sessionStoreMetadata() {
    return this.getBooleanAttribute('session_store_metadata');
  }
  public set sessionStoreMetadata(value: boolean | cdktf.IResolvable) {
    this._sessionStoreMetadata = value;
  }
  public resetSessionStoreMetadata() {
    this._sessionStoreMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStoreMetadataInput() {
    return this._sessionStoreMetadata;
  }

  // ssl_verify - computed: true, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this.getBooleanAttribute('ssl_verify');
  }
  public set sslVerify(value: boolean | cdktf.IResolvable) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tls_client_auth_cert_id - computed: false, optional: true, required: false
  private _tlsClientAuthCertId?: string; 
  public get tlsClientAuthCertId() {
    return this.getStringAttribute('tls_client_auth_cert_id');
  }
  public set tlsClientAuthCertId(value: string) {
    this._tlsClientAuthCertId = value;
  }
  public resetTlsClientAuthCertId() {
    this._tlsClientAuthCertId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientAuthCertIdInput() {
    return this._tlsClientAuthCertId;
  }

  // tls_client_auth_ssl_verify - computed: true, optional: true, required: false
  private _tlsClientAuthSslVerify?: boolean | cdktf.IResolvable; 
  public get tlsClientAuthSslVerify() {
    return this.getBooleanAttribute('tls_client_auth_ssl_verify');
  }
  public set tlsClientAuthSslVerify(value: boolean | cdktf.IResolvable) {
    this._tlsClientAuthSslVerify = value;
  }
  public resetTlsClientAuthSslVerify() {
    this._tlsClientAuthSslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientAuthSslVerifyInput() {
    return this._tlsClientAuthSslVerify;
  }

  // token_cache_key_include_scope - computed: true, optional: true, required: false
  private _tokenCacheKeyIncludeScope?: boolean | cdktf.IResolvable; 
  public get tokenCacheKeyIncludeScope() {
    return this.getBooleanAttribute('token_cache_key_include_scope');
  }
  public set tokenCacheKeyIncludeScope(value: boolean | cdktf.IResolvable) {
    this._tokenCacheKeyIncludeScope = value;
  }
  public resetTokenCacheKeyIncludeScope() {
    this._tokenCacheKeyIncludeScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenCacheKeyIncludeScopeInput() {
    return this._tokenCacheKeyIncludeScope;
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // token_endpoint_auth_method - computed: true, optional: true, required: false
  private _tokenEndpointAuthMethod?: string; 
  public get tokenEndpointAuthMethod() {
    return this.getStringAttribute('token_endpoint_auth_method');
  }
  public set tokenEndpointAuthMethod(value: string) {
    this._tokenEndpointAuthMethod = value;
  }
  public resetTokenEndpointAuthMethod() {
    this._tokenEndpointAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointAuthMethodInput() {
    return this._tokenEndpointAuthMethod;
  }

  // token_exchange_endpoint - computed: false, optional: true, required: false
  private _tokenExchangeEndpoint?: string; 
  public get tokenExchangeEndpoint() {
    return this.getStringAttribute('token_exchange_endpoint');
  }
  public set tokenExchangeEndpoint(value: string) {
    this._tokenExchangeEndpoint = value;
  }
  public resetTokenExchangeEndpoint() {
    this._tokenExchangeEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExchangeEndpointInput() {
    return this._tokenExchangeEndpoint;
  }

  // token_headers_client - computed: false, optional: true, required: false
  private _tokenHeadersClient?: string[]; 
  public get tokenHeadersClient() {
    return this.getListAttribute('token_headers_client');
  }
  public set tokenHeadersClient(value: string[]) {
    this._tokenHeadersClient = value;
  }
  public resetTokenHeadersClient() {
    this._tokenHeadersClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenHeadersClientInput() {
    return this._tokenHeadersClient;
  }

  // token_headers_grants - computed: false, optional: true, required: false
  private _tokenHeadersGrants?: string[]; 
  public get tokenHeadersGrants() {
    return this.getListAttribute('token_headers_grants');
  }
  public set tokenHeadersGrants(value: string[]) {
    this._tokenHeadersGrants = value;
  }
  public resetTokenHeadersGrants() {
    this._tokenHeadersGrants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenHeadersGrantsInput() {
    return this._tokenHeadersGrants;
  }

  // token_headers_names - computed: false, optional: true, required: false
  private _tokenHeadersNames?: string[]; 
  public get tokenHeadersNames() {
    return this.getListAttribute('token_headers_names');
  }
  public set tokenHeadersNames(value: string[]) {
    this._tokenHeadersNames = value;
  }
  public resetTokenHeadersNames() {
    this._tokenHeadersNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenHeadersNamesInput() {
    return this._tokenHeadersNames;
  }

  // token_headers_prefix - computed: false, optional: true, required: false
  private _tokenHeadersPrefix?: string; 
  public get tokenHeadersPrefix() {
    return this.getStringAttribute('token_headers_prefix');
  }
  public set tokenHeadersPrefix(value: string) {
    this._tokenHeadersPrefix = value;
  }
  public resetTokenHeadersPrefix() {
    this._tokenHeadersPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenHeadersPrefixInput() {
    return this._tokenHeadersPrefix;
  }

  // token_headers_replay - computed: false, optional: true, required: false
  private _tokenHeadersReplay?: string[]; 
  public get tokenHeadersReplay() {
    return this.getListAttribute('token_headers_replay');
  }
  public set tokenHeadersReplay(value: string[]) {
    this._tokenHeadersReplay = value;
  }
  public resetTokenHeadersReplay() {
    this._tokenHeadersReplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenHeadersReplayInput() {
    return this._tokenHeadersReplay;
  }

  // token_headers_values - computed: false, optional: true, required: false
  private _tokenHeadersValues?: string[]; 
  public get tokenHeadersValues() {
    return this.getListAttribute('token_headers_values');
  }
  public set tokenHeadersValues(value: string[]) {
    this._tokenHeadersValues = value;
  }
  public resetTokenHeadersValues() {
    this._tokenHeadersValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenHeadersValuesInput() {
    return this._tokenHeadersValues;
  }

  // token_post_args_client - computed: false, optional: true, required: false
  private _tokenPostArgsClient?: string[]; 
  public get tokenPostArgsClient() {
    return this.getListAttribute('token_post_args_client');
  }
  public set tokenPostArgsClient(value: string[]) {
    this._tokenPostArgsClient = value;
  }
  public resetTokenPostArgsClient() {
    this._tokenPostArgsClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPostArgsClientInput() {
    return this._tokenPostArgsClient;
  }

  // token_post_args_names - computed: false, optional: true, required: false
  private _tokenPostArgsNames?: string[]; 
  public get tokenPostArgsNames() {
    return this.getListAttribute('token_post_args_names');
  }
  public set tokenPostArgsNames(value: string[]) {
    this._tokenPostArgsNames = value;
  }
  public resetTokenPostArgsNames() {
    this._tokenPostArgsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPostArgsNamesInput() {
    return this._tokenPostArgsNames;
  }

  // token_post_args_values - computed: false, optional: true, required: false
  private _tokenPostArgsValues?: string[]; 
  public get tokenPostArgsValues() {
    return this.getListAttribute('token_post_args_values');
  }
  public set tokenPostArgsValues(value: string[]) {
    this._tokenPostArgsValues = value;
  }
  public resetTokenPostArgsValues() {
    this._tokenPostArgsValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPostArgsValuesInput() {
    return this._tokenPostArgsValues;
  }

  // unauthorized_destroy_session - computed: true, optional: true, required: false
  private _unauthorizedDestroySession?: boolean | cdktf.IResolvable; 
  public get unauthorizedDestroySession() {
    return this.getBooleanAttribute('unauthorized_destroy_session');
  }
  public set unauthorizedDestroySession(value: boolean | cdktf.IResolvable) {
    this._unauthorizedDestroySession = value;
  }
  public resetUnauthorizedDestroySession() {
    this._unauthorizedDestroySession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthorizedDestroySessionInput() {
    return this._unauthorizedDestroySession;
  }

  // unauthorized_error_message - computed: true, optional: true, required: false
  private _unauthorizedErrorMessage?: string; 
  public get unauthorizedErrorMessage() {
    return this.getStringAttribute('unauthorized_error_message');
  }
  public set unauthorizedErrorMessage(value: string) {
    this._unauthorizedErrorMessage = value;
  }
  public resetUnauthorizedErrorMessage() {
    this._unauthorizedErrorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthorizedErrorMessageInput() {
    return this._unauthorizedErrorMessage;
  }

  // unauthorized_redirect_uri - computed: false, optional: true, required: false
  private _unauthorizedRedirectUri?: string[]; 
  public get unauthorizedRedirectUri() {
    return this.getListAttribute('unauthorized_redirect_uri');
  }
  public set unauthorizedRedirectUri(value: string[]) {
    this._unauthorizedRedirectUri = value;
  }
  public resetUnauthorizedRedirectUri() {
    this._unauthorizedRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthorizedRedirectUriInput() {
    return this._unauthorizedRedirectUri;
  }

  // unexpected_redirect_uri - computed: false, optional: true, required: false
  private _unexpectedRedirectUri?: string[]; 
  public get unexpectedRedirectUri() {
    return this.getListAttribute('unexpected_redirect_uri');
  }
  public set unexpectedRedirectUri(value: string[]) {
    this._unexpectedRedirectUri = value;
  }
  public resetUnexpectedRedirectUri() {
    this._unexpectedRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unexpectedRedirectUriInput() {
    return this._unexpectedRedirectUri;
  }

  // upstream_access_token_header - computed: true, optional: true, required: false
  private _upstreamAccessTokenHeader?: string; 
  public get upstreamAccessTokenHeader() {
    return this.getStringAttribute('upstream_access_token_header');
  }
  public set upstreamAccessTokenHeader(value: string) {
    this._upstreamAccessTokenHeader = value;
  }
  public resetUpstreamAccessTokenHeader() {
    this._upstreamAccessTokenHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamAccessTokenHeaderInput() {
    return this._upstreamAccessTokenHeader;
  }

  // upstream_access_token_jwk_header - computed: false, optional: true, required: false
  private _upstreamAccessTokenJwkHeader?: string; 
  public get upstreamAccessTokenJwkHeader() {
    return this.getStringAttribute('upstream_access_token_jwk_header');
  }
  public set upstreamAccessTokenJwkHeader(value: string) {
    this._upstreamAccessTokenJwkHeader = value;
  }
  public resetUpstreamAccessTokenJwkHeader() {
    this._upstreamAccessTokenJwkHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamAccessTokenJwkHeaderInput() {
    return this._upstreamAccessTokenJwkHeader;
  }

  // upstream_headers_claims - computed: false, optional: true, required: false
  private _upstreamHeadersClaims?: string[]; 
  public get upstreamHeadersClaims() {
    return this.getListAttribute('upstream_headers_claims');
  }
  public set upstreamHeadersClaims(value: string[]) {
    this._upstreamHeadersClaims = value;
  }
  public resetUpstreamHeadersClaims() {
    this._upstreamHeadersClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamHeadersClaimsInput() {
    return this._upstreamHeadersClaims;
  }

  // upstream_headers_names - computed: false, optional: true, required: false
  private _upstreamHeadersNames?: string[]; 
  public get upstreamHeadersNames() {
    return this.getListAttribute('upstream_headers_names');
  }
  public set upstreamHeadersNames(value: string[]) {
    this._upstreamHeadersNames = value;
  }
  public resetUpstreamHeadersNames() {
    this._upstreamHeadersNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamHeadersNamesInput() {
    return this._upstreamHeadersNames;
  }

  // upstream_id_token_header - computed: false, optional: true, required: false
  private _upstreamIdTokenHeader?: string; 
  public get upstreamIdTokenHeader() {
    return this.getStringAttribute('upstream_id_token_header');
  }
  public set upstreamIdTokenHeader(value: string) {
    this._upstreamIdTokenHeader = value;
  }
  public resetUpstreamIdTokenHeader() {
    this._upstreamIdTokenHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamIdTokenHeaderInput() {
    return this._upstreamIdTokenHeader;
  }

  // upstream_id_token_jwk_header - computed: false, optional: true, required: false
  private _upstreamIdTokenJwkHeader?: string; 
  public get upstreamIdTokenJwkHeader() {
    return this.getStringAttribute('upstream_id_token_jwk_header');
  }
  public set upstreamIdTokenJwkHeader(value: string) {
    this._upstreamIdTokenJwkHeader = value;
  }
  public resetUpstreamIdTokenJwkHeader() {
    this._upstreamIdTokenJwkHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamIdTokenJwkHeaderInput() {
    return this._upstreamIdTokenJwkHeader;
  }

  // upstream_introspection_header - computed: false, optional: true, required: false
  private _upstreamIntrospectionHeader?: string; 
  public get upstreamIntrospectionHeader() {
    return this.getStringAttribute('upstream_introspection_header');
  }
  public set upstreamIntrospectionHeader(value: string) {
    this._upstreamIntrospectionHeader = value;
  }
  public resetUpstreamIntrospectionHeader() {
    this._upstreamIntrospectionHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamIntrospectionHeaderInput() {
    return this._upstreamIntrospectionHeader;
  }

  // upstream_introspection_jwt_header - computed: false, optional: true, required: false
  private _upstreamIntrospectionJwtHeader?: string; 
  public get upstreamIntrospectionJwtHeader() {
    return this.getStringAttribute('upstream_introspection_jwt_header');
  }
  public set upstreamIntrospectionJwtHeader(value: string) {
    this._upstreamIntrospectionJwtHeader = value;
  }
  public resetUpstreamIntrospectionJwtHeader() {
    this._upstreamIntrospectionJwtHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamIntrospectionJwtHeaderInput() {
    return this._upstreamIntrospectionJwtHeader;
  }

  // upstream_refresh_token_header - computed: false, optional: true, required: false
  private _upstreamRefreshTokenHeader?: string; 
  public get upstreamRefreshTokenHeader() {
    return this.getStringAttribute('upstream_refresh_token_header');
  }
  public set upstreamRefreshTokenHeader(value: string) {
    this._upstreamRefreshTokenHeader = value;
  }
  public resetUpstreamRefreshTokenHeader() {
    this._upstreamRefreshTokenHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamRefreshTokenHeaderInput() {
    return this._upstreamRefreshTokenHeader;
  }

  // upstream_session_id_header - computed: false, optional: true, required: false
  private _upstreamSessionIdHeader?: string; 
  public get upstreamSessionIdHeader() {
    return this.getStringAttribute('upstream_session_id_header');
  }
  public set upstreamSessionIdHeader(value: string) {
    this._upstreamSessionIdHeader = value;
  }
  public resetUpstreamSessionIdHeader() {
    this._upstreamSessionIdHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamSessionIdHeaderInput() {
    return this._upstreamSessionIdHeader;
  }

  // upstream_user_info_header - computed: false, optional: true, required: false
  private _upstreamUserInfoHeader?: string; 
  public get upstreamUserInfoHeader() {
    return this.getStringAttribute('upstream_user_info_header');
  }
  public set upstreamUserInfoHeader(value: string) {
    this._upstreamUserInfoHeader = value;
  }
  public resetUpstreamUserInfoHeader() {
    this._upstreamUserInfoHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamUserInfoHeaderInput() {
    return this._upstreamUserInfoHeader;
  }

  // upstream_user_info_jwt_header - computed: false, optional: true, required: false
  private _upstreamUserInfoJwtHeader?: string; 
  public get upstreamUserInfoJwtHeader() {
    return this.getStringAttribute('upstream_user_info_jwt_header');
  }
  public set upstreamUserInfoJwtHeader(value: string) {
    this._upstreamUserInfoJwtHeader = value;
  }
  public resetUpstreamUserInfoJwtHeader() {
    this._upstreamUserInfoJwtHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamUserInfoJwtHeaderInput() {
    return this._upstreamUserInfoJwtHeader;
  }

  // userinfo_accept - computed: true, optional: true, required: false
  private _userinfoAccept?: string; 
  public get userinfoAccept() {
    return this.getStringAttribute('userinfo_accept');
  }
  public set userinfoAccept(value: string) {
    this._userinfoAccept = value;
  }
  public resetUserinfoAccept() {
    this._userinfoAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoAcceptInput() {
    return this._userinfoAccept;
  }

  // userinfo_endpoint - computed: false, optional: true, required: false
  private _userinfoEndpoint?: string; 
  public get userinfoEndpoint() {
    return this.getStringAttribute('userinfo_endpoint');
  }
  public set userinfoEndpoint(value: string) {
    this._userinfoEndpoint = value;
  }
  public resetUserinfoEndpoint() {
    this._userinfoEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoEndpointInput() {
    return this._userinfoEndpoint;
  }

  // userinfo_headers_client - computed: false, optional: true, required: false
  private _userinfoHeadersClient?: string[]; 
  public get userinfoHeadersClient() {
    return this.getListAttribute('userinfo_headers_client');
  }
  public set userinfoHeadersClient(value: string[]) {
    this._userinfoHeadersClient = value;
  }
  public resetUserinfoHeadersClient() {
    this._userinfoHeadersClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoHeadersClientInput() {
    return this._userinfoHeadersClient;
  }

  // userinfo_headers_names - computed: false, optional: true, required: false
  private _userinfoHeadersNames?: string[]; 
  public get userinfoHeadersNames() {
    return this.getListAttribute('userinfo_headers_names');
  }
  public set userinfoHeadersNames(value: string[]) {
    this._userinfoHeadersNames = value;
  }
  public resetUserinfoHeadersNames() {
    this._userinfoHeadersNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoHeadersNamesInput() {
    return this._userinfoHeadersNames;
  }

  // userinfo_headers_values - computed: false, optional: true, required: false
  private _userinfoHeadersValues?: string[]; 
  public get userinfoHeadersValues() {
    return this.getListAttribute('userinfo_headers_values');
  }
  public set userinfoHeadersValues(value: string[]) {
    this._userinfoHeadersValues = value;
  }
  public resetUserinfoHeadersValues() {
    this._userinfoHeadersValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoHeadersValuesInput() {
    return this._userinfoHeadersValues;
  }

  // userinfo_query_args_client - computed: false, optional: true, required: false
  private _userinfoQueryArgsClient?: string[]; 
  public get userinfoQueryArgsClient() {
    return this.getListAttribute('userinfo_query_args_client');
  }
  public set userinfoQueryArgsClient(value: string[]) {
    this._userinfoQueryArgsClient = value;
  }
  public resetUserinfoQueryArgsClient() {
    this._userinfoQueryArgsClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoQueryArgsClientInput() {
    return this._userinfoQueryArgsClient;
  }

  // userinfo_query_args_names - computed: false, optional: true, required: false
  private _userinfoQueryArgsNames?: string[]; 
  public get userinfoQueryArgsNames() {
    return this.getListAttribute('userinfo_query_args_names');
  }
  public set userinfoQueryArgsNames(value: string[]) {
    this._userinfoQueryArgsNames = value;
  }
  public resetUserinfoQueryArgsNames() {
    this._userinfoQueryArgsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoQueryArgsNamesInput() {
    return this._userinfoQueryArgsNames;
  }

  // userinfo_query_args_values - computed: false, optional: true, required: false
  private _userinfoQueryArgsValues?: string[]; 
  public get userinfoQueryArgsValues() {
    return this.getListAttribute('userinfo_query_args_values');
  }
  public set userinfoQueryArgsValues(value: string[]) {
    this._userinfoQueryArgsValues = value;
  }
  public resetUserinfoQueryArgsValues() {
    this._userinfoQueryArgsValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoQueryArgsValuesInput() {
    return this._userinfoQueryArgsValues;
  }

  // using_pseudo_issuer - computed: true, optional: true, required: false
  private _usingPseudoIssuer?: boolean | cdktf.IResolvable; 
  public get usingPseudoIssuer() {
    return this.getBooleanAttribute('using_pseudo_issuer');
  }
  public set usingPseudoIssuer(value: boolean | cdktf.IResolvable) {
    this._usingPseudoIssuer = value;
  }
  public resetUsingPseudoIssuer() {
    this._usingPseudoIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingPseudoIssuerInput() {
    return this._usingPseudoIssuer;
  }

  // verify_claims - computed: true, optional: true, required: false
  private _verifyClaims?: boolean | cdktf.IResolvable; 
  public get verifyClaims() {
    return this.getBooleanAttribute('verify_claims');
  }
  public set verifyClaims(value: boolean | cdktf.IResolvable) {
    this._verifyClaims = value;
  }
  public resetVerifyClaims() {
    this._verifyClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyClaimsInput() {
    return this._verifyClaims;
  }

  // verify_nonce - computed: true, optional: true, required: false
  private _verifyNonce?: boolean | cdktf.IResolvable; 
  public get verifyNonce() {
    return this.getBooleanAttribute('verify_nonce');
  }
  public set verifyNonce(value: boolean | cdktf.IResolvable) {
    this._verifyNonce = value;
  }
  public resetVerifyNonce() {
    this._verifyNonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyNonceInput() {
    return this._verifyNonce;
  }

  // verify_parameters - computed: true, optional: true, required: false
  private _verifyParameters?: boolean | cdktf.IResolvable; 
  public get verifyParameters() {
    return this.getBooleanAttribute('verify_parameters');
  }
  public set verifyParameters(value: boolean | cdktf.IResolvable) {
    this._verifyParameters = value;
  }
  public resetVerifyParameters() {
    this._verifyParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyParametersInput() {
    return this._verifyParameters;
  }

  // verify_signature - computed: true, optional: true, required: false
  private _verifySignature?: boolean | cdktf.IResolvable; 
  public get verifySignature() {
    return this.getBooleanAttribute('verify_signature');
  }
  public set verifySignature(value: boolean | cdktf.IResolvable) {
    this._verifySignature = value;
  }
  public resetVerifySignature() {
    this._verifySignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySignatureInput() {
    return this._verifySignature;
  }
}
export interface GatewayPluginOpenidConnectOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#access GatewayPluginOpenidConnect#access}
  */
  readonly access?: string[];
}

export function gatewayPluginOpenidConnectOrderingAfterToTerraform(struct?: GatewayPluginOpenidConnectOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginOpenidConnectOrderingAfterToHclTerraform(struct?: GatewayPluginOpenidConnectOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpenidConnectOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpenidConnectOrderingAfter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOpenidConnectOrderingAfter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginOpenidConnectOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#access GatewayPluginOpenidConnect#access}
  */
  readonly access?: string[];
}

export function gatewayPluginOpenidConnectOrderingBeforeToTerraform(struct?: GatewayPluginOpenidConnectOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginOpenidConnectOrderingBeforeToHclTerraform(struct?: GatewayPluginOpenidConnectOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpenidConnectOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpenidConnectOrderingBefore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOpenidConnectOrderingBefore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginOpenidConnectOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#after GatewayPluginOpenidConnect#after}
  */
  readonly after?: GatewayPluginOpenidConnectOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#before GatewayPluginOpenidConnect#before}
  */
  readonly before?: GatewayPluginOpenidConnectOrderingBefore;
}

export function gatewayPluginOpenidConnectOrderingToTerraform(struct?: GatewayPluginOpenidConnectOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginOpenidConnectOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginOpenidConnectOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginOpenidConnectOrderingToHclTerraform(struct?: GatewayPluginOpenidConnectOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginOpenidConnectOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginOpenidConnectOrderingAfter",
    },
    before: {
      value: gatewayPluginOpenidConnectOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginOpenidConnectOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpenidConnectOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpenidConnectOrdering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after?.internalValue;
    }
    if (this._before?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.before = this._before?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOpenidConnectOrdering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after.internalValue = undefined;
      this._before.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._after.internalValue = value.after;
      this._before.internalValue = value.before;
    }
  }

  // after - computed: true, optional: true, required: false
  private _after = new GatewayPluginOpenidConnectOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginOpenidConnectOrderingAfter) {
    this._after.internalValue = value;
  }
  public resetAfter() {
    this._after.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after.internalValue;
  }

  // before - computed: true, optional: true, required: false
  private _before = new GatewayPluginOpenidConnectOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginOpenidConnectOrderingBefore) {
    this._before.internalValue = value;
  }
  public resetBefore() {
    this._before.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before.internalValue;
  }
}
export interface GatewayPluginOpenidConnectPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#id GatewayPluginOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#name GatewayPluginOpenidConnect#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#path GatewayPluginOpenidConnect#path}
  */
  readonly path?: string;
}

export function gatewayPluginOpenidConnectPartialsToTerraform(struct?: GatewayPluginOpenidConnectPartials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function gatewayPluginOpenidConnectPartialsToHclTerraform(struct?: GatewayPluginOpenidConnectPartials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpenidConnectPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginOpenidConnectPartials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOpenidConnectPartials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._path = value.path;
    }
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
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
}

export class GatewayPluginOpenidConnectPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginOpenidConnectPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginOpenidConnectPartialsOutputReference {
    return new GatewayPluginOpenidConnectPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginOpenidConnectRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#id GatewayPluginOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginOpenidConnectRouteToTerraform(struct?: GatewayPluginOpenidConnectRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginOpenidConnectRouteToHclTerraform(struct?: GatewayPluginOpenidConnectRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpenidConnectRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpenidConnectRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOpenidConnectRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}
export interface GatewayPluginOpenidConnectService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#id GatewayPluginOpenidConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginOpenidConnectServiceToTerraform(struct?: GatewayPluginOpenidConnectService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginOpenidConnectServiceToHclTerraform(struct?: GatewayPluginOpenidConnectService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpenidConnectServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpenidConnectService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOpenidConnectService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect konnect_gateway_plugin_openid_connect}
*/
export class GatewayPluginOpenidConnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_openid_connect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginOpenidConnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginOpenidConnect to import
  * @param importFromId The id of the existing GatewayPluginOpenidConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginOpenidConnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_openid_connect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_openid_connect konnect_gateway_plugin_openid_connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginOpenidConnectConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginOpenidConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_openid_connect',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._controlPlaneId = config.controlPlaneId;
    this._createdAt = config.createdAt;
    this._enabled = config.enabled;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._ordering.internalValue = config.ordering;
    this._partials.internalValue = config.partials;
    this._protocols = config.protocols;
    this._route.internalValue = config.route;
    this._service.internalValue = config.service;
    this._tags = config.tags;
    this._updatedAt = config.updatedAt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config = new GatewayPluginOpenidConnectConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginOpenidConnectConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // control_plane_id - computed: false, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // ordering - computed: true, optional: true, required: false
  private _ordering = new GatewayPluginOpenidConnectOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginOpenidConnectOrdering) {
    this._ordering.internalValue = value;
  }
  public resetOrdering() {
    this._ordering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderingInput() {
    return this._ordering.internalValue;
  }

  // partials - computed: false, optional: true, required: false
  private _partials = new GatewayPluginOpenidConnectPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginOpenidConnectPartials[] | cdktf.IResolvable) {
    this._partials.internalValue = value;
  }
  public resetPartials() {
    this._partials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialsInput() {
    return this._partials.internalValue;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // route - computed: true, optional: true, required: false
  private _route = new GatewayPluginOpenidConnectRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginOpenidConnectRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // service - computed: true, optional: true, required: false
  private _service = new GatewayPluginOpenidConnectServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginOpenidConnectService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: gatewayPluginOpenidConnectConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginOpenidConnectOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginOpenidConnectPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginOpenidConnectRouteToTerraform(this._route.internalValue),
      service: gatewayPluginOpenidConnectServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginOpenidConnectConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOpenidConnectConfigA",
      },
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.numberToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ordering: {
        value: gatewayPluginOpenidConnectOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOpenidConnectOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginOpenidConnectPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginOpenidConnectPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginOpenidConnectRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOpenidConnectRoute",
      },
      service: {
        value: gatewayPluginOpenidConnectServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOpenidConnectService",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      updated_at: {
        value: cdktf.numberToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
