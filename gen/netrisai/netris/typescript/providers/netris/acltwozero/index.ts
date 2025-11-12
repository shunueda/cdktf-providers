// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcltwozeroConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#id Acltwozero#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ACL 2.0 unique name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#name Acltwozero#name}
  */
  readonly name: string;
  /**
  * Valid values are `public`, `private`, `hidden`. Public - Service is visible to all users and every user can subscribe instances and get access without approval. Private - Service is visible to all users, instances can be subscribed either by service owning tenant members or will require approval. Hidden - Service is not visible to any user except those who are part of tenant owning the service, instances can be subscribed only by service owning tenant members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#privacy Acltwozero#privacy}
  */
  readonly privacy: string;
  /**
  * State of the resource. Valid values are `enabled` or `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#state Acltwozero#state}
  */
  readonly state?: string;
  /**
  * ID of tenant. Users of this tenant will be permitted to manage this acl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#tenantid Acltwozero#tenantid}
  */
  readonly tenantid: number;
  /**
  * publishers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#publishers Acltwozero#publishers}
  */
  readonly publishers?: AcltwozeroPublishers[] | cdktf.IResolvable;
  /**
  * subscribers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#subscribers Acltwozero#subscribers}
  */
  readonly subscribers?: AcltwozeroSubscribers[] | cdktf.IResolvable;
}
export interface AcltwozeroPublishersProtocol {
  /**
  * Custom name for the current protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#name Acltwozero#name}
  */
  readonly name?: string;
  /**
  * Port number. Example `80`. Or protocol number when protocol == `ip`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#port Acltwozero#port}
  */
  readonly port?: string;
  /**
  * ID of Port Group. Use instead of port key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#portgroupid Acltwozero#portgroupid}
  */
  readonly portgroupid?: number;
  /**
  * Valid protocol. Possible values: `ip`, `tcp`, `udp`, `icmp`, `all`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#protocol Acltwozero#protocol}
  */
  readonly protocol?: string;
}

export function acltwozeroPublishersProtocolToTerraform(struct?: AcltwozeroPublishersProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    portgroupid: cdktf.numberToTerraform(struct!.portgroupid),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function acltwozeroPublishersProtocolToHclTerraform(struct?: AcltwozeroPublishersProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portgroupid: {
      value: cdktf.numberToHclTerraform(struct!.portgroupid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcltwozeroPublishersProtocolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AcltwozeroPublishersProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portgroupid !== undefined) {
      hasAnyValues = true;
      internalValueResult.portgroupid = this._portgroupid;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcltwozeroPublishersProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._portgroupid = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
      this._portgroupid = value.portgroupid;
      this._protocol = value.protocol;
    }
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // portgroupid - computed: false, optional: true, required: false
  private _portgroupid?: number; 
  public get portgroupid() {
    return this.getNumberAttribute('portgroupid');
  }
  public set portgroupid(value: number) {
    this._portgroupid = value;
  }
  public resetPortgroupid() {
    this._portgroupid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portgroupidInput() {
    return this._portgroupid;
  }

  // protocol - computed: false, optional: true, required: false
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
}

export class AcltwozeroPublishersProtocolList extends cdktf.ComplexList {
  public internalValue? : AcltwozeroPublishersProtocol[] | cdktf.IResolvable

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
  public get(index: number): AcltwozeroPublishersProtocolOutputReference {
    return new AcltwozeroPublishersProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AcltwozeroPublishers {
  /**
  * List of Instances ID (ROH)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#instanceids Acltwozero#instanceids}
  */
  readonly instanceids?: number[];
  /**
  * List of LB VIPs ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#lbvips Acltwozero#lbvips}
  */
  readonly lbvips?: number[];
  /**
  * List with prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#prefixes Acltwozero#prefixes}
  */
  readonly prefixes?: string[];
  /**
  * protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#protocol Acltwozero#protocol}
  */
  readonly protocol?: AcltwozeroPublishersProtocol[] | cdktf.IResolvable;
}

export function acltwozeroPublishersToTerraform(struct?: AcltwozeroPublishers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instanceids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.instanceids),
    lbvips: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.lbvips),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
    protocol: cdktf.listMapper(acltwozeroPublishersProtocolToTerraform, true)(struct!.protocol),
  }
}


export function acltwozeroPublishersToHclTerraform(struct?: AcltwozeroPublishers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instanceids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.instanceids),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    lbvips: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.lbvips),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.listMapperHcl(acltwozeroPublishersProtocolToHclTerraform, true)(struct!.protocol),
      isBlock: true,
      type: "list",
      storageClassType: "AcltwozeroPublishersProtocolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcltwozeroPublishersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AcltwozeroPublishers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceids !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceids = this._instanceids;
    }
    if (this._lbvips !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbvips = this._lbvips;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcltwozeroPublishers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceids = undefined;
      this._lbvips = undefined;
      this._prefixes = undefined;
      this._protocol.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceids = value.instanceids;
      this._lbvips = value.lbvips;
      this._prefixes = value.prefixes;
      this._protocol.internalValue = value.protocol;
    }
  }

  // instanceids - computed: false, optional: true, required: false
  private _instanceids?: number[]; 
  public get instanceids() {
    return this.getNumberListAttribute('instanceids');
  }
  public set instanceids(value: number[]) {
    this._instanceids = value;
  }
  public resetInstanceids() {
    this._instanceids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceidsInput() {
    return this._instanceids;
  }

  // lbvips - computed: false, optional: true, required: false
  private _lbvips?: number[]; 
  public get lbvips() {
    return this.getNumberListAttribute('lbvips');
  }
  public set lbvips(value: number[]) {
    this._lbvips = value;
  }
  public resetLbvips() {
    this._lbvips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbvipsInput() {
    return this._lbvips;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol = new AcltwozeroPublishersProtocolList(this, "protocol", false);
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: AcltwozeroPublishersProtocol[] | cdktf.IResolvable) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }
}

export class AcltwozeroPublishersList extends cdktf.ComplexList {
  public internalValue? : AcltwozeroPublishers[] | cdktf.IResolvable

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
  public get(index: number): AcltwozeroPublishersOutputReference {
    return new AcltwozeroPublishersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AcltwozeroSubscribersPrefix {
  /**
  * Optional comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#comment Acltwozero#comment}
  */
  readonly comment?: string;
  /**
  * Valid prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#prefix Acltwozero#prefix}
  */
  readonly prefix: string;
}

export function acltwozeroSubscribersPrefixToTerraform(struct?: AcltwozeroSubscribersPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function acltwozeroSubscribersPrefixToHclTerraform(struct?: AcltwozeroSubscribersPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcltwozeroSubscribersPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AcltwozeroSubscribersPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcltwozeroSubscribersPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._prefix = value.prefix;
    }
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
}

export class AcltwozeroSubscribersPrefixList extends cdktf.ComplexList {
  public internalValue? : AcltwozeroSubscribersPrefix[] | cdktf.IResolvable

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
  public get(index: number): AcltwozeroSubscribersPrefixOutputReference {
    return new AcltwozeroSubscribersPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AcltwozeroSubscribers {
  /**
  * List of Instances ID (ROH)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#instanceids Acltwozero#instanceids}
  */
  readonly instanceids?: number[];
  /**
  * prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#prefix Acltwozero#prefix}
  */
  readonly prefix?: AcltwozeroSubscribersPrefix[] | cdktf.IResolvable;
}

export function acltwozeroSubscribersToTerraform(struct?: AcltwozeroSubscribers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instanceids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.instanceids),
    prefix: cdktf.listMapper(acltwozeroSubscribersPrefixToTerraform, true)(struct!.prefix),
  }
}


export function acltwozeroSubscribersToHclTerraform(struct?: AcltwozeroSubscribers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instanceids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.instanceids),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    prefix: {
      value: cdktf.listMapperHcl(acltwozeroSubscribersPrefixToHclTerraform, true)(struct!.prefix),
      isBlock: true,
      type: "list",
      storageClassType: "AcltwozeroSubscribersPrefixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcltwozeroSubscribersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AcltwozeroSubscribers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceids !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceids = this._instanceids;
    }
    if (this._prefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcltwozeroSubscribers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceids = undefined;
      this._prefix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceids = value.instanceids;
      this._prefix.internalValue = value.prefix;
    }
  }

  // instanceids - computed: false, optional: true, required: false
  private _instanceids?: number[]; 
  public get instanceids() {
    return this.getNumberListAttribute('instanceids');
  }
  public set instanceids(value: number[]) {
    this._instanceids = value;
  }
  public resetInstanceids() {
    this._instanceids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceidsInput() {
    return this._instanceids;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix = new AcltwozeroSubscribersPrefixList(this, "prefix", false);
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: AcltwozeroSubscribersPrefix[] | cdktf.IResolvable) {
    this._prefix.internalValue = value;
  }
  public resetPrefix() {
    this._prefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }
}

export class AcltwozeroSubscribersList extends cdktf.ComplexList {
  public internalValue? : AcltwozeroSubscribers[] | cdktf.IResolvable

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
  public get(index: number): AcltwozeroSubscribersOutputReference {
    return new AcltwozeroSubscribersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero netris_acltwozero}
*/
export class Acltwozero extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_acltwozero";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Acltwozero resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Acltwozero to import
  * @param importFromId The id of the existing Acltwozero that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Acltwozero to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_acltwozero", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/acltwozero netris_acltwozero} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcltwozeroConfig
  */
  public constructor(scope: Construct, id: string, config: AcltwozeroConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_acltwozero',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6',
        providerVersionConstraint: '3.6.6'
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
    this._privacy = config.privacy;
    this._state = config.state;
    this._tenantid = config.tenantid;
    this._publishers.internalValue = config.publishers;
    this._subscribers.internalValue = config.subscribers;
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

  // privacy - computed: false, optional: false, required: true
  private _privacy?: string; 
  public get privacy() {
    return this.getStringAttribute('privacy');
  }
  public set privacy(value: string) {
    this._privacy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyInput() {
    return this._privacy;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tenantid - computed: false, optional: false, required: true
  private _tenantid?: number; 
  public get tenantid() {
    return this.getNumberAttribute('tenantid');
  }
  public set tenantid(value: number) {
    this._tenantid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantidInput() {
    return this._tenantid;
  }

  // publishers - computed: false, optional: true, required: false
  private _publishers = new AcltwozeroPublishersList(this, "publishers", false);
  public get publishers() {
    return this._publishers;
  }
  public putPublishers(value: AcltwozeroPublishers[] | cdktf.IResolvable) {
    this._publishers.internalValue = value;
  }
  public resetPublishers() {
    this._publishers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishersInput() {
    return this._publishers.internalValue;
  }

  // subscribers - computed: false, optional: true, required: false
  private _subscribers = new AcltwozeroSubscribersList(this, "subscribers", false);
  public get subscribers() {
    return this._subscribers;
  }
  public putSubscribers(value: AcltwozeroSubscribers[] | cdktf.IResolvable) {
    this._subscribers.internalValue = value;
  }
  public resetSubscribers() {
    this._subscribers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribersInput() {
    return this._subscribers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      privacy: cdktf.stringToTerraform(this._privacy),
      state: cdktf.stringToTerraform(this._state),
      tenantid: cdktf.numberToTerraform(this._tenantid),
      publishers: cdktf.listMapper(acltwozeroPublishersToTerraform, true)(this._publishers.internalValue),
      subscribers: cdktf.listMapper(acltwozeroSubscribersToTerraform, true)(this._subscribers.internalValue),
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
      privacy: {
        value: cdktf.stringToHclTerraform(this._privacy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenantid: {
        value: cdktf.numberToHclTerraform(this._tenantid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      publishers: {
        value: cdktf.listMapperHcl(acltwozeroPublishersToHclTerraform, true)(this._publishers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AcltwozeroPublishersList",
      },
      subscribers: {
        value: cdktf.listMapperHcl(acltwozeroSubscribersToHclTerraform, true)(this._subscribers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AcltwozeroSubscribersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
