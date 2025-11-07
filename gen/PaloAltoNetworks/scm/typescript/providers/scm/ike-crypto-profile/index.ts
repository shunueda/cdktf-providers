// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IkeCryptoProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * IKEv2 SA reauthentication interval equals authetication-multiple * rekey-lifetime; 0 means reauthentication disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile#authentication_multiple IkeCryptoProfile#authentication_multiple}
  */
  readonly authenticationMultiple?: number;
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile#device IkeCryptoProfile#device}
  */
  readonly device?: string;
  /**
  * Dh group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile#dh_group IkeCryptoProfile#dh_group}
  */
  readonly dhGroup: string[];
  /**
  * Encryption algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile#encryption IkeCryptoProfile#encryption}
  */
  readonly encryption: string[];
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile#folder IkeCryptoProfile#folder}
  */
  readonly folder?: string;
  /**
  * Hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile#hash IkeCryptoProfile#hash}
  */
  readonly hash: string[];
  /**
  * Ike crypto profile lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile#lifetime IkeCryptoProfile#lifetime}
  */
  readonly lifetime?: IkeCryptoProfileLifetime;
  /**
  * Alphanumeric string begin with letter: [0-9a-zA-Z._-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile#name IkeCryptoProfile#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile#snippet IkeCryptoProfile#snippet}
  */
  readonly snippet?: string;
}
export interface IkeCryptoProfileLifetime {
  /**
  * specify lifetime in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile#days IkeCryptoProfile#days}
  */
  readonly days?: number;
  /**
  * specify lifetime in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile#hours IkeCryptoProfile#hours}
  */
  readonly hours?: number;
  /**
  * specify lifetime in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile#minutes IkeCryptoProfile#minutes}
  */
  readonly minutes?: number;
  /**
  * specify lifetime in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile#seconds IkeCryptoProfile#seconds}
  */
  readonly seconds?: number;
}

export function ikeCryptoProfileLifetimeToTerraform(struct?: IkeCryptoProfileLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function ikeCryptoProfileLifetimeToHclTerraform(struct?: IkeCryptoProfileLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeCryptoProfileLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeCryptoProfileLifetime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeCryptoProfileLifetime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._hours = undefined;
      this._minutes = undefined;
      this._seconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._seconds = value.seconds;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile scm_ike_crypto_profile}
*/
export class IkeCryptoProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_ike_crypto_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IkeCryptoProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IkeCryptoProfile to import
  * @param importFromId The id of the existing IkeCryptoProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IkeCryptoProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_ike_crypto_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/ike_crypto_profile scm_ike_crypto_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IkeCryptoProfileConfig
  */
  public constructor(scope: Construct, id: string, config: IkeCryptoProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_ike_crypto_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationMultiple = config.authenticationMultiple;
    this._device = config.device;
    this._dhGroup = config.dhGroup;
    this._encryption = config.encryption;
    this._folder = config.folder;
    this._hash = config.hash;
    this._lifetime.internalValue = config.lifetime;
    this._name = config.name;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_multiple - computed: true, optional: true, required: false
  private _authenticationMultiple?: number; 
  public get authenticationMultiple() {
    return this.getNumberAttribute('authentication_multiple');
  }
  public set authenticationMultiple(value: number) {
    this._authenticationMultiple = value;
  }
  public resetAuthenticationMultiple() {
    this._authenticationMultiple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMultipleInput() {
    return this._authenticationMultiple;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // dh_group - computed: false, optional: false, required: true
  private _dhGroup?: string[]; 
  public get dhGroup() {
    return this.getListAttribute('dh_group');
  }
  public set dhGroup(value: string[]) {
    this._dhGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // encryption - computed: false, optional: false, required: true
  private _encryption?: string[]; 
  public get encryption() {
    return this.getListAttribute('encryption');
  }
  public set encryption(value: string[]) {
    this._encryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // hash - computed: false, optional: false, required: true
  private _hash?: string[]; 
  public get hash() {
    return this.getListAttribute('hash');
  }
  public set hash(value: string[]) {
    this._hash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime = new IkeCryptoProfileLifetimeOutputReference(this, "lifetime");
  public get lifetime() {
    return this._lifetime;
  }
  public putLifetime(value: IkeCryptoProfileLifetime) {
    this._lifetime.internalValue = value;
  }
  public resetLifetime() {
    this._lifetime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime.internalValue;
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

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_multiple: cdktf.numberToTerraform(this._authenticationMultiple),
      device: cdktf.stringToTerraform(this._device),
      dh_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhGroup),
      encryption: cdktf.listMapper(cdktf.stringToTerraform, false)(this._encryption),
      folder: cdktf.stringToTerraform(this._folder),
      hash: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hash),
      lifetime: ikeCryptoProfileLifetimeToTerraform(this._lifetime.internalValue),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_multiple: {
        value: cdktf.numberToHclTerraform(this._authenticationMultiple),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      encryption: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._encryption),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hash),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      lifetime: {
        value: ikeCryptoProfileLifetimeToHclTerraform(this._lifetime.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IkeCryptoProfileLifetime",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
