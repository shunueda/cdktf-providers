// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpV3VacmAccessgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * SNMPv3 VACM group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#name SnmpV3VacmAccessgroup#name}
  */
  readonly name: string;
  /**
  * context_prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#context_prefix SnmpV3VacmAccessgroup#context_prefix}
  */
  readonly contextPrefix?: SnmpV3VacmAccessgroupContextPrefix[] | cdktf.IResolvable;
  /**
  * default_context_prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#default_context_prefix SnmpV3VacmAccessgroup#default_context_prefix}
  */
  readonly defaultContextPrefix?: SnmpV3VacmAccessgroupDefaultContextPrefix[] | cdktf.IResolvable;
}
export interface SnmpV3VacmAccessgroupContextPrefixAccessConfig {
  /**
  * Type of match to perform on context-prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#context_match SnmpV3VacmAccessgroup#context_match}
  */
  readonly contextMatch?: string;
  /**
  * Security level access configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#level SnmpV3VacmAccessgroup#level}
  */
  readonly level: string;
  /**
  * Security model access configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#model SnmpV3VacmAccessgroup#model}
  */
  readonly model: string;
  /**
  * View used to notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#notify_view SnmpV3VacmAccessgroup#notify_view}
  */
  readonly notifyView?: string;
  /**
  * View used for read access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#read_view SnmpV3VacmAccessgroup#read_view}
  */
  readonly readView?: string;
  /**
  * View used for write access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#write_view SnmpV3VacmAccessgroup#write_view}
  */
  readonly writeView?: string;
}

export function snmpV3VacmAccessgroupContextPrefixAccessConfigToTerraform(struct?: SnmpV3VacmAccessgroupContextPrefixAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_match: cdktf.stringToTerraform(struct!.contextMatch),
    level: cdktf.stringToTerraform(struct!.level),
    model: cdktf.stringToTerraform(struct!.model),
    notify_view: cdktf.stringToTerraform(struct!.notifyView),
    read_view: cdktf.stringToTerraform(struct!.readView),
    write_view: cdktf.stringToTerraform(struct!.writeView),
  }
}


export function snmpV3VacmAccessgroupContextPrefixAccessConfigToHclTerraform(struct?: SnmpV3VacmAccessgroupContextPrefixAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_match: {
      value: cdktf.stringToHclTerraform(struct!.contextMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_view: {
      value: cdktf.stringToHclTerraform(struct!.notifyView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_view: {
      value: cdktf.stringToHclTerraform(struct!.readView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_view: {
      value: cdktf.stringToHclTerraform(struct!.writeView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpV3VacmAccessgroupContextPrefixAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpV3VacmAccessgroupContextPrefixAccessConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextMatch = this._contextMatch;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._notifyView !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyView = this._notifyView;
    }
    if (this._readView !== undefined) {
      hasAnyValues = true;
      internalValueResult.readView = this._readView;
    }
    if (this._writeView !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeView = this._writeView;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpV3VacmAccessgroupContextPrefixAccessConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextMatch = undefined;
      this._level = undefined;
      this._model = undefined;
      this._notifyView = undefined;
      this._readView = undefined;
      this._writeView = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextMatch = value.contextMatch;
      this._level = value.level;
      this._model = value.model;
      this._notifyView = value.notifyView;
      this._readView = value.readView;
      this._writeView = value.writeView;
    }
  }

  // context_match - computed: false, optional: true, required: false
  private _contextMatch?: string; 
  public get contextMatch() {
    return this.getStringAttribute('context_match');
  }
  public set contextMatch(value: string) {
    this._contextMatch = value;
  }
  public resetContextMatch() {
    this._contextMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextMatchInput() {
    return this._contextMatch;
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // notify_view - computed: false, optional: true, required: false
  private _notifyView?: string; 
  public get notifyView() {
    return this.getStringAttribute('notify_view');
  }
  public set notifyView(value: string) {
    this._notifyView = value;
  }
  public resetNotifyView() {
    this._notifyView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyViewInput() {
    return this._notifyView;
  }

  // read_view - computed: false, optional: true, required: false
  private _readView?: string; 
  public get readView() {
    return this.getStringAttribute('read_view');
  }
  public set readView(value: string) {
    this._readView = value;
  }
  public resetReadView() {
    this._readView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readViewInput() {
    return this._readView;
  }

  // write_view - computed: false, optional: true, required: false
  private _writeView?: string; 
  public get writeView() {
    return this.getStringAttribute('write_view');
  }
  public set writeView(value: string) {
    this._writeView = value;
  }
  public resetWriteView() {
    this._writeView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeViewInput() {
    return this._writeView;
  }
}

export class SnmpV3VacmAccessgroupContextPrefixAccessConfigList extends cdktf.ComplexList {
  public internalValue? : SnmpV3VacmAccessgroupContextPrefixAccessConfig[] | cdktf.IResolvable

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
  public get(index: number): SnmpV3VacmAccessgroupContextPrefixAccessConfigOutputReference {
    return new SnmpV3VacmAccessgroupContextPrefixAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpV3VacmAccessgroupContextPrefix {
  /**
  * SNMPv3 VACM context prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#prefix SnmpV3VacmAccessgroup#prefix}
  */
  readonly prefix: string;
  /**
  * access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#access_config SnmpV3VacmAccessgroup#access_config}
  */
  readonly accessConfig?: SnmpV3VacmAccessgroupContextPrefixAccessConfig[] | cdktf.IResolvable;
}

export function snmpV3VacmAccessgroupContextPrefixToTerraform(struct?: SnmpV3VacmAccessgroupContextPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    access_config: cdktf.listMapper(snmpV3VacmAccessgroupContextPrefixAccessConfigToTerraform, true)(struct!.accessConfig),
  }
}


export function snmpV3VacmAccessgroupContextPrefixToHclTerraform(struct?: SnmpV3VacmAccessgroupContextPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_config: {
      value: cdktf.listMapperHcl(snmpV3VacmAccessgroupContextPrefixAccessConfigToHclTerraform, true)(struct!.accessConfig),
      isBlock: true,
      type: "set",
      storageClassType: "SnmpV3VacmAccessgroupContextPrefixAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpV3VacmAccessgroupContextPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpV3VacmAccessgroupContextPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._accessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConfig = this._accessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpV3VacmAccessgroupContextPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._accessConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._accessConfig.internalValue = value.accessConfig;
    }
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // access_config - computed: false, optional: true, required: false
  private _accessConfig = new SnmpV3VacmAccessgroupContextPrefixAccessConfigList(this, "access_config", true);
  public get accessConfig() {
    return this._accessConfig;
  }
  public putAccessConfig(value: SnmpV3VacmAccessgroupContextPrefixAccessConfig[] | cdktf.IResolvable) {
    this._accessConfig.internalValue = value;
  }
  public resetAccessConfig() {
    this._accessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig.internalValue;
  }
}

export class SnmpV3VacmAccessgroupContextPrefixList extends cdktf.ComplexList {
  public internalValue? : SnmpV3VacmAccessgroupContextPrefix[] | cdktf.IResolvable

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
  public get(index: number): SnmpV3VacmAccessgroupContextPrefixOutputReference {
    return new SnmpV3VacmAccessgroupContextPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SnmpV3VacmAccessgroupDefaultContextPrefix {
  /**
  * Type of match to perform on context-prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#context_match SnmpV3VacmAccessgroup#context_match}
  */
  readonly contextMatch?: string;
  /**
  * Security level access configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#level SnmpV3VacmAccessgroup#level}
  */
  readonly level: string;
  /**
  * Security model access configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#model SnmpV3VacmAccessgroup#model}
  */
  readonly model: string;
  /**
  * View used to notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#notify_view SnmpV3VacmAccessgroup#notify_view}
  */
  readonly notifyView?: string;
  /**
  * View used for read access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#read_view SnmpV3VacmAccessgroup#read_view}
  */
  readonly readView?: string;
  /**
  * View used for write access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#write_view SnmpV3VacmAccessgroup#write_view}
  */
  readonly writeView?: string;
}

export function snmpV3VacmAccessgroupDefaultContextPrefixToTerraform(struct?: SnmpV3VacmAccessgroupDefaultContextPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_match: cdktf.stringToTerraform(struct!.contextMatch),
    level: cdktf.stringToTerraform(struct!.level),
    model: cdktf.stringToTerraform(struct!.model),
    notify_view: cdktf.stringToTerraform(struct!.notifyView),
    read_view: cdktf.stringToTerraform(struct!.readView),
    write_view: cdktf.stringToTerraform(struct!.writeView),
  }
}


export function snmpV3VacmAccessgroupDefaultContextPrefixToHclTerraform(struct?: SnmpV3VacmAccessgroupDefaultContextPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_match: {
      value: cdktf.stringToHclTerraform(struct!.contextMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_view: {
      value: cdktf.stringToHclTerraform(struct!.notifyView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_view: {
      value: cdktf.stringToHclTerraform(struct!.readView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_view: {
      value: cdktf.stringToHclTerraform(struct!.writeView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpV3VacmAccessgroupDefaultContextPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnmpV3VacmAccessgroupDefaultContextPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextMatch = this._contextMatch;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._notifyView !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyView = this._notifyView;
    }
    if (this._readView !== undefined) {
      hasAnyValues = true;
      internalValueResult.readView = this._readView;
    }
    if (this._writeView !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeView = this._writeView;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpV3VacmAccessgroupDefaultContextPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextMatch = undefined;
      this._level = undefined;
      this._model = undefined;
      this._notifyView = undefined;
      this._readView = undefined;
      this._writeView = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextMatch = value.contextMatch;
      this._level = value.level;
      this._model = value.model;
      this._notifyView = value.notifyView;
      this._readView = value.readView;
      this._writeView = value.writeView;
    }
  }

  // context_match - computed: false, optional: true, required: false
  private _contextMatch?: string; 
  public get contextMatch() {
    return this.getStringAttribute('context_match');
  }
  public set contextMatch(value: string) {
    this._contextMatch = value;
  }
  public resetContextMatch() {
    this._contextMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextMatchInput() {
    return this._contextMatch;
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // notify_view - computed: false, optional: true, required: false
  private _notifyView?: string; 
  public get notifyView() {
    return this.getStringAttribute('notify_view');
  }
  public set notifyView(value: string) {
    this._notifyView = value;
  }
  public resetNotifyView() {
    this._notifyView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyViewInput() {
    return this._notifyView;
  }

  // read_view - computed: false, optional: true, required: false
  private _readView?: string; 
  public get readView() {
    return this.getStringAttribute('read_view');
  }
  public set readView(value: string) {
    this._readView = value;
  }
  public resetReadView() {
    this._readView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readViewInput() {
    return this._readView;
  }

  // write_view - computed: false, optional: true, required: false
  private _writeView?: string; 
  public get writeView() {
    return this.getStringAttribute('write_view');
  }
  public set writeView(value: string) {
    this._writeView = value;
  }
  public resetWriteView() {
    this._writeView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeViewInput() {
    return this._writeView;
  }
}

export class SnmpV3VacmAccessgroupDefaultContextPrefixList extends cdktf.ComplexList {
  public internalValue? : SnmpV3VacmAccessgroupDefaultContextPrefix[] | cdktf.IResolvable

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
  public get(index: number): SnmpV3VacmAccessgroupDefaultContextPrefixOutputReference {
    return new SnmpV3VacmAccessgroupDefaultContextPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup junos_snmp_v3_vacm_accessgroup}
*/
export class SnmpV3VacmAccessgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_snmp_v3_vacm_accessgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpV3VacmAccessgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpV3VacmAccessgroup to import
  * @param importFromId The id of the existing SnmpV3VacmAccessgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpV3VacmAccessgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_snmp_v3_vacm_accessgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_v3_vacm_accessgroup junos_snmp_v3_vacm_accessgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpV3VacmAccessgroupConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpV3VacmAccessgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_snmp_v3_vacm_accessgroup',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._contextPrefix.internalValue = config.contextPrefix;
    this._defaultContextPrefix.internalValue = config.defaultContextPrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // context_prefix - computed: false, optional: true, required: false
  private _contextPrefix = new SnmpV3VacmAccessgroupContextPrefixList(this, "context_prefix", false);
  public get contextPrefix() {
    return this._contextPrefix;
  }
  public putContextPrefix(value: SnmpV3VacmAccessgroupContextPrefix[] | cdktf.IResolvable) {
    this._contextPrefix.internalValue = value;
  }
  public resetContextPrefix() {
    this._contextPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextPrefixInput() {
    return this._contextPrefix.internalValue;
  }

  // default_context_prefix - computed: false, optional: true, required: false
  private _defaultContextPrefix = new SnmpV3VacmAccessgroupDefaultContextPrefixList(this, "default_context_prefix", true);
  public get defaultContextPrefix() {
    return this._defaultContextPrefix;
  }
  public putDefaultContextPrefix(value: SnmpV3VacmAccessgroupDefaultContextPrefix[] | cdktf.IResolvable) {
    this._defaultContextPrefix.internalValue = value;
  }
  public resetDefaultContextPrefix() {
    this._defaultContextPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultContextPrefixInput() {
    return this._defaultContextPrefix.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      context_prefix: cdktf.listMapper(snmpV3VacmAccessgroupContextPrefixToTerraform, true)(this._contextPrefix.internalValue),
      default_context_prefix: cdktf.listMapper(snmpV3VacmAccessgroupDefaultContextPrefixToTerraform, true)(this._defaultContextPrefix.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context_prefix: {
        value: cdktf.listMapperHcl(snmpV3VacmAccessgroupContextPrefixToHclTerraform, true)(this._contextPrefix.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpV3VacmAccessgroupContextPrefixList",
      },
      default_context_prefix: {
        value: cdktf.listMapperHcl(snmpV3VacmAccessgroupDefaultContextPrefixToHclTerraform, true)(this._defaultContextPrefix.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SnmpV3VacmAccessgroupDefaultContextPrefixList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
