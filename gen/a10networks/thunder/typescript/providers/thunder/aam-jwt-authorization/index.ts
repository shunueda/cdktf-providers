// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamJwtAuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the exp claim is required for JWT authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization#exp_claim_requried AamJwtAuthorization#exp_claim_requried}
  */
  readonly expClaimRequried?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization#id AamJwtAuthorization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable caching authorized JWT token and skip verification and authorization for cached tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization#jwt_cache_enable AamJwtAuthorization#jwt_cache_enable}
  */
  readonly jwtCacheEnable?: number;
  /**
  * Specify the default token expiration if exp claim is not available (default 1800)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization#jwt_exp_default AamJwtAuthorization#jwt_exp_default}
  */
  readonly jwtExpDefault?: number;
  /**
  * Specify JWT token will not be stripped while forwarding client request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization#jwt_forwarding AamJwtAuthorization#jwt_forwarding}
  */
  readonly jwtForwarding?: number;
  /**
  * '0': log disable; '1': only log authorzation fail (default); '2': only log authorization success; '3': log all;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization#log_level AamJwtAuthorization#log_level}
  */
  readonly logLevel?: string;
  /**
  * Specify JWT authorization template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization#name AamJwtAuthorization#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization#packet_capture_template AamJwtAuthorization#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization#user_tag AamJwtAuthorization#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization#uuid AamJwtAuthorization#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify the certificate to verify JWT token signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization#verification_cert AamJwtAuthorization#verification_cert}
  */
  readonly verificationCert?: string;
  /**
  * Specify the jwks file to verify JWT token signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization#verification_jwks AamJwtAuthorization#verification_jwks}
  */
  readonly verificationJwks?: string;
  /**
  * Specify secret for verify JWT token signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization#verification_secret AamJwtAuthorization#verification_secret}
  */
  readonly verificationSecret?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization#sampling_enable AamJwtAuthorization#sampling_enable}
  */
  readonly samplingEnable?: AamJwtAuthorizationSamplingEnable[] | cdktf.IResolvable;
}
export interface AamJwtAuthorizationSamplingEnable {
  /**
  * 'all': all; 'jwt-request': JWT Request; 'jwt-authorize-success': JWT Authorize Success; 'jwt-authorize-failure': JWT Authorize Failure; 'jwt-missing-token': JWT Missing Token; 'jwt-missing-claim': JWT Missing Claim; 'jwt-token-expired': JWT Token Expired; 'jwt-signature-failure': JWT Signature Failure; 'jwt-other-error': JWT Other Error;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization#counters1 AamJwtAuthorization#counters1}
  */
  readonly counters1?: string;
}

export function aamJwtAuthorizationSamplingEnableToTerraform(struct?: AamJwtAuthorizationSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamJwtAuthorizationSamplingEnableToHclTerraform(struct?: AamJwtAuthorizationSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamJwtAuthorizationSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamJwtAuthorizationSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamJwtAuthorizationSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class AamJwtAuthorizationSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamJwtAuthorizationSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamJwtAuthorizationSamplingEnableOutputReference {
    return new AamJwtAuthorizationSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization thunder_aam_jwt_authorization}
*/
export class AamJwtAuthorization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_jwt_authorization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamJwtAuthorization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamJwtAuthorization to import
  * @param importFromId The id of the existing AamJwtAuthorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamJwtAuthorization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_jwt_authorization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_jwt_authorization thunder_aam_jwt_authorization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamJwtAuthorizationConfig
  */
  public constructor(scope: Construct, id: string, config: AamJwtAuthorizationConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_jwt_authorization',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expClaimRequried = config.expClaimRequried;
    this._id = config.id;
    this._jwtCacheEnable = config.jwtCacheEnable;
    this._jwtExpDefault = config.jwtExpDefault;
    this._jwtForwarding = config.jwtForwarding;
    this._logLevel = config.logLevel;
    this._name = config.name;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._verificationCert = config.verificationCert;
    this._verificationJwks = config.verificationJwks;
    this._verificationSecret = config.verificationSecret;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exp_claim_requried - computed: false, optional: true, required: false
  private _expClaimRequried?: number; 
  public get expClaimRequried() {
    return this.getNumberAttribute('exp_claim_requried');
  }
  public set expClaimRequried(value: number) {
    this._expClaimRequried = value;
  }
  public resetExpClaimRequried() {
    this._expClaimRequried = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expClaimRequriedInput() {
    return this._expClaimRequried;
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

  // jwt_cache_enable - computed: false, optional: true, required: false
  private _jwtCacheEnable?: number; 
  public get jwtCacheEnable() {
    return this.getNumberAttribute('jwt_cache_enable');
  }
  public set jwtCacheEnable(value: number) {
    this._jwtCacheEnable = value;
  }
  public resetJwtCacheEnable() {
    this._jwtCacheEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtCacheEnableInput() {
    return this._jwtCacheEnable;
  }

  // jwt_exp_default - computed: false, optional: true, required: false
  private _jwtExpDefault?: number; 
  public get jwtExpDefault() {
    return this.getNumberAttribute('jwt_exp_default');
  }
  public set jwtExpDefault(value: number) {
    this._jwtExpDefault = value;
  }
  public resetJwtExpDefault() {
    this._jwtExpDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtExpDefaultInput() {
    return this._jwtExpDefault;
  }

  // jwt_forwarding - computed: false, optional: true, required: false
  private _jwtForwarding?: number; 
  public get jwtForwarding() {
    return this.getNumberAttribute('jwt_forwarding');
  }
  public set jwtForwarding(value: number) {
    this._jwtForwarding = value;
  }
  public resetJwtForwarding() {
    this._jwtForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtForwardingInput() {
    return this._jwtForwarding;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
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

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
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

  // verification_cert - computed: false, optional: true, required: false
  private _verificationCert?: string; 
  public get verificationCert() {
    return this.getStringAttribute('verification_cert');
  }
  public set verificationCert(value: string) {
    this._verificationCert = value;
  }
  public resetVerificationCert() {
    this._verificationCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationCertInput() {
    return this._verificationCert;
  }

  // verification_jwks - computed: false, optional: true, required: false
  private _verificationJwks?: string; 
  public get verificationJwks() {
    return this.getStringAttribute('verification_jwks');
  }
  public set verificationJwks(value: string) {
    this._verificationJwks = value;
  }
  public resetVerificationJwks() {
    this._verificationJwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationJwksInput() {
    return this._verificationJwks;
  }

  // verification_secret - computed: false, optional: true, required: false
  private _verificationSecret?: string; 
  public get verificationSecret() {
    return this.getStringAttribute('verification_secret');
  }
  public set verificationSecret(value: string) {
    this._verificationSecret = value;
  }
  public resetVerificationSecret() {
    this._verificationSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationSecretInput() {
    return this._verificationSecret;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamJwtAuthorizationSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamJwtAuthorizationSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exp_claim_requried: cdktf.numberToTerraform(this._expClaimRequried),
      id: cdktf.stringToTerraform(this._id),
      jwt_cache_enable: cdktf.numberToTerraform(this._jwtCacheEnable),
      jwt_exp_default: cdktf.numberToTerraform(this._jwtExpDefault),
      jwt_forwarding: cdktf.numberToTerraform(this._jwtForwarding),
      log_level: cdktf.stringToTerraform(this._logLevel),
      name: cdktf.stringToTerraform(this._name),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      verification_cert: cdktf.stringToTerraform(this._verificationCert),
      verification_jwks: cdktf.stringToTerraform(this._verificationJwks),
      verification_secret: cdktf.stringToTerraform(this._verificationSecret),
      sampling_enable: cdktf.listMapper(aamJwtAuthorizationSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exp_claim_requried: {
        value: cdktf.numberToHclTerraform(this._expClaimRequried),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_cache_enable: {
        value: cdktf.numberToHclTerraform(this._jwtCacheEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jwt_exp_default: {
        value: cdktf.numberToHclTerraform(this._jwtExpDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jwt_forwarding: {
        value: cdktf.numberToHclTerraform(this._jwtForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
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
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
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
      verification_cert: {
        value: cdktf.stringToHclTerraform(this._verificationCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verification_jwks: {
        value: cdktf.stringToHclTerraform(this._verificationJwks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verification_secret: {
        value: cdktf.stringToHclTerraform(this._verificationSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(aamJwtAuthorizationSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamJwtAuthorizationSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
