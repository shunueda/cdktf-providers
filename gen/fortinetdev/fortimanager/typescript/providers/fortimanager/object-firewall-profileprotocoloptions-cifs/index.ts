// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallProfileprotocoloptionsCifsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#adom ObjectFirewallProfileprotocoloptionsCifsA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#domain_controller ObjectFirewallProfileprotocoloptionsCifsA#domain_controller}
  */
  readonly domainController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#dynamic_sort_subtable ObjectFirewallProfileprotocoloptionsCifsA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#id ObjectFirewallProfileprotocoloptionsCifsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#options ObjectFirewallProfileprotocoloptionsCifsA#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#oversize_limit ObjectFirewallProfileprotocoloptionsCifsA#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#ports ObjectFirewallProfileprotocoloptionsCifsA#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#profile_protocol_options ObjectFirewallProfileprotocoloptionsCifsA#profile_protocol_options}
  */
  readonly profileProtocolOptions: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#scan_bzip2 ObjectFirewallProfileprotocoloptionsCifsA#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#scopetype ObjectFirewallProfileprotocoloptionsCifsA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#server_credential_type ObjectFirewallProfileprotocoloptionsCifsA#server_credential_type}
  */
  readonly serverCredentialType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#status ObjectFirewallProfileprotocoloptionsCifsA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#tcp_window_maximum ObjectFirewallProfileprotocoloptionsCifsA#tcp_window_maximum}
  */
  readonly tcpWindowMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#tcp_window_minimum ObjectFirewallProfileprotocoloptionsCifsA#tcp_window_minimum}
  */
  readonly tcpWindowMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#tcp_window_size ObjectFirewallProfileprotocoloptionsCifsA#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#tcp_window_type ObjectFirewallProfileprotocoloptionsCifsA#tcp_window_type}
  */
  readonly tcpWindowType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#uncompressed_nest_limit ObjectFirewallProfileprotocoloptionsCifsA#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#uncompressed_oversize_limit ObjectFirewallProfileprotocoloptionsCifsA#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
  /**
  * file_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#file_filter ObjectFirewallProfileprotocoloptionsCifsA#file_filter}
  */
  readonly fileFilter?: ObjectFirewallProfileprotocoloptionsCifsFileFilterA;
  /**
  * server_keytab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#server_keytab ObjectFirewallProfileprotocoloptionsCifsA#server_keytab}
  */
  readonly serverKeytab?: ObjectFirewallProfileprotocoloptionsCifsServerKeytabA[] | cdktf.IResolvable;
}
export interface ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#action ObjectFirewallProfileprotocoloptionsCifsA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#comment ObjectFirewallProfileprotocoloptionsCifsA#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#direction ObjectFirewallProfileprotocoloptionsCifsA#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#file_type ObjectFirewallProfileprotocoloptionsCifsA#file_type}
  */
  readonly fileType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#filter ObjectFirewallProfileprotocoloptionsCifsA#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#protocol ObjectFirewallProfileprotocoloptionsCifsA#protocol}
  */
  readonly protocol?: string[];
}

export function objectFirewallProfileprotocoloptionsCifsFileFilterEntriesAToTerraform(struct?: ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    direction: cdktf.stringToTerraform(struct!.direction),
    file_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileType),
    filter: cdktf.stringToTerraform(struct!.filter),
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
  }
}


export function objectFirewallProfileprotocoloptionsCifsFileFilterEntriesAToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._direction = undefined;
      this._fileType = undefined;
      this._filter = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._comment = value.comment;
      this._direction = value.direction;
      this._fileType = value.fileType;
      this._filter = value.filter;
      this._protocol = value.protocol;
    }
  }

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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // file_type - computed: true, optional: true, required: false
  private _fileType?: string[]; 
  public get fileType() {
    return cdktf.Fn.tolist(this.getListAttribute('file_type'));
  }
  public set fileType(value: string[]) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol'));
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesAList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesAOutputReference {
    return new ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallProfileprotocoloptionsCifsFileFilterA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#log ObjectFirewallProfileprotocoloptionsCifsA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#status ObjectFirewallProfileprotocoloptionsCifsA#status}
  */
  readonly status?: string;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#entries ObjectFirewallProfileprotocoloptionsCifsA#entries}
  */
  readonly entries?: ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesA[] | cdktf.IResolvable;
}

export function objectFirewallProfileprotocoloptionsCifsFileFilterAToTerraform(struct?: ObjectFirewallProfileprotocoloptionsCifsFileFilterAOutputReference | ObjectFirewallProfileprotocoloptionsCifsFileFilterA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.stringToTerraform(struct!.log),
    status: cdktf.stringToTerraform(struct!.status),
    entries: cdktf.listMapper(objectFirewallProfileprotocoloptionsCifsFileFilterEntriesAToTerraform, true)(struct!.entries),
  }
}


export function objectFirewallProfileprotocoloptionsCifsFileFilterAToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsCifsFileFilterAOutputReference | ObjectFirewallProfileprotocoloptionsCifsFileFilterA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entries: {
      value: cdktf.listMapperHcl(objectFirewallProfileprotocoloptionsCifsFileFilterEntriesAToHclTerraform, true)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallProfileprotocoloptionsCifsFileFilterAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallProfileprotocoloptionsCifsFileFilterA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsCifsFileFilterA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._log = undefined;
      this._status = undefined;
      this._entries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._log = value.log;
      this._status = value.status;
      this._entries.internalValue = value.entries;
    }
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesAList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesA[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }
}
export interface ObjectFirewallProfileprotocoloptionsCifsServerKeytabA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#keytab ObjectFirewallProfileprotocoloptionsCifsA#keytab}
  */
  readonly keytab?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#password ObjectFirewallProfileprotocoloptionsCifsA#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#principal ObjectFirewallProfileprotocoloptionsCifsA#principal}
  */
  readonly principal?: string;
}

export function objectFirewallProfileprotocoloptionsCifsServerKeytabAToTerraform(struct?: ObjectFirewallProfileprotocoloptionsCifsServerKeytabA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keytab: cdktf.stringToTerraform(struct!.keytab),
    password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}


export function objectFirewallProfileprotocoloptionsCifsServerKeytabAToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsCifsServerKeytabA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keytab: {
      value: cdktf.stringToHclTerraform(struct!.keytab),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallProfileprotocoloptionsCifsServerKeytabAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallProfileprotocoloptionsCifsServerKeytabA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keytab !== undefined) {
      hasAnyValues = true;
      internalValueResult.keytab = this._keytab;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsCifsServerKeytabA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keytab = undefined;
      this._password = undefined;
      this._principal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keytab = value.keytab;
      this._password = value.password;
      this._principal = value.principal;
    }
  }

  // keytab - computed: false, optional: true, required: false
  private _keytab?: string; 
  public get keytab() {
    return this.getStringAttribute('keytab');
  }
  public set keytab(value: string) {
    this._keytab = value;
  }
  public resetKeytab() {
    this._keytab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keytabInput() {
    return this._keytab;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // principal - computed: false, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }
}

export class ObjectFirewallProfileprotocoloptionsCifsServerKeytabAList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallProfileprotocoloptionsCifsServerKeytabA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallProfileprotocoloptionsCifsServerKeytabAOutputReference {
    return new ObjectFirewallProfileprotocoloptionsCifsServerKeytabAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs fortimanager_object_firewall_profileprotocoloptions_cifs}
*/
export class ObjectFirewallProfileprotocoloptionsCifsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_profileprotocoloptions_cifs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallProfileprotocoloptionsCifsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallProfileprotocoloptionsCifsA to import
  * @param importFromId The id of the existing ObjectFirewallProfileprotocoloptionsCifsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallProfileprotocoloptionsCifsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_profileprotocoloptions_cifs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_profileprotocoloptions_cifs fortimanager_object_firewall_profileprotocoloptions_cifs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallProfileprotocoloptionsCifsAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallProfileprotocoloptionsCifsAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_profileprotocoloptions_cifs',
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
    this._domainController = config.domainController;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._options = config.options;
    this._oversizeLimit = config.oversizeLimit;
    this._ports = config.ports;
    this._profileProtocolOptions = config.profileProtocolOptions;
    this._scanBzip2 = config.scanBzip2;
    this._scopetype = config.scopetype;
    this._serverCredentialType = config.serverCredentialType;
    this._status = config.status;
    this._tcpWindowMaximum = config.tcpWindowMaximum;
    this._tcpWindowMinimum = config.tcpWindowMinimum;
    this._tcpWindowSize = config.tcpWindowSize;
    this._tcpWindowType = config.tcpWindowType;
    this._uncompressedNestLimit = config.uncompressedNestLimit;
    this._uncompressedOversizeLimit = config.uncompressedOversizeLimit;
    this._fileFilter.internalValue = config.fileFilter;
    this._serverKeytab.internalValue = config.serverKeytab;
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

  // domain_controller - computed: false, optional: true, required: false
  private _domainController?: string; 
  public get domainController() {
    return this.getStringAttribute('domain_controller');
  }
  public set domainController(value: string) {
    this._domainController = value;
  }
  public resetDomainController() {
    this._domainController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainControllerInput() {
    return this._domainController;
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

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // oversize_limit - computed: true, optional: true, required: false
  private _oversizeLimit?: number; 
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }
  public set oversizeLimit(value: number) {
    this._oversizeLimit = value;
  }
  public resetOversizeLimit() {
    this._oversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeLimitInput() {
    return this._oversizeLimit;
  }

  // ports - computed: true, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // profile_protocol_options - computed: false, optional: false, required: true
  private _profileProtocolOptions?: string; 
  public get profileProtocolOptions() {
    return this.getStringAttribute('profile_protocol_options');
  }
  public set profileProtocolOptions(value: string) {
    this._profileProtocolOptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileProtocolOptionsInput() {
    return this._profileProtocolOptions;
  }

  // scan_bzip2 - computed: true, optional: true, required: false
  private _scanBzip2?: string; 
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }
  public set scanBzip2(value: string) {
    this._scanBzip2 = value;
  }
  public resetScanBzip2() {
    this._scanBzip2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBzip2Input() {
    return this._scanBzip2;
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

  // server_credential_type - computed: true, optional: true, required: false
  private _serverCredentialType?: string; 
  public get serverCredentialType() {
    return this.getStringAttribute('server_credential_type');
  }
  public set serverCredentialType(value: string) {
    this._serverCredentialType = value;
  }
  public resetServerCredentialType() {
    this._serverCredentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCredentialTypeInput() {
    return this._serverCredentialType;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tcp_window_maximum - computed: true, optional: true, required: false
  private _tcpWindowMaximum?: number; 
  public get tcpWindowMaximum() {
    return this.getNumberAttribute('tcp_window_maximum');
  }
  public set tcpWindowMaximum(value: number) {
    this._tcpWindowMaximum = value;
  }
  public resetTcpWindowMaximum() {
    this._tcpWindowMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowMaximumInput() {
    return this._tcpWindowMaximum;
  }

  // tcp_window_minimum - computed: true, optional: true, required: false
  private _tcpWindowMinimum?: number; 
  public get tcpWindowMinimum() {
    return this.getNumberAttribute('tcp_window_minimum');
  }
  public set tcpWindowMinimum(value: number) {
    this._tcpWindowMinimum = value;
  }
  public resetTcpWindowMinimum() {
    this._tcpWindowMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowMinimumInput() {
    return this._tcpWindowMinimum;
  }

  // tcp_window_size - computed: true, optional: true, required: false
  private _tcpWindowSize?: number; 
  public get tcpWindowSize() {
    return this.getNumberAttribute('tcp_window_size');
  }
  public set tcpWindowSize(value: number) {
    this._tcpWindowSize = value;
  }
  public resetTcpWindowSize() {
    this._tcpWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowSizeInput() {
    return this._tcpWindowSize;
  }

  // tcp_window_type - computed: true, optional: true, required: false
  private _tcpWindowType?: string; 
  public get tcpWindowType() {
    return this.getStringAttribute('tcp_window_type');
  }
  public set tcpWindowType(value: string) {
    this._tcpWindowType = value;
  }
  public resetTcpWindowType() {
    this._tcpWindowType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpWindowTypeInput() {
    return this._tcpWindowType;
  }

  // uncompressed_nest_limit - computed: true, optional: true, required: false
  private _uncompressedNestLimit?: number; 
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }
  public set uncompressedNestLimit(value: number) {
    this._uncompressedNestLimit = value;
  }
  public resetUncompressedNestLimit() {
    this._uncompressedNestLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedNestLimitInput() {
    return this._uncompressedNestLimit;
  }

  // uncompressed_oversize_limit - computed: true, optional: true, required: false
  private _uncompressedOversizeLimit?: number; 
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
  public set uncompressedOversizeLimit(value: number) {
    this._uncompressedOversizeLimit = value;
  }
  public resetUncompressedOversizeLimit() {
    this._uncompressedOversizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedOversizeLimitInput() {
    return this._uncompressedOversizeLimit;
  }

  // file_filter - computed: false, optional: true, required: false
  private _fileFilter = new ObjectFirewallProfileprotocoloptionsCifsFileFilterAOutputReference(this, "file_filter");
  public get fileFilter() {
    return this._fileFilter;
  }
  public putFileFilter(value: ObjectFirewallProfileprotocoloptionsCifsFileFilterA) {
    this._fileFilter.internalValue = value;
  }
  public resetFileFilter() {
    this._fileFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFilterInput() {
    return this._fileFilter.internalValue;
  }

  // server_keytab - computed: false, optional: true, required: false
  private _serverKeytab = new ObjectFirewallProfileprotocoloptionsCifsServerKeytabAList(this, "server_keytab", false);
  public get serverKeytab() {
    return this._serverKeytab;
  }
  public putServerKeytab(value: ObjectFirewallProfileprotocoloptionsCifsServerKeytabA[] | cdktf.IResolvable) {
    this._serverKeytab.internalValue = value;
  }
  public resetServerKeytab() {
    this._serverKeytab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeytabInput() {
    return this._serverKeytab.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      domain_controller: cdktf.stringToTerraform(this._domainController),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._options),
      oversize_limit: cdktf.numberToTerraform(this._oversizeLimit),
      ports: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ports),
      profile_protocol_options: cdktf.stringToTerraform(this._profileProtocolOptions),
      scan_bzip2: cdktf.stringToTerraform(this._scanBzip2),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      server_credential_type: cdktf.stringToTerraform(this._serverCredentialType),
      status: cdktf.stringToTerraform(this._status),
      tcp_window_maximum: cdktf.numberToTerraform(this._tcpWindowMaximum),
      tcp_window_minimum: cdktf.numberToTerraform(this._tcpWindowMinimum),
      tcp_window_size: cdktf.numberToTerraform(this._tcpWindowSize),
      tcp_window_type: cdktf.stringToTerraform(this._tcpWindowType),
      uncompressed_nest_limit: cdktf.numberToTerraform(this._uncompressedNestLimit),
      uncompressed_oversize_limit: cdktf.numberToTerraform(this._uncompressedOversizeLimit),
      file_filter: objectFirewallProfileprotocoloptionsCifsFileFilterAToTerraform(this._fileFilter.internalValue),
      server_keytab: cdktf.listMapper(objectFirewallProfileprotocoloptionsCifsServerKeytabAToTerraform, true)(this._serverKeytab.internalValue),
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
      domain_controller: {
        value: cdktf.stringToHclTerraform(this._domainController),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._options),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      oversize_limit: {
        value: cdktf.numberToHclTerraform(this._oversizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      profile_protocol_options: {
        value: cdktf.stringToHclTerraform(this._profileProtocolOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_bzip2: {
        value: cdktf.stringToHclTerraform(this._scanBzip2),
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
      server_credential_type: {
        value: cdktf.stringToHclTerraform(this._serverCredentialType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_window_maximum: {
        value: cdktf.numberToHclTerraform(this._tcpWindowMaximum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_window_minimum: {
        value: cdktf.numberToHclTerraform(this._tcpWindowMinimum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_window_size: {
        value: cdktf.numberToHclTerraform(this._tcpWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_window_type: {
        value: cdktf.stringToHclTerraform(this._tcpWindowType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uncompressed_nest_limit: {
        value: cdktf.numberToHclTerraform(this._uncompressedNestLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uncompressed_oversize_limit: {
        value: cdktf.numberToHclTerraform(this._uncompressedOversizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_filter: {
        value: objectFirewallProfileprotocoloptionsCifsFileFilterAToHclTerraform(this._fileFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallProfileprotocoloptionsCifsFileFilterAList",
      },
      server_keytab: {
        value: cdktf.listMapperHcl(objectFirewallProfileprotocoloptionsCifsServerKeytabAToHclTerraform, true)(this._serverKeytab.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallProfileprotocoloptionsCifsServerKeytabAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
