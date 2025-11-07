// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_floating_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTwcFloatingIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Address of specified floating IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_floating_ip#availability_zone DataTwcFloatingIp#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Comment of specified floating IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_floating_ip#comment DataTwcFloatingIp#comment}
  */
  readonly comment?: string;
  /**
  * Enabled DDoS Guard for specified floating IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_floating_ip#ddos_guard DataTwcFloatingIp#ddos_guard}
  */
  readonly ddosGuard?: boolean | cdktf.IResolvable;
  /**
  * ID of specified floating IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_floating_ip#id DataTwcFloatingIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Address of specified floating IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_floating_ip#ip DataTwcFloatingIp#ip}
  */
  readonly ip?: string;
  /**
  * PTR record in DNS zone of specified floating IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_floating_ip#ptr DataTwcFloatingIp#ptr}
  */
  readonly ptr?: string;
  /**
  * resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_floating_ip#resource DataTwcFloatingIp#resource}
  */
  readonly resource?: DataTwcFloatingIpResource;
}
export interface DataTwcFloatingIpResource {
  /**
  * ID of resource that bind with floating IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_floating_ip#id DataTwcFloatingIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of resource that bind with floating IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_floating_ip#type DataTwcFloatingIp#type}
  */
  readonly type?: string;
}

export function dataTwcFloatingIpResourceToTerraform(struct?: DataTwcFloatingIpResourceOutputReference | DataTwcFloatingIpResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataTwcFloatingIpResourceToHclTerraform(struct?: DataTwcFloatingIpResourceOutputReference | DataTwcFloatingIpResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTwcFloatingIpResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTwcFloatingIpResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTwcFloatingIpResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_floating_ip twc_floating_ip}
*/
export class DataTwcFloatingIp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_floating_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTwcFloatingIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTwcFloatingIp to import
  * @param importFromId The id of the existing DataTwcFloatingIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_floating_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTwcFloatingIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_floating_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_floating_ip twc_floating_ip} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTwcFloatingIpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTwcFloatingIpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'twc_floating_ip',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._comment = config.comment;
    this._ddosGuard = config.ddosGuard;
    this._id = config.id;
    this._ip = config.ip;
    this._ptr = config.ptr;
    this._resource.internalValue = config.resource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // comment - computed: true, optional: true, required: false
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

  // ddos_guard - computed: true, optional: true, required: false
  private _ddosGuard?: boolean | cdktf.IResolvable; 
  public get ddosGuard() {
    return this.getBooleanAttribute('ddos_guard');
  }
  public set ddosGuard(value: boolean | cdktf.IResolvable) {
    this._ddosGuard = value;
  }
  public resetDdosGuard() {
    this._ddosGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosGuardInput() {
    return this._ddosGuard;
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

  // ptr - computed: true, optional: true, required: false
  private _ptr?: string; 
  public get ptr() {
    return this.getStringAttribute('ptr');
  }
  public set ptr(value: string) {
    this._ptr = value;
  }
  public resetPtr() {
    this._ptr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrInput() {
    return this._ptr;
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new DataTwcFloatingIpResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataTwcFloatingIpResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      comment: cdktf.stringToTerraform(this._comment),
      ddos_guard: cdktf.booleanToTerraform(this._ddosGuard),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ptr: cdktf.stringToTerraform(this._ptr),
      resource: dataTwcFloatingIpResourceToTerraform(this._resource.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
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
      ddos_guard: {
        value: cdktf.booleanToHclTerraform(this._ddosGuard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      ptr: {
        value: cdktf.stringToHclTerraform(this._ptr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource: {
        value: dataTwcFloatingIpResourceToHclTerraform(this._resource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTwcFloatingIpResourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
