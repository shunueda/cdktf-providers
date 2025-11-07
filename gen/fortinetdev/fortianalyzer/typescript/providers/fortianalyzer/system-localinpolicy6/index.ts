// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLocalinpolicy6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#action SystemLocalinpolicy6#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#description SystemLocalinpolicy6#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#dport SystemLocalinpolicy6#dport}
  */
  readonly dport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#dst SystemLocalinpolicy6#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#dynamic_sort_subtable SystemLocalinpolicy6#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#fosid SystemLocalinpolicy6#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#id SystemLocalinpolicy6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#intf SystemLocalinpolicy6#intf}
  */
  readonly intf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#protocol SystemLocalinpolicy6#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#src SystemLocalinpolicy6#src}
  */
  readonly src?: string;
  /**
  * dport_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#dport_block SystemLocalinpolicy6#dport_block}
  */
  readonly dportBlock?: SystemLocalinpolicy6DportBlock[] | cdktf.IResolvable;
  /**
  * dst_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#dst_block SystemLocalinpolicy6#dst_block}
  */
  readonly dstBlock?: SystemLocalinpolicy6DstBlock[] | cdktf.IResolvable;
  /**
  * intf_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#intf_block SystemLocalinpolicy6#intf_block}
  */
  readonly intfBlock?: SystemLocalinpolicy6IntfBlock[] | cdktf.IResolvable;
  /**
  * src_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#src_block SystemLocalinpolicy6#src_block}
  */
  readonly srcBlock?: SystemLocalinpolicy6SrcBlock[] | cdktf.IResolvable;
}
export interface SystemLocalinpolicy6DportBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#dport_value SystemLocalinpolicy6#dport_value}
  */
  readonly dportValue?: string;
}

export function systemLocalinpolicy6DportBlockToTerraform(struct?: SystemLocalinpolicy6DportBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dport_value: cdktf.stringToTerraform(struct!.dportValue),
  }
}


export function systemLocalinpolicy6DportBlockToHclTerraform(struct?: SystemLocalinpolicy6DportBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dport_value: {
      value: cdktf.stringToHclTerraform(struct!.dportValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLocalinpolicy6DportBlockOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemLocalinpolicy6DportBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dportValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dportValue = this._dportValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLocalinpolicy6DportBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dportValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dportValue = value.dportValue;
    }
  }

  // dport_value - computed: false, optional: true, required: false
  private _dportValue?: string; 
  public get dportValue() {
    return this.getStringAttribute('dport_value');
  }
  public set dportValue(value: string) {
    this._dportValue = value;
  }
  public resetDportValue() {
    this._dportValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dportValueInput() {
    return this._dportValue;
  }
}

export class SystemLocalinpolicy6DportBlockList extends cdktf.ComplexList {
  public internalValue? : SystemLocalinpolicy6DportBlock[] | cdktf.IResolvable

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
  public get(index: number): SystemLocalinpolicy6DportBlockOutputReference {
    return new SystemLocalinpolicy6DportBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemLocalinpolicy6DstBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#src_ip SystemLocalinpolicy6#src_ip}
  */
  readonly srcIp?: string;
}

export function systemLocalinpolicy6DstBlockToTerraform(struct?: SystemLocalinpolicy6DstBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_ip: cdktf.stringToTerraform(struct!.srcIp),
  }
}


export function systemLocalinpolicy6DstBlockToHclTerraform(struct?: SystemLocalinpolicy6DstBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_ip: {
      value: cdktf.stringToHclTerraform(struct!.srcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLocalinpolicy6DstBlockOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemLocalinpolicy6DstBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLocalinpolicy6DstBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._srcIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._srcIp = value.srcIp;
    }
  }

  // src_ip - computed: false, optional: true, required: false
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }
}

export class SystemLocalinpolicy6DstBlockList extends cdktf.ComplexList {
  public internalValue? : SystemLocalinpolicy6DstBlock[] | cdktf.IResolvable

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
  public get(index: number): SystemLocalinpolicy6DstBlockOutputReference {
    return new SystemLocalinpolicy6DstBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemLocalinpolicy6IntfBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#intf_name SystemLocalinpolicy6#intf_name}
  */
  readonly intfName?: string;
}

export function systemLocalinpolicy6IntfBlockToTerraform(struct?: SystemLocalinpolicy6IntfBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    intf_name: cdktf.stringToTerraform(struct!.intfName),
  }
}


export function systemLocalinpolicy6IntfBlockToHclTerraform(struct?: SystemLocalinpolicy6IntfBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    intf_name: {
      value: cdktf.stringToHclTerraform(struct!.intfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLocalinpolicy6IntfBlockOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemLocalinpolicy6IntfBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.intfName = this._intfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLocalinpolicy6IntfBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intfName = value.intfName;
    }
  }

  // intf_name - computed: false, optional: true, required: false
  private _intfName?: string; 
  public get intfName() {
    return this.getStringAttribute('intf_name');
  }
  public set intfName(value: string) {
    this._intfName = value;
  }
  public resetIntfName() {
    this._intfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfNameInput() {
    return this._intfName;
  }
}

export class SystemLocalinpolicy6IntfBlockList extends cdktf.ComplexList {
  public internalValue? : SystemLocalinpolicy6IntfBlock[] | cdktf.IResolvable

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
  public get(index: number): SystemLocalinpolicy6IntfBlockOutputReference {
    return new SystemLocalinpolicy6IntfBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemLocalinpolicy6SrcBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#src_ip SystemLocalinpolicy6#src_ip}
  */
  readonly srcIp?: string;
}

export function systemLocalinpolicy6SrcBlockToTerraform(struct?: SystemLocalinpolicy6SrcBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_ip: cdktf.stringToTerraform(struct!.srcIp),
  }
}


export function systemLocalinpolicy6SrcBlockToHclTerraform(struct?: SystemLocalinpolicy6SrcBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_ip: {
      value: cdktf.stringToHclTerraform(struct!.srcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLocalinpolicy6SrcBlockOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemLocalinpolicy6SrcBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLocalinpolicy6SrcBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._srcIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._srcIp = value.srcIp;
    }
  }

  // src_ip - computed: false, optional: true, required: false
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }
}

export class SystemLocalinpolicy6SrcBlockList extends cdktf.ComplexList {
  public internalValue? : SystemLocalinpolicy6SrcBlock[] | cdktf.IResolvable

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
  public get(index: number): SystemLocalinpolicy6SrcBlockOutputReference {
    return new SystemLocalinpolicy6SrcBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6 fortianalyzer_system_localinpolicy6}
*/
export class SystemLocalinpolicy6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_localinpolicy6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLocalinpolicy6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLocalinpolicy6 to import
  * @param importFromId The id of the existing SystemLocalinpolicy6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLocalinpolicy6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_localinpolicy6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_localinpolicy6 fortianalyzer_system_localinpolicy6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLocalinpolicy6Config = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLocalinpolicy6Config = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_localinpolicy6',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._description = config.description;
    this._dport = config.dport;
    this._dst = config.dst;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fosid = config.fosid;
    this._id = config.id;
    this._intf = config.intf;
    this._protocol = config.protocol;
    this._src = config.src;
    this._dportBlock.internalValue = config.dportBlock;
    this._dstBlock.internalValue = config.dstBlock;
    this._intfBlock.internalValue = config.intfBlock;
    this._srcBlock.internalValue = config.srcBlock;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // description - computed: false, optional: true, required: false
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

  // dport - computed: false, optional: true, required: false
  private _dport?: number; 
  public get dport() {
    return this.getNumberAttribute('dport');
  }
  public set dport(value: number) {
    this._dport = value;
  }
  public resetDport() {
    this._dport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dportInput() {
    return this._dport;
  }

  // dst - computed: true, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
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

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // intf - computed: false, optional: true, required: false
  private _intf?: string; 
  public get intf() {
    return this.getStringAttribute('intf');
  }
  public set intf(value: string) {
    this._intf = value;
  }
  public resetIntf() {
    this._intf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfInput() {
    return this._intf;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // src - computed: true, optional: true, required: false
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // dport_block - computed: false, optional: true, required: false
  private _dportBlock = new SystemLocalinpolicy6DportBlockList(this, "dport_block", false);
  public get dportBlock() {
    return this._dportBlock;
  }
  public putDportBlock(value: SystemLocalinpolicy6DportBlock[] | cdktf.IResolvable) {
    this._dportBlock.internalValue = value;
  }
  public resetDportBlock() {
    this._dportBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dportBlockInput() {
    return this._dportBlock.internalValue;
  }

  // dst_block - computed: false, optional: true, required: false
  private _dstBlock = new SystemLocalinpolicy6DstBlockList(this, "dst_block", false);
  public get dstBlock() {
    return this._dstBlock;
  }
  public putDstBlock(value: SystemLocalinpolicy6DstBlock[] | cdktf.IResolvable) {
    this._dstBlock.internalValue = value;
  }
  public resetDstBlock() {
    this._dstBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstBlockInput() {
    return this._dstBlock.internalValue;
  }

  // intf_block - computed: false, optional: true, required: false
  private _intfBlock = new SystemLocalinpolicy6IntfBlockList(this, "intf_block", false);
  public get intfBlock() {
    return this._intfBlock;
  }
  public putIntfBlock(value: SystemLocalinpolicy6IntfBlock[] | cdktf.IResolvable) {
    this._intfBlock.internalValue = value;
  }
  public resetIntfBlock() {
    this._intfBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfBlockInput() {
    return this._intfBlock.internalValue;
  }

  // src_block - computed: false, optional: true, required: false
  private _srcBlock = new SystemLocalinpolicy6SrcBlockList(this, "src_block", false);
  public get srcBlock() {
    return this._srcBlock;
  }
  public putSrcBlock(value: SystemLocalinpolicy6SrcBlock[] | cdktf.IResolvable) {
    this._srcBlock.internalValue = value;
  }
  public resetSrcBlock() {
    this._srcBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBlockInput() {
    return this._srcBlock.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      dport: cdktf.numberToTerraform(this._dport),
      dst: cdktf.stringToTerraform(this._dst),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      intf: cdktf.stringToTerraform(this._intf),
      protocol: cdktf.stringToTerraform(this._protocol),
      src: cdktf.stringToTerraform(this._src),
      dport_block: cdktf.listMapper(systemLocalinpolicy6DportBlockToTerraform, true)(this._dportBlock.internalValue),
      dst_block: cdktf.listMapper(systemLocalinpolicy6DstBlockToTerraform, true)(this._dstBlock.internalValue),
      intf_block: cdktf.listMapper(systemLocalinpolicy6IntfBlockToTerraform, true)(this._intfBlock.internalValue),
      src_block: cdktf.listMapper(systemLocalinpolicy6SrcBlockToTerraform, true)(this._srcBlock.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      dport: {
        value: cdktf.numberToHclTerraform(this._dport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst: {
        value: cdktf.stringToHclTerraform(this._dst),
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
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      intf: {
        value: cdktf.stringToHclTerraform(this._intf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src: {
        value: cdktf.stringToHclTerraform(this._src),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dport_block: {
        value: cdktf.listMapperHcl(systemLocalinpolicy6DportBlockToHclTerraform, true)(this._dportBlock.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLocalinpolicy6DportBlockList",
      },
      dst_block: {
        value: cdktf.listMapperHcl(systemLocalinpolicy6DstBlockToHclTerraform, true)(this._dstBlock.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLocalinpolicy6DstBlockList",
      },
      intf_block: {
        value: cdktf.listMapperHcl(systemLocalinpolicy6IntfBlockToHclTerraform, true)(this._intfBlock.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLocalinpolicy6IntfBlockList",
      },
      src_block: {
        value: cdktf.listMapperHcl(systemLocalinpolicy6SrcBlockToHclTerraform, true)(this._srcBlock.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLocalinpolicy6SrcBlockList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
