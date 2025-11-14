// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallProfileprotocoloptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#adom ObjectFirewallProfileprotocoloptions#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#comment ObjectFirewallProfileprotocoloptions#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#feature_set ObjectFirewallProfileprotocoloptions#feature_set}
  */
  readonly featureSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#id ObjectFirewallProfileprotocoloptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#name ObjectFirewallProfileprotocoloptions#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#oversize_log ObjectFirewallProfileprotocoloptions#oversize_log}
  */
  readonly oversizeLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#replacemsg_group ObjectFirewallProfileprotocoloptions#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#rpc_over_http ObjectFirewallProfileprotocoloptions#rpc_over_http}
  */
  readonly rpcOverHttp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#scopetype ObjectFirewallProfileprotocoloptions#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#switching_protocols_log ObjectFirewallProfileprotocoloptions#switching_protocols_log}
  */
  readonly switchingProtocolsLog?: string;
  /**
  * cifs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#cifs ObjectFirewallProfileprotocoloptions#cifs}
  */
  readonly cifs?: ObjectFirewallProfileprotocoloptionsCifs;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#dns ObjectFirewallProfileprotocoloptions#dns}
  */
  readonly dns?: ObjectFirewallProfileprotocoloptionsDns;
  /**
  * ftp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ftp ObjectFirewallProfileprotocoloptions#ftp}
  */
  readonly ftp?: ObjectFirewallProfileprotocoloptionsFtp;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#http ObjectFirewallProfileprotocoloptions#http}
  */
  readonly http?: ObjectFirewallProfileprotocoloptionsHttp;
  /**
  * imap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#imap ObjectFirewallProfileprotocoloptions#imap}
  */
  readonly imap?: ObjectFirewallProfileprotocoloptionsImap;
  /**
  * mail_signature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#mail_signature ObjectFirewallProfileprotocoloptions#mail_signature}
  */
  readonly mailSignature?: ObjectFirewallProfileprotocoloptionsMailSignature;
  /**
  * mapi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#mapi ObjectFirewallProfileprotocoloptions#mapi}
  */
  readonly mapi?: ObjectFirewallProfileprotocoloptionsMapi;
  /**
  * nntp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#nntp ObjectFirewallProfileprotocoloptions#nntp}
  */
  readonly nntp?: ObjectFirewallProfileprotocoloptionsNntp;
  /**
  * pop3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#pop3 ObjectFirewallProfileprotocoloptions#pop3}
  */
  readonly pop3?: ObjectFirewallProfileprotocoloptionsPop3;
  /**
  * smtp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#smtp ObjectFirewallProfileprotocoloptions#smtp}
  */
  readonly smtp?: ObjectFirewallProfileprotocoloptionsSmtp;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ssh ObjectFirewallProfileprotocoloptions#ssh}
  */
  readonly ssh?: ObjectFirewallProfileprotocoloptionsSsh;
}
export interface ObjectFirewallProfileprotocoloptionsCifsFileFilterEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#action ObjectFirewallProfileprotocoloptions#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#comment ObjectFirewallProfileprotocoloptions#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#direction ObjectFirewallProfileprotocoloptions#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#file_type ObjectFirewallProfileprotocoloptions#file_type}
  */
  readonly fileType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#filter ObjectFirewallProfileprotocoloptions#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#protocol ObjectFirewallProfileprotocoloptions#protocol}
  */
  readonly protocol?: string[];
}

export function objectFirewallProfileprotocoloptionsCifsFileFilterEntriesToTerraform(struct?: ObjectFirewallProfileprotocoloptionsCifsFileFilterEntries | cdktf.IResolvable): any {
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


export function objectFirewallProfileprotocoloptionsCifsFileFilterEntriesToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsCifsFileFilterEntries | cdktf.IResolvable): any {
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

export class ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallProfileprotocoloptionsCifsFileFilterEntries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsCifsFileFilterEntries | cdktf.IResolvable | undefined) {
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

export class ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallProfileprotocoloptionsCifsFileFilterEntries[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesOutputReference {
    return new ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallProfileprotocoloptionsCifsFileFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#log ObjectFirewallProfileprotocoloptions#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#status ObjectFirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#entries ObjectFirewallProfileprotocoloptions#entries}
  */
  readonly entries?: ObjectFirewallProfileprotocoloptionsCifsFileFilterEntries[] | cdktf.IResolvable;
}

export function objectFirewallProfileprotocoloptionsCifsFileFilterToTerraform(struct?: ObjectFirewallProfileprotocoloptionsCifsFileFilterOutputReference | ObjectFirewallProfileprotocoloptionsCifsFileFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.stringToTerraform(struct!.log),
    status: cdktf.stringToTerraform(struct!.status),
    entries: cdktf.listMapper(objectFirewallProfileprotocoloptionsCifsFileFilterEntriesToTerraform, true)(struct!.entries),
  }
}


export function objectFirewallProfileprotocoloptionsCifsFileFilterToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsCifsFileFilterOutputReference | ObjectFirewallProfileprotocoloptionsCifsFileFilter): any {
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
      value: cdktf.listMapperHcl(objectFirewallProfileprotocoloptionsCifsFileFilterEntriesToHclTerraform, true)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallProfileprotocoloptionsCifsFileFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallProfileprotocoloptionsCifsFileFilter | undefined {
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

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsCifsFileFilter | undefined) {
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
  private _entries = new ObjectFirewallProfileprotocoloptionsCifsFileFilterEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: ObjectFirewallProfileprotocoloptionsCifsFileFilterEntries[] | cdktf.IResolvable) {
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
export interface ObjectFirewallProfileprotocoloptionsCifsServerKeytab {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#keytab ObjectFirewallProfileprotocoloptions#keytab}
  */
  readonly keytab?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#password ObjectFirewallProfileprotocoloptions#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#principal ObjectFirewallProfileprotocoloptions#principal}
  */
  readonly principal?: string;
}

export function objectFirewallProfileprotocoloptionsCifsServerKeytabToTerraform(struct?: ObjectFirewallProfileprotocoloptionsCifsServerKeytab | cdktf.IResolvable): any {
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


export function objectFirewallProfileprotocoloptionsCifsServerKeytabToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsCifsServerKeytab | cdktf.IResolvable): any {
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

export class ObjectFirewallProfileprotocoloptionsCifsServerKeytabOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallProfileprotocoloptionsCifsServerKeytab | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsCifsServerKeytab | cdktf.IResolvable | undefined) {
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

export class ObjectFirewallProfileprotocoloptionsCifsServerKeytabList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallProfileprotocoloptionsCifsServerKeytab[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallProfileprotocoloptionsCifsServerKeytabOutputReference {
    return new ObjectFirewallProfileprotocoloptionsCifsServerKeytabOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallProfileprotocoloptionsCifs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#domain_controller ObjectFirewallProfileprotocoloptions#domain_controller}
  */
  readonly domainController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#options ObjectFirewallProfileprotocoloptions#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#oversize_limit ObjectFirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ports ObjectFirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#scan_bzip2 ObjectFirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#server_credential_type ObjectFirewallProfileprotocoloptions#server_credential_type}
  */
  readonly serverCredentialType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#status ObjectFirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tcp_window_maximum ObjectFirewallProfileprotocoloptions#tcp_window_maximum}
  */
  readonly tcpWindowMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tcp_window_minimum ObjectFirewallProfileprotocoloptions#tcp_window_minimum}
  */
  readonly tcpWindowMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tcp_window_size ObjectFirewallProfileprotocoloptions#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tcp_window_type ObjectFirewallProfileprotocoloptions#tcp_window_type}
  */
  readonly tcpWindowType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_nest_limit ObjectFirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_oversize_limit ObjectFirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
  /**
  * file_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#file_filter ObjectFirewallProfileprotocoloptions#file_filter}
  */
  readonly fileFilter?: ObjectFirewallProfileprotocoloptionsCifsFileFilter;
  /**
  * server_keytab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#server_keytab ObjectFirewallProfileprotocoloptions#server_keytab}
  */
  readonly serverKeytab?: ObjectFirewallProfileprotocoloptionsCifsServerKeytab[] | cdktf.IResolvable;
}

export function objectFirewallProfileprotocoloptionsCifsToTerraform(struct?: ObjectFirewallProfileprotocoloptionsCifsOutputReference | ObjectFirewallProfileprotocoloptionsCifs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_controller: cdktf.stringToTerraform(struct!.domainController),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    server_credential_type: cdktf.stringToTerraform(struct!.serverCredentialType),
    status: cdktf.stringToTerraform(struct!.status),
    tcp_window_maximum: cdktf.numberToTerraform(struct!.tcpWindowMaximum),
    tcp_window_minimum: cdktf.numberToTerraform(struct!.tcpWindowMinimum),
    tcp_window_size: cdktf.numberToTerraform(struct!.tcpWindowSize),
    tcp_window_type: cdktf.stringToTerraform(struct!.tcpWindowType),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
    file_filter: objectFirewallProfileprotocoloptionsCifsFileFilterToTerraform(struct!.fileFilter),
    server_keytab: cdktf.listMapper(objectFirewallProfileprotocoloptionsCifsServerKeytabToTerraform, true)(struct!.serverKeytab),
  }
}


export function objectFirewallProfileprotocoloptionsCifsToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsCifsOutputReference | ObjectFirewallProfileprotocoloptionsCifs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_controller: {
      value: cdktf.stringToHclTerraform(struct!.domainController),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_credential_type: {
      value: cdktf.stringToHclTerraform(struct!.serverCredentialType),
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
    tcp_window_maximum: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_minimum: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_size: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_type: {
      value: cdktf.stringToHclTerraform(struct!.tcpWindowType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_filter: {
      value: objectFirewallProfileprotocoloptionsCifsFileFilterToHclTerraform(struct!.fileFilter),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallProfileprotocoloptionsCifsFileFilterList",
    },
    server_keytab: {
      value: cdktf.listMapperHcl(objectFirewallProfileprotocoloptionsCifsServerKeytabToHclTerraform, true)(struct!.serverKeytab),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallProfileprotocoloptionsCifsServerKeytabList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallProfileprotocoloptionsCifsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallProfileprotocoloptionsCifs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainController !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainController = this._domainController;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._serverCredentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCredentialType = this._serverCredentialType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tcpWindowMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowMaximum = this._tcpWindowMaximum;
    }
    if (this._tcpWindowMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowMinimum = this._tcpWindowMinimum;
    }
    if (this._tcpWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowSize = this._tcpWindowSize;
    }
    if (this._tcpWindowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowType = this._tcpWindowType;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    if (this._fileFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFilter = this._fileFilter?.internalValue;
    }
    if (this._serverKeytab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverKeytab = this._serverKeytab?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsCifs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainController = undefined;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._ports = undefined;
      this._scanBzip2 = undefined;
      this._serverCredentialType = undefined;
      this._status = undefined;
      this._tcpWindowMaximum = undefined;
      this._tcpWindowMinimum = undefined;
      this._tcpWindowSize = undefined;
      this._tcpWindowType = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
      this._fileFilter.internalValue = undefined;
      this._serverKeytab.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainController = value.domainController;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._ports = value.ports;
      this._scanBzip2 = value.scanBzip2;
      this._serverCredentialType = value.serverCredentialType;
      this._status = value.status;
      this._tcpWindowMaximum = value.tcpWindowMaximum;
      this._tcpWindowMinimum = value.tcpWindowMinimum;
      this._tcpWindowSize = value.tcpWindowSize;
      this._tcpWindowType = value.tcpWindowType;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
      this._fileFilter.internalValue = value.fileFilter;
      this._serverKeytab.internalValue = value.serverKeytab;
    }
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
  private _fileFilter = new ObjectFirewallProfileprotocoloptionsCifsFileFilterOutputReference(this, "file_filter");
  public get fileFilter() {
    return this._fileFilter;
  }
  public putFileFilter(value: ObjectFirewallProfileprotocoloptionsCifsFileFilter) {
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
  private _serverKeytab = new ObjectFirewallProfileprotocoloptionsCifsServerKeytabList(this, "server_keytab", false);
  public get serverKeytab() {
    return this._serverKeytab;
  }
  public putServerKeytab(value: ObjectFirewallProfileprotocoloptionsCifsServerKeytab[] | cdktf.IResolvable) {
    this._serverKeytab.internalValue = value;
  }
  public resetServerKeytab() {
    this._serverKeytab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeytabInput() {
    return this._serverKeytab.internalValue;
  }
}
export interface ObjectFirewallProfileprotocoloptionsDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ports ObjectFirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#status ObjectFirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
}

export function objectFirewallProfileprotocoloptionsDnsToTerraform(struct?: ObjectFirewallProfileprotocoloptionsDnsOutputReference | ObjectFirewallProfileprotocoloptionsDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectFirewallProfileprotocoloptionsDnsToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsDnsOutputReference | ObjectFirewallProfileprotocoloptionsDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallProfileprotocoloptionsDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallProfileprotocoloptionsDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ports = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ports = value.ports;
      this._status = value.status;
    }
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
}
export interface ObjectFirewallProfileprotocoloptionsFtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#comfort_amount ObjectFirewallProfileprotocoloptions#comfort_amount}
  */
  readonly comfortAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#comfort_interval ObjectFirewallProfileprotocoloptions#comfort_interval}
  */
  readonly comfortInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#explicit_ftp_tls ObjectFirewallProfileprotocoloptions#explicit_ftp_tls}
  */
  readonly explicitFtpTls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#inspect_all ObjectFirewallProfileprotocoloptions#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#options ObjectFirewallProfileprotocoloptions#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#oversize_limit ObjectFirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ports ObjectFirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#scan_bzip2 ObjectFirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ssl_offloaded ObjectFirewallProfileprotocoloptions#ssl_offloaded}
  */
  readonly sslOffloaded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#status ObjectFirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#stream_based_uncompressed_limit ObjectFirewallProfileprotocoloptions#stream_based_uncompressed_limit}
  */
  readonly streamBasedUncompressedLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tcp_window_maximum ObjectFirewallProfileprotocoloptions#tcp_window_maximum}
  */
  readonly tcpWindowMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tcp_window_minimum ObjectFirewallProfileprotocoloptions#tcp_window_minimum}
  */
  readonly tcpWindowMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tcp_window_size ObjectFirewallProfileprotocoloptions#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tcp_window_type ObjectFirewallProfileprotocoloptions#tcp_window_type}
  */
  readonly tcpWindowType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_nest_limit ObjectFirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_oversize_limit ObjectFirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
}

export function objectFirewallProfileprotocoloptionsFtpToTerraform(struct?: ObjectFirewallProfileprotocoloptionsFtpOutputReference | ObjectFirewallProfileprotocoloptionsFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comfort_amount: cdktf.numberToTerraform(struct!.comfortAmount),
    comfort_interval: cdktf.numberToTerraform(struct!.comfortInterval),
    explicit_ftp_tls: cdktf.stringToTerraform(struct!.explicitFtpTls),
    inspect_all: cdktf.stringToTerraform(struct!.inspectAll),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    ssl_offloaded: cdktf.stringToTerraform(struct!.sslOffloaded),
    status: cdktf.stringToTerraform(struct!.status),
    stream_based_uncompressed_limit: cdktf.numberToTerraform(struct!.streamBasedUncompressedLimit),
    tcp_window_maximum: cdktf.numberToTerraform(struct!.tcpWindowMaximum),
    tcp_window_minimum: cdktf.numberToTerraform(struct!.tcpWindowMinimum),
    tcp_window_size: cdktf.numberToTerraform(struct!.tcpWindowSize),
    tcp_window_type: cdktf.stringToTerraform(struct!.tcpWindowType),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
  }
}


export function objectFirewallProfileprotocoloptionsFtpToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsFtpOutputReference | ObjectFirewallProfileprotocoloptionsFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comfort_amount: {
      value: cdktf.numberToHclTerraform(struct!.comfortAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comfort_interval: {
      value: cdktf.numberToHclTerraform(struct!.comfortInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    explicit_ftp_tls: {
      value: cdktf.stringToHclTerraform(struct!.explicitFtpTls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspect_all: {
      value: cdktf.stringToHclTerraform(struct!.inspectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_offloaded: {
      value: cdktf.stringToHclTerraform(struct!.sslOffloaded),
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
    stream_based_uncompressed_limit: {
      value: cdktf.numberToHclTerraform(struct!.streamBasedUncompressedLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_maximum: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_minimum: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_size: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_type: {
      value: cdktf.stringToHclTerraform(struct!.tcpWindowType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallProfileprotocoloptionsFtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallProfileprotocoloptionsFtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comfortAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.comfortAmount = this._comfortAmount;
    }
    if (this._comfortInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.comfortInterval = this._comfortInterval;
    }
    if (this._explicitFtpTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitFtpTls = this._explicitFtpTls;
    }
    if (this._inspectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectAll = this._inspectAll;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._sslOffloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslOffloaded = this._sslOffloaded;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._streamBasedUncompressedLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamBasedUncompressedLimit = this._streamBasedUncompressedLimit;
    }
    if (this._tcpWindowMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowMaximum = this._tcpWindowMaximum;
    }
    if (this._tcpWindowMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowMinimum = this._tcpWindowMinimum;
    }
    if (this._tcpWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowSize = this._tcpWindowSize;
    }
    if (this._tcpWindowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowType = this._tcpWindowType;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsFtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comfortAmount = undefined;
      this._comfortInterval = undefined;
      this._explicitFtpTls = undefined;
      this._inspectAll = undefined;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._ports = undefined;
      this._scanBzip2 = undefined;
      this._sslOffloaded = undefined;
      this._status = undefined;
      this._streamBasedUncompressedLimit = undefined;
      this._tcpWindowMaximum = undefined;
      this._tcpWindowMinimum = undefined;
      this._tcpWindowSize = undefined;
      this._tcpWindowType = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comfortAmount = value.comfortAmount;
      this._comfortInterval = value.comfortInterval;
      this._explicitFtpTls = value.explicitFtpTls;
      this._inspectAll = value.inspectAll;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._ports = value.ports;
      this._scanBzip2 = value.scanBzip2;
      this._sslOffloaded = value.sslOffloaded;
      this._status = value.status;
      this._streamBasedUncompressedLimit = value.streamBasedUncompressedLimit;
      this._tcpWindowMaximum = value.tcpWindowMaximum;
      this._tcpWindowMinimum = value.tcpWindowMinimum;
      this._tcpWindowSize = value.tcpWindowSize;
      this._tcpWindowType = value.tcpWindowType;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
    }
  }

  // comfort_amount - computed: true, optional: true, required: false
  private _comfortAmount?: number; 
  public get comfortAmount() {
    return this.getNumberAttribute('comfort_amount');
  }
  public set comfortAmount(value: number) {
    this._comfortAmount = value;
  }
  public resetComfortAmount() {
    this._comfortAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comfortAmountInput() {
    return this._comfortAmount;
  }

  // comfort_interval - computed: true, optional: true, required: false
  private _comfortInterval?: number; 
  public get comfortInterval() {
    return this.getNumberAttribute('comfort_interval');
  }
  public set comfortInterval(value: number) {
    this._comfortInterval = value;
  }
  public resetComfortInterval() {
    this._comfortInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comfortIntervalInput() {
    return this._comfortInterval;
  }

  // explicit_ftp_tls - computed: true, optional: true, required: false
  private _explicitFtpTls?: string; 
  public get explicitFtpTls() {
    return this.getStringAttribute('explicit_ftp_tls');
  }
  public set explicitFtpTls(value: string) {
    this._explicitFtpTls = value;
  }
  public resetExplicitFtpTls() {
    this._explicitFtpTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitFtpTlsInput() {
    return this._explicitFtpTls;
  }

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
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

  // ssl_offloaded - computed: true, optional: true, required: false
  private _sslOffloaded?: string; 
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }
  public set sslOffloaded(value: string) {
    this._sslOffloaded = value;
  }
  public resetSslOffloaded() {
    this._sslOffloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOffloadedInput() {
    return this._sslOffloaded;
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

  // stream_based_uncompressed_limit - computed: false, optional: true, required: false
  private _streamBasedUncompressedLimit?: number; 
  public get streamBasedUncompressedLimit() {
    return this.getNumberAttribute('stream_based_uncompressed_limit');
  }
  public set streamBasedUncompressedLimit(value: number) {
    this._streamBasedUncompressedLimit = value;
  }
  public resetStreamBasedUncompressedLimit() {
    this._streamBasedUncompressedLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamBasedUncompressedLimitInput() {
    return this._streamBasedUncompressedLimit;
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
}
export interface ObjectFirewallProfileprotocoloptionsHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#address_ip_rating ObjectFirewallProfileprotocoloptions#address_ip_rating}
  */
  readonly addressIpRating?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#block_page_status_code ObjectFirewallProfileprotocoloptions#block_page_status_code}
  */
  readonly blockPageStatusCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#comfort_amount ObjectFirewallProfileprotocoloptions#comfort_amount}
  */
  readonly comfortAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#comfort_interval ObjectFirewallProfileprotocoloptions#comfort_interval}
  */
  readonly comfortInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#domain_fronting ObjectFirewallProfileprotocoloptions#domain_fronting}
  */
  readonly domainFronting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#fortinet_bar ObjectFirewallProfileprotocoloptions#fortinet_bar}
  */
  readonly fortinetBar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#fortinet_bar_port ObjectFirewallProfileprotocoloptions#fortinet_bar_port}
  */
  readonly fortinetBarPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#h2c ObjectFirewallProfileprotocoloptions#h2c}
  */
  readonly h2C?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#http_09 ObjectFirewallProfileprotocoloptions#http_09}
  */
  readonly http09?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#http_policy ObjectFirewallProfileprotocoloptions#http_policy}
  */
  readonly httpPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#inspect_all ObjectFirewallProfileprotocoloptions#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#options ObjectFirewallProfileprotocoloptions#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#oversize_limit ObjectFirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ports ObjectFirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#post_lang ObjectFirewallProfileprotocoloptions#post_lang}
  */
  readonly postLang?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#proxy_after_tcp_handshake ObjectFirewallProfileprotocoloptions#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#range_block ObjectFirewallProfileprotocoloptions#range_block}
  */
  readonly rangeBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#retry_count ObjectFirewallProfileprotocoloptions#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#scan_bzip2 ObjectFirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ssl_offloaded ObjectFirewallProfileprotocoloptions#ssl_offloaded}
  */
  readonly sslOffloaded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#status ObjectFirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#stream_based_uncompressed_limit ObjectFirewallProfileprotocoloptions#stream_based_uncompressed_limit}
  */
  readonly streamBasedUncompressedLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#streaming_content_bypass ObjectFirewallProfileprotocoloptions#streaming_content_bypass}
  */
  readonly streamingContentBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#strip_x_forwarded_for ObjectFirewallProfileprotocoloptions#strip_x_forwarded_for}
  */
  readonly stripXForwardedFor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#switching_protocols ObjectFirewallProfileprotocoloptions#switching_protocols}
  */
  readonly switchingProtocols?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tcp_window_maximum ObjectFirewallProfileprotocoloptions#tcp_window_maximum}
  */
  readonly tcpWindowMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tcp_window_minimum ObjectFirewallProfileprotocoloptions#tcp_window_minimum}
  */
  readonly tcpWindowMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tcp_window_size ObjectFirewallProfileprotocoloptions#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tcp_window_type ObjectFirewallProfileprotocoloptions#tcp_window_type}
  */
  readonly tcpWindowType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tunnel_non_http ObjectFirewallProfileprotocoloptions#tunnel_non_http}
  */
  readonly tunnelNonHttp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_nest_limit ObjectFirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_oversize_limit ObjectFirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#unknown_content_encoding ObjectFirewallProfileprotocoloptions#unknown_content_encoding}
  */
  readonly unknownContentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#unknown_http_version ObjectFirewallProfileprotocoloptions#unknown_http_version}
  */
  readonly unknownHttpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#verify_dns_for_policy_matching ObjectFirewallProfileprotocoloptions#verify_dns_for_policy_matching}
  */
  readonly verifyDnsForPolicyMatching?: string;
}

export function objectFirewallProfileprotocoloptionsHttpToTerraform(struct?: ObjectFirewallProfileprotocoloptionsHttpOutputReference | ObjectFirewallProfileprotocoloptionsHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_ip_rating: cdktf.stringToTerraform(struct!.addressIpRating),
    block_page_status_code: cdktf.numberToTerraform(struct!.blockPageStatusCode),
    comfort_amount: cdktf.numberToTerraform(struct!.comfortAmount),
    comfort_interval: cdktf.numberToTerraform(struct!.comfortInterval),
    domain_fronting: cdktf.stringToTerraform(struct!.domainFronting),
    fortinet_bar: cdktf.stringToTerraform(struct!.fortinetBar),
    fortinet_bar_port: cdktf.numberToTerraform(struct!.fortinetBarPort),
    h2c: cdktf.stringToTerraform(struct!.h2C),
    http_09: cdktf.stringToTerraform(struct!.http09),
    http_policy: cdktf.stringToTerraform(struct!.httpPolicy),
    inspect_all: cdktf.stringToTerraform(struct!.inspectAll),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    post_lang: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.postLang),
    proxy_after_tcp_handshake: cdktf.stringToTerraform(struct!.proxyAfterTcpHandshake),
    range_block: cdktf.stringToTerraform(struct!.rangeBlock),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    ssl_offloaded: cdktf.stringToTerraform(struct!.sslOffloaded),
    status: cdktf.stringToTerraform(struct!.status),
    stream_based_uncompressed_limit: cdktf.numberToTerraform(struct!.streamBasedUncompressedLimit),
    streaming_content_bypass: cdktf.stringToTerraform(struct!.streamingContentBypass),
    strip_x_forwarded_for: cdktf.stringToTerraform(struct!.stripXForwardedFor),
    switching_protocols: cdktf.stringToTerraform(struct!.switchingProtocols),
    tcp_window_maximum: cdktf.numberToTerraform(struct!.tcpWindowMaximum),
    tcp_window_minimum: cdktf.numberToTerraform(struct!.tcpWindowMinimum),
    tcp_window_size: cdktf.numberToTerraform(struct!.tcpWindowSize),
    tcp_window_type: cdktf.stringToTerraform(struct!.tcpWindowType),
    tunnel_non_http: cdktf.stringToTerraform(struct!.tunnelNonHttp),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
    unknown_content_encoding: cdktf.stringToTerraform(struct!.unknownContentEncoding),
    unknown_http_version: cdktf.stringToTerraform(struct!.unknownHttpVersion),
    verify_dns_for_policy_matching: cdktf.stringToTerraform(struct!.verifyDnsForPolicyMatching),
  }
}


export function objectFirewallProfileprotocoloptionsHttpToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsHttpOutputReference | ObjectFirewallProfileprotocoloptionsHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_ip_rating: {
      value: cdktf.stringToHclTerraform(struct!.addressIpRating),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_page_status_code: {
      value: cdktf.numberToHclTerraform(struct!.blockPageStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comfort_amount: {
      value: cdktf.numberToHclTerraform(struct!.comfortAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comfort_interval: {
      value: cdktf.numberToHclTerraform(struct!.comfortInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_fronting: {
      value: cdktf.stringToHclTerraform(struct!.domainFronting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortinet_bar: {
      value: cdktf.stringToHclTerraform(struct!.fortinetBar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortinet_bar_port: {
      value: cdktf.numberToHclTerraform(struct!.fortinetBarPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h2c: {
      value: cdktf.stringToHclTerraform(struct!.h2C),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_09: {
      value: cdktf.stringToHclTerraform(struct!.http09),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_policy: {
      value: cdktf.stringToHclTerraform(struct!.httpPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspect_all: {
      value: cdktf.stringToHclTerraform(struct!.inspectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    post_lang: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.postLang),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    proxy_after_tcp_handshake: {
      value: cdktf.stringToHclTerraform(struct!.proxyAfterTcpHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_block: {
      value: cdktf.stringToHclTerraform(struct!.rangeBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_count: {
      value: cdktf.numberToHclTerraform(struct!.retryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_offloaded: {
      value: cdktf.stringToHclTerraform(struct!.sslOffloaded),
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
    stream_based_uncompressed_limit: {
      value: cdktf.numberToHclTerraform(struct!.streamBasedUncompressedLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    streaming_content_bypass: {
      value: cdktf.stringToHclTerraform(struct!.streamingContentBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_x_forwarded_for: {
      value: cdktf.stringToHclTerraform(struct!.stripXForwardedFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switching_protocols: {
      value: cdktf.stringToHclTerraform(struct!.switchingProtocols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_window_maximum: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_minimum: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_size: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_type: {
      value: cdktf.stringToHclTerraform(struct!.tcpWindowType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_non_http: {
      value: cdktf.stringToHclTerraform(struct!.tunnelNonHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_content_encoding: {
      value: cdktf.stringToHclTerraform(struct!.unknownContentEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknown_http_version: {
      value: cdktf.stringToHclTerraform(struct!.unknownHttpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_dns_for_policy_matching: {
      value: cdktf.stringToHclTerraform(struct!.verifyDnsForPolicyMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallProfileprotocoloptionsHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallProfileprotocoloptionsHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressIpRating !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressIpRating = this._addressIpRating;
    }
    if (this._blockPageStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPageStatusCode = this._blockPageStatusCode;
    }
    if (this._comfortAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.comfortAmount = this._comfortAmount;
    }
    if (this._comfortInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.comfortInterval = this._comfortInterval;
    }
    if (this._domainFronting !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainFronting = this._domainFronting;
    }
    if (this._fortinetBar !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortinetBar = this._fortinetBar;
    }
    if (this._fortinetBarPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortinetBarPort = this._fortinetBarPort;
    }
    if (this._h2C !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2C = this._h2C;
    }
    if (this._http09 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http09 = this._http09;
    }
    if (this._httpPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPolicy = this._httpPolicy;
    }
    if (this._inspectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectAll = this._inspectAll;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._postLang !== undefined) {
      hasAnyValues = true;
      internalValueResult.postLang = this._postLang;
    }
    if (this._proxyAfterTcpHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAfterTcpHandshake = this._proxyAfterTcpHandshake;
    }
    if (this._rangeBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeBlock = this._rangeBlock;
    }
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._sslOffloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslOffloaded = this._sslOffloaded;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._streamBasedUncompressedLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamBasedUncompressedLimit = this._streamBasedUncompressedLimit;
    }
    if (this._streamingContentBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamingContentBypass = this._streamingContentBypass;
    }
    if (this._stripXForwardedFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripXForwardedFor = this._stripXForwardedFor;
    }
    if (this._switchingProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchingProtocols = this._switchingProtocols;
    }
    if (this._tcpWindowMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowMaximum = this._tcpWindowMaximum;
    }
    if (this._tcpWindowMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowMinimum = this._tcpWindowMinimum;
    }
    if (this._tcpWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowSize = this._tcpWindowSize;
    }
    if (this._tcpWindowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowType = this._tcpWindowType;
    }
    if (this._tunnelNonHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelNonHttp = this._tunnelNonHttp;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    if (this._unknownContentEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownContentEncoding = this._unknownContentEncoding;
    }
    if (this._unknownHttpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownHttpVersion = this._unknownHttpVersion;
    }
    if (this._verifyDnsForPolicyMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyDnsForPolicyMatching = this._verifyDnsForPolicyMatching;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressIpRating = undefined;
      this._blockPageStatusCode = undefined;
      this._comfortAmount = undefined;
      this._comfortInterval = undefined;
      this._domainFronting = undefined;
      this._fortinetBar = undefined;
      this._fortinetBarPort = undefined;
      this._h2C = undefined;
      this._http09 = undefined;
      this._httpPolicy = undefined;
      this._inspectAll = undefined;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._ports = undefined;
      this._postLang = undefined;
      this._proxyAfterTcpHandshake = undefined;
      this._rangeBlock = undefined;
      this._retryCount = undefined;
      this._scanBzip2 = undefined;
      this._sslOffloaded = undefined;
      this._status = undefined;
      this._streamBasedUncompressedLimit = undefined;
      this._streamingContentBypass = undefined;
      this._stripXForwardedFor = undefined;
      this._switchingProtocols = undefined;
      this._tcpWindowMaximum = undefined;
      this._tcpWindowMinimum = undefined;
      this._tcpWindowSize = undefined;
      this._tcpWindowType = undefined;
      this._tunnelNonHttp = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
      this._unknownContentEncoding = undefined;
      this._unknownHttpVersion = undefined;
      this._verifyDnsForPolicyMatching = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressIpRating = value.addressIpRating;
      this._blockPageStatusCode = value.blockPageStatusCode;
      this._comfortAmount = value.comfortAmount;
      this._comfortInterval = value.comfortInterval;
      this._domainFronting = value.domainFronting;
      this._fortinetBar = value.fortinetBar;
      this._fortinetBarPort = value.fortinetBarPort;
      this._h2C = value.h2C;
      this._http09 = value.http09;
      this._httpPolicy = value.httpPolicy;
      this._inspectAll = value.inspectAll;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._ports = value.ports;
      this._postLang = value.postLang;
      this._proxyAfterTcpHandshake = value.proxyAfterTcpHandshake;
      this._rangeBlock = value.rangeBlock;
      this._retryCount = value.retryCount;
      this._scanBzip2 = value.scanBzip2;
      this._sslOffloaded = value.sslOffloaded;
      this._status = value.status;
      this._streamBasedUncompressedLimit = value.streamBasedUncompressedLimit;
      this._streamingContentBypass = value.streamingContentBypass;
      this._stripXForwardedFor = value.stripXForwardedFor;
      this._switchingProtocols = value.switchingProtocols;
      this._tcpWindowMaximum = value.tcpWindowMaximum;
      this._tcpWindowMinimum = value.tcpWindowMinimum;
      this._tcpWindowSize = value.tcpWindowSize;
      this._tcpWindowType = value.tcpWindowType;
      this._tunnelNonHttp = value.tunnelNonHttp;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
      this._unknownContentEncoding = value.unknownContentEncoding;
      this._unknownHttpVersion = value.unknownHttpVersion;
      this._verifyDnsForPolicyMatching = value.verifyDnsForPolicyMatching;
    }
  }

  // address_ip_rating - computed: true, optional: true, required: false
  private _addressIpRating?: string; 
  public get addressIpRating() {
    return this.getStringAttribute('address_ip_rating');
  }
  public set addressIpRating(value: string) {
    this._addressIpRating = value;
  }
  public resetAddressIpRating() {
    this._addressIpRating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpRatingInput() {
    return this._addressIpRating;
  }

  // block_page_status_code - computed: true, optional: true, required: false
  private _blockPageStatusCode?: number; 
  public get blockPageStatusCode() {
    return this.getNumberAttribute('block_page_status_code');
  }
  public set blockPageStatusCode(value: number) {
    this._blockPageStatusCode = value;
  }
  public resetBlockPageStatusCode() {
    this._blockPageStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPageStatusCodeInput() {
    return this._blockPageStatusCode;
  }

  // comfort_amount - computed: true, optional: true, required: false
  private _comfortAmount?: number; 
  public get comfortAmount() {
    return this.getNumberAttribute('comfort_amount');
  }
  public set comfortAmount(value: number) {
    this._comfortAmount = value;
  }
  public resetComfortAmount() {
    this._comfortAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comfortAmountInput() {
    return this._comfortAmount;
  }

  // comfort_interval - computed: true, optional: true, required: false
  private _comfortInterval?: number; 
  public get comfortInterval() {
    return this.getNumberAttribute('comfort_interval');
  }
  public set comfortInterval(value: number) {
    this._comfortInterval = value;
  }
  public resetComfortInterval() {
    this._comfortInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comfortIntervalInput() {
    return this._comfortInterval;
  }

  // domain_fronting - computed: true, optional: true, required: false
  private _domainFronting?: string; 
  public get domainFronting() {
    return this.getStringAttribute('domain_fronting');
  }
  public set domainFronting(value: string) {
    this._domainFronting = value;
  }
  public resetDomainFronting() {
    this._domainFronting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainFrontingInput() {
    return this._domainFronting;
  }

  // fortinet_bar - computed: true, optional: true, required: false
  private _fortinetBar?: string; 
  public get fortinetBar() {
    return this.getStringAttribute('fortinet_bar');
  }
  public set fortinetBar(value: string) {
    this._fortinetBar = value;
  }
  public resetFortinetBar() {
    this._fortinetBar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortinetBarInput() {
    return this._fortinetBar;
  }

  // fortinet_bar_port - computed: true, optional: true, required: false
  private _fortinetBarPort?: number; 
  public get fortinetBarPort() {
    return this.getNumberAttribute('fortinet_bar_port');
  }
  public set fortinetBarPort(value: number) {
    this._fortinetBarPort = value;
  }
  public resetFortinetBarPort() {
    this._fortinetBarPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortinetBarPortInput() {
    return this._fortinetBarPort;
  }

  // h2c - computed: true, optional: true, required: false
  private _h2C?: string; 
  public get h2C() {
    return this.getStringAttribute('h2c');
  }
  public set h2C(value: string) {
    this._h2C = value;
  }
  public resetH2C() {
    this._h2C = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2CInput() {
    return this._h2C;
  }

  // http_09 - computed: true, optional: true, required: false
  private _http09?: string; 
  public get http09() {
    return this.getStringAttribute('http_09');
  }
  public set http09(value: string) {
    this._http09 = value;
  }
  public resetHttp09() {
    this._http09 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http09Input() {
    return this._http09;
  }

  // http_policy - computed: false, optional: true, required: false
  private _httpPolicy?: string; 
  public get httpPolicy() {
    return this.getStringAttribute('http_policy');
  }
  public set httpPolicy(value: string) {
    this._httpPolicy = value;
  }
  public resetHttpPolicy() {
    this._httpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPolicyInput() {
    return this._httpPolicy;
  }

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
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

  // post_lang - computed: true, optional: true, required: false
  private _postLang?: string[]; 
  public get postLang() {
    return cdktf.Fn.tolist(this.getListAttribute('post_lang'));
  }
  public set postLang(value: string[]) {
    this._postLang = value;
  }
  public resetPostLang() {
    this._postLang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postLangInput() {
    return this._postLang;
  }

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
  }

  // range_block - computed: true, optional: true, required: false
  private _rangeBlock?: string; 
  public get rangeBlock() {
    return this.getStringAttribute('range_block');
  }
  public set rangeBlock(value: string) {
    this._rangeBlock = value;
  }
  public resetRangeBlock() {
    this._rangeBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeBlockInput() {
    return this._rangeBlock;
  }

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
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

  // ssl_offloaded - computed: true, optional: true, required: false
  private _sslOffloaded?: string; 
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }
  public set sslOffloaded(value: string) {
    this._sslOffloaded = value;
  }
  public resetSslOffloaded() {
    this._sslOffloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOffloadedInput() {
    return this._sslOffloaded;
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

  // stream_based_uncompressed_limit - computed: false, optional: true, required: false
  private _streamBasedUncompressedLimit?: number; 
  public get streamBasedUncompressedLimit() {
    return this.getNumberAttribute('stream_based_uncompressed_limit');
  }
  public set streamBasedUncompressedLimit(value: number) {
    this._streamBasedUncompressedLimit = value;
  }
  public resetStreamBasedUncompressedLimit() {
    this._streamBasedUncompressedLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamBasedUncompressedLimitInput() {
    return this._streamBasedUncompressedLimit;
  }

  // streaming_content_bypass - computed: true, optional: true, required: false
  private _streamingContentBypass?: string; 
  public get streamingContentBypass() {
    return this.getStringAttribute('streaming_content_bypass');
  }
  public set streamingContentBypass(value: string) {
    this._streamingContentBypass = value;
  }
  public resetStreamingContentBypass() {
    this._streamingContentBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingContentBypassInput() {
    return this._streamingContentBypass;
  }

  // strip_x_forwarded_for - computed: true, optional: true, required: false
  private _stripXForwardedFor?: string; 
  public get stripXForwardedFor() {
    return this.getStringAttribute('strip_x_forwarded_for');
  }
  public set stripXForwardedFor(value: string) {
    this._stripXForwardedFor = value;
  }
  public resetStripXForwardedFor() {
    this._stripXForwardedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripXForwardedForInput() {
    return this._stripXForwardedFor;
  }

  // switching_protocols - computed: true, optional: true, required: false
  private _switchingProtocols?: string; 
  public get switchingProtocols() {
    return this.getStringAttribute('switching_protocols');
  }
  public set switchingProtocols(value: string) {
    this._switchingProtocols = value;
  }
  public resetSwitchingProtocols() {
    this._switchingProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingProtocolsInput() {
    return this._switchingProtocols;
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

  // tunnel_non_http - computed: true, optional: true, required: false
  private _tunnelNonHttp?: string; 
  public get tunnelNonHttp() {
    return this.getStringAttribute('tunnel_non_http');
  }
  public set tunnelNonHttp(value: string) {
    this._tunnelNonHttp = value;
  }
  public resetTunnelNonHttp() {
    this._tunnelNonHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelNonHttpInput() {
    return this._tunnelNonHttp;
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

  // unknown_content_encoding - computed: true, optional: true, required: false
  private _unknownContentEncoding?: string; 
  public get unknownContentEncoding() {
    return this.getStringAttribute('unknown_content_encoding');
  }
  public set unknownContentEncoding(value: string) {
    this._unknownContentEncoding = value;
  }
  public resetUnknownContentEncoding() {
    this._unknownContentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownContentEncodingInput() {
    return this._unknownContentEncoding;
  }

  // unknown_http_version - computed: true, optional: true, required: false
  private _unknownHttpVersion?: string; 
  public get unknownHttpVersion() {
    return this.getStringAttribute('unknown_http_version');
  }
  public set unknownHttpVersion(value: string) {
    this._unknownHttpVersion = value;
  }
  public resetUnknownHttpVersion() {
    this._unknownHttpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownHttpVersionInput() {
    return this._unknownHttpVersion;
  }

  // verify_dns_for_policy_matching - computed: true, optional: true, required: false
  private _verifyDnsForPolicyMatching?: string; 
  public get verifyDnsForPolicyMatching() {
    return this.getStringAttribute('verify_dns_for_policy_matching');
  }
  public set verifyDnsForPolicyMatching(value: string) {
    this._verifyDnsForPolicyMatching = value;
  }
  public resetVerifyDnsForPolicyMatching() {
    this._verifyDnsForPolicyMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyDnsForPolicyMatchingInput() {
    return this._verifyDnsForPolicyMatching;
  }
}
export interface ObjectFirewallProfileprotocoloptionsImap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#inspect_all ObjectFirewallProfileprotocoloptions#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#options ObjectFirewallProfileprotocoloptions#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#oversize_limit ObjectFirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ports ObjectFirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#proxy_after_tcp_handshake ObjectFirewallProfileprotocoloptions#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#scan_bzip2 ObjectFirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ssl_offloaded ObjectFirewallProfileprotocoloptions#ssl_offloaded}
  */
  readonly sslOffloaded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#status ObjectFirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_nest_limit ObjectFirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_oversize_limit ObjectFirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
}

export function objectFirewallProfileprotocoloptionsImapToTerraform(struct?: ObjectFirewallProfileprotocoloptionsImapOutputReference | ObjectFirewallProfileprotocoloptionsImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inspect_all: cdktf.stringToTerraform(struct!.inspectAll),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    proxy_after_tcp_handshake: cdktf.stringToTerraform(struct!.proxyAfterTcpHandshake),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    ssl_offloaded: cdktf.stringToTerraform(struct!.sslOffloaded),
    status: cdktf.stringToTerraform(struct!.status),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
  }
}


export function objectFirewallProfileprotocoloptionsImapToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsImapOutputReference | ObjectFirewallProfileprotocoloptionsImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inspect_all: {
      value: cdktf.stringToHclTerraform(struct!.inspectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    proxy_after_tcp_handshake: {
      value: cdktf.stringToHclTerraform(struct!.proxyAfterTcpHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_offloaded: {
      value: cdktf.stringToHclTerraform(struct!.sslOffloaded),
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
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallProfileprotocoloptionsImapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallProfileprotocoloptionsImap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inspectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectAll = this._inspectAll;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._proxyAfterTcpHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAfterTcpHandshake = this._proxyAfterTcpHandshake;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._sslOffloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslOffloaded = this._sslOffloaded;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsImap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inspectAll = undefined;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._ports = undefined;
      this._proxyAfterTcpHandshake = undefined;
      this._scanBzip2 = undefined;
      this._sslOffloaded = undefined;
      this._status = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inspectAll = value.inspectAll;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._ports = value.ports;
      this._proxyAfterTcpHandshake = value.proxyAfterTcpHandshake;
      this._scanBzip2 = value.scanBzip2;
      this._sslOffloaded = value.sslOffloaded;
      this._status = value.status;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
    }
  }

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
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

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
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

  // ssl_offloaded - computed: true, optional: true, required: false
  private _sslOffloaded?: string; 
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }
  public set sslOffloaded(value: string) {
    this._sslOffloaded = value;
  }
  public resetSslOffloaded() {
    this._sslOffloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOffloadedInput() {
    return this._sslOffloaded;
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
}
export interface ObjectFirewallProfileprotocoloptionsMailSignature {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#signature ObjectFirewallProfileprotocoloptions#signature}
  */
  readonly signature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#status ObjectFirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
}

export function objectFirewallProfileprotocoloptionsMailSignatureToTerraform(struct?: ObjectFirewallProfileprotocoloptionsMailSignatureOutputReference | ObjectFirewallProfileprotocoloptionsMailSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signature: cdktf.stringToTerraform(struct!.signature),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function objectFirewallProfileprotocoloptionsMailSignatureToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsMailSignatureOutputReference | ObjectFirewallProfileprotocoloptionsMailSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    signature: {
      value: cdktf.stringToHclTerraform(struct!.signature),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallProfileprotocoloptionsMailSignatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallProfileprotocoloptionsMailSignature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signature !== undefined) {
      hasAnyValues = true;
      internalValueResult.signature = this._signature;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsMailSignature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._signature = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._signature = value.signature;
      this._status = value.status;
    }
  }

  // signature - computed: false, optional: true, required: false
  private _signature?: string; 
  public get signature() {
    return this.getStringAttribute('signature');
  }
  public set signature(value: string) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
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
}
export interface ObjectFirewallProfileprotocoloptionsMapi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#options ObjectFirewallProfileprotocoloptions#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#oversize_limit ObjectFirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ports ObjectFirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#scan_bzip2 ObjectFirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#status ObjectFirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_nest_limit ObjectFirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_oversize_limit ObjectFirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
}

export function objectFirewallProfileprotocoloptionsMapiToTerraform(struct?: ObjectFirewallProfileprotocoloptionsMapiOutputReference | ObjectFirewallProfileprotocoloptionsMapi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    status: cdktf.stringToTerraform(struct!.status),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
  }
}


export function objectFirewallProfileprotocoloptionsMapiToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsMapiOutputReference | ObjectFirewallProfileprotocoloptionsMapi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
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
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallProfileprotocoloptionsMapiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallProfileprotocoloptionsMapi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsMapi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._ports = undefined;
      this._scanBzip2 = undefined;
      this._status = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._ports = value.ports;
      this._scanBzip2 = value.scanBzip2;
      this._status = value.status;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
    }
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
}
export interface ObjectFirewallProfileprotocoloptionsNntp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#inspect_all ObjectFirewallProfileprotocoloptions#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#options ObjectFirewallProfileprotocoloptions#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#oversize_limit ObjectFirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ports ObjectFirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#proxy_after_tcp_handshake ObjectFirewallProfileprotocoloptions#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#scan_bzip2 ObjectFirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#status ObjectFirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_nest_limit ObjectFirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_oversize_limit ObjectFirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
}

export function objectFirewallProfileprotocoloptionsNntpToTerraform(struct?: ObjectFirewallProfileprotocoloptionsNntpOutputReference | ObjectFirewallProfileprotocoloptionsNntp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inspect_all: cdktf.stringToTerraform(struct!.inspectAll),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    proxy_after_tcp_handshake: cdktf.stringToTerraform(struct!.proxyAfterTcpHandshake),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    status: cdktf.stringToTerraform(struct!.status),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
  }
}


export function objectFirewallProfileprotocoloptionsNntpToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsNntpOutputReference | ObjectFirewallProfileprotocoloptionsNntp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inspect_all: {
      value: cdktf.stringToHclTerraform(struct!.inspectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    proxy_after_tcp_handshake: {
      value: cdktf.stringToHclTerraform(struct!.proxyAfterTcpHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
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
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallProfileprotocoloptionsNntpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallProfileprotocoloptionsNntp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inspectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectAll = this._inspectAll;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._proxyAfterTcpHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAfterTcpHandshake = this._proxyAfterTcpHandshake;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsNntp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inspectAll = undefined;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._ports = undefined;
      this._proxyAfterTcpHandshake = undefined;
      this._scanBzip2 = undefined;
      this._status = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inspectAll = value.inspectAll;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._ports = value.ports;
      this._proxyAfterTcpHandshake = value.proxyAfterTcpHandshake;
      this._scanBzip2 = value.scanBzip2;
      this._status = value.status;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
    }
  }

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
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

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
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
}
export interface ObjectFirewallProfileprotocoloptionsPop3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#inspect_all ObjectFirewallProfileprotocoloptions#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#options ObjectFirewallProfileprotocoloptions#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#oversize_limit ObjectFirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ports ObjectFirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#proxy_after_tcp_handshake ObjectFirewallProfileprotocoloptions#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#scan_bzip2 ObjectFirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ssl_offloaded ObjectFirewallProfileprotocoloptions#ssl_offloaded}
  */
  readonly sslOffloaded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#status ObjectFirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_nest_limit ObjectFirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_oversize_limit ObjectFirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
}

export function objectFirewallProfileprotocoloptionsPop3ToTerraform(struct?: ObjectFirewallProfileprotocoloptionsPop3OutputReference | ObjectFirewallProfileprotocoloptionsPop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inspect_all: cdktf.stringToTerraform(struct!.inspectAll),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    proxy_after_tcp_handshake: cdktf.stringToTerraform(struct!.proxyAfterTcpHandshake),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    ssl_offloaded: cdktf.stringToTerraform(struct!.sslOffloaded),
    status: cdktf.stringToTerraform(struct!.status),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
  }
}


export function objectFirewallProfileprotocoloptionsPop3ToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsPop3OutputReference | ObjectFirewallProfileprotocoloptionsPop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inspect_all: {
      value: cdktf.stringToHclTerraform(struct!.inspectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    proxy_after_tcp_handshake: {
      value: cdktf.stringToHclTerraform(struct!.proxyAfterTcpHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_offloaded: {
      value: cdktf.stringToHclTerraform(struct!.sslOffloaded),
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
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallProfileprotocoloptionsPop3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallProfileprotocoloptionsPop3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inspectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectAll = this._inspectAll;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._proxyAfterTcpHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAfterTcpHandshake = this._proxyAfterTcpHandshake;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._sslOffloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslOffloaded = this._sslOffloaded;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsPop3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inspectAll = undefined;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._ports = undefined;
      this._proxyAfterTcpHandshake = undefined;
      this._scanBzip2 = undefined;
      this._sslOffloaded = undefined;
      this._status = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inspectAll = value.inspectAll;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._ports = value.ports;
      this._proxyAfterTcpHandshake = value.proxyAfterTcpHandshake;
      this._scanBzip2 = value.scanBzip2;
      this._sslOffloaded = value.sslOffloaded;
      this._status = value.status;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
    }
  }

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
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

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
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

  // ssl_offloaded - computed: true, optional: true, required: false
  private _sslOffloaded?: string; 
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }
  public set sslOffloaded(value: string) {
    this._sslOffloaded = value;
  }
  public resetSslOffloaded() {
    this._sslOffloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOffloadedInput() {
    return this._sslOffloaded;
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
}
export interface ObjectFirewallProfileprotocoloptionsSmtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#inspect_all ObjectFirewallProfileprotocoloptions#inspect_all}
  */
  readonly inspectAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#options ObjectFirewallProfileprotocoloptions#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#oversize_limit ObjectFirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ports ObjectFirewallProfileprotocoloptions#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#proxy_after_tcp_handshake ObjectFirewallProfileprotocoloptions#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#scan_bzip2 ObjectFirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#server_busy ObjectFirewallProfileprotocoloptions#server_busy}
  */
  readonly serverBusy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ssl_offloaded ObjectFirewallProfileprotocoloptions#ssl_offloaded}
  */
  readonly sslOffloaded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#status ObjectFirewallProfileprotocoloptions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_nest_limit ObjectFirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_oversize_limit ObjectFirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
}

export function objectFirewallProfileprotocoloptionsSmtpToTerraform(struct?: ObjectFirewallProfileprotocoloptionsSmtpOutputReference | ObjectFirewallProfileprotocoloptionsSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inspect_all: cdktf.stringToTerraform(struct!.inspectAll),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    proxy_after_tcp_handshake: cdktf.stringToTerraform(struct!.proxyAfterTcpHandshake),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    server_busy: cdktf.stringToTerraform(struct!.serverBusy),
    ssl_offloaded: cdktf.stringToTerraform(struct!.sslOffloaded),
    status: cdktf.stringToTerraform(struct!.status),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
  }
}


export function objectFirewallProfileprotocoloptionsSmtpToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsSmtpOutputReference | ObjectFirewallProfileprotocoloptionsSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inspect_all: {
      value: cdktf.stringToHclTerraform(struct!.inspectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    proxy_after_tcp_handshake: {
      value: cdktf.stringToHclTerraform(struct!.proxyAfterTcpHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_busy: {
      value: cdktf.stringToHclTerraform(struct!.serverBusy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_offloaded: {
      value: cdktf.stringToHclTerraform(struct!.sslOffloaded),
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
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallProfileprotocoloptionsSmtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallProfileprotocoloptionsSmtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inspectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectAll = this._inspectAll;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._proxyAfterTcpHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAfterTcpHandshake = this._proxyAfterTcpHandshake;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._serverBusy !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverBusy = this._serverBusy;
    }
    if (this._sslOffloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslOffloaded = this._sslOffloaded;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsSmtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inspectAll = undefined;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._ports = undefined;
      this._proxyAfterTcpHandshake = undefined;
      this._scanBzip2 = undefined;
      this._serverBusy = undefined;
      this._sslOffloaded = undefined;
      this._status = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inspectAll = value.inspectAll;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._ports = value.ports;
      this._proxyAfterTcpHandshake = value.proxyAfterTcpHandshake;
      this._scanBzip2 = value.scanBzip2;
      this._serverBusy = value.serverBusy;
      this._sslOffloaded = value.sslOffloaded;
      this._status = value.status;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
    }
  }

  // inspect_all - computed: true, optional: true, required: false
  private _inspectAll?: string; 
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }
  public set inspectAll(value: string) {
    this._inspectAll = value;
  }
  public resetInspectAll() {
    this._inspectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAllInput() {
    return this._inspectAll;
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

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
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

  // server_busy - computed: true, optional: true, required: false
  private _serverBusy?: string; 
  public get serverBusy() {
    return this.getStringAttribute('server_busy');
  }
  public set serverBusy(value: string) {
    this._serverBusy = value;
  }
  public resetServerBusy() {
    this._serverBusy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverBusyInput() {
    return this._serverBusy;
  }

  // ssl_offloaded - computed: true, optional: true, required: false
  private _sslOffloaded?: string; 
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }
  public set sslOffloaded(value: string) {
    this._sslOffloaded = value;
  }
  public resetSslOffloaded() {
    this._sslOffloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOffloadedInput() {
    return this._sslOffloaded;
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
}
export interface ObjectFirewallProfileprotocoloptionsSsh {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#comfort_amount ObjectFirewallProfileprotocoloptions#comfort_amount}
  */
  readonly comfortAmount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#comfort_interval ObjectFirewallProfileprotocoloptions#comfort_interval}
  */
  readonly comfortInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#options ObjectFirewallProfileprotocoloptions#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#oversize_limit ObjectFirewallProfileprotocoloptions#oversize_limit}
  */
  readonly oversizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#scan_bzip2 ObjectFirewallProfileprotocoloptions#scan_bzip2}
  */
  readonly scanBzip2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#ssl_offloaded ObjectFirewallProfileprotocoloptions#ssl_offloaded}
  */
  readonly sslOffloaded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#stream_based_uncompressed_limit ObjectFirewallProfileprotocoloptions#stream_based_uncompressed_limit}
  */
  readonly streamBasedUncompressedLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tcp_window_maximum ObjectFirewallProfileprotocoloptions#tcp_window_maximum}
  */
  readonly tcpWindowMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tcp_window_minimum ObjectFirewallProfileprotocoloptions#tcp_window_minimum}
  */
  readonly tcpWindowMinimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tcp_window_size ObjectFirewallProfileprotocoloptions#tcp_window_size}
  */
  readonly tcpWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#tcp_window_type ObjectFirewallProfileprotocoloptions#tcp_window_type}
  */
  readonly tcpWindowType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_nest_limit ObjectFirewallProfileprotocoloptions#uncompressed_nest_limit}
  */
  readonly uncompressedNestLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#uncompressed_oversize_limit ObjectFirewallProfileprotocoloptions#uncompressed_oversize_limit}
  */
  readonly uncompressedOversizeLimit?: number;
}

export function objectFirewallProfileprotocoloptionsSshToTerraform(struct?: ObjectFirewallProfileprotocoloptionsSshOutputReference | ObjectFirewallProfileprotocoloptionsSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comfort_amount: cdktf.numberToTerraform(struct!.comfortAmount),
    comfort_interval: cdktf.numberToTerraform(struct!.comfortInterval),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    oversize_limit: cdktf.numberToTerraform(struct!.oversizeLimit),
    scan_bzip2: cdktf.stringToTerraform(struct!.scanBzip2),
    ssl_offloaded: cdktf.stringToTerraform(struct!.sslOffloaded),
    stream_based_uncompressed_limit: cdktf.numberToTerraform(struct!.streamBasedUncompressedLimit),
    tcp_window_maximum: cdktf.numberToTerraform(struct!.tcpWindowMaximum),
    tcp_window_minimum: cdktf.numberToTerraform(struct!.tcpWindowMinimum),
    tcp_window_size: cdktf.numberToTerraform(struct!.tcpWindowSize),
    tcp_window_type: cdktf.stringToTerraform(struct!.tcpWindowType),
    uncompressed_nest_limit: cdktf.numberToTerraform(struct!.uncompressedNestLimit),
    uncompressed_oversize_limit: cdktf.numberToTerraform(struct!.uncompressedOversizeLimit),
  }
}


export function objectFirewallProfileprotocoloptionsSshToHclTerraform(struct?: ObjectFirewallProfileprotocoloptionsSshOutputReference | ObjectFirewallProfileprotocoloptionsSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comfort_amount: {
      value: cdktf.numberToHclTerraform(struct!.comfortAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comfort_interval: {
      value: cdktf.numberToHclTerraform(struct!.comfortInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.oversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scan_bzip2: {
      value: cdktf.stringToHclTerraform(struct!.scanBzip2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_offloaded: {
      value: cdktf.stringToHclTerraform(struct!.sslOffloaded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_based_uncompressed_limit: {
      value: cdktf.numberToHclTerraform(struct!.streamBasedUncompressedLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_maximum: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_minimum: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_size: {
      value: cdktf.numberToHclTerraform(struct!.tcpWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_window_type: {
      value: cdktf.stringToHclTerraform(struct!.tcpWindowType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uncompressed_nest_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedNestLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_oversize_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedOversizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallProfileprotocoloptionsSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallProfileprotocoloptionsSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comfortAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.comfortAmount = this._comfortAmount;
    }
    if (this._comfortInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.comfortInterval = this._comfortInterval;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._oversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeLimit = this._oversizeLimit;
    }
    if (this._scanBzip2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBzip2 = this._scanBzip2;
    }
    if (this._sslOffloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslOffloaded = this._sslOffloaded;
    }
    if (this._streamBasedUncompressedLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamBasedUncompressedLimit = this._streamBasedUncompressedLimit;
    }
    if (this._tcpWindowMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowMaximum = this._tcpWindowMaximum;
    }
    if (this._tcpWindowMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowMinimum = this._tcpWindowMinimum;
    }
    if (this._tcpWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowSize = this._tcpWindowSize;
    }
    if (this._tcpWindowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpWindowType = this._tcpWindowType;
    }
    if (this._uncompressedNestLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedNestLimit = this._uncompressedNestLimit;
    }
    if (this._uncompressedOversizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedOversizeLimit = this._uncompressedOversizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallProfileprotocoloptionsSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comfortAmount = undefined;
      this._comfortInterval = undefined;
      this._options = undefined;
      this._oversizeLimit = undefined;
      this._scanBzip2 = undefined;
      this._sslOffloaded = undefined;
      this._streamBasedUncompressedLimit = undefined;
      this._tcpWindowMaximum = undefined;
      this._tcpWindowMinimum = undefined;
      this._tcpWindowSize = undefined;
      this._tcpWindowType = undefined;
      this._uncompressedNestLimit = undefined;
      this._uncompressedOversizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comfortAmount = value.comfortAmount;
      this._comfortInterval = value.comfortInterval;
      this._options = value.options;
      this._oversizeLimit = value.oversizeLimit;
      this._scanBzip2 = value.scanBzip2;
      this._sslOffloaded = value.sslOffloaded;
      this._streamBasedUncompressedLimit = value.streamBasedUncompressedLimit;
      this._tcpWindowMaximum = value.tcpWindowMaximum;
      this._tcpWindowMinimum = value.tcpWindowMinimum;
      this._tcpWindowSize = value.tcpWindowSize;
      this._tcpWindowType = value.tcpWindowType;
      this._uncompressedNestLimit = value.uncompressedNestLimit;
      this._uncompressedOversizeLimit = value.uncompressedOversizeLimit;
    }
  }

  // comfort_amount - computed: true, optional: true, required: false
  private _comfortAmount?: number; 
  public get comfortAmount() {
    return this.getNumberAttribute('comfort_amount');
  }
  public set comfortAmount(value: number) {
    this._comfortAmount = value;
  }
  public resetComfortAmount() {
    this._comfortAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comfortAmountInput() {
    return this._comfortAmount;
  }

  // comfort_interval - computed: true, optional: true, required: false
  private _comfortInterval?: number; 
  public get comfortInterval() {
    return this.getNumberAttribute('comfort_interval');
  }
  public set comfortInterval(value: number) {
    this._comfortInterval = value;
  }
  public resetComfortInterval() {
    this._comfortInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comfortIntervalInput() {
    return this._comfortInterval;
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

  // ssl_offloaded - computed: true, optional: true, required: false
  private _sslOffloaded?: string; 
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }
  public set sslOffloaded(value: string) {
    this._sslOffloaded = value;
  }
  public resetSslOffloaded() {
    this._sslOffloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOffloadedInput() {
    return this._sslOffloaded;
  }

  // stream_based_uncompressed_limit - computed: false, optional: true, required: false
  private _streamBasedUncompressedLimit?: number; 
  public get streamBasedUncompressedLimit() {
    return this.getNumberAttribute('stream_based_uncompressed_limit');
  }
  public set streamBasedUncompressedLimit(value: number) {
    this._streamBasedUncompressedLimit = value;
  }
  public resetStreamBasedUncompressedLimit() {
    this._streamBasedUncompressedLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamBasedUncompressedLimitInput() {
    return this._streamBasedUncompressedLimit;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions fortimanager_object_firewall_profileprotocoloptions}
*/
export class ObjectFirewallProfileprotocoloptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_profileprotocoloptions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallProfileprotocoloptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallProfileprotocoloptions to import
  * @param importFromId The id of the existing ObjectFirewallProfileprotocoloptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallProfileprotocoloptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_profileprotocoloptions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_profileprotocoloptions fortimanager_object_firewall_profileprotocoloptions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallProfileprotocoloptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallProfileprotocoloptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_profileprotocoloptions',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
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
    this._comment = config.comment;
    this._featureSet = config.featureSet;
    this._id = config.id;
    this._name = config.name;
    this._oversizeLog = config.oversizeLog;
    this._replacemsgGroup = config.replacemsgGroup;
    this._rpcOverHttp = config.rpcOverHttp;
    this._scopetype = config.scopetype;
    this._switchingProtocolsLog = config.switchingProtocolsLog;
    this._cifs.internalValue = config.cifs;
    this._dns.internalValue = config.dns;
    this._ftp.internalValue = config.ftp;
    this._http.internalValue = config.http;
    this._imap.internalValue = config.imap;
    this._mailSignature.internalValue = config.mailSignature;
    this._mapi.internalValue = config.mapi;
    this._nntp.internalValue = config.nntp;
    this._pop3.internalValue = config.pop3;
    this._smtp.internalValue = config.smtp;
    this._ssh.internalValue = config.ssh;
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

  // feature_set - computed: true, optional: true, required: false
  private _featureSet?: string; 
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }
  public set featureSet(value: string) {
    this._featureSet = value;
  }
  public resetFeatureSet() {
    this._featureSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSetInput() {
    return this._featureSet;
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

  // name - computed: false, optional: true, required: false
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

  // oversize_log - computed: true, optional: true, required: false
  private _oversizeLog?: string; 
  public get oversizeLog() {
    return this.getStringAttribute('oversize_log');
  }
  public set oversizeLog(value: string) {
    this._oversizeLog = value;
  }
  public resetOversizeLog() {
    this._oversizeLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeLogInput() {
    return this._oversizeLog;
  }

  // replacemsg_group - computed: false, optional: true, required: false
  private _replacemsgGroup?: string; 
  public get replacemsgGroup() {
    return this.getStringAttribute('replacemsg_group');
  }
  public set replacemsgGroup(value: string) {
    this._replacemsgGroup = value;
  }
  public resetReplacemsgGroup() {
    this._replacemsgGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgGroupInput() {
    return this._replacemsgGroup;
  }

  // rpc_over_http - computed: true, optional: true, required: false
  private _rpcOverHttp?: string; 
  public get rpcOverHttp() {
    return this.getStringAttribute('rpc_over_http');
  }
  public set rpcOverHttp(value: string) {
    this._rpcOverHttp = value;
  }
  public resetRpcOverHttp() {
    this._rpcOverHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcOverHttpInput() {
    return this._rpcOverHttp;
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

  // switching_protocols_log - computed: true, optional: true, required: false
  private _switchingProtocolsLog?: string; 
  public get switchingProtocolsLog() {
    return this.getStringAttribute('switching_protocols_log');
  }
  public set switchingProtocolsLog(value: string) {
    this._switchingProtocolsLog = value;
  }
  public resetSwitchingProtocolsLog() {
    this._switchingProtocolsLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingProtocolsLogInput() {
    return this._switchingProtocolsLog;
  }

  // cifs - computed: false, optional: true, required: false
  private _cifs = new ObjectFirewallProfileprotocoloptionsCifsOutputReference(this, "cifs");
  public get cifs() {
    return this._cifs;
  }
  public putCifs(value: ObjectFirewallProfileprotocoloptionsCifs) {
    this._cifs.internalValue = value;
  }
  public resetCifs() {
    this._cifs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cifsInput() {
    return this._cifs.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new ObjectFirewallProfileprotocoloptionsDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: ObjectFirewallProfileprotocoloptionsDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // ftp - computed: false, optional: true, required: false
  private _ftp = new ObjectFirewallProfileprotocoloptionsFtpOutputReference(this, "ftp");
  public get ftp() {
    return this._ftp;
  }
  public putFtp(value: ObjectFirewallProfileprotocoloptionsFtp) {
    this._ftp.internalValue = value;
  }
  public resetFtp() {
    this._ftp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new ObjectFirewallProfileprotocoloptionsHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: ObjectFirewallProfileprotocoloptionsHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // imap - computed: false, optional: true, required: false
  private _imap = new ObjectFirewallProfileprotocoloptionsImapOutputReference(this, "imap");
  public get imap() {
    return this._imap;
  }
  public putImap(value: ObjectFirewallProfileprotocoloptionsImap) {
    this._imap.internalValue = value;
  }
  public resetImap() {
    this._imap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapInput() {
    return this._imap.internalValue;
  }

  // mail_signature - computed: false, optional: true, required: false
  private _mailSignature = new ObjectFirewallProfileprotocoloptionsMailSignatureOutputReference(this, "mail_signature");
  public get mailSignature() {
    return this._mailSignature;
  }
  public putMailSignature(value: ObjectFirewallProfileprotocoloptionsMailSignature) {
    this._mailSignature.internalValue = value;
  }
  public resetMailSignature() {
    this._mailSignature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailSignatureInput() {
    return this._mailSignature.internalValue;
  }

  // mapi - computed: false, optional: true, required: false
  private _mapi = new ObjectFirewallProfileprotocoloptionsMapiOutputReference(this, "mapi");
  public get mapi() {
    return this._mapi;
  }
  public putMapi(value: ObjectFirewallProfileprotocoloptionsMapi) {
    this._mapi.internalValue = value;
  }
  public resetMapi() {
    this._mapi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapiInput() {
    return this._mapi.internalValue;
  }

  // nntp - computed: false, optional: true, required: false
  private _nntp = new ObjectFirewallProfileprotocoloptionsNntpOutputReference(this, "nntp");
  public get nntp() {
    return this._nntp;
  }
  public putNntp(value: ObjectFirewallProfileprotocoloptionsNntp) {
    this._nntp.internalValue = value;
  }
  public resetNntp() {
    this._nntp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nntpInput() {
    return this._nntp.internalValue;
  }

  // pop3 - computed: false, optional: true, required: false
  private _pop3 = new ObjectFirewallProfileprotocoloptionsPop3OutputReference(this, "pop3");
  public get pop3() {
    return this._pop3;
  }
  public putPop3(value: ObjectFirewallProfileprotocoloptionsPop3) {
    this._pop3.internalValue = value;
  }
  public resetPop3() {
    this._pop3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3Input() {
    return this._pop3.internalValue;
  }

  // smtp - computed: false, optional: true, required: false
  private _smtp = new ObjectFirewallProfileprotocoloptionsSmtpOutputReference(this, "smtp");
  public get smtp() {
    return this._smtp;
  }
  public putSmtp(value: ObjectFirewallProfileprotocoloptionsSmtp) {
    this._smtp.internalValue = value;
  }
  public resetSmtp() {
    this._smtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpInput() {
    return this._smtp.internalValue;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new ObjectFirewallProfileprotocoloptionsSshOutputReference(this, "ssh");
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: ObjectFirewallProfileprotocoloptionsSsh) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      comment: cdktf.stringToTerraform(this._comment),
      feature_set: cdktf.stringToTerraform(this._featureSet),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oversize_log: cdktf.stringToTerraform(this._oversizeLog),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      rpc_over_http: cdktf.stringToTerraform(this._rpcOverHttp),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      switching_protocols_log: cdktf.stringToTerraform(this._switchingProtocolsLog),
      cifs: objectFirewallProfileprotocoloptionsCifsToTerraform(this._cifs.internalValue),
      dns: objectFirewallProfileprotocoloptionsDnsToTerraform(this._dns.internalValue),
      ftp: objectFirewallProfileprotocoloptionsFtpToTerraform(this._ftp.internalValue),
      http: objectFirewallProfileprotocoloptionsHttpToTerraform(this._http.internalValue),
      imap: objectFirewallProfileprotocoloptionsImapToTerraform(this._imap.internalValue),
      mail_signature: objectFirewallProfileprotocoloptionsMailSignatureToTerraform(this._mailSignature.internalValue),
      mapi: objectFirewallProfileprotocoloptionsMapiToTerraform(this._mapi.internalValue),
      nntp: objectFirewallProfileprotocoloptionsNntpToTerraform(this._nntp.internalValue),
      pop3: objectFirewallProfileprotocoloptionsPop3ToTerraform(this._pop3.internalValue),
      smtp: objectFirewallProfileprotocoloptionsSmtpToTerraform(this._smtp.internalValue),
      ssh: objectFirewallProfileprotocoloptionsSshToTerraform(this._ssh.internalValue),
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
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_set: {
        value: cdktf.stringToHclTerraform(this._featureSet),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oversize_log: {
        value: cdktf.stringToHclTerraform(this._oversizeLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacemsg_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpc_over_http: {
        value: cdktf.stringToHclTerraform(this._rpcOverHttp),
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
      switching_protocols_log: {
        value: cdktf.stringToHclTerraform(this._switchingProtocolsLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cifs: {
        value: objectFirewallProfileprotocoloptionsCifsToHclTerraform(this._cifs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallProfileprotocoloptionsCifsList",
      },
      dns: {
        value: objectFirewallProfileprotocoloptionsDnsToHclTerraform(this._dns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallProfileprotocoloptionsDnsList",
      },
      ftp: {
        value: objectFirewallProfileprotocoloptionsFtpToHclTerraform(this._ftp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallProfileprotocoloptionsFtpList",
      },
      http: {
        value: objectFirewallProfileprotocoloptionsHttpToHclTerraform(this._http.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallProfileprotocoloptionsHttpList",
      },
      imap: {
        value: objectFirewallProfileprotocoloptionsImapToHclTerraform(this._imap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallProfileprotocoloptionsImapList",
      },
      mail_signature: {
        value: objectFirewallProfileprotocoloptionsMailSignatureToHclTerraform(this._mailSignature.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallProfileprotocoloptionsMailSignatureList",
      },
      mapi: {
        value: objectFirewallProfileprotocoloptionsMapiToHclTerraform(this._mapi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallProfileprotocoloptionsMapiList",
      },
      nntp: {
        value: objectFirewallProfileprotocoloptionsNntpToHclTerraform(this._nntp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallProfileprotocoloptionsNntpList",
      },
      pop3: {
        value: objectFirewallProfileprotocoloptionsPop3ToHclTerraform(this._pop3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallProfileprotocoloptionsPop3List",
      },
      smtp: {
        value: objectFirewallProfileprotocoloptionsSmtpToHclTerraform(this._smtp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallProfileprotocoloptionsSmtpList",
      },
      ssh: {
        value: objectFirewallProfileprotocoloptionsSshToHclTerraform(this._ssh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallProfileprotocoloptionsSshList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
