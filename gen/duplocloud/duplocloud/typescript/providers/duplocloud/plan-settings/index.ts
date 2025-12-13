// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlanSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings#id PlanSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the plan to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings#plan_id PlanSettings#plan_id}
  */
  readonly planId: string;
  /**
  * A list of metadata being managed by this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings#specified_metadata PlanSettings#specified_metadata}
  */
  readonly specifiedMetadata?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings#unrestricted_ext_lb PlanSettings#unrestricted_ext_lb}
  */
  readonly unrestrictedExtLb?: boolean | cdktf.IResolvable;
  /**
  * dns_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings#dns_setting PlanSettings#dns_setting}
  */
  readonly dnsSetting?: PlanSettingsDnsSetting;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings#metadata PlanSettings#metadata}
  */
  readonly metadata?: PlanSettingsMetadata[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings#timeouts PlanSettings#timeouts}
  */
  readonly timeouts?: PlanSettingsTimeouts;
}
export interface PlanSettingsAllMetadata {
}

export function planSettingsAllMetadataToTerraform(struct?: PlanSettingsAllMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function planSettingsAllMetadataToHclTerraform(struct?: PlanSettingsAllMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PlanSettingsAllMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PlanSettingsAllMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanSettingsAllMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class PlanSettingsAllMetadataList extends cdktf.ComplexList {

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
  public get(index: number): PlanSettingsAllMetadataOutputReference {
    return new PlanSettingsAllMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanSettingsDnsSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings#domain_id PlanSettings#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings#external_dns_suffix PlanSettings#external_dns_suffix}
  */
  readonly externalDnsSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings#ignore_global_dns PlanSettings#ignore_global_dns}
  */
  readonly ignoreGlobalDns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings#internal_dns_suffix PlanSettings#internal_dns_suffix}
  */
  readonly internalDnsSuffix?: string;
}

export function planSettingsDnsSettingToTerraform(struct?: PlanSettingsDnsSettingOutputReference | PlanSettingsDnsSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_id: cdktf.stringToTerraform(struct!.domainId),
    external_dns_suffix: cdktf.stringToTerraform(struct!.externalDnsSuffix),
    ignore_global_dns: cdktf.booleanToTerraform(struct!.ignoreGlobalDns),
    internal_dns_suffix: cdktf.stringToTerraform(struct!.internalDnsSuffix),
  }
}


export function planSettingsDnsSettingToHclTerraform(struct?: PlanSettingsDnsSettingOutputReference | PlanSettingsDnsSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_id: {
      value: cdktf.stringToHclTerraform(struct!.domainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_dns_suffix: {
      value: cdktf.stringToHclTerraform(struct!.externalDnsSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_global_dns: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreGlobalDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internal_dns_suffix: {
      value: cdktf.stringToHclTerraform(struct!.internalDnsSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanSettingsDnsSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlanSettingsDnsSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainId = this._domainId;
    }
    if (this._externalDnsSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDnsSuffix = this._externalDnsSuffix;
    }
    if (this._ignoreGlobalDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreGlobalDns = this._ignoreGlobalDns;
    }
    if (this._internalDnsSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalDnsSuffix = this._internalDnsSuffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanSettingsDnsSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainId = undefined;
      this._externalDnsSuffix = undefined;
      this._ignoreGlobalDns = undefined;
      this._internalDnsSuffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainId = value.domainId;
      this._externalDnsSuffix = value.externalDnsSuffix;
      this._ignoreGlobalDns = value.ignoreGlobalDns;
      this._internalDnsSuffix = value.internalDnsSuffix;
    }
  }

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // external_dns_suffix - computed: true, optional: true, required: false
  private _externalDnsSuffix?: string; 
  public get externalDnsSuffix() {
    return this.getStringAttribute('external_dns_suffix');
  }
  public set externalDnsSuffix(value: string) {
    this._externalDnsSuffix = value;
  }
  public resetExternalDnsSuffix() {
    this._externalDnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDnsSuffixInput() {
    return this._externalDnsSuffix;
  }

  // ignore_global_dns - computed: true, optional: true, required: false
  private _ignoreGlobalDns?: boolean | cdktf.IResolvable; 
  public get ignoreGlobalDns() {
    return this.getBooleanAttribute('ignore_global_dns');
  }
  public set ignoreGlobalDns(value: boolean | cdktf.IResolvable) {
    this._ignoreGlobalDns = value;
  }
  public resetIgnoreGlobalDns() {
    this._ignoreGlobalDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreGlobalDnsInput() {
    return this._ignoreGlobalDns;
  }

  // internal_dns_suffix - computed: true, optional: true, required: false
  private _internalDnsSuffix?: string; 
  public get internalDnsSuffix() {
    return this.getStringAttribute('internal_dns_suffix');
  }
  public set internalDnsSuffix(value: string) {
    this._internalDnsSuffix = value;
  }
  public resetInternalDnsSuffix() {
    this._internalDnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalDnsSuffixInput() {
    return this._internalDnsSuffix;
  }
}
export interface PlanSettingsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings#key PlanSettings#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings#value PlanSettings#value}
  */
  readonly value: string;
}

export function planSettingsMetadataToTerraform(struct?: PlanSettingsMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function planSettingsMetadataToHclTerraform(struct?: PlanSettingsMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanSettingsMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlanSettingsMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanSettingsMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PlanSettingsMetadataList extends cdktf.ComplexList {
  public internalValue? : PlanSettingsMetadata[] | cdktf.IResolvable

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
  public get(index: number): PlanSettingsMetadataOutputReference {
    return new PlanSettingsMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlanSettingsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings#create PlanSettings#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings#delete PlanSettings#delete}
  */
  readonly delete?: string;
}

export function planSettingsTimeoutsToTerraform(struct?: PlanSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function planSettingsTimeoutsToHclTerraform(struct?: PlanSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlanSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlanSettingsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlanSettingsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings duplocloud_plan_settings}
*/
export class PlanSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_plan_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlanSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlanSettings to import
  * @param importFromId The id of the existing PlanSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlanSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_plan_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/plan_settings duplocloud_plan_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlanSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: PlanSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_plan_settings',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.31',
        providerVersionConstraint: '0.11.31'
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
    this._planId = config.planId;
    this._specifiedMetadata = config.specifiedMetadata;
    this._unrestrictedExtLb = config.unrestrictedExtLb;
    this._dnsSetting.internalValue = config.dnsSetting;
    this._metadata.internalValue = config.metadata;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_metadata - computed: true, optional: false, required: false
  private _allMetadata = new PlanSettingsAllMetadataList(this, "all_metadata", false);
  public get allMetadata() {
    return this._allMetadata;
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

  // plan_id - computed: false, optional: false, required: true
  private _planId?: string; 
  public get planId() {
    return this.getStringAttribute('plan_id');
  }
  public set planId(value: string) {
    this._planId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planIdInput() {
    return this._planId;
  }

  // specified_metadata - computed: true, optional: true, required: false
  private _specifiedMetadata?: string[]; 
  public get specifiedMetadata() {
    return this.getListAttribute('specified_metadata');
  }
  public set specifiedMetadata(value: string[]) {
    this._specifiedMetadata = value;
  }
  public resetSpecifiedMetadata() {
    this._specifiedMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specifiedMetadataInput() {
    return this._specifiedMetadata;
  }

  // unrestricted_ext_lb - computed: true, optional: true, required: false
  private _unrestrictedExtLb?: boolean | cdktf.IResolvable; 
  public get unrestrictedExtLb() {
    return this.getBooleanAttribute('unrestricted_ext_lb');
  }
  public set unrestrictedExtLb(value: boolean | cdktf.IResolvable) {
    this._unrestrictedExtLb = value;
  }
  public resetUnrestrictedExtLb() {
    this._unrestrictedExtLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unrestrictedExtLbInput() {
    return this._unrestrictedExtLb;
  }

  // dns_setting - computed: false, optional: true, required: false
  private _dnsSetting = new PlanSettingsDnsSettingOutputReference(this, "dns_setting");
  public get dnsSetting() {
    return this._dnsSetting;
  }
  public putDnsSetting(value: PlanSettingsDnsSetting) {
    this._dnsSetting.internalValue = value;
  }
  public resetDnsSetting() {
    this._dnsSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSettingInput() {
    return this._dnsSetting.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new PlanSettingsMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: PlanSettingsMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PlanSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PlanSettingsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      plan_id: cdktf.stringToTerraform(this._planId),
      specified_metadata: cdktf.listMapper(cdktf.stringToTerraform, false)(this._specifiedMetadata),
      unrestricted_ext_lb: cdktf.booleanToTerraform(this._unrestrictedExtLb),
      dns_setting: planSettingsDnsSettingToTerraform(this._dnsSetting.internalValue),
      metadata: cdktf.listMapper(planSettingsMetadataToTerraform, true)(this._metadata.internalValue),
      timeouts: planSettingsTimeoutsToTerraform(this._timeouts.internalValue),
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
      plan_id: {
        value: cdktf.stringToHclTerraform(this._planId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      specified_metadata: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._specifiedMetadata),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      unrestricted_ext_lb: {
        value: cdktf.booleanToHclTerraform(this._unrestrictedExtLb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_setting: {
        value: planSettingsDnsSettingToHclTerraform(this._dnsSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanSettingsDnsSettingList",
      },
      metadata: {
        value: cdktf.listMapperHcl(planSettingsMetadataToHclTerraform, true)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlanSettingsMetadataList",
      },
      timeouts: {
        value: planSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PlanSettingsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
