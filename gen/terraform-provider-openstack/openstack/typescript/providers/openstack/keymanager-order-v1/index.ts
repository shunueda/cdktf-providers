// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeymanagerOrderV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1#id KeymanagerOrderV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1#region KeymanagerOrderV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1#type KeymanagerOrderV1#type}
  */
  readonly type: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1#meta KeymanagerOrderV1#meta}
  */
  readonly meta: KeymanagerOrderV1Meta;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1#timeouts KeymanagerOrderV1#timeouts}
  */
  readonly timeouts?: KeymanagerOrderV1Timeouts;
}
export interface KeymanagerOrderV1Meta {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1#algorithm KeymanagerOrderV1#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1#bit_length KeymanagerOrderV1#bit_length}
  */
  readonly bitLength: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1#expiration KeymanagerOrderV1#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1#mode KeymanagerOrderV1#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1#name KeymanagerOrderV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1#payload_content_type KeymanagerOrderV1#payload_content_type}
  */
  readonly payloadContentType?: string;
}

export function keymanagerOrderV1MetaToTerraform(struct?: KeymanagerOrderV1MetaOutputReference | KeymanagerOrderV1Meta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    bit_length: cdktf.numberToTerraform(struct!.bitLength),
    expiration: cdktf.stringToTerraform(struct!.expiration),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    payload_content_type: cdktf.stringToTerraform(struct!.payloadContentType),
  }
}


export function keymanagerOrderV1MetaToHclTerraform(struct?: KeymanagerOrderV1MetaOutputReference | KeymanagerOrderV1Meta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bit_length: {
      value: cdktf.numberToHclTerraform(struct!.bitLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expiration: {
      value: cdktf.stringToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_content_type: {
      value: cdktf.stringToHclTerraform(struct!.payloadContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeymanagerOrderV1MetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KeymanagerOrderV1Meta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._bitLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitLength = this._bitLength;
    }
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._payloadContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadContentType = this._payloadContentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeymanagerOrderV1Meta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._bitLength = undefined;
      this._expiration = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._payloadContentType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._bitLength = value.bitLength;
      this._expiration = value.expiration;
      this._mode = value.mode;
      this._name = value.name;
      this._payloadContentType = value.payloadContentType;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // bit_length - computed: false, optional: false, required: true
  private _bitLength?: number; 
  public get bitLength() {
    return this.getNumberAttribute('bit_length');
  }
  public set bitLength(value: number) {
    this._bitLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitLengthInput() {
    return this._bitLength;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // payload_content_type - computed: false, optional: true, required: false
  private _payloadContentType?: string; 
  public get payloadContentType() {
    return this.getStringAttribute('payload_content_type');
  }
  public set payloadContentType(value: string) {
    this._payloadContentType = value;
  }
  public resetPayloadContentType() {
    this._payloadContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadContentTypeInput() {
    return this._payloadContentType;
  }
}
export interface KeymanagerOrderV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1#create KeymanagerOrderV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1#delete KeymanagerOrderV1#delete}
  */
  readonly delete?: string;
}

export function keymanagerOrderV1TimeoutsToTerraform(struct?: KeymanagerOrderV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function keymanagerOrderV1TimeoutsToHclTerraform(struct?: KeymanagerOrderV1Timeouts | cdktf.IResolvable): any {
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

export class KeymanagerOrderV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeymanagerOrderV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KeymanagerOrderV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1 openstack_keymanager_order_v1}
*/
export class KeymanagerOrderV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_keymanager_order_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeymanagerOrderV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeymanagerOrderV1 to import
  * @param importFromId The id of the existing KeymanagerOrderV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeymanagerOrderV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_keymanager_order_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/keymanager_order_v1 openstack_keymanager_order_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeymanagerOrderV1Config
  */
  public constructor(scope: Construct, id: string, config: KeymanagerOrderV1Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_keymanager_order_v1',
      terraformGeneratorMetadata: {
        providerName: 'openstack',
        providerVersion: '3.3.2'
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
    this._region = config.region;
    this._type = config.type;
    this._meta.internalValue = config.meta;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_ref - computed: true, optional: false, required: false
  public get containerRef() {
    return this.getStringAttribute('container_ref');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // creator_id - computed: true, optional: false, required: false
  public get creatorId() {
    return this.getStringAttribute('creator_id');
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

  // order_ref - computed: true, optional: false, required: false
  public get orderRef() {
    return this.getStringAttribute('order_ref');
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

  // secret_ref - computed: true, optional: false, required: false
  public get secretRef() {
    return this.getStringAttribute('secret_ref');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub_status - computed: true, optional: false, required: false
  public get subStatus() {
    return this.getStringAttribute('sub_status');
  }

  // sub_status_message - computed: true, optional: false, required: false
  public get subStatusMessage() {
    return this.getStringAttribute('sub_status_message');
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

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // meta - computed: false, optional: false, required: true
  private _meta = new KeymanagerOrderV1MetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: KeymanagerOrderV1Meta) {
    this._meta.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KeymanagerOrderV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KeymanagerOrderV1Timeouts) {
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
      region: cdktf.stringToTerraform(this._region),
      type: cdktf.stringToTerraform(this._type),
      meta: keymanagerOrderV1MetaToTerraform(this._meta.internalValue),
      timeouts: keymanagerOrderV1TimeoutsToTerraform(this._timeouts.internalValue),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: keymanagerOrderV1MetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KeymanagerOrderV1MetaList",
      },
      timeouts: {
        value: keymanagerOrderV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KeymanagerOrderV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
