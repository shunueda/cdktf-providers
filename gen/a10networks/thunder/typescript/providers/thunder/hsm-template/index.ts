// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HsmTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify Enroll Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#enroll_timeout HsmTemplate#enroll_timeout}
  */
  readonly enrollTimeout?: number;
  /**
  * Specify Thales HSM Health Check Interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#health_check_interval HsmTemplate#health_check_interval}
  */
  readonly healthCheckInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#id HsmTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify HSM Passphrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#password HsmTemplate#password}
  */
  readonly password?: number;
  /**
  * Password (minimum 4 characters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#password_string HsmTemplate#password_string}
  */
  readonly passwordString?: string;
  /**
  * Specify Protection Method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#protection HsmTemplate#protection}
  */
  readonly protection?: number;
  /**
  * Module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#protection_module HsmTemplate#protection_module}
  */
  readonly protectionModule?: number;
  /**
  * Operator Card Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#protection_ocs HsmTemplate#protection_ocs}
  */
  readonly protectionOcs?: number;
  /**
  * Hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#protection_softcard_hash HsmTemplate#protection_softcard_hash}
  */
  readonly protectionSoftcardHash?: string;
  /**
  * Specify Thales Remote File System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#rfs_ip HsmTemplate#rfs_ip}
  */
  readonly rfsIp?: string;
  /**
  * Specify Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#rfs_port HsmTemplate#rfs_port}
  */
  readonly rfsPort?: number;
  /**
  * Security World Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#sec_world HsmTemplate#sec_world}
  */
  readonly secWorld?: string;
  /**
  * Softcard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#softcard HsmTemplate#softcard}
  */
  readonly softcard?: number;
  /**
  * 'softHSM': software implementation of a cryptographic store;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#softhsm_enum HsmTemplate#softhsm_enum}
  */
  readonly softhsmEnum?: string;
  /**
  * Specify Template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#template_name HsmTemplate#template_name}
  */
  readonly templateName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#user_tag HsmTemplate#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#uuid HsmTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify number of workers for each data CPU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#worker HsmTemplate#worker}
  */
  readonly worker?: number;
  /**
  * hsm_dev block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#hsm_dev HsmTemplate#hsm_dev}
  */
  readonly hsmDev?: HsmTemplateHsmDev[] | cdktf.IResolvable;
}
export interface HsmTemplateHsmDev {
  /**
  * Specify HSM Device IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#hsm_ip HsmTemplate#hsm_ip}
  */
  readonly hsmIp?: string;
  /**
  * Specify Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#hsm_port HsmTemplate#hsm_port}
  */
  readonly hsmPort?: number;
  /**
  * Specify Priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#hsm_priority HsmTemplate#hsm_priority}
  */
  readonly hsmPriority?: number;
}

export function hsmTemplateHsmDevToTerraform(struct?: HsmTemplateHsmDev | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hsm_ip: cdktf.stringToTerraform(struct!.hsmIp),
    hsm_port: cdktf.numberToTerraform(struct!.hsmPort),
    hsm_priority: cdktf.numberToTerraform(struct!.hsmPriority),
  }
}


export function hsmTemplateHsmDevToHclTerraform(struct?: HsmTemplateHsmDev | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hsm_ip: {
      value: cdktf.stringToHclTerraform(struct!.hsmIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hsm_port: {
      value: cdktf.numberToHclTerraform(struct!.hsmPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hsm_priority: {
      value: cdktf.numberToHclTerraform(struct!.hsmPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HsmTemplateHsmDevOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HsmTemplateHsmDev | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hsmIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsmIp = this._hsmIp;
    }
    if (this._hsmPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsmPort = this._hsmPort;
    }
    if (this._hsmPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsmPriority = this._hsmPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HsmTemplateHsmDev | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hsmIp = undefined;
      this._hsmPort = undefined;
      this._hsmPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hsmIp = value.hsmIp;
      this._hsmPort = value.hsmPort;
      this._hsmPriority = value.hsmPriority;
    }
  }

  // hsm_ip - computed: false, optional: true, required: false
  private _hsmIp?: string; 
  public get hsmIp() {
    return this.getStringAttribute('hsm_ip');
  }
  public set hsmIp(value: string) {
    this._hsmIp = value;
  }
  public resetHsmIp() {
    this._hsmIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmIpInput() {
    return this._hsmIp;
  }

  // hsm_port - computed: false, optional: true, required: false
  private _hsmPort?: number; 
  public get hsmPort() {
    return this.getNumberAttribute('hsm_port');
  }
  public set hsmPort(value: number) {
    this._hsmPort = value;
  }
  public resetHsmPort() {
    this._hsmPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmPortInput() {
    return this._hsmPort;
  }

  // hsm_priority - computed: false, optional: true, required: false
  private _hsmPriority?: number; 
  public get hsmPriority() {
    return this.getNumberAttribute('hsm_priority');
  }
  public set hsmPriority(value: number) {
    this._hsmPriority = value;
  }
  public resetHsmPriority() {
    this._hsmPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmPriorityInput() {
    return this._hsmPriority;
  }
}

export class HsmTemplateHsmDevList extends cdktf.ComplexList {
  public internalValue? : HsmTemplateHsmDev[] | cdktf.IResolvable

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
  public get(index: number): HsmTemplateHsmDevOutputReference {
    return new HsmTemplateHsmDevOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template thunder_hsm_template}
*/
export class HsmTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_hsm_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HsmTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HsmTemplate to import
  * @param importFromId The id of the existing HsmTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HsmTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_hsm_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hsm_template thunder_hsm_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HsmTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: HsmTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_hsm_template',
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
    this._enrollTimeout = config.enrollTimeout;
    this._healthCheckInterval = config.healthCheckInterval;
    this._id = config.id;
    this._password = config.password;
    this._passwordString = config.passwordString;
    this._protection = config.protection;
    this._protectionModule = config.protectionModule;
    this._protectionOcs = config.protectionOcs;
    this._protectionSoftcardHash = config.protectionSoftcardHash;
    this._rfsIp = config.rfsIp;
    this._rfsPort = config.rfsPort;
    this._secWorld = config.secWorld;
    this._softcard = config.softcard;
    this._softhsmEnum = config.softhsmEnum;
    this._templateName = config.templateName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._worker = config.worker;
    this._hsmDev.internalValue = config.hsmDev;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enroll_timeout - computed: false, optional: true, required: false
  private _enrollTimeout?: number; 
  public get enrollTimeout() {
    return this.getNumberAttribute('enroll_timeout');
  }
  public set enrollTimeout(value: number) {
    this._enrollTimeout = value;
  }
  public resetEnrollTimeout() {
    this._enrollTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollTimeoutInput() {
    return this._enrollTimeout;
  }

  // health_check_interval - computed: false, optional: true, required: false
  private _healthCheckInterval?: number; 
  public get healthCheckInterval() {
    return this.getNumberAttribute('health_check_interval');
  }
  public set healthCheckInterval(value: number) {
    this._healthCheckInterval = value;
  }
  public resetHealthCheckInterval() {
    this._healthCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalInput() {
    return this._healthCheckInterval;
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

  // password - computed: false, optional: true, required: false
  private _password?: number; 
  public get password() {
    return this.getNumberAttribute('password');
  }
  public set password(value: number) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_string - computed: false, optional: true, required: false
  private _passwordString?: string; 
  public get passwordString() {
    return this.getStringAttribute('password_string');
  }
  public set passwordString(value: string) {
    this._passwordString = value;
  }
  public resetPasswordString() {
    this._passwordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordStringInput() {
    return this._passwordString;
  }

  // protection - computed: false, optional: true, required: false
  private _protection?: number; 
  public get protection() {
    return this.getNumberAttribute('protection');
  }
  public set protection(value: number) {
    this._protection = value;
  }
  public resetProtection() {
    this._protection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionInput() {
    return this._protection;
  }

  // protection_module - computed: false, optional: true, required: false
  private _protectionModule?: number; 
  public get protectionModule() {
    return this.getNumberAttribute('protection_module');
  }
  public set protectionModule(value: number) {
    this._protectionModule = value;
  }
  public resetProtectionModule() {
    this._protectionModule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModuleInput() {
    return this._protectionModule;
  }

  // protection_ocs - computed: false, optional: true, required: false
  private _protectionOcs?: number; 
  public get protectionOcs() {
    return this.getNumberAttribute('protection_ocs');
  }
  public set protectionOcs(value: number) {
    this._protectionOcs = value;
  }
  public resetProtectionOcs() {
    this._protectionOcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionOcsInput() {
    return this._protectionOcs;
  }

  // protection_softcard_hash - computed: false, optional: true, required: false
  private _protectionSoftcardHash?: string; 
  public get protectionSoftcardHash() {
    return this.getStringAttribute('protection_softcard_hash');
  }
  public set protectionSoftcardHash(value: string) {
    this._protectionSoftcardHash = value;
  }
  public resetProtectionSoftcardHash() {
    this._protectionSoftcardHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionSoftcardHashInput() {
    return this._protectionSoftcardHash;
  }

  // rfs_ip - computed: false, optional: true, required: false
  private _rfsIp?: string; 
  public get rfsIp() {
    return this.getStringAttribute('rfs_ip');
  }
  public set rfsIp(value: string) {
    this._rfsIp = value;
  }
  public resetRfsIp() {
    this._rfsIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfsIpInput() {
    return this._rfsIp;
  }

  // rfs_port - computed: false, optional: true, required: false
  private _rfsPort?: number; 
  public get rfsPort() {
    return this.getNumberAttribute('rfs_port');
  }
  public set rfsPort(value: number) {
    this._rfsPort = value;
  }
  public resetRfsPort() {
    this._rfsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfsPortInput() {
    return this._rfsPort;
  }

  // sec_world - computed: false, optional: true, required: false
  private _secWorld?: string; 
  public get secWorld() {
    return this.getStringAttribute('sec_world');
  }
  public set secWorld(value: string) {
    this._secWorld = value;
  }
  public resetSecWorld() {
    this._secWorld = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secWorldInput() {
    return this._secWorld;
  }

  // softcard - computed: false, optional: true, required: false
  private _softcard?: number; 
  public get softcard() {
    return this.getNumberAttribute('softcard');
  }
  public set softcard(value: number) {
    this._softcard = value;
  }
  public resetSoftcard() {
    this._softcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softcardInput() {
    return this._softcard;
  }

  // softhsm_enum - computed: false, optional: true, required: false
  private _softhsmEnum?: string; 
  public get softhsmEnum() {
    return this.getStringAttribute('softhsm_enum');
  }
  public set softhsmEnum(value: string) {
    this._softhsmEnum = value;
  }
  public resetSofthsmEnum() {
    this._softhsmEnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softhsmEnumInput() {
    return this._softhsmEnum;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
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

  // worker - computed: false, optional: true, required: false
  private _worker?: number; 
  public get worker() {
    return this.getNumberAttribute('worker');
  }
  public set worker(value: number) {
    this._worker = value;
  }
  public resetWorker() {
    this._worker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInput() {
    return this._worker;
  }

  // hsm_dev - computed: false, optional: true, required: false
  private _hsmDev = new HsmTemplateHsmDevList(this, "hsm_dev", false);
  public get hsmDev() {
    return this._hsmDev;
  }
  public putHsmDev(value: HsmTemplateHsmDev[] | cdktf.IResolvable) {
    this._hsmDev.internalValue = value;
  }
  public resetHsmDev() {
    this._hsmDev.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmDevInput() {
    return this._hsmDev.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enroll_timeout: cdktf.numberToTerraform(this._enrollTimeout),
      health_check_interval: cdktf.numberToTerraform(this._healthCheckInterval),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.numberToTerraform(this._password),
      password_string: cdktf.stringToTerraform(this._passwordString),
      protection: cdktf.numberToTerraform(this._protection),
      protection_module: cdktf.numberToTerraform(this._protectionModule),
      protection_ocs: cdktf.numberToTerraform(this._protectionOcs),
      protection_softcard_hash: cdktf.stringToTerraform(this._protectionSoftcardHash),
      rfs_ip: cdktf.stringToTerraform(this._rfsIp),
      rfs_port: cdktf.numberToTerraform(this._rfsPort),
      sec_world: cdktf.stringToTerraform(this._secWorld),
      softcard: cdktf.numberToTerraform(this._softcard),
      softhsm_enum: cdktf.stringToTerraform(this._softhsmEnum),
      template_name: cdktf.stringToTerraform(this._templateName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      worker: cdktf.numberToTerraform(this._worker),
      hsm_dev: cdktf.listMapper(hsmTemplateHsmDevToTerraform, true)(this._hsmDev.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enroll_timeout: {
        value: cdktf.numberToHclTerraform(this._enrollTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_interval: {
        value: cdktf.numberToHclTerraform(this._healthCheckInterval),
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
      password: {
        value: cdktf.numberToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_string: {
        value: cdktf.stringToHclTerraform(this._passwordString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection: {
        value: cdktf.numberToHclTerraform(this._protection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protection_module: {
        value: cdktf.numberToHclTerraform(this._protectionModule),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protection_ocs: {
        value: cdktf.numberToHclTerraform(this._protectionOcs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protection_softcard_hash: {
        value: cdktf.stringToHclTerraform(this._protectionSoftcardHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rfs_ip: {
        value: cdktf.stringToHclTerraform(this._rfsIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rfs_port: {
        value: cdktf.numberToHclTerraform(this._rfsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sec_world: {
        value: cdktf.stringToHclTerraform(this._secWorld),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      softcard: {
        value: cdktf.numberToHclTerraform(this._softcard),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      softhsm_enum: {
        value: cdktf.stringToHclTerraform(this._softhsmEnum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
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
      worker: {
        value: cdktf.numberToHclTerraform(this._worker),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hsm_dev: {
        value: cdktf.listMapperHcl(hsmTemplateHsmDevToHclTerraform, true)(this._hsmDev.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HsmTemplateHsmDevList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
