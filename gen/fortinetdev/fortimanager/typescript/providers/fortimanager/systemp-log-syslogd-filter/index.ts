// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystempLogSyslogdFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#adom SystempLogSyslogdFilter#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#anomaly SystempLogSyslogdFilter#anomaly}
  */
  readonly anomaly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#cifs SystempLogSyslogdFilter#cifs}
  */
  readonly cifs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#devprof SystempLogSyslogdFilter#devprof}
  */
  readonly devprof: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#dns SystempLogSyslogdFilter#dns}
  */
  readonly dns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#dynamic_sort_subtable SystempLogSyslogdFilter#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#filter SystempLogSyslogdFilter#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#filter_type SystempLogSyslogdFilter#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#forti_switch SystempLogSyslogdFilter#forti_switch}
  */
  readonly fortiSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#forward_traffic SystempLogSyslogdFilter#forward_traffic}
  */
  readonly forwardTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#gtp SystempLogSyslogdFilter#gtp}
  */
  readonly gtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#http_transaction SystempLogSyslogdFilter#http_transaction}
  */
  readonly httpTransaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#id SystempLogSyslogdFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#local_traffic SystempLogSyslogdFilter#local_traffic}
  */
  readonly localTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#multicast_traffic SystempLogSyslogdFilter#multicast_traffic}
  */
  readonly multicastTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#netscan_discovery SystempLogSyslogdFilter#netscan_discovery}
  */
  readonly netscanDiscovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#netscan_vulnerability SystempLogSyslogdFilter#netscan_vulnerability}
  */
  readonly netscanVulnerability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#scopetype SystempLogSyslogdFilter#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#severity SystempLogSyslogdFilter#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#sniffer_traffic SystempLogSyslogdFilter#sniffer_traffic}
  */
  readonly snifferTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#ssh SystempLogSyslogdFilter#ssh}
  */
  readonly ssh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#ssl SystempLogSyslogdFilter#ssl}
  */
  readonly ssl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#voip SystempLogSyslogdFilter#voip}
  */
  readonly voip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#ztna_traffic SystempLogSyslogdFilter#ztna_traffic}
  */
  readonly ztnaTraffic?: string;
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#exclude_list SystempLogSyslogdFilter#exclude_list}
  */
  readonly excludeList?: SystempLogSyslogdFilterExcludeListStruct[] | cdktf.IResolvable;
  /**
  * free_style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#free_style SystempLogSyslogdFilter#free_style}
  */
  readonly freeStyle?: SystempLogSyslogdFilterFreeStyle[] | cdktf.IResolvable;
}
export interface SystempLogSyslogdFilterExcludeListFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#args SystempLogSyslogdFilter#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#field SystempLogSyslogdFilter#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#negate SystempLogSyslogdFilter#negate}
  */
  readonly negate?: string;
}

export function systempLogSyslogdFilterExcludeListFieldsToTerraform(struct?: SystempLogSyslogdFilterExcludeListFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    field: cdktf.stringToTerraform(struct!.field),
    negate: cdktf.stringToTerraform(struct!.negate),
  }
}


export function systempLogSyslogdFilterExcludeListFieldsToHclTerraform(struct?: SystempLogSyslogdFilterExcludeListFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.stringToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystempLogSyslogdFilterExcludeListFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystempLogSyslogdFilterExcludeListFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystempLogSyslogdFilterExcludeListFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._field = undefined;
      this._negate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._field = value.field;
      this._negate = value.negate;
    }
  }

  // args - computed: true, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return cdktf.Fn.tolist(this.getListAttribute('args'));
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: string; 
  public get negate() {
    return this.getStringAttribute('negate');
  }
  public set negate(value: string) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }
}

export class SystempLogSyslogdFilterExcludeListFieldsList extends cdktf.ComplexList {
  public internalValue? : SystempLogSyslogdFilterExcludeListFields[] | cdktf.IResolvable

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
  public get(index: number): SystempLogSyslogdFilterExcludeListFieldsOutputReference {
    return new SystempLogSyslogdFilterExcludeListFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystempLogSyslogdFilterExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#category SystempLogSyslogdFilter#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#id SystempLogSyslogdFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#fields SystempLogSyslogdFilter#fields}
  */
  readonly fields?: SystempLogSyslogdFilterExcludeListFields[] | cdktf.IResolvable;
}

export function systempLogSyslogdFilterExcludeListStructToTerraform(struct?: SystempLogSyslogdFilterExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    id: cdktf.numberToTerraform(struct!.id),
    fields: cdktf.listMapper(systempLogSyslogdFilterExcludeListFieldsToTerraform, true)(struct!.fields),
  }
}


export function systempLogSyslogdFilterExcludeListStructToHclTerraform(struct?: SystempLogSyslogdFilterExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fields: {
      value: cdktf.listMapperHcl(systempLogSyslogdFilterExcludeListFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "SystempLogSyslogdFilterExcludeListFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystempLogSyslogdFilterExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystempLogSyslogdFilterExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystempLogSyslogdFilterExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._id = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._id = value.id;
      this._fields.internalValue = value.fields;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new SystempLogSyslogdFilterExcludeListFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: SystempLogSyslogdFilterExcludeListFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class SystempLogSyslogdFilterExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : SystempLogSyslogdFilterExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystempLogSyslogdFilterExcludeListStructOutputReference {
    return new SystempLogSyslogdFilterExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystempLogSyslogdFilterFreeStyle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#category SystempLogSyslogdFilter#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#filter SystempLogSyslogdFilter#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#filter_type SystempLogSyslogdFilter#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#id SystempLogSyslogdFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function systempLogSyslogdFilterFreeStyleToTerraform(struct?: SystempLogSyslogdFilterFreeStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    filter: cdktf.stringToTerraform(struct!.filter),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function systempLogSyslogdFilterFreeStyleToHclTerraform(struct?: SystempLogSyslogdFilterFreeStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystempLogSyslogdFilterFreeStyleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystempLogSyslogdFilterFreeStyle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystempLogSyslogdFilterFreeStyle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._filter = undefined;
      this._filterType = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._filter = value.filter;
      this._filterType = value.filterType;
      this._id = value.id;
    }
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
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

export class SystempLogSyslogdFilterFreeStyleList extends cdktf.ComplexList {
  public internalValue? : SystempLogSyslogdFilterFreeStyle[] | cdktf.IResolvable

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
  public get(index: number): SystempLogSyslogdFilterFreeStyleOutputReference {
    return new SystempLogSyslogdFilterFreeStyleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter fortimanager_systemp_log_syslogd_filter}
*/
export class SystempLogSyslogdFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_systemp_log_syslogd_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystempLogSyslogdFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystempLogSyslogdFilter to import
  * @param importFromId The id of the existing SystempLogSyslogdFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystempLogSyslogdFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_systemp_log_syslogd_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_log_syslogd_filter fortimanager_systemp_log_syslogd_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystempLogSyslogdFilterConfig
  */
  public constructor(scope: Construct, id: string, config: SystempLogSyslogdFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_systemp_log_syslogd_filter',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._anomaly = config.anomaly;
    this._cifs = config.cifs;
    this._devprof = config.devprof;
    this._dns = config.dns;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._filter = config.filter;
    this._filterType = config.filterType;
    this._fortiSwitch = config.fortiSwitch;
    this._forwardTraffic = config.forwardTraffic;
    this._gtp = config.gtp;
    this._httpTransaction = config.httpTransaction;
    this._id = config.id;
    this._localTraffic = config.localTraffic;
    this._multicastTraffic = config.multicastTraffic;
    this._netscanDiscovery = config.netscanDiscovery;
    this._netscanVulnerability = config.netscanVulnerability;
    this._scopetype = config.scopetype;
    this._severity = config.severity;
    this._snifferTraffic = config.snifferTraffic;
    this._ssh = config.ssh;
    this._ssl = config.ssl;
    this._voip = config.voip;
    this._ztnaTraffic = config.ztnaTraffic;
    this._excludeList.internalValue = config.excludeList;
    this._freeStyle.internalValue = config.freeStyle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // anomaly - computed: true, optional: true, required: false
  private _anomaly?: string; 
  public get anomaly() {
    return this.getStringAttribute('anomaly');
  }
  public set anomaly(value: string) {
    this._anomaly = value;
  }
  public resetAnomaly() {
    this._anomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyInput() {
    return this._anomaly;
  }

  // cifs - computed: false, optional: true, required: false
  private _cifs?: string; 
  public get cifs() {
    return this.getStringAttribute('cifs');
  }
  public set cifs(value: string) {
    this._cifs = value;
  }
  public resetCifs() {
    this._cifs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cifsInput() {
    return this._cifs;
  }

  // devprof - computed: false, optional: false, required: true
  private _devprof?: string; 
  public get devprof() {
    return this.getStringAttribute('devprof');
  }
  public set devprof(value: string) {
    this._devprof = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devprofInput() {
    return this._devprof;
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // forti_switch - computed: true, optional: true, required: false
  private _fortiSwitch?: string; 
  public get fortiSwitch() {
    return this.getStringAttribute('forti_switch');
  }
  public set fortiSwitch(value: string) {
    this._fortiSwitch = value;
  }
  public resetFortiSwitch() {
    this._fortiSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiSwitchInput() {
    return this._fortiSwitch;
  }

  // forward_traffic - computed: true, optional: true, required: false
  private _forwardTraffic?: string; 
  public get forwardTraffic() {
    return this.getStringAttribute('forward_traffic');
  }
  public set forwardTraffic(value: string) {
    this._forwardTraffic = value;
  }
  public resetForwardTraffic() {
    this._forwardTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTrafficInput() {
    return this._forwardTraffic;
  }

  // gtp - computed: true, optional: true, required: false
  private _gtp?: string; 
  public get gtp() {
    return this.getStringAttribute('gtp');
  }
  public set gtp(value: string) {
    this._gtp = value;
  }
  public resetGtp() {
    this._gtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInput() {
    return this._gtp;
  }

  // http_transaction - computed: true, optional: true, required: false
  private _httpTransaction?: string; 
  public get httpTransaction() {
    return this.getStringAttribute('http_transaction');
  }
  public set httpTransaction(value: string) {
    this._httpTransaction = value;
  }
  public resetHttpTransaction() {
    this._httpTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTransactionInput() {
    return this._httpTransaction;
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

  // local_traffic - computed: true, optional: true, required: false
  private _localTraffic?: string; 
  public get localTraffic() {
    return this.getStringAttribute('local_traffic');
  }
  public set localTraffic(value: string) {
    this._localTraffic = value;
  }
  public resetLocalTraffic() {
    this._localTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTrafficInput() {
    return this._localTraffic;
  }

  // multicast_traffic - computed: true, optional: true, required: false
  private _multicastTraffic?: string; 
  public get multicastTraffic() {
    return this.getStringAttribute('multicast_traffic');
  }
  public set multicastTraffic(value: string) {
    this._multicastTraffic = value;
  }
  public resetMulticastTraffic() {
    this._multicastTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastTrafficInput() {
    return this._multicastTraffic;
  }

  // netscan_discovery - computed: false, optional: true, required: false
  private _netscanDiscovery?: string; 
  public get netscanDiscovery() {
    return this.getStringAttribute('netscan_discovery');
  }
  public set netscanDiscovery(value: string) {
    this._netscanDiscovery = value;
  }
  public resetNetscanDiscovery() {
    this._netscanDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netscanDiscoveryInput() {
    return this._netscanDiscovery;
  }

  // netscan_vulnerability - computed: false, optional: true, required: false
  private _netscanVulnerability?: string; 
  public get netscanVulnerability() {
    return this.getStringAttribute('netscan_vulnerability');
  }
  public set netscanVulnerability(value: string) {
    this._netscanVulnerability = value;
  }
  public resetNetscanVulnerability() {
    this._netscanVulnerability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netscanVulnerabilityInput() {
    return this._netscanVulnerability;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // sniffer_traffic - computed: true, optional: true, required: false
  private _snifferTraffic?: string; 
  public get snifferTraffic() {
    return this.getStringAttribute('sniffer_traffic');
  }
  public set snifferTraffic(value: string) {
    this._snifferTraffic = value;
  }
  public resetSnifferTraffic() {
    this._snifferTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snifferTrafficInput() {
    return this._snifferTraffic;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh?: string; 
  public get ssh() {
    return this.getStringAttribute('ssh');
  }
  public set ssh(value: string) {
    this._ssh = value;
  }
  public resetSsh() {
    this._ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: string; 
  public get ssl() {
    return this.getStringAttribute('ssl');
  }
  public set ssl(value: string) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // voip - computed: true, optional: true, required: false
  private _voip?: string; 
  public get voip() {
    return this.getStringAttribute('voip');
  }
  public set voip(value: string) {
    this._voip = value;
  }
  public resetVoip() {
    this._voip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voipInput() {
    return this._voip;
  }

  // ztna_traffic - computed: true, optional: true, required: false
  private _ztnaTraffic?: string; 
  public get ztnaTraffic() {
    return this.getStringAttribute('ztna_traffic');
  }
  public set ztnaTraffic(value: string) {
    this._ztnaTraffic = value;
  }
  public resetZtnaTraffic() {
    this._ztnaTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztnaTrafficInput() {
    return this._ztnaTraffic;
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new SystempLogSyslogdFilterExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: SystempLogSyslogdFilterExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }

  // free_style - computed: false, optional: true, required: false
  private _freeStyle = new SystempLogSyslogdFilterFreeStyleList(this, "free_style", false);
  public get freeStyle() {
    return this._freeStyle;
  }
  public putFreeStyle(value: SystempLogSyslogdFilterFreeStyle[] | cdktf.IResolvable) {
    this._freeStyle.internalValue = value;
  }
  public resetFreeStyle() {
    this._freeStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeStyleInput() {
    return this._freeStyle.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      anomaly: cdktf.stringToTerraform(this._anomaly),
      cifs: cdktf.stringToTerraform(this._cifs),
      devprof: cdktf.stringToTerraform(this._devprof),
      dns: cdktf.stringToTerraform(this._dns),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      filter: cdktf.stringToTerraform(this._filter),
      filter_type: cdktf.stringToTerraform(this._filterType),
      forti_switch: cdktf.stringToTerraform(this._fortiSwitch),
      forward_traffic: cdktf.stringToTerraform(this._forwardTraffic),
      gtp: cdktf.stringToTerraform(this._gtp),
      http_transaction: cdktf.stringToTerraform(this._httpTransaction),
      id: cdktf.stringToTerraform(this._id),
      local_traffic: cdktf.stringToTerraform(this._localTraffic),
      multicast_traffic: cdktf.stringToTerraform(this._multicastTraffic),
      netscan_discovery: cdktf.stringToTerraform(this._netscanDiscovery),
      netscan_vulnerability: cdktf.stringToTerraform(this._netscanVulnerability),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      severity: cdktf.stringToTerraform(this._severity),
      sniffer_traffic: cdktf.stringToTerraform(this._snifferTraffic),
      ssh: cdktf.stringToTerraform(this._ssh),
      ssl: cdktf.stringToTerraform(this._ssl),
      voip: cdktf.stringToTerraform(this._voip),
      ztna_traffic: cdktf.stringToTerraform(this._ztnaTraffic),
      exclude_list: cdktf.listMapper(systempLogSyslogdFilterExcludeListStructToTerraform, true)(this._excludeList.internalValue),
      free_style: cdktf.listMapper(systempLogSyslogdFilterFreeStyleToTerraform, true)(this._freeStyle.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anomaly: {
        value: cdktf.stringToHclTerraform(this._anomaly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cifs: {
        value: cdktf.stringToHclTerraform(this._cifs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devprof: {
        value: cdktf.stringToHclTerraform(this._devprof),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns: {
        value: cdktf.stringToHclTerraform(this._dns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_type: {
        value: cdktf.stringToHclTerraform(this._filterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forti_switch: {
        value: cdktf.stringToHclTerraform(this._fortiSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_traffic: {
        value: cdktf.stringToHclTerraform(this._forwardTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gtp: {
        value: cdktf.stringToHclTerraform(this._gtp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_transaction: {
        value: cdktf.stringToHclTerraform(this._httpTransaction),
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
      local_traffic: {
        value: cdktf.stringToHclTerraform(this._localTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_traffic: {
        value: cdktf.stringToHclTerraform(this._multicastTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netscan_discovery: {
        value: cdktf.stringToHclTerraform(this._netscanDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netscan_vulnerability: {
        value: cdktf.stringToHclTerraform(this._netscanVulnerability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sniffer_traffic: {
        value: cdktf.stringToHclTerraform(this._snifferTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh: {
        value: cdktf.stringToHclTerraform(this._ssh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl: {
        value: cdktf.stringToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voip: {
        value: cdktf.stringToHclTerraform(this._voip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ztna_traffic: {
        value: cdktf.stringToHclTerraform(this._ztnaTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_list: {
        value: cdktf.listMapperHcl(systempLogSyslogdFilterExcludeListStructToHclTerraform, true)(this._excludeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystempLogSyslogdFilterExcludeListStructList",
      },
      free_style: {
        value: cdktf.listMapperHcl(systempLogSyslogdFilterFreeStyleToHclTerraform, true)(this._freeStyle.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystempLogSyslogdFilterFreeStyleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
