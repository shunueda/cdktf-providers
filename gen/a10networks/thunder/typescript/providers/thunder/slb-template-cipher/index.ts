// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_cipher
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateCipherConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_cipher#id SlbTemplateCipher#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cipher Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_cipher#name SlbTemplateCipher#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_cipher#user_tag SlbTemplateCipher#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_cipher#uuid SlbTemplateCipher#uuid}
  */
  readonly uuid?: string;
  /**
  * cipher13_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_cipher#cipher13_cfg SlbTemplateCipher#cipher13_cfg}
  */
  readonly cipher13Cfg?: SlbTemplateCipherCipher13Cfg[] | cdktf.IResolvable;
  /**
  * cipher_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_cipher#cipher_cfg SlbTemplateCipher#cipher_cfg}
  */
  readonly cipherCfg?: SlbTemplateCipherCipherCfg[] | cdktf.IResolvable;
}
export interface SlbTemplateCipherCipher13Cfg {
  /**
  * 'TLS_AES_256_GCM_SHA384': TLS_AES_256_GCM_SHA384 (0x1302); 'TLS_CHACHA20_POLY1305_SHA256': TLS_CHACHA20_POLY1305_SHA256 (0x1303); 'TLS_AES_128_GCM_SHA256': TLS_AES_128_GCM_SHA256 (0x1301);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_cipher#cipher13_suite SlbTemplateCipher#cipher13_suite}
  */
  readonly cipher13Suite?: string;
  /**
  * Cipher priority (Cipher priority (default 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_cipher#priority SlbTemplateCipher#priority}
  */
  readonly priority?: number;
}

export function slbTemplateCipherCipher13CfgToTerraform(struct?: SlbTemplateCipherCipher13Cfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher13_suite: cdktf.stringToTerraform(struct!.cipher13Suite),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function slbTemplateCipherCipher13CfgToHclTerraform(struct?: SlbTemplateCipherCipher13Cfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher13_suite: {
      value: cdktf.stringToHclTerraform(struct!.cipher13Suite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateCipherCipher13CfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateCipherCipher13Cfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipher13Suite !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipher13Suite = this._cipher13Suite;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateCipherCipher13Cfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipher13Suite = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipher13Suite = value.cipher13Suite;
      this._priority = value.priority;
    }
  }

  // cipher13_suite - computed: false, optional: true, required: false
  private _cipher13Suite?: string; 
  public get cipher13Suite() {
    return this.getStringAttribute('cipher13_suite');
  }
  public set cipher13Suite(value: string) {
    this._cipher13Suite = value;
  }
  public resetCipher13Suite() {
    this._cipher13Suite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipher13SuiteInput() {
    return this._cipher13Suite;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class SlbTemplateCipherCipher13CfgList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateCipherCipher13Cfg[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateCipherCipher13CfgOutputReference {
    return new SlbTemplateCipherCipher13CfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateCipherCipherCfg {
  /**
  * 'SSL3_RSA_DES_192_CBC3_SHA': TLS_RSA_WITH_3DES_EDE_CBC_SHA (0x000A); 'SSL3_RSA_RC4_128_MD5': TLS_RSA_WITH_RC4_128_MD5 (0x0004); 'SSL3_RSA_RC4_128_SHA': TLS_RSA_WITH_RC4_128_SHA (0x0005); 'TLS1_RSA_AES_128_SHA': TLS_RSA_WITH_AES_128_CBC_SHA (0x002F); 'TLS1_RSA_AES_256_SHA': TLS_RSA_WITH_AES_256_CBC_SHA (0x0035); 'TLS1_RSA_AES_128_SHA256': TLS_RSA_WITH_AES_128_CBC_SHA256 (0x003C); 'TLS1_RSA_AES_256_SHA256': TLS_RSA_WITH_AES_256_CBC_SHA256 (0x003D); 'TLS1_DHE_RSA_AES_128_GCM_SHA256': TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 (0x009E); 'TLS1_DHE_RSA_AES_128_SHA': TLS_DHE_RSA_WITH_AES_128_CBC_SHA (0x0033); 'TLS1_DHE_RSA_AES_128_SHA256': TLS_DHE_RSA_WITH_AES_128_CBC_SHA256 (0x0067); 'TLS1_DHE_RSA_AES_256_GCM_SHA384': TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 (0x009F); 'TLS1_DHE_RSA_AES_256_SHA': TLS_DHE_RSA_WITH_AES_256_CBC_SHA (0x0039); 'TLS1_DHE_RSA_AES_256_SHA256': TLS_DHE_RSA_WITH_AES_256_CBC_SHA256 (0x006B); 'TLS1_ECDHE_ECDSA_AES_128_GCM_SHA256': TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 (0xC02B); 'TLS1_ECDHE_ECDSA_AES_128_SHA': TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA (0xC009); 'TLS1_ECDHE_ECDSA_AES_128_SHA256': TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256 (0xC023); 'TLS1_ECDHE_ECDSA_AES_256_GCM_SHA384': TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 (0xC02C); 'TLS1_ECDHE_ECDSA_AES_256_SHA': TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA (0xC00A); 'TLS1_ECDHE_RSA_AES_128_GCM_SHA256': TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 (0xC02F); 'TLS1_ECDHE_RSA_AES_128_SHA': TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA (0xC013); 'TLS1_ECDHE_RSA_AES_128_SHA256': TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256 (0xC027); 'TLS1_ECDHE_RSA_AES_256_GCM_SHA384': TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (0xC030); 'TLS1_ECDHE_RSA_AES_256_SHA': TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA (0xC014); 'TLS1_RSA_AES_128_GCM_SHA256': TLS_RSA_WITH_AES_128_GCM_SHA256 (0x009C); 'TLS1_RSA_AES_256_GCM_SHA384': TLS_RSA_WITH_AES_256_GCM_SHA384 (0x009D); 'TLS1_ECDHE_RSA_AES_256_SHA384': TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 (0xC028); 'TLS1_ECDHE_ECDSA_AES_256_SHA384': TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384 (0xC024); 'TLS1_ECDHE_RSA_CHACHA20_POLY1305_SHA256': TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 (0xCCA8); 'TLS1_ECDHE_ECDSA_CHACHA20_POLY1305_SHA256': TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 (0xCCA9); 'TLS1_DHE_RSA_CHACHA20_POLY1305_SHA256': TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256 (0xCCAA); 'TLS1_ECDHE_SM2_WITH_SMS4_SM3': TLS_ECDHE_SM2_WITH_SMS4_SM3 (0xE102); 'TLS1_ECDHE_SM2_WITH_SMS4_SHA256': TLS_ECDHE_SM2_WITH_SMS4_SHA256 (0xE105); 'TLS1_ECDHE_SM2_WITH_SMS4_GCM_SM3': TLS_ECDHE_SM2_WITH_SMS4_GCM_SM3 (0xE107);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_cipher#cipher_suite SlbTemplateCipher#cipher_suite}
  */
  readonly cipherSuite?: string;
  /**
  * Cipher priority (Cipher priority (default 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_cipher#priority SlbTemplateCipher#priority}
  */
  readonly priority?: number;
}

export function slbTemplateCipherCipherCfgToTerraform(struct?: SlbTemplateCipherCipherCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suite: cdktf.stringToTerraform(struct!.cipherSuite),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function slbTemplateCipherCipherCfgToHclTerraform(struct?: SlbTemplateCipherCipherCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suite: {
      value: cdktf.stringToHclTerraform(struct!.cipherSuite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateCipherCipherCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateCipherCipherCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuite !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuite = this._cipherSuite;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateCipherCipherCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipherSuite = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipherSuite = value.cipherSuite;
      this._priority = value.priority;
    }
  }

  // cipher_suite - computed: false, optional: true, required: false
  private _cipherSuite?: string; 
  public get cipherSuite() {
    return this.getStringAttribute('cipher_suite');
  }
  public set cipherSuite(value: string) {
    this._cipherSuite = value;
  }
  public resetCipherSuite() {
    this._cipherSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuiteInput() {
    return this._cipherSuite;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class SlbTemplateCipherCipherCfgList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateCipherCipherCfg[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateCipherCipherCfgOutputReference {
    return new SlbTemplateCipherCipherCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_cipher thunder_slb_template_cipher}
*/
export class SlbTemplateCipher extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_cipher";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateCipher resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateCipher to import
  * @param importFromId The id of the existing SlbTemplateCipher that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_cipher#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateCipher to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_cipher", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_cipher thunder_slb_template_cipher} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateCipherConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateCipherConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_cipher',
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
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._cipher13Cfg.internalValue = config.cipher13Cfg;
    this._cipherCfg.internalValue = config.cipherCfg;
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

  // cipher13_cfg - computed: false, optional: true, required: false
  private _cipher13Cfg = new SlbTemplateCipherCipher13CfgList(this, "cipher13_cfg", false);
  public get cipher13Cfg() {
    return this._cipher13Cfg;
  }
  public putCipher13Cfg(value: SlbTemplateCipherCipher13Cfg[] | cdktf.IResolvable) {
    this._cipher13Cfg.internalValue = value;
  }
  public resetCipher13Cfg() {
    this._cipher13Cfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipher13CfgInput() {
    return this._cipher13Cfg.internalValue;
  }

  // cipher_cfg - computed: false, optional: true, required: false
  private _cipherCfg = new SlbTemplateCipherCipherCfgList(this, "cipher_cfg", false);
  public get cipherCfg() {
    return this._cipherCfg;
  }
  public putCipherCfg(value: SlbTemplateCipherCipherCfg[] | cdktf.IResolvable) {
    this._cipherCfg.internalValue = value;
  }
  public resetCipherCfg() {
    this._cipherCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherCfgInput() {
    return this._cipherCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      cipher13_cfg: cdktf.listMapper(slbTemplateCipherCipher13CfgToTerraform, true)(this._cipher13Cfg.internalValue),
      cipher_cfg: cdktf.listMapper(slbTemplateCipherCipherCfgToTerraform, true)(this._cipherCfg.internalValue),
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
      cipher13_cfg: {
        value: cdktf.listMapperHcl(slbTemplateCipherCipher13CfgToHclTerraform, true)(this._cipher13Cfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateCipherCipher13CfgList",
      },
      cipher_cfg: {
        value: cdktf.listMapperHcl(slbTemplateCipherCipherCfgToHclTerraform, true)(this._cipherCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateCipherCipherCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
