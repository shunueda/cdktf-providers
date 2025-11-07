// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PublicdnsRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * The content of the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#content PublicdnsRecord#content}
  */
  readonly content?: string;
  /**
  * The domain name of the target host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#host PublicdnsRecord#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#id PublicdnsRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IP address of the record. It should be IPv4 for record of type "A" and IPv6 for record of type "AAAA".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#ip PublicdnsRecord#ip}
  */
  readonly ip?: string;
  /**
  * The name of the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#name PublicdnsRecord#name}
  */
  readonly name?: string;
  /**
  * The port on the target host of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#port PublicdnsRecord#port}
  */
  readonly port?: number;
  /**
  * The priority of the record's server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#priority PublicdnsRecord#priority}
  */
  readonly priority?: number;
  /**
  * The name of the desired protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#proto PublicdnsRecord#proto}
  */
  readonly proto?: string;
  /**
  * The region in which to obtain the V2 Public DNS client. If omitted, the `region` argument of the provider is used. Changing this creates a new record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#region PublicdnsRecord#region}
  */
  readonly region?: string;
  /**
  * The name of the desired service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#service PublicdnsRecord#service}
  */
  readonly service?: string;
  /**
  * The time to live of the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#ttl PublicdnsRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * The type of the record. Must be one of following: "A", "AAAA", "CNAME", "MX", "NS", "SRV", "TXT".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#type PublicdnsRecord#type}
  */
  readonly type: string;
  /**
  * The relative weight of the record's server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#weight PublicdnsRecord#weight}
  */
  readonly weight?: number;
  /**
  * The ID of the zone to attach the record to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#zone_id PublicdnsRecord#zone_id}
  */
  readonly zoneId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#timeouts PublicdnsRecord#timeouts}
  */
  readonly timeouts?: PublicdnsRecordTimeouts;
}
export interface PublicdnsRecordTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#create PublicdnsRecord#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#delete PublicdnsRecord#delete}
  */
  readonly delete?: string;
}

export function publicdnsRecordTimeoutsToTerraform(struct?: PublicdnsRecordTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function publicdnsRecordTimeoutsToHclTerraform(struct?: PublicdnsRecordTimeouts | cdktf.IResolvable): any {
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

export class PublicdnsRecordTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PublicdnsRecordTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PublicdnsRecordTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record vkcs_publicdns_record}
*/
export class PublicdnsRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_publicdns_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PublicdnsRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PublicdnsRecord to import
  * @param importFromId The id of the existing PublicdnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PublicdnsRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_publicdns_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/publicdns_record vkcs_publicdns_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PublicdnsRecordConfig
  */
  public constructor(scope: Construct, id: string, config: PublicdnsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_publicdns_record',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._host = config.host;
    this._id = config.id;
    this._ip = config.ip;
    this._name = config.name;
    this._port = config.port;
    this._priority = config.priority;
    this._proto = config.proto;
    this._region = config.region;
    this._service = config.service;
    this._ttl = config.ttl;
    this._type = config.type;
    this._weight = config.weight;
    this._zoneId = config.zoneId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // name - computed: true, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority - computed: true, optional: true, required: false
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

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PublicdnsRecordTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PublicdnsRecordTimeouts) {
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
      content: cdktf.stringToTerraform(this._content),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      priority: cdktf.numberToTerraform(this._priority),
      proto: cdktf.stringToTerraform(this._proto),
      region: cdktf.stringToTerraform(this._region),
      service: cdktf.stringToTerraform(this._service),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      weight: cdktf.numberToTerraform(this._weight),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      timeouts: publicdnsRecordTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proto: {
        value: cdktf.stringToHclTerraform(this._proto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: publicdnsRecordTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PublicdnsRecordTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
