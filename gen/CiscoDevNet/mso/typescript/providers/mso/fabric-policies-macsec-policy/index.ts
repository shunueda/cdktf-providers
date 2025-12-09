// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricPoliciesMacsecPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#admin_state FabricPoliciesMacsecPolicy#admin_state}
  */
  readonly adminState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#cipher_suite FabricPoliciesMacsecPolicy#cipher_suite}
  */
  readonly cipherSuite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#confidentiality_offset FabricPoliciesMacsecPolicy#confidentiality_offset}
  */
  readonly confidentialityOffset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#description FabricPoliciesMacsecPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#id FabricPoliciesMacsecPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#interface_type FabricPoliciesMacsecPolicy#interface_type}
  */
  readonly interfaceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#key_server_priority FabricPoliciesMacsecPolicy#key_server_priority}
  */
  readonly keyServerPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#name FabricPoliciesMacsecPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#sak_expire_time FabricPoliciesMacsecPolicy#sak_expire_time}
  */
  readonly sakExpireTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#security_policy FabricPoliciesMacsecPolicy#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#template_id FabricPoliciesMacsecPolicy#template_id}
  */
  readonly templateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#window_size FabricPoliciesMacsecPolicy#window_size}
  */
  readonly windowSize?: number;
  /**
  * macsec_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#macsec_keys FabricPoliciesMacsecPolicy#macsec_keys}
  */
  readonly macsecKeys?: FabricPoliciesMacsecPolicyMacsecKeys[] | cdktf.IResolvable;
}
export interface FabricPoliciesMacsecPolicyMacsecKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#end_time FabricPoliciesMacsecPolicy#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#key_name FabricPoliciesMacsecPolicy#key_name}
  */
  readonly keyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#psk FabricPoliciesMacsecPolicy#psk}
  */
  readonly psk: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#start_time FabricPoliciesMacsecPolicy#start_time}
  */
  readonly startTime?: string;
}

export function fabricPoliciesMacsecPolicyMacsecKeysToTerraform(struct?: FabricPoliciesMacsecPolicyMacsecKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    psk: cdktf.stringToTerraform(struct!.psk),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function fabricPoliciesMacsecPolicyMacsecKeysToHclTerraform(struct?: FabricPoliciesMacsecPolicyMacsecKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psk: {
      value: cdktf.stringToHclTerraform(struct!.psk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPoliciesMacsecPolicyMacsecKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricPoliciesMacsecPolicyMacsecKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._psk !== undefined) {
      hasAnyValues = true;
      internalValueResult.psk = this._psk;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPoliciesMacsecPolicyMacsecKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._keyName = undefined;
      this._psk = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._keyName = value.keyName;
      this._psk = value.psk;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // psk - computed: false, optional: false, required: true
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class FabricPoliciesMacsecPolicyMacsecKeysList extends cdktf.ComplexList {
  public internalValue? : FabricPoliciesMacsecPolicyMacsecKeys[] | cdktf.IResolvable

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
  public get(index: number): FabricPoliciesMacsecPolicyMacsecKeysOutputReference {
    return new FabricPoliciesMacsecPolicyMacsecKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy mso_fabric_policies_macsec_policy}
*/
export class FabricPoliciesMacsecPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_fabric_policies_macsec_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricPoliciesMacsecPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricPoliciesMacsecPolicy to import
  * @param importFromId The id of the existing FabricPoliciesMacsecPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricPoliciesMacsecPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_fabric_policies_macsec_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/fabric_policies_macsec_policy mso_fabric_policies_macsec_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricPoliciesMacsecPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FabricPoliciesMacsecPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_fabric_policies_macsec_policy',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminState = config.adminState;
    this._cipherSuite = config.cipherSuite;
    this._confidentialityOffset = config.confidentialityOffset;
    this._description = config.description;
    this._id = config.id;
    this._interfaceType = config.interfaceType;
    this._keyServerPriority = config.keyServerPriority;
    this._name = config.name;
    this._sakExpireTime = config.sakExpireTime;
    this._securityPolicy = config.securityPolicy;
    this._templateId = config.templateId;
    this._windowSize = config.windowSize;
    this._macsecKeys.internalValue = config.macsecKeys;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // cipher_suite - computed: true, optional: true, required: false
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

  // confidentiality_offset - computed: true, optional: true, required: false
  private _confidentialityOffset?: string; 
  public get confidentialityOffset() {
    return this.getStringAttribute('confidentiality_offset');
  }
  public set confidentialityOffset(value: string) {
    this._confidentialityOffset = value;
  }
  public resetConfidentialityOffset() {
    this._confidentialityOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialityOffsetInput() {
    return this._confidentialityOffset;
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

  // interface_type - computed: true, optional: true, required: false
  private _interfaceType?: string; 
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }
  public set interfaceType(value: string) {
    this._interfaceType = value;
  }
  public resetInterfaceType() {
    this._interfaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTypeInput() {
    return this._interfaceType;
  }

  // key_server_priority - computed: true, optional: true, required: false
  private _keyServerPriority?: number; 
  public get keyServerPriority() {
    return this.getNumberAttribute('key_server_priority');
  }
  public set keyServerPriority(value: number) {
    this._keyServerPriority = value;
  }
  public resetKeyServerPriority() {
    this._keyServerPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyServerPriorityInput() {
    return this._keyServerPriority;
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

  // sak_expire_time - computed: true, optional: true, required: false
  private _sakExpireTime?: number; 
  public get sakExpireTime() {
    return this.getNumberAttribute('sak_expire_time');
  }
  public set sakExpireTime(value: number) {
    this._sakExpireTime = value;
  }
  public resetSakExpireTime() {
    this._sakExpireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sakExpireTimeInput() {
    return this._sakExpireTime;
  }

  // security_policy - computed: true, optional: true, required: false
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // window_size - computed: true, optional: true, required: false
  private _windowSize?: number; 
  public get windowSize() {
    return this.getNumberAttribute('window_size');
  }
  public set windowSize(value: number) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }

  // macsec_keys - computed: false, optional: true, required: false
  private _macsecKeys = new FabricPoliciesMacsecPolicyMacsecKeysList(this, "macsec_keys", true);
  public get macsecKeys() {
    return this._macsecKeys;
  }
  public putMacsecKeys(value: FabricPoliciesMacsecPolicyMacsecKeys[] | cdktf.IResolvable) {
    this._macsecKeys.internalValue = value;
  }
  public resetMacsecKeys() {
    this._macsecKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecKeysInput() {
    return this._macsecKeys.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      cipher_suite: cdktf.stringToTerraform(this._cipherSuite),
      confidentiality_offset: cdktf.stringToTerraform(this._confidentialityOffset),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      interface_type: cdktf.stringToTerraform(this._interfaceType),
      key_server_priority: cdktf.numberToTerraform(this._keyServerPriority),
      name: cdktf.stringToTerraform(this._name),
      sak_expire_time: cdktf.numberToTerraform(this._sakExpireTime),
      security_policy: cdktf.stringToTerraform(this._securityPolicy),
      template_id: cdktf.stringToTerraform(this._templateId),
      window_size: cdktf.numberToTerraform(this._windowSize),
      macsec_keys: cdktf.listMapper(fabricPoliciesMacsecPolicyMacsecKeysToTerraform, true)(this._macsecKeys.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipher_suite: {
        value: cdktf.stringToHclTerraform(this._cipherSuite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confidentiality_offset: {
        value: cdktf.stringToHclTerraform(this._confidentialityOffset),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_type: {
        value: cdktf.stringToHclTerraform(this._interfaceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_server_priority: {
        value: cdktf.numberToHclTerraform(this._keyServerPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sak_expire_time: {
        value: cdktf.numberToHclTerraform(this._sakExpireTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_policy: {
        value: cdktf.stringToHclTerraform(this._securityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      window_size: {
        value: cdktf.numberToHclTerraform(this._windowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      macsec_keys: {
        value: cdktf.listMapperHcl(fabricPoliciesMacsecPolicyMacsecKeysToHclTerraform, true)(this._macsecKeys.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricPoliciesMacsecPolicyMacsecKeysList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
